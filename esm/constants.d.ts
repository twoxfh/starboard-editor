export declare const SQLiteResultCodes: {
    readonly SQLITE_OK: 0;
    readonly SQLITE_ERROR: 1;
    readonly SQLITE_INTERNAL: 2;
    readonly SQLITE_PERM: 3;
    readonly SQLITE_ABORT: 4;
    readonly SQLITE_BUSY: 5;
    readonly SQLITE_LOCKED: 6;
    readonly SQLITE_NOMEM: 7;
    readonly SQLITE_READONLY: 8;
    readonly SQLITE_INTERRUPT: 9;
    readonly SQLITE_IOERR: 10;
    readonly SQLITE_CORRUPT: 11;
    readonly SQLITE_NOTFOUND: 12;
    readonly SQLITE_FULL: 13;
    readonly SQLITE_CANTOPEN: 14;
    readonly SQLITE_PROTOCOL: 15;
    readonly SQLITE_EMPTY: 16;
    readonly SQLITE_SCHEMA: 17;
    readonly SQLITE_TOOBIG: 18;
    readonly SQLITE_CONSTRAINT: 19;
    readonly SQLITE_MISMATCH: 20;
    readonly SQLITE_MISUSE: 21;
    readonly SQLITE_NOLFS: 22;
    readonly SQLITE_AUTH: 23;
    readonly SQLITE_FORMAT: 24;
    readonly SQLITE_RANGE: 25;
    readonly SQLITE_NOTADB: 26;
    readonly SQLITE_NOTICE: 27;
    readonly SQLITE_WARNING: 28;
    readonly SQLITE_ROW: 100;
    readonly SQLITE_DONE: 101;
};
export declare type SQLiteResultCode = typeof SQLiteResultCodes[keyof typeof SQLiteResultCodes];
export declare const SQLiteDatatypes: {
    readonly SQLITE_INTEGER: 1;
    readonly SQLITE_FLOAT: 2;
    readonly SQLITE_TEXT: 3;
    readonly SQLITE_BLOB: 4;
    readonly SQLITE_NULL: 5;
};
export declare type SQLiteDatatype = typeof SQLiteDatatypes[keyof typeof SQLiteDatatypes];
export declare const SQLiteResultCodesStr: {
    [key: number]: keyof typeof SQLiteResultCodes;
};
export declare const SQLiteDatatypesStr: {
    [key: number]: keyof typeof SQLiteDatatypes;
};
