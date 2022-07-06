import { SQLiteExports, CPointer, SQLiteImports } from "./api";
import { SQLiteDatatype } from "./constants";
import { SQLiteUtils } from "./utils";
declare type ScalarIn = string | number | boolean | bigint | ArrayBuffer | null;
declare type ScalarOut = string | number | bigint | ArrayBuffer | null;
export declare class SQLite {
    private readonly instance;
    readonly utils: SQLiteUtils;
    readonly exports: SQLiteExports;
    _execCallback: SQLiteImports["sqlite3_ext_exec_callback"] | undefined;
    static instantiate(module: WebAssembly.Module): Promise<SQLite>;
    static instantiate(module: WebAssembly.Module, async: true): Promise<SQLite>;
    static instantiate(module: WebAssembly.Module, async: false): SQLite;
    constructor(instance: WebAssembly.Instance);
    initialize(): void;
    open(filename: string): SQLiteDB;
    load(data: ArrayBuffer, schema?: string): SQLiteDB;
    shutdown(): void;
}
export interface SQLiteExecValue {
    name: string;
    value: string | null;
}
export declare class SQLiteDB {
    readonly sqlite: SQLite;
    pDb: CPointer;
    readonly utils: SQLiteUtils;
    readonly exports: SQLiteExports;
    constructor(sqlite: SQLite, pDb: CPointer);
    prepare(sql: string): SQLiteStatement | null;
    prepare(sql: string, callback: (stmt: SQLiteStatement) => void): void;
    exec(sql: string): SQLiteExecValue[][];
    serialize(schema?: string, mFlags?: number): ArrayBuffer | null;
    deserialize(data: ArrayBuffer, schema?: string, mFlags?: number): void;
    close(): void;
}
export declare class SQLiteStatement {
    readonly db: SQLiteDB;
    private pStmt;
    readonly sql?: string | undefined;
    readonly tail?: string | undefined;
    readonly utils: SQLiteUtils;
    readonly exports: SQLiteExports;
    constructor(db: SQLiteDB, pStmt: CPointer, sql?: string | undefined, tail?: string | undefined);
    columnCount(): number;
    bindText(i: number, text: string): void;
    bindBlob(i: number, buf: ArrayBuffer): void;
    bindDouble(i: number, d: number): void;
    bindInt(i: number, i32: number): void;
    bindInt64(i: number, i64: bigint): void;
    bindNull(i: number): void;
    bindValue(i: number, value: ScalarIn): void;
    bindValues(values: ScalarIn[]): void;
    step(): boolean;
    reset(): void;
    columnType(i: number): SQLiteDatatype;
    columnName(i: number): string;
    columnText(i: number): string;
    columnBlob(i: number): ArrayBuffer;
    columnDouble(i: number): number;
    columnInt(i: number): number;
    columnInt64(i: number): bigint;
    columnDecltype(i: number): string | null;
    columnValue(i: number): ScalarOut;
    columnValue(i: number, noBigInt: true): string | number | ArrayBuffer | null;
    columnValue(i: number, noBigInt: false): ScalarOut;
    columnValue(i: number, noBigInt: boolean): ScalarOut;
    columns(): ScalarOut[];
    columns(noBigInt: true): (string | number | ArrayBuffer | null)[];
    columns(noBigInt: false): ScalarOut[];
    columns(noBigInt: boolean): ScalarOut[];
    finalize(): void;
}
export {};
