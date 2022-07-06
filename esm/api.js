export class SQLiteUnimplementedImportError extends Error {
    constructor(api) {
        super(api + " is not implemented");
    }
}
export const unimplementedImports = {
    sqlite3_ext_os_init: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_os_init"); },
    sqlite3_ext_os_end: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_os_end"); },
    sqlite3_ext_exec_callback: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_exec_callback"); },
    sqlite3_ext_io_close: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_close"); },
    sqlite3_ext_io_read: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_read"); },
    sqlite3_ext_io_write: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_write"); },
    sqlite3_ext_io_truncate: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_truncate"); },
    sqlite3_ext_io_sync: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_sync"); },
    sqlite3_ext_io_file_size: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_file_size"); },
    sqlite3_ext_io_lock: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_lock"); },
    sqlite3_ext_io_unlock: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_unlock"); },
    sqlite3_ext_io_check_reserved_lock: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_check_reserved_lock"); },
    sqlite3_ext_io_file_control: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_file_control"); },
    sqlite3_ext_io_sector_size: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_sector_size"); },
    sqlite3_ext_io_device_characteristics: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_io_device_characteristics"); },
    sqlite3_ext_vfs_open: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_vfs_open"); },
    sqlite3_ext_vfs_delete: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_vfs_delete"); },
    sqlite3_ext_vfs_access: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_vfs_access"); },
    sqlite3_ext_vfs_full_pathname: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_vfs_full_pathname"); },
    sqlite3_ext_vfs_randomness: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_vfs_randomness"); },
    sqlite3_ext_vfs_sleep: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_vfs_sleep"); },
    sqlite3_ext_vfs_current_time: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_vfs_current_time"); },
    sqlite3_ext_vfs_get_last_error: () => { throw new SQLiteUnimplementedImportError("sqlite3_ext_vfs_get_last_error"); },
};
