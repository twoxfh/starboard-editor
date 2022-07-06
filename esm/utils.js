import { SQLiteResultCodes, SQLiteResultCodesStr } from "./constants";
export class SQLiteError extends Error {
    constructor(code, extendedCode, message) {
        var _a;
        super((_a = message !== null && message !== void 0 ? message : SQLiteResultCodesStr[code]) !== null && _a !== void 0 ? _a : "Unknown error");
        this.code = code;
        this.extendedCode = extendedCode;
    }
}
export class SQLiteUtils {
    constructor(exports) {
        this.exports = exports;
        this.textEncoder = new TextEncoder();
        this.textDecoder = new TextDecoder();
    }
    get u8() {
        return new Uint8Array(this.exports.memory.buffer);
    }
    get u32() {
        return new Uint32Array(this.exports.memory.buffer);
    }
    get f64() {
        return new Float64Array(this.exports.memory.buffer);
    }
    malloc(size) {
        return this.exports.sqlite3_malloc(size);
    }
    free(ptr) {
        this.exports.sqlite3_free(ptr);
    }
    cString(s) {
        const view = this.u8;
        const buf = this.textEncoder.encode(s);
        const ptr = this.malloc(buf.length + 1);
        view.set(buf, ptr);
        view[ptr + buf.length] = 0;
        return ptr;
    }
    decodeString(ptr) {
        const view = this.u8;
        let end = ptr;
        while (view[end] !== 0) {
            end++;
        }
        const buf = view.slice(ptr, end);
        return this.textDecoder.decode(buf);
    }
    deref32(ptr) {
        const view = this.u32;
        return view[(ptr / 4) | 0];
    }
    lastError(dbPtr) {
        const code = this.exports.sqlite3_errcode(dbPtr);
        if (code === SQLiteResultCodes.SQLITE_OK) {
            return undefined;
        }
        const extendedCode = this.exports.sqlite3_extended_errcode(dbPtr);
        const message = this.decodeString(this.exports.sqlite3_errmsg(dbPtr));
        return new SQLiteError(code, extendedCode, message);
    }
    checkError(rc, dbPtr) {
        if (rc === undefined && dbPtr === undefined) {
            return;
        }
        if (rc === SQLiteResultCodes.SQLITE_OK || rc === SQLiteResultCodes.SQLITE_ROW || rc === SQLiteResultCodes.SQLITE_DONE) {
            return;
        }
        if (dbPtr === undefined) {
            throw new SQLiteError(rc);
        }
        const error = this.lastError(dbPtr);
        if (error !== undefined) {
            throw error;
        }
    }
}
