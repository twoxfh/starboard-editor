var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { unimplementedImports } from "./api";
import { SQLiteResultCodes, SQLiteDatatypes } from "./constants";
import { SQLiteError, SQLiteUtils } from "./utils";
export class SQLite {
    constructor(instance) {
        this.instance = instance;
        this.exports = this.instance.exports;
        this.utils = new SQLiteUtils(this.exports);
    }
    static instantiate(module, async = true) {
        var _a;
        let sqlite;
        const imports = Object.assign(Object.assign({}, unimplementedImports), { sqlite3_ext_vfs_get_last_error: () => {
                return SQLiteResultCodes.SQLITE_OK;
            }, sqlite3_ext_vfs_full_pathname: () => {
                return SQLiteResultCodes.SQLITE_CANTOPEN;
            }, sqlite3_ext_vfs_current_time: (_, pTimeOut) => {
                const f64 = sqlite.utils.f64;
                f64[pTimeOut / 8] = Date.now() / 86400000 + 2440587.5;
                return SQLiteResultCodes.SQLITE_OK;
            }, sqlite3_ext_vfs_randomness: ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.crypto) === null || _a === void 0 ? void 0 : _a.getRandomValues) !== undefined ? (_, nByte, zOut) => {
                const u8 = new Uint8Array(nByte);
                globalThis.crypto.getRandomValues(u8.slice(zOut, zOut + nByte));
                return SQLiteResultCodes.SQLITE_OK;
            } : (_, nByte, zOut) => {
                const u8 = new Uint8Array(nByte);
                for (let i = 0; i < nByte; i++) {
                    u8[zOut + i] = Math.floor(Math.random() * 256);
                }
                return SQLiteResultCodes.SQLITE_OK;
            }, sqlite3_ext_os_init: () => {
                const pId = sqlite.utils.malloc(4);
                const rc = sqlite.exports.sqlite3_ext_vfs_register(0, 1, pId);
                sqlite.utils.free(pId);
                sqlite.utils.checkError(rc);
                return SQLiteResultCodes.SQLITE_OK;
            }, sqlite3_ext_os_end: () => {
                return SQLiteResultCodes.SQLITE_OK;
            }, sqlite3_ext_exec_callback: (i, nCols, azCols, azColNames) => {
                return sqlite._execCallback(i, nCols, azCols, azColNames);
            } });
        if (async) {
            return (() => __awaiter(this, void 0, void 0, function* () {
                const instance = yield WebAssembly.instantiate(module, {
                    imports: Object.assign({}, imports),
                });
                sqlite = new SQLite(instance);
                sqlite.initialize();
                return sqlite;
            }))();
        }
        else {
            const instance = new WebAssembly.Instance(module, {
                imports: Object.assign({}, imports),
            });
            sqlite = new SQLite(instance);
            sqlite.initialize();
            return sqlite;
        }
    }
    initialize() {
        const rc = this.exports.sqlite3_initialize();
        this.utils.checkError(rc);
    }
    open(filename) {
        const filenamePtr = this.utils.cString(filename);
        const ppDb = this.exports.sqlite3_malloc(4);
        const rc = this.exports.sqlite3_open(filenamePtr, ppDb);
        this.utils.free(filenamePtr);
        if (rc !== SQLiteResultCodes.SQLITE_OK) {
            throw new SQLiteError(rc);
        }
        const pDb = this.utils.deref32(ppDb);
        this.utils.free(ppDb);
        return new SQLiteDB(this, pDb);
    }
    load(data, schema = "main") {
        const db = this.open(":memory:");
        const backupDb = this.open(":memory:");
        const zSchema = this.utils.cString(schema);
        const zMain = this.utils.cString("main");
        backupDb.deserialize(data);
        const pBackup = this.exports.sqlite3_backup_init(db.pDb, this.utils.cString(schema), backupDb.pDb, zMain);
        if (pBackup != 0) {
            this.exports.sqlite3_backup_step(pBackup, -1);
            this.exports.sqlite3_backup_finish(pBackup);
        }
        const rc = this.exports.sqlite3_errcode(db.pDb);
        this.utils.free(zSchema);
        this.utils.free(zMain);
        backupDb.close();
        this.utils.checkError(rc, db.pDb);
        return db;
    }
    shutdown() {
        const rc = this.exports.sqlite3_shutdown();
        this.utils.checkError(rc);
    }
}
export class SQLiteDB {
    constructor(sqlite, pDb) {
        this.sqlite = sqlite;
        this.pDb = pDb;
        this.utils = sqlite.utils;
        this.exports = sqlite.exports;
    }
    prepare(sql, callback) {
        var _a;
        if (callback !== undefined) {
            let nextSql = sql;
            while (true) {
                const stmt = this.prepare(nextSql);
                if (stmt === null) {
                    return;
                }
                try {
                    callback(stmt);
                }
                catch (e) {
                    stmt.finalize();
                    throw e;
                }
                stmt.finalize();
                nextSql = (_a = stmt.tail) !== null && _a !== void 0 ? _a : "";
            }
        }
        const zSql = this.utils.cString(sql);
        const ppStmt = this.exports.sqlite3_malloc(4);
        const pzTail = this.exports.sqlite3_malloc(4);
        const rc = this.exports.sqlite3_prepare_v2(this.pDb, zSql, -1, ppStmt, pzTail);
        if (rc !== SQLiteResultCodes.SQLITE_OK) {
            this.utils.free(zSql);
            this.utils.free(ppStmt);
            this.utils.free(pzTail);
            throw this.utils.lastError(this.pDb);
        }
        const pStmt = this.utils.deref32(ppStmt);
        const zTail = this.utils.deref32(pzTail);
        let tail;
        if (zTail !== 0) {
            tail = this.utils.decodeString(zTail);
        }
        const consumedSql = this.utils.textDecoder.decode(this.utils.u8.slice(zSql, zTail));
        this.utils.free(zSql);
        this.utils.free(ppStmt);
        this.utils.free(pzTail);
        if (pStmt === 0) {
            return null;
        }
        return new SQLiteStatement(this, pStmt, consumedSql, tail);
    }
    exec(sql) {
        const results = [];
        const pSql = this.utils.cString(sql);
        const pzErr = this.utils.malloc(4);
        this.sqlite._execCallback = (i, nCols, azCols, azColNames) => {
            const result = [];
            results.push(result);
            for (let i = 0; i < nCols; i++) {
                const zCol = this.utils.deref32(azCols + i * 4);
                const zColName = this.utils.deref32(azColNames + i * 4);
                const colName = this.utils.decodeString(zColName);
                result.push({ name: colName, value: zCol === 0 ? null : this.utils.decodeString(zCol) });
            }
            return SQLiteResultCodes.SQLITE_OK;
        };
        const rc = this.exports.sqlite3_ext_exec(this.pDb, pSql, 0, pzErr);
        this.utils.free(pSql);
        this.utils.free(pzErr);
        this.utils.checkError(rc, this.pDb);
        return results;
    }
    serialize(schema = "main", mFlags = 0) {
        const zSchema = this.utils.cString(schema);
        const piSize = this.exports.sqlite3_malloc(8);
        const pOut = this.exports.sqlite3_serialize(this.pDb, zSchema, piSize, mFlags);
        const size = this.utils.deref32(piSize);
        this.utils.free(zSchema);
        this.utils.free(piSize);
        let out = null;
        if (pOut !== 0) {
            out = new Uint8Array(size);
            out.set(this.utils.u8.slice(pOut, pOut + size));
            this.exports.sqlite3_free(pOut);
        }
        return out;
    }
    deserialize(data, schema = "main", mFlags = 0) {
        const zSchema = this.utils.cString(schema);
        const pData = this.utils.malloc(data.byteLength);
        this.utils.u8.set(new Uint8Array(data), pData);
        const rc = this.exports.sqlite3_deserialize(this.pDb, zSchema, pData, BigInt(data.byteLength), BigInt(data.byteLength), mFlags | 1 | 2);
        this.utils.free(zSchema);
        this.utils.checkError(rc, this.pDb);
    }
    close() {
        const rc = this.exports.sqlite3_close(this.pDb);
        this.utils.checkError(rc);
    }
}
export class SQLiteStatement {
    constructor(db, pStmt, sql, tail) {
        this.db = db;
        this.pStmt = pStmt;
        this.sql = sql;
        this.tail = tail;
        this.utils = db.utils;
        this.exports = db.exports;
    }
    columnCount() {
        return this.exports.sqlite3_column_count(this.pStmt);
    }
    bindText(i, text) {
        const textPtr = this.utils.cString(text);
        const rc = this.exports.sqlite3_bind_text(this.pStmt, i, textPtr, -1, -1);
        this.utils.free(textPtr);
        this.utils.checkError(rc, this.pStmt);
    }
    bindBlob(i, buf) {
        const view = new Uint8Array(buf);
        const ptr = this.utils.malloc(view.length);
        this.utils.u8.set(view, ptr);
        const rc = this.exports.sqlite3_bind_blob(this.pStmt, i, ptr, view.length, -1);
        this.utils.free(ptr);
        this.utils.checkError(rc, this.db.pDb);
    }
    bindDouble(i, d) {
        const rc = this.exports.sqlite3_bind_double(this.pStmt, i, d);
        this.utils.checkError(rc, this.db.pDb);
    }
    bindInt(i, i32) {
        const rc = this.exports.sqlite3_bind_int(this.pStmt, i, i32);
        this.utils.checkError(rc, this.db.pDb);
    }
    bindInt64(i, i64) {
        const rc = this.exports.sqlite3_bind_int64(this.pStmt, i, i64);
        this.utils.checkError(rc, this.db.pDb);
    }
    bindNull(i) {
        const rc = this.exports.sqlite3_bind_null(this.pStmt, i);
        this.utils.checkError(rc, this.db.pDb);
    }
    bindValue(i, value) {
        if (value === null) {
            return this.bindNull(i);
        }
        if (typeof value === "string") {
            return this.bindText(i, value);
        }
        if (typeof value === "number") {
            return this.bindDouble(i, value);
        }
        if (typeof value === "boolean") {
            return this.bindInt(i, value ? 1 : 0);
        }
        if (typeof value === "bigint") {
            return this.bindInt64(i, value);
        }
        if (value instanceof ArrayBuffer) {
            return this.bindBlob(i, value);
        }
        throw new Error(`Unsupported type ${typeof value}: ${value}`);
    }
    bindValues(values) {
        for (let i = 0; i < values.length; i++) {
            this.bindValue(i + 1, values[i]);
        }
    }
    step() {
        const rc = this.exports.sqlite3_step(this.pStmt);
        if (rc === SQLiteResultCodes.SQLITE_ROW) {
            return true;
        }
        else if (rc === SQLiteResultCodes.SQLITE_OK || rc === SQLiteResultCodes.SQLITE_DONE) {
            return false;
        }
        else {
            throw this.utils.lastError(this.db.pDb);
        }
    }
    reset() {
        const rc = this.exports.sqlite3_reset(this.pStmt);
        this.utils.checkError(rc, this.db.pDb);
    }
    columnType(i) {
        return this.exports.sqlite3_column_type(this.pStmt, i);
    }
    columnName(i) {
        const namePtr = this.exports.sqlite3_column_name(this.pStmt, i);
        const name = this.utils.decodeString(namePtr);
        return name;
    }
    columnText(i) {
        const ptr = this.exports.sqlite3_column_text(this.pStmt, i);
        const text = this.utils.decodeString(ptr);
        return text;
    }
    columnBlob(i) {
        const ptr = this.exports.sqlite3_column_blob(this.pStmt, i);
        const len = this.exports.sqlite3_column_bytes(this.pStmt, i);
        const buf = new Uint8Array(len);
        const window = this.utils.u8.subarray(ptr, ptr + len);
        buf.set(window);
        return buf.buffer;
    }
    columnDouble(i) {
        return this.exports.sqlite3_column_double(this.pStmt, i);
    }
    columnInt(i) {
        return this.exports.sqlite3_column_int(this.pStmt, i);
    }
    columnInt64(i) {
        return this.exports.sqlite3_column_int64(this.pStmt, i);
    }
    columnDecltype(i) {
        const zDecltype = this.exports.sqlite3_column_decltype(this.pStmt, i);
        if (zDecltype === 0) {
            return null;
        }
        return this.utils.decodeString(zDecltype);
    }
    columnValue(i, noBigInt) {
        const type = this.columnType(i);
        switch (type) {
            case SQLiteDatatypes.SQLITE_NULL:
                return null;
            case SQLiteDatatypes.SQLITE_TEXT:
                return this.columnText(i);
            case SQLiteDatatypes.SQLITE_BLOB:
                return this.columnBlob(i);
            case SQLiteDatatypes.SQLITE_INTEGER:
                if (noBigInt || globalThis.BigInt === undefined) {
                    return this.columnInt(i);
                }
                return this.columnInt64(i);
            case SQLiteDatatypes.SQLITE_FLOAT:
                return this.columnDouble(i);
            default:
                /* istanbul ignore next - should not happen, all types covered */
                throw new Error(`Unknown column type: ${type}`);
        }
    }
    columns(noBigInt) {
        const columns = [];
        const count = this.columnCount();
        for (let i = 0; i < count; i++) {
            columns.push(this.columnValue(i, noBigInt !== null && noBigInt !== void 0 ? noBigInt : false));
        }
        return columns;
    }
    finalize() {
        const rc = this.exports.sqlite3_finalize(this.pStmt);
        this.utils.checkError(rc, this.db.pDb);
        this.pStmt = 0;
    }
}
