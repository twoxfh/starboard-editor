import type { SQLiteExports, CString } from "./api";
export declare class SQLiteError extends Error {
    code: number;
    extendedCode?: number | undefined;
    constructor(code: number, extendedCode?: number | undefined, message?: string);
}
export declare class SQLiteUtils {
    private exports;
    readonly textEncoder: TextEncoder;
    readonly textDecoder: TextDecoder;
    constructor(exports: SQLiteExports);
    get u8(): Uint8Array;
    get u32(): Uint32Array;
    get f64(): Float64Array;
    malloc(size: number): number;
    free(ptr: number): void;
    cString(s: string): CString;
    decodeString(ptr: number): string;
    deref32(ptr: number): number;
    lastError(dbPtr: number): SQLiteError | undefined;
    checkError(rc?: number, dbPtr?: number): void;
}
