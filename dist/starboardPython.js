var css = "@font-face{font-family:PyodideIcons;src:url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SDPkAAAC8AAAAYGNtYXDwocFvAAABHAAAAHRnYXNwAAAAEAAAAZAAAAAIZ2x5ZkRRVWoAAAGYAAAFJGhlYWQaUVhJAAAGvAAAADZoaGVhB8IDywAABvQAAAAkaG10eBwAADgAAAcYAAAAKGxvY2EFxgSMAAAHQAAAABZtYXhwAA8AaQAAB1gAAAAgbmFtZf34vLUAAAd4AAABznBvc3QAAwAAAAAJSAAAACAAAwNuAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADwYQPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAWAAAABIAEAADAAIAAQAg8A7wFfAZ8EfwYf/9//8AAAAAACDwDvAV8BnwR/Bg//3//wAB/+MP9g/wD+0PwA+oAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAMAAP+3A7cDbgAjAD8AZgAAARUUBisBFRQGKwEiJj0BIyImPQE0NjsBNTQ2OwEyFh0BMzIWFzQnLgEnJiMiBw4BBwYVFBceARcWMzI3PgE3NgEUBiMiJi8BDgEjIicuAScmNTQ3PgE3NjMyFx4BFxYVFAYHFx4BFQJJCweACwclBwuACAsLCIALByUHC4AHC0kUFEYuLzU1Li9FFRQUFUUvLjU1Ly5GFBQBJSseDxsKxDJ1PVNJSm0fICAfbUpJU1RJSW0gICUixAoLAe4lBwuABwsLB4ALByUHC4AHCwsHgAsaNS8vRRQUFBRFLy81NS4vRRQVFRRFLy7+Wh4rCwvDIyQgH25JSVNUSUluHyAgH25JSVQ8dTPECRsPAAAAAAIAEwBJA6QDJQAVADwAAAERFAYrATUjFSMiJjURNDYxCQEwFhU3Bw4BKwEiJicJAQ4BJyImLwEmNjcBNjIfATU0NjsBMhYdARceAQcDJRYP25PbDxYBAUgBSQF/IwMGAwIEBgL+dP51AwcEAwcCIwUCBQGbEjMSiwsIbQgLfQUCBQGA/u4PFtzcFg8BEgECAQ/+8QIBJyoCBAICAUr+tgIDAQQCKgYPBQFWDw90bwgLCwjpaAUPBgAEAAAASQO3A7cACwAXADEAUQAAJTQmIyIGFRQWMzI2NzQmIyIGFRQWMzI2NxUUBiMhIiY9ATQ2MyEXHgEzMjY/ASEyFhUDFgYHAQ4BIyImJwEuATc+ATsBETQ2OwEyFhURMzIWFwLbFQ8PFhYPDxWTFg8PFRUPDxZJIBf8txcgIBcBCk0QKBUWKBBOAQkXILoEBAj/AAUOBwYOBf8ACAUFBBILkxUPkw8VkgwSBLcPFRUPDxYWDw8VFQ8PFhaPtxcgIBe3FyBODxERD04gFwFFChYI/wAGBQUGAQAIFgoKDAEADxYWD/8ADAoAAAEAAP+3BAADtwBgAAABFAYPAQ4BIyImPQEjFTMyFhUUBg8BDgEjIiYvAS4BNTQ2OwE1IxUUBiMiJi8BLgE1NDY/AT4BMzIWHQEzNSMiJjU0Nj8BPgEzMhYfAR4BFRQGKwEVMzU0NjMyFh8BHgEVBAAGBZIFDgcPFdxJDxYGBZIFDgcHDgWSBQYWD0ncFQ8HDgWSBQYGBZIFDgcPFdxJDxYGBZIFDgcHDgWSBQYWD0ncFQ8HDgWSBQYBtwcOBZIFBhYPSdwVDwgNBZIFBgYFkgUNCA8V3EkPFgYFkgUOBwcNBpIFBhYPSdsWDwcOBZIFBgYFkgUOBw8W20kPFgYFkgYNBwAAAQAl/9UDbgNPAC0AAAEVFAYjIRceARUUBg8BDgEjIiYnAS4BNTQ2NwE+ATMyFh8BHgEVFAYPASEyFhUDbiQf/m6nCgwMCisKGw4PGwr+jAoLCwoBdAobDw4bCisKDAwKpwGSHyQBt0kdLKgKGw8OGwosCgsLCgF1ChsODxsKAXQKCwsKKwobDw4bC6csHQAAAQAA/9UDSQNPAC0AAAEUBgcBDgEjIiYvAS4BNTQ2PwEhIiY9ATQ2MyEnLgE1NDY/AT4BMzIWFwEeARUDSQsK/owKGw8PGgorCwsLC6f+bh8kJB8BkqcLCwsLKwoaDw8bCgF0CgsBkg4bC/6MCgsLCisKHA4PGwqoLB1JHSyoChsODxsKKwoLCwr+jAobDwAAAQAAAAEAADJjdDVfDzz1AAsEAAAAAADbmQnvAAAAANuZCe8AAP+3BAADtwAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAAEAAABAAAAAAAAAAAAAAAAAAAACgQAAAAAAAAAAAAAAAIAAAADtwAAA7cAEwO3AAAEAAAAA5IAJQNJAAAAAAAAAAoAFAAeAK4BCgGAAgICSgKSAAAAAQAAAAoAZwAEAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAA0AAAABAAAAAAACAAcAlgABAAAAAAADAA0ASAABAAAAAAAEAA0AqwABAAAAAAAFAAsAJwABAAAAAAAGAA0AbwABAAAAAAAKABoA0gADAAEECQABABoADQADAAEECQACAA4AnQADAAEECQADABoAVQADAAEECQAEABoAuAADAAEECQAFABYAMgADAAEECQAGABoAfAADAAEECQAKADQA7HB5b2RpZGUtaWNvbnMAcAB5AG8AZABpAGQAZQAtAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMHB5b2RpZGUtaWNvbnMAcAB5AG8AZABpAGQAZQAtAGkAYwBvAG4Ac3B5b2RpZGUtaWNvbnMAcAB5AG8AZABpAGQAZQAtAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcnB5b2RpZGUtaWNvbnMAcAB5AG8AZABpAGQAZQAtAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format('truetype');font-weight:400;font-style:normal;font-display:block}.fa{font-family:PyodideIcons;font-style:normal;font-weight:400;font-variant:normal;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-search-plus:before{content:\"\\f00e\"}.fa-home:before{content:\"\\f015\"}.fa-download:before{content:\"\\f019\"}.fa-arrows:before{content:\"\\f047\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.rendered_html{overflow:auto;max-height:30em;color:#000}.rendered_html em{font-style:italic}.rendered_html strong{font-weight:700}.rendered_html :link,.rendered_html :visited,.rendered_html u{text-decoration:underline}.rendered_html h1{font-size:185.7%;margin:1.08em 0 0;font-weight:700;line-height:1}.rendered_html h2{font-size:157.1%;margin:1.27em 0 0;font-weight:700;line-height:1}.rendered_html h3{font-size:128.6%;margin:1.55em 0 0;font-weight:700;line-height:1}.rendered_html h4{font-size:100%;margin:2em 0 0;font-weight:700;line-height:1}.rendered_html h5,.rendered_html h6{font-size:100%;margin:2em 0 0;font-weight:700;line-height:1;font-style:italic}.rendered_html h1:first-child{margin-top:.538em}.rendered_html h2:first-child{margin-top:.636em}.rendered_html h3:first-child{margin-top:.777em}.rendered_html h4:first-child,.rendered_html h5:first-child,.rendered_html h6:first-child{margin-top:1em}.rendered_html ol:not(.list-inline),.rendered_html ul:not(.list-inline){padding-left:2em}.rendered_html ul{list-style:disc}.rendered_html ul ul{list-style:square;margin-top:0}.rendered_html ul ul ul{list-style:circle}.rendered_html ol{list-style:decimal}.rendered_html ol ol{list-style:upper-alpha;margin-top:0}.rendered_html ol ol ol{list-style:lower-alpha}.rendered_html ol ol ol ol{list-style:lower-roman}.rendered_html ol ol ol ol ol{list-style:decimal}.rendered_html *+ol,.rendered_html *+ul{margin-top:1em}.rendered_html hr{color:#000;background-color:#000}.rendered_html pre{margin:1em 2em;padding:0;background-color:#fff}.rendered_html code{background-color:#eff0f1}.rendered_html p code{padding:1px 5px}.rendered_html pre code{background-color:#fff}.rendered_html code,.rendered_html pre{border:0;color:#000;font-size:100%}.rendered_html blockquote{margin:1em 2em}.rendered_html table{margin-left:auto;margin-right:auto;border:none;border-collapse:collapse;border-spacing:0;color:#000;font-size:12px;table-layout:fixed}.rendered_html thead{border-bottom:1px solid #000;vertical-align:bottom}.rendered_html td,.rendered_html th,.rendered_html tr{text-align:right;vertical-align:middle;padding:.5em;line-height:normal;white-space:normal;max-width:none;border:none}.rendered_html th{font-weight:700}.rendered_html tbody tr:nth-child(odd){background:#f5f5f5}.rendered_html tbody tr:hover{background:rgba(66,165,245,.2)}.rendered_html *+table{margin-top:1em}.rendered_html p{text-align:left}.rendered_html *+p{margin-top:1em}.rendered_html img{display:block;margin-left:auto;margin-right:auto}.rendered_html *+img{margin-top:1em}.rendered_html img,.rendered_html svg{max-width:100%;height:auto}.rendered_html img.unconfined,.rendered_html svg.unconfined{max-width:none}.rendered_html .alert{margin-bottom:initial}.rendered_html *+.alert{margin-top:1em}[dir=rtl] .rendered_html p{text-align:right}";

// Global singleton
let pluginOpts = {};
function getPluginOpts() {
    return pluginOpts;
}
function setPluginOpts(opts) {
    pluginOpts = opts;
}
/**
 * Overwrite present options
 */
function updatePluginOptions(opts) {
    pluginOpts = {
        ...pluginOpts,
        ...opts,
    };
}

let nanoid = (size = 21) => {
  let id = '';
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    let byte = bytes[size] & 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte < 63) {
      id += '_';
    } else {
      id += '-';
    }
  }
  return id
};

function assertUnreachable(_x) {
    throw new Error("This case should have never been reached");
}

/**
 * One-way memory, can block a web worker until data from the main thread arrives.
 *
 * Web Worker Usage:
 * 1. Lock "web worker"
 * 2. Set "shared memory signal"
 * 3. Notify main thread (Main thread does stuff)
 * 4. Wait for "shared memory signal"
 * 5. Read size buffer
 * 6. Read shared memory
 * 7. If the size buffer was bigger than the read memory size
 * 7.1. Set "shared memory signal"
 * 7.2. Notify main thread (Main thread writes remaining data to shared memory)
 * 7.3. Wait for "shared memory signal"
 * 7.4. Read shared memory
 * 7.5. Go back to step 7. (loop)
 * 8. Unlock "web worker"
 *
 * Main Thread Usage:
 * 1. Get notification
 * 2. Do operations
 * 3. Serialize data
 * 4. Write size into the size buffer
 * 5. Write partial data into shared memory
 * 6. Unlock "shared memory signal" (Worker does stuff)
 * 7. If not everything has been written to the shared memory yet
 * 7.1. Get notification
 * 7.2. Write partial data into shared memory
 * 7.3. Unlock "shared memory signal" (Worker does stuff)
 * 7.4. Go back to step 7. (loop)
 */
class AsyncMemory {
    constructor(sharedLock, sharedMemory) {
        this.sharedLock = sharedLock ?? new SharedArrayBuffer(8 * Int32Array.BYTES_PER_ELEMENT);
        this.lockAndSize = new Int32Array(this.sharedLock);
        if (this.lockAndSize.length < 8) {
            throw new Error("Expected an sharedLock with at least 8x32 bytes");
        }
        this.sharedMemory = sharedMemory ?? new SharedArrayBuffer(1024);
        this.memory = new Uint8Array(this.sharedMemory);
        if (this.sharedMemory.byteLength < 1024) {
            throw new Error("Expected an sharedMemory with at least 1024 bytes");
        }
    }
    /**
     * Should be called from the worker thread
     */
    lockWorker() {
        const oldValue = Atomics.compareExchange(this.lockAndSize, AsyncMemory.LOCK_WORKER_INDEX, AsyncMemory.UNLOCKED, // old value
        AsyncMemory.LOCKED // new value
        );
        if (oldValue !== AsyncMemory.UNLOCKED) {
            throw new Error(`Cannot lock worker, the worker has to be unlocked ${AsyncMemory.UNLOCKED} !== ${oldValue}`);
        }
    }
    /**
     * Should be called from the worker thread
     */
    lockSize() {
        const oldValue = Atomics.compareExchange(this.lockAndSize, AsyncMemory.LOCK_SIZE_INDEX, AsyncMemory.UNLOCKED, // old value
        AsyncMemory.LOCKED // new value
        );
        if (oldValue !== AsyncMemory.UNLOCKED) {
            throw new Error(`Cannot set size flag, the size has to be unlocked ${AsyncMemory.UNLOCKED} !== ${oldValue}`);
        }
    }
    /**
     * Only legal if the worker is locked
     */
    waitForSize() {
        Atomics.wait(this.lockAndSize, AsyncMemory.LOCK_SIZE_INDEX, AsyncMemory.LOCKED);
    }
    /**
     * Should be called from the main thread!
     * Only legal if the worker is locked and the size is locked
     */
    writeSize(value) {
        return Atomics.store(this.lockAndSize, AsyncMemory.SIZE_INDEX, value);
    }
    /**
     * Only legal if the worker is locked but the size is not
     */
    readSize() {
        return Atomics.load(this.lockAndSize, AsyncMemory.SIZE_INDEX);
    }
    /**
     * Should be called from the main thread!
     */
    unlockSize() {
        const oldValue = Atomics.compareExchange(this.lockAndSize, AsyncMemory.LOCK_SIZE_INDEX, AsyncMemory.LOCKED, // old value
        AsyncMemory.UNLOCKED // new value
        );
        if (oldValue != AsyncMemory.LOCKED) {
            throw new Error("Tried to unlock, but was already unlocked");
        }
        Atomics.notify(this.lockAndSize, AsyncMemory.LOCK_SIZE_INDEX);
    }
    /**
     * Ensures that the size gets unlocked
     */
    forceUnlockSize() {
        const oldValue = Atomics.compareExchange(this.lockAndSize, AsyncMemory.LOCK_SIZE_INDEX, AsyncMemory.LOCKED, // old value
        AsyncMemory.UNLOCKED // new value
        );
        if (oldValue != AsyncMemory.LOCKED) {
            // And force unlock it
            Atomics.store(this.lockAndSize, AsyncMemory.LOCK_SIZE_INDEX, AsyncMemory.UNLOCKED);
        }
        Atomics.notify(this.lockAndSize, AsyncMemory.LOCK_SIZE_INDEX);
    }
    /**
     * Should be called from the worker thread!
     */
    unlockWorker() {
        const oldValue = Atomics.compareExchange(this.lockAndSize, AsyncMemory.LOCK_WORKER_INDEX, AsyncMemory.LOCKED, // old value
        AsyncMemory.UNLOCKED // new value
        );
        if (oldValue != AsyncMemory.LOCKED) {
            throw new Error("Tried to unlock, but was already unlocked");
        }
        Atomics.notify(this.lockAndSize, AsyncMemory.LOCK_WORKER_INDEX);
    }
}
// Reference: https://v8.dev/features/atomics
AsyncMemory.LOCK_WORKER_INDEX = 0;
AsyncMemory.LOCK_SIZE_INDEX = 2;
AsyncMemory.SIZE_INDEX = 4;
AsyncMemory.UNLOCKED = 0;
AsyncMemory.LOCKED = 1;

const SERIALIZATION = {
    UNDEFINED: 0,
    NULL: 1,
    FALSE: 2,
    TRUE: 3,
    NUMBER: 4,
    DATE: 5,
    KNOWN_SYMBOL: 6,
    STRING: 10,
    BIGINT: 11,
    OBJECT: 255,
};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
const KNOWN_SYMBOLS = [
    Symbol.asyncIterator,
    Symbol.hasInstance,
    Symbol.isConcatSpreadable,
    Symbol.iterator,
    Symbol.match,
    Symbol.matchAll,
    Symbol.replace,
    Symbol.search,
    Symbol.species,
    Symbol.split,
    Symbol.toPrimitive,
    Symbol.toStringTag,
    Symbol.unscopables,
];
const textEncoder = new TextEncoder();
new TextDecoder("utf-8");
const encodeFloat = useFloatEncoder();
function useFloatEncoder() {
    // https://stackoverflow.com/a/14379836/3492994
    const temp = new ArrayBuffer(8);
    const tempFloat64 = new Float64Array(temp);
    const tempUint8 = new Uint8Array(temp);
    return function (value) {
        tempFloat64[0] = value;
        return tempUint8;
    };
}
/**
 * Lets one other thread access the objects on this thread.
 * Usually runs on the main thread.
 */
class ObjectProxyHost {
    constructor(memory) {
        this.rootReferences = new Map();
        this.temporaryReferences = new Map();
        this.memory = memory;
    }
    /** Creates a valid, random id for a given object */
    getId(value) {
        return nanoid() + "-" + (typeof value === "function" ? "f" : "o");
    }
    registerRootObject(value) {
        const id = this.getId(value);
        this.rootReferences.set(id, value);
        return id;
    }
    registerTempObject(value) {
        const id = this.getId(value);
        this.temporaryReferences.set(id, value);
        return id;
    }
    clearTemporary() {
        this.temporaryReferences.clear();
    }
    getObject(id) {
        return this.rootReferences.get(id) ?? this.temporaryReferences.get(id);
    }
    // A serializePostMessage isn't needed here, because all we're ever going to pass to the worker are ids
    serializeMemory(value, memory) {
        // Format:
        // [1 byte][n bytes ]
        // [type  ][data    ]
        memory.writeSize(8); // Anything that fits into 8 bytes is fine
        // Simple primitives. Guaranteed to fit into the shared memory.
        if (value === undefined) {
            memory.memory[0] = SERIALIZATION.UNDEFINED;
            memory.unlockSize();
        }
        else if (value === null) {
            memory.memory[0] = SERIALIZATION.NULL;
            memory.unlockSize();
        }
        else if (value === false) {
            memory.memory[0] = SERIALIZATION.FALSE;
            memory.unlockSize();
        }
        else if (value === true) {
            memory.memory[0] = SERIALIZATION.TRUE;
            memory.unlockSize();
        }
        else if (typeof value === "number") {
            memory.memory[0] = SERIALIZATION.NUMBER;
            memory.memory.set(encodeFloat(value), 1);
            memory.unlockSize();
        }
        else if (value instanceof Date) {
            memory.memory[0] = SERIALIZATION.DATE;
            const time = value.getTime();
            memory.memory.set(encodeFloat(time), 1);
            memory.unlockSize();
        }
        else if (typeof value === "symbol" && KNOWN_SYMBOLS.includes(value)) {
            memory.memory[0] = SERIALIZATION.KNOWN_SYMBOL;
            memory.memory[1] = KNOWN_SYMBOLS.indexOf(value);
            memory.unlockSize();
        }
        // Variable length primitives. Not guaranteed to fit into the shared memory, but we know their size.
        else if (typeof value === "string") {
            memory.memory[0] = SERIALIZATION.STRING;
            // A string encoded in utf-8 uses at most 4 bytes per character
            if (value.length * 4 <= memory.memory.byteLength) {
                const data = textEncoder.encode(value);
                memory.memory.set(data, 1);
                memory.writeSize(data.byteLength);
                memory.unlockSize();
            }
            else {
                // Longer strings need to be sent piece by piece
                const bytes = textEncoder.encode(value);
                const memorySize = memory.memory.byteLength;
                let offset = 0;
                let remainingBytes = bytes.byteLength;
                memory.memory.set(bytes.subarray(offset, memorySize - 1), 1);
                offset += memorySize - 1;
                remainingBytes -= memorySize - 1;
                this.writeMemoryContinuation = () => {
                    if (remainingBytes > 0) {
                        memory.memory.set(bytes.subarray(offset, memorySize), 0);
                        offset += memorySize;
                        remainingBytes -= memorySize;
                    }
                    else {
                        this.writeMemoryContinuation = undefined;
                    }
                    memory.unlockSize();
                };
                memory.writeSize(bytes.byteLength);
                memory.unlockSize();
            }
        }
        else if (typeof value === "bigint") {
            memory.memory[0] = SERIALIZATION.BIGINT;
            value.toString();
            // TODO: Implement this (just like the text ^)
            console.warn("Bigint support is not implemented");
            memory.unlockSize();
        }
        // Object. Serialized as ID, guaranteed to fit into shared memory
        else {
            memory.memory[0] = SERIALIZATION.OBJECT;
            const id = this.registerTempObject(value);
            const data = textEncoder.encode(id);
            memory.memory.set(data, 1);
            memory.writeSize(data.byteLength);
            memory.unlockSize();
        }
    }
    /**
     * Deserializes an object that was sent through postMessage
     */
    deserializePostMessage(value) {
        if (typeof value === "object" && value !== null) {
            // Special cases
            if (value.id)
                return this.getObject(value.id);
            if (value.value)
                return value.value;
            if (value.symbol)
                return KNOWN_SYMBOLS[value.symbol];
        }
        // It's a primitive
        return value;
    }
    handleProxyMessage(message, memory) {
        if (message.type === "proxy_reflect") {
            try {
                if (message.method === "apply") {
                    const method = Reflect[message.method];
                    const args = (message.args ?? []).map((v) => this.deserializePostMessage(v));
                    const result = method(this.getObject(message.target), this.getObject(message.thisArg), args);
                    // Write result to shared memory
                    this.serializeMemory(result, memory);
                }
                else {
                    const method = Reflect[message.method];
                    const args = (message.args ?? []).map((v) => this.deserializePostMessage(v));
                    const result = method(this.getObject(message.target), ...args);
                    // Write result to shared memory
                    this.serializeMemory(result, memory);
                }
            }
            catch (e) {
                console.error(message);
                throw e;
            }
        }
        else if (message.type === "proxy_shared_memory") {
            // Write remaining data to shared memory
            if (this.writeMemoryContinuation === undefined) {
                console.warn("No more data to write to shared memory");
            }
            else {
                this.writeMemoryContinuation();
            }
        }
        else if (message.type === "proxy_print_object") {
            console.log("Object with id", message.target, "is", this.getObject(message.target));
        }
        else if (message.type === "proxy_promise") {
            const promiseObject = this.getObject(message.target);
            if (message.method === "then") {
                promiseObject[message.method]((value) => {
                    const result = { value: value };
                    this.serializeMemory(result, memory);
                }, (err) => {
                    const result = { error: err };
                    this.serializeMemory(result, memory);
                });
            }
            else {
                console.error("Unknown proxy promise method", message);
            }
        }
        else {
            console.warn("Unknown proxy message", message);
        }
    }
}
const ObjectId = Symbol.for("id");

async function mainThreadPyodide(opts, drawCanvas) {
    const pyodideWorkerOptions = opts.options;
    pyodideWorkerOptions.globalThisId = "";
    pyodideWorkerOptions.drawCanvasId = "";
    pyodideWorkerOptions.isMainThread = true;
    const fakeKernel = {
        proxy: undefined,
        postMessage(message) { },
        syncFs: undefined,
        input: () => {
            return prompt() || "";
        },
        kernels: new Map(),
        log(kernel, ...args) {
            console.log(...args);
        },
        logWarning(kernel, ...args) {
            console.warn(...args);
        },
        logError(kernel, ...args) {
            console.error(...args);
        },
        [ObjectId]: "",
    };
    globalThis.manager = fakeKernel;
    const kernel = await new Promise((resolve, reject) => {
        try {
            const script = document.createElement("script");
            const onLoad = () => {
                const KernelClass = globalThis[opts.className];
                if (!opts.options.id) {
                    opts.options.id = opts.kernelId;
                }
                const kernel = new KernelClass(pyodideWorkerOptions);
                kernel.init().then(() => {
                    resolve(kernel);
                });
            };
            if (opts.source.type === "url") {
                script.addEventListener("load", onLoad);
                script.src = opts.source.url;
                document.head.appendChild(script);
            }
            else {
                script.text = opts.source.code;
                document.head.appendChild(script);
                onLoad();
            }
        }
        catch (e) {
            reject(e);
        }
    });
    // Not quite as elegant as it could be, but whatevs
    kernel.proxiedDrawCanvas = drawCanvas;
    return kernel;
}

var kernelWorkerScriptSource = "class AsyncMemory{constructor(sharedLock,sharedMemory){this.sharedLock=sharedLock??new SharedArrayBuffer(8*Int32Array.BYTES_PER_ELEMENT);this.lockAndSize=new Int32Array(this.sharedLock);if(this.lockAndSize.length<8)throw new Error(\"Expected an sharedLock with at least 8x32 bytes\");this.sharedMemory=sharedMemory??new SharedArrayBuffer(1024);this.memory=new Uint8Array(this.sharedMemory);if(this.sharedMemory.byteLength<1024)throw new Error(\"Expected an sharedMemory with at least 1024 bytes\")}lockWorker(){const oldValue=Atomics.compareExchange(this.lockAndSize,AsyncMemory.LOCK_WORKER_INDEX,AsyncMemory.UNLOCKED,AsyncMemory.LOCKED);if(oldValue!==AsyncMemory.UNLOCKED)throw new Error(`Cannot lock worker, the worker has to be unlocked ${AsyncMemory.UNLOCKED} !== ${oldValue}`)}lockSize(){const oldValue=Atomics.compareExchange(this.lockAndSize,AsyncMemory.LOCK_SIZE_INDEX,AsyncMemory.UNLOCKED,AsyncMemory.LOCKED);if(oldValue!==AsyncMemory.UNLOCKED)throw new Error(`Cannot set size flag, the size has to be unlocked ${AsyncMemory.UNLOCKED} !== ${oldValue}`)}waitForSize(){Atomics.wait(this.lockAndSize,AsyncMemory.LOCK_SIZE_INDEX,AsyncMemory.LOCKED)}writeSize(value){return Atomics.store(this.lockAndSize,AsyncMemory.SIZE_INDEX,value)}readSize(){return Atomics.load(this.lockAndSize,AsyncMemory.SIZE_INDEX)}unlockSize(){const oldValue=Atomics.compareExchange(this.lockAndSize,AsyncMemory.LOCK_SIZE_INDEX,AsyncMemory.LOCKED,AsyncMemory.UNLOCKED);if(oldValue!=AsyncMemory.LOCKED)throw new Error(\"Tried to unlock, but was already unlocked\");Atomics.notify(this.lockAndSize,AsyncMemory.LOCK_SIZE_INDEX)}forceUnlockSize(){const oldValue=Atomics.compareExchange(this.lockAndSize,AsyncMemory.LOCK_SIZE_INDEX,AsyncMemory.LOCKED,AsyncMemory.UNLOCKED);if(oldValue!=AsyncMemory.LOCKED)Atomics.store(this.lockAndSize,AsyncMemory.LOCK_SIZE_INDEX,AsyncMemory.UNLOCKED);Atomics.notify(this.lockAndSize,AsyncMemory.LOCK_SIZE_INDEX)}unlockWorker(){const oldValue=Atomics.compareExchange(this.lockAndSize,AsyncMemory.LOCK_WORKER_INDEX,AsyncMemory.LOCKED,AsyncMemory.UNLOCKED);if(oldValue!=AsyncMemory.LOCKED)throw new Error(\"Tried to unlock, but was already unlocked\");Atomics.notify(this.lockAndSize,AsyncMemory.LOCK_WORKER_INDEX)}}AsyncMemory.LOCK_WORKER_INDEX=0;AsyncMemory.LOCK_SIZE_INDEX=2;AsyncMemory.SIZE_INDEX=4;AsyncMemory.UNLOCKED=0;AsyncMemory.LOCKED=1;const SERIALIZATION={UNDEFINED:0,NULL:1,FALSE:2,TRUE:3,NUMBER:4,DATE:5,KNOWN_SYMBOL:6,STRING:10,BIGINT:11,OBJECT:255};const KNOWN_SYMBOLS=[Symbol.asyncIterator,Symbol.hasInstance,Symbol.isConcatSpreadable,Symbol.iterator,Symbol.match,Symbol.matchAll,Symbol.replace,Symbol.search,Symbol.species,Symbol.split,Symbol.toPrimitive,Symbol.toStringTag,Symbol.unscopables];new TextEncoder;const textDecoder=new TextDecoder(\"utf-8\");const decodeFloat=useFloatDecoder();function useFloatDecoder(){const temp=new ArrayBuffer(8);const tempFloat64=new Float64Array(temp);const tempUint8=new Uint8Array(temp);return function(value){tempUint8.set(value);return tempFloat64[0]}}const ObjectId=Symbol.for(\"id\");class ObjectProxyClient{constructor(memory,postMessage){this.memory=memory;this.postMessage=postMessage}serializePostMessage(value){if(isSimplePrimitive(value))return value;else if(isSymbolPrimitive(value))return{symbol:KNOWN_SYMBOLS.indexOf(value)};else if(isVariableLengthPrimitive(value))return value;else if(void 0!==value[ObjectId])return{id:value[ObjectId]};else return{value}}deserializeMemory(memory){const numberOfBytes=memory.readSize();let resultBytes;if(numberOfBytes<=memory.sharedMemory.byteLength)resultBytes=memory.memory;else{const memorySize=memory.sharedMemory.byteLength;let offset=0;let remainingBytes=numberOfBytes;resultBytes=new Uint8Array(numberOfBytes);while(remainingBytes>=memorySize){resultBytes.set(memory.memory,offset);offset+=memorySize;remainingBytes-=memorySize;memory.lockSize();this.postMessage({type:\"proxy_shared_memory\"});memory.waitForSize()}if(remainingBytes>0)resultBytes.set(memory.memory.subarray(0,remainingBytes),offset)}if(resultBytes[0]===SERIALIZATION.UNDEFINED)return;else if(resultBytes[0]===SERIALIZATION.NULL)return null;else if(resultBytes[0]===SERIALIZATION.FALSE)return!1;else if(resultBytes[0]===SERIALIZATION.TRUE)return!0;else if(resultBytes[0]===SERIALIZATION.NUMBER)return decodeFloat(resultBytes.subarray(1,9));else if(resultBytes[0]===SERIALIZATION.DATE){const date=new Date;date.setTime(decodeFloat(resultBytes.subarray(1,9)));return date}else if(resultBytes[0]===SERIALIZATION.KNOWN_SYMBOL){const symbol=KNOWN_SYMBOLS[resultBytes[1]];return symbol}else if(resultBytes[0]===SERIALIZATION.STRING)return textDecoder.decode(resultBytes.slice(1,numberOfBytes+1));else if(resultBytes[0]===SERIALIZATION.BIGINT)return BigInt(textDecoder.decode(resultBytes.slice(1,numberOfBytes+1)));else if(resultBytes[0]===SERIALIZATION.OBJECT){const id=textDecoder.decode(resultBytes.slice(1,numberOfBytes+1));return this.getObjectProxy(id)}else{console.warn(\"Unknown type\",resultBytes[0]);return null}}proxyReflect(method,targetId,args){let value;try{this.memory.lockWorker();this.memory.lockSize();this.memory.writeSize(0);if(\"apply\"===method)this.postMessage({type:\"proxy_reflect\",method,target:targetId,thisArg:args[0],args:args[1].map((v=>this.serializePostMessage(v)))});else this.postMessage({type:\"proxy_reflect\",method,target:targetId,args:args.map((v=>this.serializePostMessage(v)))});this.memory.waitForSize();value=this.deserializeMemory(this.memory)}catch(e){console.error({method,targetId,args});console.error(e);this.postMessage({type:\"proxy_print_object\",target:targetId})}finally{this.memory.forceUnlockSize();this.memory.unlockWorker()}return value}proxyPromise(method,targetId){let value;try{this.memory.lockWorker();this.memory.lockSize();this.memory.writeSize(0);this.postMessage({type:\"proxy_promise\",method,target:targetId});this.memory.waitForSize();value=this.deserializeMemory(this.memory)}catch(e){console.error({method,targetId});console.error(e);this.postMessage({type:\"proxy_print_object\",target:targetId})}finally{this.memory.forceUnlockSize();this.memory.unlockWorker()}return value}isFunction(id){return id.endsWith(\"-f\")}getObjectProxy(id){const client=this;return new Proxy(this.isFunction(id)?function(){}:{},{get(target,prop,receiver){if(prop===ObjectId)return id;const value=client.proxyReflect(\"get\",id,[prop,receiver]);if(\"function\"!==typeof value)return value;return new Proxy(value,{apply(_,thisArg,argumentsList){const calledWithProxy=thisArg===receiver;const functionReturnValue=client.proxyReflect(\"apply\",value[ObjectId],[calledWithProxy?id:thisArg[ObjectId],argumentsList]);return functionReturnValue}})},set(target,prop,value,receiver){return client.proxyReflect(\"set\",id,[prop,value,receiver])},ownKeys(target){return client.proxyReflect(\"ownKeys\",id,[])},has(target,prop){return client.proxyReflect(\"has\",id,[prop])},defineProperty(target,prop,attributes){return client.proxyReflect(\"defineProperty\",id,[prop,attributes])},deleteProperty(target,prop){return client.proxyReflect(\"deleteProperty\",id,[prop])},apply(target,thisArg,argumentsList){return client.proxyReflect(\"apply\",id,[thisArg[ObjectId],argumentsList])},construct(target,argumentsList,newTarget){return client.proxyReflect(\"construct\",id,[argumentsList,newTarget])}})}wrapExcluderProxy(obj,underlyingObject,exclude){return new Proxy(obj,{get(target,prop,receiver){if(exclude.has(prop))target=underlyingObject;const value=Reflect.get(target,prop,receiver);if(\"function\"!==typeof value)return value;return new Proxy(value,{apply(_,thisArg,args){const calledWithProxy=thisArg===receiver;return Reflect.apply(value,calledWithProxy?target:thisArg,args)}})},has(target,prop){if(exclude.has(prop))target=underlyingObject;return Reflect.has(target,prop)}})}thenSync(obj){const objectId=obj[ObjectId];if(!objectId)throw new Error(\"Not a proxy object\");const result=this.proxyPromise(\"then\",objectId);if(result.error)throw result.error;return result.value}}function isSimplePrimitive(value){if(void 0===value)return!0;else if(null===value)return!0;else if(!1===value)return!0;else if(!0===value)return!0;else if(\"number\"===typeof value)return!0;else if(value instanceof Date)return!0;else return!1}function isSymbolPrimitive(value){if(\"symbol\"===typeof value&&KNOWN_SYMBOLS.includes(value))return!0;return!1}function isVariableLengthPrimitive(value){if(\"string\"===typeof value)return!0;else if(\"bigint\"===typeof value)return!0}var _a;function assertUnreachable(_x){throw new Error(\"This case should have never been reached\")}class KernelManager{constructor(){this.kernels=new Map;this.input=()=>\"\\n\";this[_a]=\"\";self.addEventListener(\"message\",(async e=>{if(!e.data){console.warn(\"Kernel worker received unexpected message:\",e);return}const data=e.data;switch(data.type){case\"initialize\":if(data.asyncMemory){const asyncMemory=new AsyncMemory(data.asyncMemory.lockBuffer,data.asyncMemory.dataBuffer);this.proxy=new ObjectProxyClient(asyncMemory,(message=>{this.postMessage(message)}));if(data.getInputId)this.input=this.proxy.getObjectProxy(data.getInputId);if(data.filesystemId){const proxy=this.proxy;const asyncFs=this.proxy.getObjectProxy(data.filesystemId);this.syncFs={get(opts){return proxy.thenSync(asyncFs.get(opts))},put(opts){return proxy.thenSync(asyncFs.put(opts))},delete(opts){return proxy.thenSync(asyncFs.delete(opts))},move(opts){return proxy.thenSync(asyncFs.move(opts))},listDirectory(opts){return proxy.thenSync(asyncFs.listDirectory(opts))}}}}else console.warn(\"Missing async memory, accessing objects from the main thread will not work. Please make sure that COOP/COEP is enabled.\");break;case\"import_kernel\":try{if(\"url\"===data.source.type)importScripts(data.source.url);else{const blob=new Blob([data.source.code],{type:\"text/javascript\"});importScripts(URL.createObjectURL(blob))}const KernelClass=globalThis[data.className];if(!data.options.id)data.options.id=data.kernelId;const kernel=new KernelClass(data.options);this.kernels.set(kernel.kernelId,kernel);kernel.init().then((()=>{this.postMessage({type:\"kernel_initialized\",kernelId:kernel.kernelId})}))}catch(e){this.postMessage({type:\"error\",kernelId:data.kernelId,id:\"\",error:e+\"\"})}break;case\"run\":try{const kernel=this.kernels.get(data.kernelId);if(!kernel)throw new Error(\"Failed to find kernel with id \"+data.kernelId);const result=await kernel.runCode(data.code);this.postMessage({type:\"result\",kernelId:kernel.kernelId,id:data.id,value:result})}catch(e){this.postMessage({type:\"error\",kernelId:data.kernelId,id:data.id,error:e+\"\"})}break;case\"custom\":{const kernel=this.kernels.get(data.kernelId);if(kernel)kernel.customMessage(data.message);else console.warn(\"Custom message was sent to an nonexistent kernel\",data);break}default:assertUnreachable();break}}))}postMessage(message){self.postMessage(message)}log(kernel,...args){this.postMessage({kernelId:kernel.kernelId,type:\"console\",method:\"log\",data:args})}logWarning(kernel,...args){this.postMessage({kernelId:kernel.kernelId,type:\"console\",method:\"warn\",data:args})}logError(kernel,...args){this.postMessage({kernelId:kernel.kernelId,type:\"console\",method:\"error\",data:args})}}_a=ObjectId;globalThis.manager=new KernelManager;\n";

var pyodideWorkerScriptSource = "var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf;var __hasOwnProp=Object.prototype.hasOwnProperty;var __commonJS=(cb,mod)=>function __require(){return mod||(0,cb[__getOwnPropNames(cb)[0]])((mod={exports:{}}).exports,mod),mod.exports};var __copyProps=(to,from,except,desc)=>{if(from&&\"object\"===typeof from||\"function\"===typeof from)for(let key of __getOwnPropNames(from))if(!__hasOwnProp.call(to,key)&&key!==except)__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=null!=mod?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,\"default\",{value:mod,enumerable:!0}):target,mod));var require_stackframe=__commonJS({\"node_modules/stackframe/stackframe.js\"(exports,module){(function(root,factory){if(\"function\"===typeof define&&define.amd)define(\"stackframe\",[],factory);else if(\"object\"===typeof exports)module.exports=factory();else root.StackFrame=factory()})(exports,(function(){function _isNumber(n){return!isNaN(parseFloat(n))&&isFinite(n)}function _capitalize(str){return str.charAt(0).toUpperCase()+str.substring(1)}function _getter(p){return function(){return this[p]}}var booleanProps=[\"isConstructor\",\"isEval\",\"isNative\",\"isToplevel\"];var numericProps=[\"columnNumber\",\"lineNumber\"];var stringProps=[\"fileName\",\"functionName\",\"source\"];var arrayProps=[\"args\"];var objectProps=[\"evalOrigin\"];var props=booleanProps.concat(numericProps,stringProps,arrayProps,objectProps);function StackFrame(obj){if(!obj)return;for(var i2=0;i2<props.length;i2++)if(void 0!==obj[props[i2]])this[\"set\"+_capitalize(props[i2])](obj[props[i2]])}StackFrame.prototype={getArgs:function(){return this.args},setArgs:function(v){if(\"[object Array]\"!==Object.prototype.toString.call(v))throw new TypeError(\"Args must be an Array\");this.args=v},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(v){if(v instanceof StackFrame)this.evalOrigin=v;else if(v instanceof Object)this.evalOrigin=new StackFrame(v);else throw new TypeError(\"Eval Origin must be an Object or StackFrame\")},toString:function(){var fileName=this.getFileName()||\"\";var lineNumber=this.getLineNumber()||\"\";var columnNumber=this.getColumnNumber()||\"\";var functionName=this.getFunctionName()||\"\";if(this.getIsEval()){if(fileName)return\"[eval] (\"+fileName+\":\"+lineNumber+\":\"+columnNumber+\")\";return\"[eval]:\"+lineNumber+\":\"+columnNumber}if(functionName)return functionName+\" (\"+fileName+\":\"+lineNumber+\":\"+columnNumber+\")\";return fileName+\":\"+lineNumber+\":\"+columnNumber}};StackFrame.fromString=function StackFrame$$fromString(str){var argsStartIndex=str.indexOf(\"(\");var argsEndIndex=str.lastIndexOf(\")\");var functionName=str.substring(0,argsStartIndex);var args=str.substring(argsStartIndex+1,argsEndIndex).split(\",\");var locationString=str.substring(argsEndIndex+1);if(0===locationString.indexOf(\"@\")){var parts=/@(.+?)(?::(\\d+))?(?::(\\d+))?$/.exec(locationString,\"\");var fileName=parts[1];var lineNumber=parts[2];var columnNumber=parts[3]}return new StackFrame({functionName,args:args||void 0,fileName,lineNumber:lineNumber||void 0,columnNumber:columnNumber||void 0})};for(var i=0;i<booleanProps.length;i++){StackFrame.prototype[\"get\"+_capitalize(booleanProps[i])]=_getter(booleanProps[i]);StackFrame.prototype[\"set\"+_capitalize(booleanProps[i])]=function(p){return function(v){this[p]=Boolean(v)}}(booleanProps[i])}for(var j=0;j<numericProps.length;j++){StackFrame.prototype[\"get\"+_capitalize(numericProps[j])]=_getter(numericProps[j]);StackFrame.prototype[\"set\"+_capitalize(numericProps[j])]=function(p){return function(v){if(!_isNumber(v))throw new TypeError(p+\" must be a Number\");this[p]=Number(v)}}(numericProps[j])}for(var k=0;k<stringProps.length;k++){StackFrame.prototype[\"get\"+_capitalize(stringProps[k])]=_getter(stringProps[k]);StackFrame.prototype[\"set\"+_capitalize(stringProps[k])]=function(p){return function(v){this[p]=String(v)}}(stringProps[k])}return StackFrame}))}});var require_error_stack_parser=__commonJS({\"node_modules/error-stack-parser/error-stack-parser.js\"(exports,module){(function(root,factory){if(\"function\"===typeof define&&define.amd)define(\"error-stack-parser\",[\"stackframe\"],factory);else if(\"object\"===typeof exports)module.exports=factory(require_stackframe());else root.ErrorStackParser=factory(root.StackFrame)})(exports,(function ErrorStackParser3(StackFrame){var FIREFOX_SAFARI_STACK_REGEXP=/(^|@)\\S+:\\d+/;var CHROME_IE_STACK_REGEXP=/^\\s*at .*(\\S+:\\d+|\\(native\\))/m;var SAFARI_NATIVE_CODE_REGEXP=/^(eval@)?(\\[native code])?$/;return{parse:function ErrorStackParser$$parse(error){if(\"undefined\"!==typeof error.stacktrace||\"undefined\"!==typeof error[\"opera#sourceloc\"])return this.parseOpera(error);else if(error.stack&&error.stack.match(CHROME_IE_STACK_REGEXP))return this.parseV8OrIE(error);else if(error.stack)return this.parseFFOrSafari(error);else throw new Error(\"Cannot parse given Error object\")},extractLocation:function ErrorStackParser$$extractLocation(urlLike){if(-1===urlLike.indexOf(\":\"))return[urlLike];var regExp=/(.+?)(?::(\\d+))?(?::(\\d+))?$/;var parts=regExp.exec(urlLike.replace(/[()]/g,\"\"));return[parts[1],parts[2]||void 0,parts[3]||void 0]},parseV8OrIE:function ErrorStackParser$$parseV8OrIE(error){var filtered=error.stack.split(\"\\n\").filter((function(line){return!!line.match(CHROME_IE_STACK_REGEXP)}),this);return filtered.map((function(line){if(line.indexOf(\"(eval \")>-1)line=line.replace(/eval code/g,\"eval\").replace(/(\\(eval at [^()]*)|(,.*$)/g,\"\");var sanitizedLine=line.replace(/^\\s+/,\"\").replace(/\\(eval code/g,\"(\").replace(/^.*?\\s+/,\"\");var location2=sanitizedLine.match(/ (\\(.+\\)$)/);sanitizedLine=location2?sanitizedLine.replace(location2[0],\"\"):sanitizedLine;var locationParts=this.extractLocation(location2?location2[1]:sanitizedLine);var functionName=location2&&sanitizedLine||void 0;var fileName=[\"eval\",\"<anonymous>\"].indexOf(locationParts[0])>-1?void 0:locationParts[0];return new StackFrame({functionName,fileName,lineNumber:locationParts[1],columnNumber:locationParts[2],source:line})}),this)},parseFFOrSafari:function ErrorStackParser$$parseFFOrSafari(error){var filtered=error.stack.split(\"\\n\").filter((function(line){return!line.match(SAFARI_NATIVE_CODE_REGEXP)}),this);return filtered.map((function(line){if(line.indexOf(\" > eval\")>-1)line=line.replace(/ line (\\d+)(?: > eval line \\d+)* > eval:\\d+:\\d+/g,\":$1\");if(-1===line.indexOf(\"@\")&&-1===line.indexOf(\":\"))return new StackFrame({functionName:line});else{var functionNameRegex=/((.*\".+\"[^@]*)?[^@]*)(?:@)/;var matches=line.match(functionNameRegex);var functionName=matches&&matches[1]?matches[1]:void 0;var locationParts=this.extractLocation(line.replace(functionNameRegex,\"\"));return new StackFrame({functionName,fileName:locationParts[0],lineNumber:locationParts[1],columnNumber:locationParts[2],source:line})}}),this)},parseOpera:function ErrorStackParser$$parseOpera(e){if(!e.stacktrace||e.message.indexOf(\"\\n\")>-1&&e.message.split(\"\\n\").length>e.stacktrace.split(\"\\n\").length)return this.parseOpera9(e);else if(!e.stack)return this.parseOpera10(e);else return this.parseOpera11(e)},parseOpera9:function ErrorStackParser$$parseOpera9(e){var lineRE=/Line (\\d+).*script (?:in )?(\\S+)/i;var lines=e.message.split(\"\\n\");var result=[];for(var i=2,len=lines.length;i<len;i+=2){var match=lineRE.exec(lines[i]);if(match)result.push(new StackFrame({fileName:match[2],lineNumber:match[1],source:lines[i]}))}return result},parseOpera10:function ErrorStackParser$$parseOpera10(e){var lineRE=/Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$/i;var lines=e.stacktrace.split(\"\\n\");var result=[];for(var i=0,len=lines.length;i<len;i+=2){var match=lineRE.exec(lines[i]);if(match)result.push(new StackFrame({functionName:match[3]||void 0,fileName:match[2],lineNumber:match[1],source:lines[i]}))}return result},parseOpera11:function ErrorStackParser$$parseOpera11(error){var filtered=error.stack.split(\"\\n\").filter((function(line){return!!line.match(FIREFOX_SAFARI_STACK_REGEXP)&&!line.match(/^Error created at/)}),this);return filtered.map((function(line){var tokens=line.split(\"@\");var locationParts=this.extractLocation(tokens.pop());var functionCall=tokens.shift()||\"\";var functionName=functionCall.replace(/<anonymous function(: (\\w+))?>/,\"$2\").replace(/\\([^)]*\\)/g,\"\")||void 0;var argsRaw;if(functionCall.match(/\\(([^)]*)\\)/))argsRaw=functionCall.replace(/^[^(]+\\(([^)]*)\\)$/,\"$1\");var args=void 0===argsRaw||\"[arguments not available]\"===argsRaw?void 0:argsRaw.split(\",\");return new StackFrame({functionName,args,fileName:locationParts[0],lineNumber:locationParts[1],columnNumber:locationParts[2],source:line})}),this)}}}))}});var require_browser=__commonJS({\"node_modules/node-fetch/browser.js\"(exports,module){var getGlobal=function(){if(\"undefined\"!==typeof self)return self;if(\"undefined\"!==typeof window)return window;if(\"undefined\"!==typeof global)return global;throw new Error(\"unable to locate global object\")};var global=getGlobal();module.exports=exports=global.fetch;if(global.fetch)exports.default=global.fetch.bind(global);exports.Headers=global.Headers;exports.Request=global.Request;exports.Response=global.Response}});var import_error_stack_parser2=__toESM(require_error_stack_parser(),1);var Module={};Module.noImageDecoding=!0;Module.noAudioDecoding=!0;Module.noWasmDecoding=!1;Module.preloadedWasm={};Module.preRun=[];var API={};Module.API=API;var Hiwire={};Module.hiwire=Hiwire;var Tests={};API.tests=Tests;function setStandardStreams(stdin,stdout,stderr){if(stdout)Module.print=stdout;if(stderr)Module.printErr=stderr;if(stdin)Module.preRun.push((function(){Module.FS.init(createStdinWrapper(stdin),null,null)}))}function createStdinWrapper(stdin){const encoder=new TextEncoder;let input=new Uint8Array(0);let inputIndex=-1;function stdinWrapper(){try{if(-1===inputIndex){let text=stdin();if(void 0===text||null===text)return null;if(\"string\"!==typeof text)throw new TypeError(`Expected stdin to return string, null, or undefined, got type ${typeof text}.`);if(!text.endsWith(\"\\n\"))text+=\"\\n\";input=encoder.encode(text);inputIndex=0}if(inputIndex<input.length){let character=input[inputIndex];inputIndex++;return character}else{inputIndex=-1;return null}}catch(e){console.error(\"Error thrown in stdin:\");console.error(e);throw e}}return stdinWrapper}function setHomeDirectory(path){Module.preRun.push((function(){const fallbackPath=\"/\";try{Module.FS.mkdirTree(path)}catch(e){console.error(`Error occurred while making a home directory '${path}':`);console.error(e);console.error(`Using '${fallbackPath}' for a home directory instead`);path=fallbackPath}Module.ENV.HOME=path;Module.FS.chdir(path)}))}var IN_NODE=\"undefined\"!==typeof process&&process.release&&\"node\"===process.release.name&&\"undefined\"===typeof process.browser;var nodePathMod;var nodeFetch;var nodeVmMod;var nodeFsPromisesMod;async function initNodeModules(){if(!IN_NODE)return;nodePathMod=(await import(\"path\")).default;nodeFsPromisesMod=await import(\"fs/promises\");nodeFetch=(await Promise.resolve().then((()=>__toESM(require_browser(),1)))).default;nodeVmMod=(await import(\"vm\")).default}async function node_loadBinaryFile(indexURL,path){if(path.includes(\"://\")){let response=await nodeFetch(path);if(!response.ok)throw new Error(`Failed to load '${path}': request failed.`);return await response.arrayBuffer()}else{const data=await nodeFsPromisesMod.readFile(`${indexURL}${path}`);return new Uint8Array(data.buffer,data.byteOffset,data.byteLength)}}async function browser_loadBinaryFile(indexURL,path){const base=new URL(indexURL,location);const url=new URL(path,base);let response=await fetch(url);if(!response.ok)throw new Error(`Failed to load '${url}': request failed.`);return new Uint8Array(await response.arrayBuffer())}var _loadBinaryFile;if(IN_NODE)_loadBinaryFile=node_loadBinaryFile;else _loadBinaryFile=browser_loadBinaryFile;var loadScript;if(globalThis.document)loadScript=async url=>await import(url);else if(globalThis.importScripts)loadScript=async url=>{try{globalThis.importScripts(url)}catch(e){if(e instanceof TypeError)await import(url);else throw e}};else if(IN_NODE)loadScript=nodeLoadScript;else throw new Error(\"Cannot determine runtime environment\");async function nodeLoadScript(url){if(url.includes(\"://\"))nodeVmMod.runInThisContext(await(await nodeFetch(url)).text());else await import(nodePathMod.resolve(url))}function isPyProxy(jsobj){return!!jsobj&&void 0!==jsobj.$$&&\"PyProxy\"===jsobj.$$.type}API.isPyProxy=isPyProxy;if(globalThis.FinalizationRegistry)Module.finalizationRegistry=new FinalizationRegistry((([ptr,cache])=>{cache.leaked=!0;pyproxy_decref_cache(cache);try{Module._Py_DecRef(ptr)}catch(e){API.fatal_error(e)}}));else Module.finalizationRegistry={register(){},unregister(){}};var pyproxy_alloc_map=new Map;Module.pyproxy_alloc_map=pyproxy_alloc_map;var trace_pyproxy_alloc;var trace_pyproxy_dealloc;Module.enable_pyproxy_allocation_tracing=function(){trace_pyproxy_alloc=function(proxy){pyproxy_alloc_map.set(proxy,Error().stack)};trace_pyproxy_dealloc=function(proxy){pyproxy_alloc_map.delete(proxy)}};Module.disable_pyproxy_allocation_tracing=function(){trace_pyproxy_alloc=function(proxy){};trace_pyproxy_dealloc=function(proxy){}};Module.disable_pyproxy_allocation_tracing();Module.pyproxy_new=function(ptrobj,cache){let flags=Module._pyproxy_getflags(ptrobj);let cls=Module.getPyProxyClass(flags);let target;if(flags&1<<8){target=Reflect.construct(Function,[],cls);delete target.length;delete target.name;target.prototype=void 0}else target=Object.create(cls.prototype);if(!cache){let cacheId=Hiwire.new_value(new Map);cache={cacheId,refcnt:0}}cache.refcnt++;Object.defineProperty(target,\"$$\",{value:{ptr:ptrobj,type:\"PyProxy\",cache}});Module._Py_IncRef(ptrobj);let proxy=new Proxy(target,PyProxyHandlers);trace_pyproxy_alloc(proxy);Module.finalizationRegistry.register(proxy,[ptrobj,cache],proxy);return proxy};function _getPtr(jsobj){let ptr=jsobj.$$.ptr;if(0===ptr)throw new Error(jsobj.$$.destroyed_msg);return ptr}var pyproxyClassMap=new Map;Module.getPyProxyClass=function(flags){const FLAG_TYPE_PAIRS=[[1<<0,PyProxyLengthMethods],[1<<1,PyProxyGetItemMethods],[1<<2,PyProxySetItemMethods],[1<<3,PyProxyContainsMethods],[1<<4,PyProxyIterableMethods],[1<<5,PyProxyIteratorMethods],[1<<6,PyProxyAwaitableMethods],[1<<7,PyProxyBufferMethods],[1<<8,PyProxyCallableMethods]];let result=pyproxyClassMap.get(flags);if(result)return result;let descriptors={};for(let[feature_flag,methods]of FLAG_TYPE_PAIRS)if(flags&feature_flag)Object.assign(descriptors,Object.getOwnPropertyDescriptors(methods.prototype));descriptors.constructor=Object.getOwnPropertyDescriptor(PyProxyClass.prototype,\"constructor\");Object.assign(descriptors,Object.getOwnPropertyDescriptors({$$flags:flags}));let new_proto=Object.create(PyProxyClass.prototype,descriptors);function NewPyProxyClass(){}NewPyProxyClass.prototype=new_proto;pyproxyClassMap.set(flags,NewPyProxyClass);return NewPyProxyClass};Module.PyProxy_getPtr=_getPtr;var pyproxy_cache_destroyed_msg=\"This borrowed attribute proxy was automatically destroyed in the process of destroying the proxy it was borrowed from. Try using the 'copy' method.\";function pyproxy_decref_cache(cache){if(!cache)return;cache.refcnt--;if(0===cache.refcnt){let cache_map=Hiwire.pop_value(cache.cacheId);for(let proxy_id of cache_map.values()){const cache_entry=Hiwire.pop_value(proxy_id);if(!cache.leaked)Module.pyproxy_destroy(cache_entry,pyproxy_cache_destroyed_msg)}}}Module.pyproxy_destroy=function(proxy,destroyed_msg){if(0===proxy.$$.ptr)return;let ptrobj=_getPtr(proxy);Module.finalizationRegistry.unregister(proxy);destroyed_msg=destroyed_msg||\"Object has already been destroyed\";let proxy_type=proxy.type;let proxy_repr;try{proxy_repr=proxy.toString()}catch(e){if(e.pyodide_fatal_error)throw e}proxy.$$.ptr=0;destroyed_msg+=`\\nThe object was of type \"${proxy_type}\" and `;if(proxy_repr)destroyed_msg+=`had repr \"${proxy_repr}\"`;else destroyed_msg+=\"an error was raised when trying to generate its repr\";proxy.$$.destroyed_msg=destroyed_msg;pyproxy_decref_cache(proxy.$$.cache);try{Module._Py_DecRef(ptrobj);trace_pyproxy_dealloc(proxy)}catch(e){API.fatal_error(e)}};Module.callPyObjectKwargs=function(ptrobj,...jsargs){let kwargs=jsargs.pop();let num_pos_args=jsargs.length;let kwargs_names=Object.keys(kwargs);let kwargs_values=Object.values(kwargs);let num_kwargs=kwargs_names.length;jsargs.push(...kwargs_values);let idargs=Hiwire.new_value(jsargs);let idkwnames=Hiwire.new_value(kwargs_names);let idresult;try{idresult=Module.__pyproxy_apply(ptrobj,idargs,num_pos_args,idkwnames,num_kwargs)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(idargs);Hiwire.decref(idkwnames)}if(0===idresult)Module._pythonexc2js();let result=Hiwire.pop_value(idresult);if(result&&\"coroutine\"===result.type&&result._ensure_future)result._ensure_future();return result};Module.callPyObject=function(ptrobj,...jsargs){return Module.callPyObjectKwargs(ptrobj,...jsargs,{})};var PyProxyClass=class{constructor(){throw new TypeError(\"PyProxy is not a constructor\")}get[Symbol.toStringTag](){return\"PyProxy\"}get type(){let ptrobj=_getPtr(this);return Hiwire.pop_value(Module.__pyproxy_type(ptrobj))}toString(){let ptrobj=_getPtr(this);let jsref_repr;try{jsref_repr=Module.__pyproxy_repr(ptrobj)}catch(e){API.fatal_error(e)}if(0===jsref_repr)Module._pythonexc2js();return Hiwire.pop_value(jsref_repr)}destroy(destroyed_msg){Module.pyproxy_destroy(this,destroyed_msg)}copy(){let ptrobj=_getPtr(this);return Module.pyproxy_new(ptrobj,this.$$.cache)}toJs({depth=-1,pyproxies=void 0,create_pyproxies=!0,dict_converter=void 0,default_converter=void 0}={}){let ptrobj=_getPtr(this);let idresult;let proxies_id;let dict_converter_id=0;let default_converter_id=0;if(!create_pyproxies)proxies_id=0;else if(pyproxies)proxies_id=Hiwire.new_value(pyproxies);else proxies_id=Hiwire.new_value([]);if(dict_converter)dict_converter_id=Hiwire.new_value(dict_converter);if(default_converter)default_converter_id=Hiwire.new_value(default_converter);try{idresult=Module._python2js_custom(ptrobj,depth,proxies_id,dict_converter_id,default_converter_id)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(proxies_id);Hiwire.decref(dict_converter_id);Hiwire.decref(default_converter_id)}if(0===idresult)Module._pythonexc2js();return Hiwire.pop_value(idresult)}supportsLength(){return!!(this.$$flags&1<<0)}supportsGet(){return!!(this.$$flags&1<<1)}supportsSet(){return!!(this.$$flags&1<<2)}supportsHas(){return!!(this.$$flags&1<<3)}isIterable(){return!!(this.$$flags&(1<<4|1<<5))}isIterator(){return!!(this.$$flags&1<<5)}isAwaitable(){return!!(this.$$flags&1<<6)}isBuffer(){return!!(this.$$flags&1<<7)}isCallable(){return!!(this.$$flags&1<<8)}};var PyProxyLengthMethods=class{get length(){let ptrobj=_getPtr(this);let length;try{length=Module._PyObject_Size(ptrobj)}catch(e){API.fatal_error(e)}if(-1===length)Module._pythonexc2js();return length}};var PyProxyGetItemMethods=class{get(key){let ptrobj=_getPtr(this);let idkey=Hiwire.new_value(key);let idresult;try{idresult=Module.__pyproxy_getitem(ptrobj,idkey)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(idkey)}if(0===idresult)if(Module._PyErr_Occurred())Module._pythonexc2js();else return;return Hiwire.pop_value(idresult)}};var PyProxySetItemMethods=class{set(key,value){let ptrobj=_getPtr(this);let idkey=Hiwire.new_value(key);let idval=Hiwire.new_value(value);let errcode;try{errcode=Module.__pyproxy_setitem(ptrobj,idkey,idval)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(idkey);Hiwire.decref(idval)}if(-1===errcode)Module._pythonexc2js()}delete(key){let ptrobj=_getPtr(this);let idkey=Hiwire.new_value(key);let errcode;try{errcode=Module.__pyproxy_delitem(ptrobj,idkey)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(idkey)}if(-1===errcode)Module._pythonexc2js()}};var PyProxyContainsMethods=class{has(key){let ptrobj=_getPtr(this);let idkey=Hiwire.new_value(key);let result;try{result=Module.__pyproxy_contains(ptrobj,idkey)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(idkey)}if(-1===result)Module._pythonexc2js();return 1===result}};function*iter_helper(iterptr,token){try{let item;while(item=Module.__pyproxy_iter_next(iterptr))yield Hiwire.pop_value(item)}catch(e){API.fatal_error(e)}finally{Module.finalizationRegistry.unregister(token);Module._Py_DecRef(iterptr)}if(Module._PyErr_Occurred())Module._pythonexc2js()}var PyProxyIterableMethods=class{[Symbol.iterator](){let ptrobj=_getPtr(this);let token={};let iterptr;try{iterptr=Module._PyObject_GetIter(ptrobj)}catch(e){API.fatal_error(e)}if(0===iterptr)Module._pythonexc2js();let result=iter_helper(iterptr,token);Module.finalizationRegistry.register(result,[iterptr,void 0],token);return result}};var PyProxyIteratorMethods=class{[Symbol.iterator](){return this}next(arg=void 0){let idarg=Hiwire.new_value(arg);let status;let done;let stackTop=Module.stackSave();let res_ptr=Module.stackAlloc(4);try{status=Module.__pyproxyGen_Send(_getPtr(this),idarg,res_ptr)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(idarg)}let HEAPU32=Module.HEAPU32;let idresult=HEAPU32[(res_ptr>>2)+0];Module.stackRestore(stackTop);if(-1===status)Module._pythonexc2js();let value=Hiwire.pop_value(idresult);done=0===status;return{done,value}}};function python_hasattr(jsobj,jskey){let ptrobj=_getPtr(jsobj);let idkey=Hiwire.new_value(jskey);let result;try{result=Module.__pyproxy_hasattr(ptrobj,idkey)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(idkey)}if(-1===result)Module._pythonexc2js();return 0!==result}function python_getattr(jsobj,jskey){let ptrobj=_getPtr(jsobj);let idkey=Hiwire.new_value(jskey);let idresult;let cacheId=jsobj.$$.cache.cacheId;try{idresult=Module.__pyproxy_getattr(ptrobj,idkey,cacheId)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(idkey)}if(0===idresult)if(Module._PyErr_Occurred())Module._pythonexc2js();return idresult}function python_setattr(jsobj,jskey,jsval){let ptrobj=_getPtr(jsobj);let idkey=Hiwire.new_value(jskey);let idval=Hiwire.new_value(jsval);let errcode;try{errcode=Module.__pyproxy_setattr(ptrobj,idkey,idval)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(idkey);Hiwire.decref(idval)}if(-1===errcode)Module._pythonexc2js()}function python_delattr(jsobj,jskey){let ptrobj=_getPtr(jsobj);let idkey=Hiwire.new_value(jskey);let errcode;try{errcode=Module.__pyproxy_delattr(ptrobj,idkey)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(idkey)}if(-1===errcode)Module._pythonexc2js()}var PyProxyHandlers={isExtensible(){return!0},has(jsobj,jskey){let objHasKey=Reflect.has(jsobj,jskey);if(objHasKey)return!0;if(\"symbol\"===typeof jskey)return!1;if(jskey.startsWith(\"$\"))jskey=jskey.slice(1);return python_hasattr(jsobj,jskey)},get(jsobj,jskey){if(jskey in jsobj||\"symbol\"===typeof jskey)return Reflect.get(jsobj,jskey);if(jskey.startsWith(\"$\"))jskey=jskey.slice(1);let idresult=python_getattr(jsobj,jskey);if(0!==idresult)return Hiwire.pop_value(idresult)},set(jsobj,jskey,jsval){let descr=Object.getOwnPropertyDescriptor(jsobj,jskey);if(descr&&!descr.writable)throw new TypeError(`Cannot set read only field '${jskey}'`);if(\"symbol\"===typeof jskey)return Reflect.set(jsobj,jskey,jsval);if(jskey.startsWith(\"$\"))jskey=jskey.slice(1);python_setattr(jsobj,jskey,jsval);return!0},deleteProperty(jsobj,jskey){let descr=Object.getOwnPropertyDescriptor(jsobj,jskey);if(descr&&!descr.writable)throw new TypeError(`Cannot delete read only field '${jskey}'`);if(\"symbol\"===typeof jskey)return Reflect.deleteProperty(jsobj,jskey);if(jskey.startsWith(\"$\"))jskey=jskey.slice(1);python_delattr(jsobj,jskey);return!descr||!!descr.configurable},ownKeys(jsobj){let ptrobj=_getPtr(jsobj);let idresult;try{idresult=Module.__pyproxy_ownKeys(ptrobj)}catch(e){API.fatal_error(e)}if(0===idresult)Module._pythonexc2js();let result=Hiwire.pop_value(idresult);result.push(...Reflect.ownKeys(jsobj));return result},apply(jsobj,jsthis,jsargs){return jsobj.apply(jsthis,jsargs)}};var PyProxyAwaitableMethods=class{_ensure_future(){if(this.$$.promise)return this.$$.promise;let ptrobj=_getPtr(this);let resolveHandle;let rejectHandle;let promise=new Promise(((resolve,reject)=>{resolveHandle=resolve;rejectHandle=reject}));let resolve_handle_id=Hiwire.new_value(resolveHandle);let reject_handle_id=Hiwire.new_value(rejectHandle);let errcode;try{errcode=Module.__pyproxy_ensure_future(ptrobj,resolve_handle_id,reject_handle_id)}catch(e){API.fatal_error(e)}finally{Hiwire.decref(reject_handle_id);Hiwire.decref(resolve_handle_id)}if(-1===errcode)Module._pythonexc2js();this.$$.promise=promise;this.destroy();return promise}then(onFulfilled,onRejected){let promise=this._ensure_future();return promise.then(onFulfilled,onRejected)}catch(onRejected){let promise=this._ensure_future();return promise.catch(onRejected)}finally(onFinally){let promise=this._ensure_future();return promise.finally(onFinally)}};var PyProxyCallableMethods=class{apply(jsthis,jsargs){return Module.callPyObject(_getPtr(this),...jsargs)}call(jsthis,...jsargs){return Module.callPyObject(_getPtr(this),...jsargs)}callKwargs(...jsargs){if(0===jsargs.length)throw new TypeError(\"callKwargs requires at least one argument (the key word argument object)\");let kwargs=jsargs[jsargs.length-1];if(void 0!==kwargs.constructor&&\"Object\"!==kwargs.constructor.name)throw new TypeError(\"kwargs argument is not an object\");return Module.callPyObjectKwargs(_getPtr(this),...jsargs)}};PyProxyCallableMethods.prototype.prototype=Function.prototype;var type_to_array_map=new Map([[\"i8\",Int8Array],[\"u8\",Uint8Array],[\"u8clamped\",Uint8ClampedArray],[\"i16\",Int16Array],[\"u16\",Uint16Array],[\"i32\",Int32Array],[\"u32\",Uint32Array],[\"i32\",Int32Array],[\"u32\",Uint32Array],[\"i64\",globalThis.BigInt64Array],[\"u64\",globalThis.BigUint64Array],[\"f32\",Float32Array],[\"f64\",Float64Array],[\"dataview\",DataView]]);var PyProxyBufferMethods=class{getBuffer(type){let ArrayType;if(type){ArrayType=type_to_array_map.get(type);if(void 0===ArrayType)throw new Error(`Unknown type ${type}`)}let HEAPU32=Module.HEAPU32;let orig_stack_ptr=Module.stackSave();let buffer_struct_ptr=Module.stackAlloc(HEAPU32[(Module._buffer_struct_size>>2)+0]);let this_ptr=_getPtr(this);let errcode;try{errcode=Module.__pyproxy_get_buffer(buffer_struct_ptr,this_ptr)}catch(e){API.fatal_error(e)}if(-1===errcode)Module._pythonexc2js();let startByteOffset=HEAPU32[(buffer_struct_ptr>>2)+0];let minByteOffset=HEAPU32[(buffer_struct_ptr>>2)+1];let maxByteOffset=HEAPU32[(buffer_struct_ptr>>2)+2];let readonly=!!HEAPU32[(buffer_struct_ptr>>2)+3];let format_ptr=HEAPU32[(buffer_struct_ptr>>2)+4];let itemsize=HEAPU32[(buffer_struct_ptr>>2)+5];let shape=Hiwire.pop_value(HEAPU32[(buffer_struct_ptr>>2)+6]);let strides=Hiwire.pop_value(HEAPU32[(buffer_struct_ptr>>2)+7]);let view_ptr=HEAPU32[(buffer_struct_ptr>>2)+8];let c_contiguous=!!HEAPU32[(buffer_struct_ptr>>2)+9];let f_contiguous=!!HEAPU32[(buffer_struct_ptr>>2)+10];let format=Module.UTF8ToString(format_ptr);Module.stackRestore(orig_stack_ptr);let success=!1;try{let bigEndian=!1;if(void 0===ArrayType)[ArrayType,bigEndian]=Module.processBufferFormatString(format,\" In this case, you can pass an explicit type argument.\");let alignment=parseInt(ArrayType.name.replace(/[^0-9]/g,\"\"))/8||1;if(bigEndian&&alignment>1)throw new Error(\"Javascript has no native support for big endian buffers. In this case, you can pass an explicit type argument. For instance, `getBuffer('dataview')` will return a `DataView`which has native support for reading big endian data. Alternatively, toJs will automatically convert the buffer to little endian.\");let numBytes=maxByteOffset-minByteOffset;if(0!==numBytes&&(startByteOffset%alignment!==0||minByteOffset%alignment!==0||maxByteOffset%alignment!==0))throw new Error(`Buffer does not have valid alignment for a ${ArrayType.name}`);let numEntries=numBytes/alignment;let offset=(startByteOffset-minByteOffset)/alignment;let data;if(0===numBytes)data=new ArrayType;else data=new ArrayType(HEAPU32.buffer,minByteOffset,numEntries);for(let i of strides.keys())strides[i]/=alignment;success=!0;let result=Object.create(PyBuffer.prototype,Object.getOwnPropertyDescriptors({offset,readonly,format,itemsize,ndim:shape.length,nbytes:numBytes,shape,strides,data,c_contiguous,f_contiguous,_view_ptr:view_ptr,_released:!1}));return result}finally{if(!success)try{Module._PyBuffer_Release(view_ptr);Module._PyMem_Free(view_ptr)}catch(e){API.fatal_error(e)}}}};var PyBuffer=class{constructor(){throw new TypeError(\"PyBuffer is not a constructor\")}release(){if(this._released)return;try{Module._PyBuffer_Release(this._view_ptr);Module._PyMem_Free(this._view_ptr)}catch(e){API.fatal_error(e)}this._released=!0;this.data=null}};var baseURL;async function initializePackageIndex(indexURL){baseURL=indexURL;let package_json;if(IN_NODE){const package_string=await nodeFsPromisesMod.readFile(`${indexURL}packages.json`);package_json=JSON.parse(package_string)}else{let response=await fetch(`${indexURL}packages.json`);package_json=await response.json()}if(!package_json.packages)throw new Error(\"Loaded packages.json does not contain the expected key 'packages'.\");API.packages=package_json.packages;API._import_name_to_package_name=new Map;for(let name of Object.keys(API.packages))for(let import_name of API.packages[name].imports)API._import_name_to_package_name.set(import_name,name)}var DEFAULT_CHANNEL=\"default channel\";var package_uri_regexp=/^.*?([^\\/]*)\\.whl$/;function _uri_to_package_name(package_uri){let match=package_uri_regexp.exec(package_uri);if(match){let wheel_name=match[1].toLowerCase();return wheel_name.split(\"-\").slice(0,-4).join(\"-\")}}function addPackageToLoad(name,toLoad,toLoadShared){name=name.toLowerCase();if(toLoad.has(name))return;const pkg_info=API.packages[name];if(!pkg_info)throw new Error(`No known package with name '${name}'`);if(pkg_info.shared_library)toLoadShared.set(name,DEFAULT_CHANNEL);else toLoad.set(name,DEFAULT_CHANNEL);if(void 0!==loadedPackages[name])return;for(let dep_name of pkg_info.depends)addPackageToLoad(dep_name,toLoad,toLoadShared)}function recursiveDependencies(names,errorCallback){const toLoad=new Map;const toLoadShared=new Map;for(let name of names){const pkgname=_uri_to_package_name(name);if(void 0===pkgname){addPackageToLoad(name,toLoad,toLoadShared);continue}if(toLoad.has(pkgname)&&toLoad.get(pkgname)!==name){errorCallback(`Loading same package ${pkgname} from ${name} and ${toLoad.get(pkgname)}`);continue}toLoad.set(pkgname,name)}return[toLoad,toLoadShared]}async function downloadPackage(name,channel){let file_name;if(channel===DEFAULT_CHANNEL){if(!(name in API.packages))throw new Error(`Internal error: no entry for package named ${name}`);file_name=API.packages[name].file_name}else file_name=channel;return await _loadBinaryFile(baseURL,file_name)}async function installPackage(name,buffer){let pkg=API.packages[name];if(!pkg)pkg={file_name:\".whl\",install_dir:\"site\",shared_library:!1,depends:[],imports:[]};const filename=pkg.file_name;const dynlibs=API.package_loader.unpack_buffer.callKwargs({buffer,filename,target:pkg.install_dir,calculate_dynlibs:!0});for(const dynlib of dynlibs)await loadDynlib(dynlib,pkg.shared_library);loadedPackages[name]=pkg}function createLock(){let _lock=Promise.resolve();async function acquireLock(){const old_lock=_lock;let releaseLock;_lock=new Promise((resolve=>releaseLock=resolve));await old_lock;return releaseLock}return acquireLock}var acquireDynlibLock=createLock();async function loadDynlib(lib,shared){const node=Module.FS.lookupPath(lib).node;let byteArray;if(node.mount.type==Module.FS.filesystems.MEMFS)byteArray=Module.FS.filesystems.MEMFS.getFileDataAsTypedArray(Module.FS.lookupPath(lib).node);else byteArray=Module.FS.readFile(lib);const releaseDynlibLock=await acquireDynlibLock();try{const module=await Module.loadWebAssemblyModule(byteArray,{loadAsync:!0,nodelete:!0,allowUndefined:!0});Module.preloadedWasm[lib]=module;Module.preloadedWasm[lib.split(\"/\").pop()]=module;if(shared)Module.loadDynamicLibrary(lib,{global:!0,nodelete:!0})}catch(e){if(e.message.includes(\"need to see wasm magic number\")){console.warn(`Failed to load dynlib ${lib}. We probably just tried to load a linux .so file or something.`);return}throw e}finally{releaseDynlibLock()}}Tests.loadDynlib=loadDynlib;var acquirePackageLock=createLock();async function loadPackage(names,messageCallback,errorCallback){messageCallback=messageCallback||console.log;errorCallback=errorCallback||console.error;if(isPyProxy(names))names=names.toJs();if(!Array.isArray(names))names=[names];const[toLoad,toLoadShared]=recursiveDependencies(names,errorCallback);for(const[pkg,uri]of[...toLoad,...toLoadShared]){const loaded=loadedPackages[pkg];if(void 0===loaded)continue;toLoad.delete(pkg);toLoadShared.delete(pkg);if(loaded===uri||uri===DEFAULT_CHANNEL)messageCallback(`${pkg} already loaded from ${loaded}`);else errorCallback(`URI mismatch, attempting to load package ${pkg} from ${uri} while it is already loaded from ${loaded}. To override a dependency, load the custom package first.`)}if(0===toLoad.size&&0===toLoadShared.size){messageCallback(\"No new packages to load\");return}const packageNames=[...toLoad.keys(),...toLoadShared.keys()].join(\", \");const releaseLock=await acquirePackageLock();try{messageCallback(`Loading ${packageNames}`);const sharedLibraryLoadPromises={};const packageLoadPromises={};for(const[name,channel]of toLoadShared){if(loadedPackages[name]){toLoadShared.delete(name);continue}sharedLibraryLoadPromises[name]=downloadPackage(name,channel)}for(const[name,channel]of toLoad){if(loadedPackages[name]){toLoad.delete(name);continue}packageLoadPromises[name]=downloadPackage(name,channel)}const loaded=[];const failed={};const sharedLibraryInstallPromises={};const packageInstallPromises={};for(const[name,channel]of toLoadShared)sharedLibraryInstallPromises[name]=sharedLibraryLoadPromises[name].then((async buffer=>{await installPackage(name,buffer);loaded.push(name);loadedPackages[name]=channel})).catch((err=>{console.warn(err);failed[name]=err}));await Promise.all(Object.values(sharedLibraryInstallPromises));for(const[name,channel]of toLoad)packageInstallPromises[name]=packageLoadPromises[name].then((async buffer=>{await installPackage(name,buffer);loaded.push(name);loadedPackages[name]=channel})).catch((err=>{console.warn(err);failed[name]=err}));await Promise.all(Object.values(packageInstallPromises));Module.reportUndefinedSymbols();if(loaded.length>0){const successNames=loaded.join(\", \");messageCallback(`Loaded ${successNames}`)}if(Object.keys(failed).length>0){const failedNames=Object.keys(failed).join(\", \");messageCallback(`Failed to load ${failedNames}`);for(const[name,err]of Object.entries(failed)){console.warn(`The following error occurred while loading ${name}:`);console.error(err)}}API.importlib.invalidate_caches()}finally{releaseLock()}}var loadedPackages={};var import_error_stack_parser=__toESM(require_error_stack_parser(),1);API.dump_traceback=function(){const fd_stdout=1;Module.__Py_DumpTraceback(fd_stdout,Module._PyGILState_GetThisThreadState())};function ensureCaughtObjectIsError(e){if(\"string\"===typeof e)e=new Error(e);else if(\"object\"!==typeof e||null===e||\"string\"!==typeof e.stack||\"string\"!==typeof e.message){let msg=`A value of type ${typeof e} with tag ${Object.prototype.toString.call(e)} was thrown as an error!`;try{msg+=`\\nString interpolation of the thrown value gives \"\"\"${e}\"\"\".`}catch(e2){msg+=`\\nString interpolation of the thrown value fails.`}try{msg+=`\\nThe thrown value's toString method returns \"\"\"${e.toString()}\"\"\".`}catch(e2){msg+=`\\nThe thrown value's toString method fails.`}e=new Error(msg)}return e}var fatal_error_occurred=!1;API.fatal_error=function(e){if(e&&e.pyodide_fatal_error)return;if(fatal_error_occurred){console.error(\"Recursive call to fatal_error. Inner error was:\");console.error(e);return}if(\"number\"===typeof e)e=convertCppException(e);else e=ensureCaughtObjectIsError(e);e.pyodide_fatal_error=!0;fatal_error_occurred=!0;console.error(\"Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers.\");console.error(\"The cause of the fatal error was:\");if(API.inTestHoist){console.error(e.toString());console.error(e.stack)}else console.error(e);try{API.dump_traceback();for(let key of Object.keys(API.public_api)){if(key.startsWith(\"_\")||\"version\"===key)continue;Object.defineProperty(API.public_api,key,{enumerable:!0,configurable:!0,get:()=>{throw new Error(\"Pyodide already fatally failed and can no longer be used.\")}})}if(API.on_fatal)API.on_fatal(e)}catch(err2){console.error(\"Another error occurred while handling the fatal error:\");console.error(err2)}throw e};var CppException=class extends Error{constructor(ty,msg){super(msg);this.ty=ty}};Object.defineProperty(CppException.prototype,\"name\",{get(){return`${this.constructor.name} ${this.ty}`}});function cppExceptionInfo(ptr){const base_exception_type=Module._exc_type();const ei=new Module.ExceptionInfo(ptr);const caught_exception_type=ei.get_type();const stackTop=Module.stackSave();const exceptionThrowBuf=Module.stackAlloc(4);Module.HEAP32[exceptionThrowBuf/4]=ptr;const exc_type_name=Module.demangle(Module.UTF8ToString(Module._exc_typename(caught_exception_type)));const is_exception_subclass=!!Module.___cxa_can_catch(base_exception_type,caught_exception_type,exceptionThrowBuf);const adjusted_ptr=Module.HEAP32[exceptionThrowBuf/4];Module.stackRestore(stackTop);return[exc_type_name,is_exception_subclass,adjusted_ptr]}function convertCppException(ptr){const[exc_type_name,is_exception_subclass,adjusted_ptr]=cppExceptionInfo(ptr);let msg;if(is_exception_subclass){const msgPtr=Module._exc_what(adjusted_ptr);msg=Module.UTF8ToString(msgPtr)}else msg=`The exception is an object of type ${exc_type_name} at address ${ptr} which does not inherit from std::exception`;return new CppException(exc_type_name,msg)}Tests.convertCppException=convertCppException;function isPyodideFrame(frame){const fileName=frame.fileName||\"\";if(fileName.includes(\"pyodide.asm\"))return!0;if(fileName.includes(\"wasm-function\"))return!0;if(!fileName.includes(\"pyodide.js\"))return!1;let funcName=frame.functionName||\"\";if(funcName.startsWith(\"Object.\"))funcName=funcName.slice(\"Object.\".length);if(funcName in API.public_api&&\"PythonError\"!==funcName){frame.functionName=funcName;return!1}return!0}function isErrorStart(frame){if(!isPyodideFrame(frame))return!1;const funcName=frame.functionName;return\"PythonError\"===funcName||\"new_error\"===funcName}Module.handle_js_error=function(e){if(e&&e.pyodide_fatal_error)throw e;if(e instanceof Module._PropagatePythonError)return;let restored_error=!1;if(e instanceof API.PythonError)restored_error=Module._restore_sys_last_exception(e.__error_address);let stack;let weirdCatch;try{stack=import_error_stack_parser.default.parse(e)}catch(_){weirdCatch=!0}if(weirdCatch)e=ensureCaughtObjectIsError(e);if(!restored_error){let eidx=Hiwire.new_value(e);let err=Module._JsProxy_create(eidx);Module._set_error(err);Module._Py_DecRef(err);Hiwire.decref(eidx)}if(weirdCatch)return;if(isErrorStart(stack[0]))while(isPyodideFrame(stack[0]))stack.shift();for(const frame of stack){if(isPyodideFrame(frame))break;const funcnameAddr=Module.stringToNewUTF8(frame.functionName||\"???\");const fileNameAddr=Module.stringToNewUTF8(frame.fileName||\"???.js\");Module.__PyTraceback_Add(funcnameAddr,fileNameAddr,frame.lineNumber);Module._free(funcnameAddr);Module._free(fileNameAddr)}};var PythonError=class extends Error{constructor(message,error_address){const oldLimit=Error.stackTraceLimit;Error.stackTraceLimit=1/0;super(message);Error.stackTraceLimit=oldLimit;this.__error_address=error_address}};Object.defineProperty(PythonError.prototype,\"name\",{value:PythonError.name});API.PythonError=PythonError;var _PropagatePythonError=class extends Error{constructor(){API.fail_test=!0;super(\"If you are seeing this message, an internal Pyodide error has occurred. Please report it to the Pyodide maintainers.\")}};Object.defineProperty(_PropagatePythonError.prototype,\"name\",{value:_PropagatePythonError.name});Module._PropagatePythonError=_PropagatePythonError;var pyodide_py;var globals;var version=\"\";var runPythonPositionalGlobalsDeprecationWarned=!1;function runPython(code,options={}){if(API.isPyProxy(options)){options={globals:options};if(!runPythonPositionalGlobalsDeprecationWarned){console.warn(\"Passing a PyProxy as the second argument to runPython is deprecated and will be removed in v0.21. Use 'runPython(code, {globals : some_dict})' instead.\");runPythonPositionalGlobalsDeprecationWarned=!0}}if(!options.globals)options.globals=API.globals;return API.pyodide_py.eval_code(code,options.globals)}API.runPython=runPython;async function loadPackagesFromImports(code,messageCallback,errorCallback){let pyimports=API.pyodide_py.find_imports(code);let imports;try{imports=pyimports.toJs()}finally{pyimports.destroy()}if(0===imports.length)return;let packageNames=API._import_name_to_package_name;let packages=new Set;for(let name of imports)if(packageNames.has(name))packages.add(packageNames.get(name));if(packages.size)await loadPackage(Array.from(packages),messageCallback,errorCallback)}async function runPythonAsync(code,options={}){if(API.isPyProxy(options)){options={globals:options};if(!runPythonPositionalGlobalsDeprecationWarned){console.warn(\"Passing a PyProxy as the second argument to runPythonAsync is deprecated and will be removed in v0.21. Use 'runPythonAsync(code, {globals : some_dict})' instead.\");runPythonPositionalGlobalsDeprecationWarned=!0}}if(!options.globals)options.globals=API.globals;return await API.pyodide_py.eval_code_async(code,options.globals)}API.runPythonAsync=runPythonAsync;function registerJsModule(name,module){API.pyodide_py.register_js_module(name,module)}function registerComlink(Comlink){API._Comlink=Comlink}function unregisterJsModule(name){API.pyodide_py.unregister_js_module(name)}function toPy(obj,{depth,defaultConverter}={depth:-1}){switch(typeof obj){case\"string\":case\"number\":case\"boolean\":case\"bigint\":case\"undefined\":return obj}if(!obj||API.isPyProxy(obj))return obj;let obj_id=0;let py_result=0;let result=0;try{obj_id=Hiwire.new_value(obj);try{py_result=Module.js2python_convert(obj_id,{depth,defaultConverter})}catch(e){if(e instanceof Module._PropagatePythonError)Module._pythonexc2js();throw e}if(Module._JsProxy_Check(py_result))return obj;result=Module._python2js(py_result);if(0===result)Module._pythonexc2js()}finally{Hiwire.decref(obj_id);Module._Py_DecRef(py_result)}return Hiwire.pop_value(result)}function pyimport(mod_name){return API.importlib.import_module(mod_name)}var unpackArchivePositionalExtractDirDeprecationWarned=!1;function unpackArchive(buffer,format,options={}){if(\"string\"===typeof options){if(!unpackArchivePositionalExtractDirDeprecationWarned){console.warn(\"Passing a string as the third argument to unpackArchive is deprecated and will be removed in v0.21. Instead use { extract_dir : 'some_path' }\");unpackArchivePositionalExtractDirDeprecationWarned=!0}options={extractDir:options}}let extract_dir=options.extractDir;API.package_loader.unpack_buffer.callKwargs({buffer,format,extract_dir})}API.saveState=()=>API.pyodide_py._state.save_state();API.restoreState=state=>API.pyodide_py._state.restore_state(state);function setInterruptBuffer(interrupt_buffer){Module.HEAP8[Module._Py_EMSCRIPTEN_SIGNAL_HANDLING]=!!interrupt_buffer;Module.Py_EmscriptenSignalBuffer=interrupt_buffer}function checkInterrupt(){if(Module.__PyErr_CheckSignals())Module._pythonexc2js()}var FS;function makePublicAPI(){FS=Module.FS;let namespace={globals,FS,pyodide_py,version,loadPackage,loadPackagesFromImports,loadedPackages,isPyProxy,runPython,runPythonAsync,registerJsModule,unregisterJsModule,setInterruptBuffer,checkInterrupt,toPy,pyimport,unpackArchive,registerComlink,PythonError,PyBuffer,_module:Module,_api:API};API.public_api=namespace;return namespace}var runPythonInternal_dict;API.runPythonInternal=function(code){return API._pyodide._base.eval_code(code,runPythonInternal_dict)};function wrapPythonGlobals(globals_dict,builtins_dict){return new Proxy(globals_dict,{get(target,symbol){if(\"get\"===symbol)return key=>{let result=target.get(key);if(void 0===result)result=builtins_dict.get(key);return result};if(\"has\"===symbol)return key=>target.has(key)||builtins_dict.has(key);return Reflect.get(target,symbol)}})}function unpackPyodidePy(pyodide_py_tar){const fileName=\"/pyodide_py.tar\";let stream=Module.FS.open(fileName,\"w\");Module.FS.write(stream,pyodide_py_tar,0,pyodide_py_tar.byteLength,void 0,!0);Module.FS.close(stream);const code_ptr=Module.stringToNewUTF8(`\\nfrom sys import version_info\\npyversion = f\"python{version_info.major}.{version_info.minor}\"\\nimport shutil\\nshutil.unpack_archive(\"/pyodide_py.tar\", f\"/lib/{pyversion}/site-packages/\")\\ndel shutil\\nimport importlib\\nimportlib.invalidate_caches()\\ndel importlib\\n    `);let errcode=Module._PyRun_SimpleString(code_ptr);if(errcode)throw new Error(\"OOPS!\");Module._free(code_ptr);Module.FS.unlink(fileName)}function finalizeBootstrap(config){runPythonInternal_dict=API._pyodide._base.eval_code(\"{}\");API.importlib=API.runPythonInternal(\"import importlib; importlib\");let import_module6=API.importlib.import_module;API.sys=import_module6(\"sys\");API.sys.path.insert(0,config.homedir);let globals2=API.runPythonInternal(\"import __main__; __main__.__dict__\");let builtins=API.runPythonInternal(\"import builtins; builtins.__dict__\");API.globals=wrapPythonGlobals(globals2,builtins);let importhook=API._pyodide._importhook;importhook.register_js_finder();importhook.register_js_module(\"js\",config.jsglobals);let pyodide=makePublicAPI();importhook.register_js_module(\"pyodide_js\",pyodide);API.pyodide_py=import_module6(\"pyodide\");API.package_loader=import_module6(\"pyodide._package_loader\");API.version=API.pyodide_py.__version__;pyodide.pyodide_py=API.pyodide_py;pyodide.version=API.version;pyodide.globals=API.globals;return pyodide}function calculateIndexURL(){let err;try{throw new Error}catch(e){err=e}const fileName=import_error_stack_parser2.default.parse(err)[0].fileName;return fileName.slice(0,fileName.lastIndexOf(\"/\"))}async function loadPyodide(options={}){if(loadPyodide.inProgress)throw new Error(\"Pyodide is already loading.\");if(!options.indexURL)options.indexURL=calculateIndexURL();loadPyodide.inProgress=!0;const default_config={fullStdLib:!0,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,homedir:\"/home/pyodide\"};let config=Object.assign(default_config,options);if(!config.indexURL.endsWith(\"/\"))config.indexURL+=\"/\";await initNodeModules();let packageIndexReady=initializePackageIndex(config.indexURL);let pyodide_py_tar_promise=_loadBinaryFile(config.indexURL,\"pyodide_py.tar\");setStandardStreams(config.stdin,config.stdout,config.stderr);setHomeDirectory(config.homedir);let moduleLoaded=new Promise((r=>Module.postRun=r));Module.locateFile=path=>config.indexURL+path;const scriptSrc=`${config.indexURL}pyodide.asm.js`;await loadScript(scriptSrc);await _createPyodideModule(Module);await moduleLoaded;Module.locateFile=path=>{throw new Error(\"Didn't expect to load any more file_packager files!\")};const pyodide_py_tar=await pyodide_py_tar_promise;unpackPyodidePy(pyodide_py_tar);Module._pyodide_init();let pyodide=finalizeBootstrap(config);await packageIndexReady;if(config.fullStdLib)await loadPackage([\"distutils\"]);pyodide.runPython(\"print('Python initialization complete')\");return pyodide}const DIR_MODE=16895;const FILE_MODE=33206;const SEEK_CUR=1;const SEEK_END=2;const encoder=new TextEncoder;const decoder=new TextDecoder(\"utf-8\");class EMFS{constructor(FS,ERRNO_CODES,CUSTOM_FS){this.node_ops={};this.stream_ops={};this.FS=FS;this.ERRNO_CODES=ERRNO_CODES;this.CUSTOM_FS=CUSTOM_FS;this.node_ops.getattr=node=>({dev:1,ino:node.id,mode:node.mode,nlink:1,uid:0,gid:0,rdev:void 0,size:0,atime:new Date(node.timestamp),mtime:new Date(node.timestamp),ctime:new Date(node.timestamp),blksize:4096,blocks:0});this.node_ops.setattr=(node,attr)=>{if(void 0!==attr.mode)node.mode=attr.mode;if(void 0!==attr.timestamp)node.timestamp=attr.timestamp};this.node_ops.lookup=(parent,name)=>{const path=realPath(parent,name);const result=this.CUSTOM_FS.get({path});if(!result.ok)throw this.FS.genericErrors[this.ERRNO_CODES[\"ENOENT\"]];return this.createNode(parent,name,null===result.data?DIR_MODE:FILE_MODE)};this.node_ops.mknod=(parent,name,mode,dev)=>{const node=this.createNode(parent,name,mode,dev);const path=realPath(node);if(this.FS.isDir(node.mode))this.convertSyncResult(this.CUSTOM_FS.put({path,value:null}));else this.convertSyncResult(this.CUSTOM_FS.put({path,value:\"\"}));return node};this.node_ops.rename=(oldNode,newDir,newName)=>{const oldPath=realPath(oldNode);const newPath=realPath(newDir,newName);this.convertSyncResult(this.CUSTOM_FS.move({path:oldPath,newPath}));oldNode.name=newName};this.node_ops.unlink=(parent,name)=>{const path=realPath(parent,name);this.convertSyncResult(this.CUSTOM_FS.delete({path}))};this.node_ops.rmdir=(parent,name)=>{const path=realPath(parent,name);this.convertSyncResult(this.CUSTOM_FS.delete({path}))};this.node_ops.readdir=node=>{const path=realPath(node);let result=this.convertSyncResult(this.CUSTOM_FS.listDirectory({path}));if(!result.includes(\".\"))result.push(\".\");if(!result.includes(\"..\"))result.push(\"..\");return result};this.node_ops.symlink=(parent,newName,oldPath)=>{throw new FS.ErrnoError(this.ERRNO_CODES[\"EPERM\"])};this.node_ops.readlink=node=>{throw new FS.ErrnoError(this.ERRNO_CODES[\"EPERM\"])};this.stream_ops.open=stream=>{const path=realPath(stream.node);if(FS.isFile(stream.node.mode)){const result=this.convertSyncResult(this.CUSTOM_FS.get({path}));if(null===result)return;stream.fileData=encoder.encode(result)}};this.stream_ops.close=stream=>{const path=realPath(stream.node);if(FS.isFile(stream.node.mode)&&stream.fileData){const text=decoder.decode(stream.fileData);stream.fileData=void 0;this.convertSyncResult(this.CUSTOM_FS.put({path,value:text}))}};this.stream_ops.read=(stream,buffer,offset,length,position)=>{if(length<=0)return 0;const size=Math.min((stream.fileData?.length??0)-position,length);try{buffer.set(stream.fileData.subarray(position,position+size),offset)}catch(e){throw new FS.ErrnoError(this.ERRNO_CODES[\"EPERM\"])}return size};this.stream_ops.write=(stream,buffer,offset,length,position)=>{if(length<=0)return 0;stream.node.timestamp=Date.now();try{if(position+length>(stream.fileData?.length??0)){const oldData=stream.fileData??new Uint8Array;stream.fileData=new Uint8Array(position+length);stream.fileData.set(oldData)}stream.fileData.set(buffer.subarray(offset,offset+length),position);return length}catch(e){throw new FS.ErrnoError(this.ERRNO_CODES[\"EPERM\"])}};this.stream_ops.llseek=(stream,offset,whence)=>{let position=offset;if(whence===SEEK_CUR)position+=stream.position;else if(whence===SEEK_END)if(this.FS.isFile(stream.node.mode))try{position+=stream.fileData.length}catch(e){throw new FS.ErrnoError(this.ERRNO_CODES[\"EPERM\"])}if(position<0)throw new FS.ErrnoError(this.ERRNO_CODES[\"EINVAL\"]);return position}}mount(mount){return this.createNode(null,\"/\",DIR_MODE,0)}createNode(parent,name,mode,dev){if(!this.FS.isDir(mode)&&!this.FS.isFile(mode))throw new this.FS.ErrnoError(this.ERRNO_CODES[\"EINVAL\"]);let node=this.FS.createNode(parent,name,mode);node.node_ops=this.node_ops;node.stream_ops=this.stream_ops;return node}convertSyncResult(result){if(result.ok)return result.data;else{let error;if(404===result.status)error=new this.FS.ErrnoError(this.ERRNO_CODES[\"ENOENT\"]);else if(400===result.status)error=new this.FS.ErrnoError(this.ERRNO_CODES[\"EINVAL\"]);else error=new this.FS.ErrnoError(this.ERRNO_CODES[\"EPERM\"]);error.cause=result.error;throw error}}}function realPath(node,fileName){const parts=[];while(node.parent!==node){parts.push(node.name);node=node.parent}parts.push(node.mount.opts.root);parts.reverse();if(void 0!==fileName&&null!==fileName)parts.push(fileName);return parts.join(\"/\")}function patchMatplotlib(module){module.runPython(`import os\\nos.environ[\"MPLBACKEND\"] = \"AGG\"`);module.runPython(`import matplotlib\\nimport matplotlib.pyplot\\nfrom pyodide import create_proxy\\nfrom js import drawPyodideCanvas\\n\\ndef show():\\n  canvas = matplotlib.pyplot.gcf().canvas\\n  canvas.draw()\\n  pixels = canvas.buffer_rgba().tobytes()\\n  width, height = canvas.get_width_height()\\n  drawPyodideCanvas(pixels, width, height)\\n  return None\\n\\n# This is probably the better approach, but the object passing stuff doesn't support typed arrays yet\\ndef showUint8():\\n  pixels_proxy = None\\n  pixels_buf = None\\n  try:\\n    canvas = matplotlib.pyplot.gcf().canvas\\n    canvas.draw()\\n    pixels = canvas.buffer_rgba().tobytes()\\n    pixels_proxy = create_proxy(pixels)\\n    pixels_buf = pixels_proxy.getBuffer(\"u8clamped\")\\n    drawPyodideCanvas(pixels)\\n  finally:\\n    if pixels_proxy:\\n      pixels_proxy.destroy()\\n    if pixels_buf:\\n      pixels_buf.release()\\n\\nmatplotlib.pyplot.show = show\\n`)}globalThis.loadPyodide=loadPyodide;const manager=globalThis?.manager??globalThis.manager;class PyodideKernel{constructor(options){this.proxiedDrawCanvas=()=>{};this.pyodide=void 0;this.kernelId=options.id;this.options=options}async init(){this.proxiedGlobalThis=this.proxyGlobalThis(this.options.globalThisId);this.proxiedDrawCanvas=manager.proxy&&this.options.drawCanvasId?manager.proxy.getObjectProxy(this.options.drawCanvasId):()=>{};globalThis.drawPyodideCanvas=(pixels,width,height)=>{if(pixels.toJs)pixels=pixels.toJs();if(pixels instanceof Uint8ClampedArray||pixels instanceof Uint8Array)pixels=Array.from(pixels);this.proxiedDrawCanvas.apply({},[pixels,width,height])};let artifactsURL=this.options.artifactsUrl||\"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/\";if(!artifactsURL.endsWith(\"/\"))artifactsURL+=\"/\";if(!manager.proxy&&!this.options.isMainThread)console.warn(\"Missing object proxy, some Pyodide functionality will be restricted\");this.pyodide=await loadPyodide({indexURL:artifactsURL,stdin:this.createStdin(),print:text=>{manager.log(this,text+\"\")},printErr:text=>{manager.logError(this,text+\"\")},fullStdLib:!1});if(!this.pyodide)throw new Error(\"Pyodide is undefined unexpectedly\");globalThis.pyodide=this.pyodide;if(manager.syncFs){const FS=this.pyodide._module.FS;try{FS.mkdir(\"/mnt\")}catch(e){console.warn(e)}try{FS.mkdir(\"/mnt/shared\")}catch(e){console.warn(e)}try{FS.mount(new EMFS(FS,this.pyodide._module.ERRNO_CODES,manager.syncFs),{},\"/mnt/shared\");this.pyodide.runPython('import os\\nos.chdir(\"/mnt/shared\")')}catch(e){console.warn(e)}}if(this.proxiedGlobalThis)this.pyodide.registerJsModule(\"js\",this.proxiedGlobalThis)}async runCode(code){if(!this.pyodide){console.warn(\"Worker has not yet been initialized\");return}globalThis.pyodide=this.pyodide;let wasAlreadyLoaded;let msgBuffer=[];await this.pyodide.loadPackagesFromImports(code,(msg=>{if(!0===wasAlreadyLoaded)return;if(msg.match(/Loaded.*\\smatplotlib/)){console.debug(\"Hooking matplotlib output to Starboard\");patchMatplotlib(this.pyodide)}if(!1===wasAlreadyLoaded){if(msg.match(/already loaded from default channel$/))return;console.debug(msg)}if(void 0===wasAlreadyLoaded){if(msg.match(/already loaded from default channel$/)){wasAlreadyLoaded=!0;return}if(msg.match(/^Loading [a-z\\-, ]*/)){wasAlreadyLoaded=!1;msgBuffer.forEach((m=>console.debug(m)));console.debug(msg)}}}));let result=await this.pyodide.runPythonAsync(code).catch((error=>error));let displayType;if(this.pyodide.isPyProxy(result))if(void 0!==result._repr_html_){result=result._repr_html_();displayType=\"html\"}else if(void 0!==result._repr_latex_){result=result._repr_latex_();displayType=\"latex\"}else{result=result.__str__();displayType=\"default\"}else if(result instanceof this.pyodide.PythonError)result+=\"\";this.destroyToJsResult(result);return{display:displayType,value:result}}customMessage(message){return}createStdin(){const encoder=new TextEncoder;let input=new Uint8Array;let inputIndex=-1;function stdin(){if(-1===inputIndex){const text=manager.input();input=encoder.encode(text+(text.endsWith(\"\\n\")?\"\":\"\\n\"));inputIndex=0}if(inputIndex<input.length){let character=input[inputIndex];inputIndex++;return character}else{inputIndex=-1;return null}}return stdin}proxyGlobalThis(id){const noProxy=new Set([\"location\",\"self\",\"importScripts\",\"addEventListener\",\"removeEventListener\",\"caches\",\"crypto\",\"indexedDB\",\"isSecureContext\",\"origin\",\"performance\",\"atob\",\"btoa\",\"clearInterval\",\"clearTimeout\",\"createImageBitmap\",\"fetch\",\"queueMicrotask\",\"setInterval\",\"setTimeout\",\"$$\",\"pyodide\",\"__name__\",\"__package__\",\"__path__\",\"__loader__\",\"stack\",\"get\",\"set\",\"has\",\"size\",\"length\",\"then\",\"includes\",\"next\",Symbol.iterator,\"drawPyodideCanvas\"]);return manager.proxy&&id?manager.proxy.wrapExcluderProxy(manager.proxy.getObjectProxy(id),globalThis,noProxy):globalThis}destroyToJsResult(x){if(!this.pyodide)return;if(!x)return;if(this.pyodide.isPyProxy(x)){x.destroy();return}}}globalThis.PyodideKernel=PyodideKernel;\n";

// @ts-ignore
let setupStatus = "unstarted";
let loadingStatus = "unstarted";
let pyodideLoadSingleton = undefined;
let mainThreadPyodideRunner = undefined;
let kernelManager;
let objectProxyHost = null;
const runningCode = new Map();
// A global value that is the current HTML element to attach matplotlib figures to..
// perhaps this can be done in a cleaner way.
let CURRENT_HTML_OUTPUT_ELEMENT = undefined;
function setGlobalPythonOutputElement(el) {
    CURRENT_HTML_OUTPUT_ELEMENT = el;
}
function drawCanvas(pixels, width, height) {
    const elem = document.createElement("div");
    if (!CURRENT_HTML_OUTPUT_ELEMENT) {
        console.log("HTML output from pyodide but nowhere to put it, will append to body instead.");
        document.querySelector("body").appendChild(elem);
    }
    else {
        CURRENT_HTML_OUTPUT_ELEMENT.appendChild(elem);
    }
    const image = new ImageData(new Uint8ClampedArray(pixels), width, height);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.warn("Failed to aquire canvas context");
        return;
    }
    ctx.putImageData(image, 0, 0);
    CURRENT_HTML_OUTPUT_ELEMENT?.appendChild(canvas);
}
/**
 * Initial setup for Python support, this includes only the synchronous parts (such as adding a stylesheet used for the output).
 * @returns
 */
function setupPythonSupport() {
    if (setupStatus !== "unstarted") {
        return;
    }
    setupStatus = "started";
    const styleSheet = document.createElement("style");
    styleSheet.id = "pyodide-styles";
    styleSheet.innerHTML = css;
    document.head.appendChild(styleSheet);
    setupStatus = "completed";
}
function getAsyncMemory() {
    if ("SharedArrayBuffer" in globalThis &&
        "Atomics" in globalThis &&
        globalThis["crossOriginIsolated"] !== false) {
        return new AsyncMemory();
    }
    else {
        return null;
    }
}
async function convertResult(data, runtime) {
    if (data.display === "default") {
        return data.value;
    }
    else if (data.display === "html") {
        let div = document.createElement("div");
        div.className = "rendered_html cell-output-html";
        div.appendChild(new DOMParser().parseFromString(data.value, "text/html").body.firstChild);
        return div;
    }
    else if (data.display === "latex" && runtime) {
        let div = document.createElement("div");
        div.className = "rendered_html cell-output-html";
        const value = data.value;
        const katex = await runtime.exports.libraries.async.KaTeX();
        katex.render(value.replace(/^(\$?\$?)([^]*)\1$/, "$2"), div, {
            throwOnError: false,
            errorColor: " #cc0000",
            displayMode: true,
        });
        return div;
    }
    else {
        return data.value;
    }
}
function loadKernelManager(runtime) {
    // TODO: This part should be moved to starboard
    let kernelUrl = undefined;
    if (kernelUrl === undefined) {
        const blob = new Blob([kernelWorkerScriptSource], { type: "text/javascript" });
        kernelUrl = URL.createObjectURL(blob);
    }
    const worker = new Worker(kernelUrl);
    // Since all kernels are running in the same worker, they might as well use the same async memory and object proxy
    const asyncMemory = getAsyncMemory();
    const objectProxyHost = asyncMemory ? new ObjectProxyHost(asyncMemory) : null;
    const getInputId = objectProxyHost?.registerRootObject(() => {
        return prompt();
    });
    // TODO: Remove 'as any' once the starboard typings get updated
    const filesystemId = runtime?.internal?.fs
        ? objectProxyHost?.registerRootObject(runtime?.internal?.fs)
        : undefined;
    worker.addEventListener("message", (ev) => {
        if (!ev.data) {
            console.warn("Unexpected message from kernel manager", ev);
            return;
        }
        const data = ev.data;
        if (data.type === "proxy_reflect" ||
            data.type === "proxy_shared_memory" ||
            data.type === "proxy_print_object" ||
            data.type === "proxy_promise") {
            if (asyncMemory && objectProxyHost) {
                objectProxyHost.handleProxyMessage(data, asyncMemory);
            }
        }
    });
    worker.postMessage({
        type: "initialize",
        asyncMemory: asyncMemory
            ? {
                lockBuffer: asyncMemory.sharedLock,
                dataBuffer: asyncMemory.sharedMemory,
            }
            : undefined,
        filesystemId: filesystemId,
        getInputId: getInputId,
    });
    return {
        kernelManager: worker,
        objectProxyHost: objectProxyHost,
    };
}
async function loadPyodide(runtime) {
    if (pyodideLoadSingleton)
        return pyodideLoadSingleton;
    const kernelManagerResult = loadKernelManager(runtime);
    kernelManager = kernelManagerResult.kernelManager;
    objectProxyHost = kernelManagerResult.objectProxyHost;
    const globalThisId = objectProxyHost?.registerRootObject(globalThis);
    const drawCanvasId = objectProxyHost?.registerRootObject(drawCanvas);
    // Pyodide worker loading
    loadingStatus = "loading";
    /** Pyodide Kernel id */
    const kernelId = nanoid();
    let kernelSource = getPluginOpts().workerSource;
    if (kernelSource === undefined) {
        kernelSource = {
            type: "code",
            code: pyodideWorkerScriptSource,
        };
    }
    const initOptions = {
        type: "import_kernel",
        className: "PyodideKernel",
        kernelId: kernelId,
        options: {
            artifactsUrl: getPluginOpts().artifactsUrl || window.pyodideArtifactsUrl,
            globalThisId: globalThisId,
            drawCanvasId: drawCanvasId,
        },
        source: kernelSource,
    };
    if (getPluginOpts().runInMainThread) {
        pyodideLoadSingleton = Promise.resolve("");
        mainThreadPyodideRunner = await mainThreadPyodide(initOptions, drawCanvas);
    }
    else {
        pyodideLoadSingleton = new Promise((resolve, reject) => {
            // Only the resolve case is handled for now
            function handleInitMessage(ev) {
                if (!ev.data)
                    return;
                const data = ev.data;
                if (data.type === "kernel_initialized" && data.kernelId === kernelId) {
                    kernelManager.removeEventListener("message", handleInitMessage);
                    resolve(kernelId);
                }
            }
            kernelManager.addEventListener("message", handleInitMessage);
        });
        kernelManager.addEventListener("message", (e) => {
            if (!e.data)
                return;
            const data = e.data;
            switch (data.type) {
                case "result": {
                    if (data.kernelId !== kernelId)
                        break;
                    const callback = runningCode.get(data.id);
                    if (!callback) {
                        console.warn("Missing Python callback");
                    }
                    else {
                        callback(data.value);
                    }
                    objectProxyHost?.clearTemporary();
                    break;
                }
                case "console": {
                    if (data.kernelId !== kernelId)
                        break;
                    console?.[data.method](...data.data);
                    break;
                }
                case "error": {
                    if (data.kernelId !== kernelId)
                        break;
                    console.error(data.error);
                }
                case "custom": {
                    if (data.kernelId !== kernelId)
                        break;
                    // No custom messages so far
                    break;
                }
                // Ignore
                case "kernel_initialized":
                case "proxy_reflect":
                case "proxy_shared_memory":
                case "proxy_print_object":
                case "proxy_promise": {
                    break;
                }
                default: {
                    assertUnreachable();
                }
            }
        });
        kernelManager.postMessage(initOptions);
    }
    await pyodideLoadSingleton;
    loadingStatus = "ready";
    return pyodideLoadSingleton;
}
function getPyodideLoadingStatus() {
    return loadingStatus;
}
async function runPythonAsync(code, runtime) {
    if (!pyodideLoadSingleton)
        return;
    if (getPluginOpts().runInMainThread) {
        if (mainThreadPyodideRunner) {
            const result = await mainThreadPyodideRunner.runCode(code);
            return await convertResult(result, runtime);
        }
        else {
            console.error("Missing main thread pyodide");
            return null;
        }
    }
    else {
        const kernelId = await pyodideLoadSingleton;
        const id = nanoid();
        return new Promise((resolve, reject) => {
            runningCode.set(id, (result) => {
                convertResult(result, runtime).then((v) => resolve(v));
                runningCode.delete(id);
            });
            try {
                kernelManager.postMessage({
                    type: "run",
                    kernelId: kernelId,
                    id: id,
                    code: code,
                });
            }
            catch (e) {
                console.warn(e, code);
                reject(e);
                runningCode.delete(id);
            }
        });
    }
}

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
/**
 * Creates a promise with the resolve and reject function outside of it, useful for tasks that may complete at any time.
 * Based on MIT licensed https://github.com/arikw/flat-promise, with typings added by gzuidhof.
 * @param executor
 */
function flatPromise(executor) {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
        // Is this any cast necessary?
        resolve = res;
        reject = rej;
    });
    if (executor) {
        // This is actually valid.. as in the spec the function above the Promise gets executed immediately.
        executor(resolve, reject);
    }
    return { promise, resolve, reject };
}

// This is used as a mutex to prevent double execution.
let pythonRunChain = Promise.resolve();
const isPyProxy = function (jsobj) {
    return !!jsobj && jsobj.$$ !== undefined && jsobj.$$.type === "PyProxy";
};
async function runStarboardPython(runtime, codeToRun, renderOutputIntoElement) {
    setupPythonSupport();
    const pyoPromise = loadPyodide(runtime);
    const done = flatPromise();
    const alreadyRunningPythonCodeDone = pythonRunChain.catch((_) => 0);
    pythonRunChain = pythonRunChain.finally(() => done.promise);
    // await any already executing python cells.
    await alreadyRunningPythonCodeDone;
    const outputElement = new runtime.exports.elements.ConsoleOutputElement();
    outputElement.hook(runtime.consoleCatcher);
    const htmlOutput = document.createElement("div");
    const lit = runtime.exports.libraries.lit;
    const html = lit.html;
    lit.render(html `${outputElement}${htmlOutput}`, renderOutputIntoElement);
    setGlobalPythonOutputElement(htmlOutput);
    globalThis.pyodide = await pyoPromise;
    let val = undefined;
    let error = undefined;
    try {
        pythonRunChain = runPythonAsync(codeToRun, runtime);
        val = await pythonRunChain;
        if (val !== undefined) {
            // The result can be multiple types
            if (val instanceof HTMLElement) { // A plain HTML element
                htmlOutput.appendChild(val);
            }
            else if (typeof val === "object" && val.name === "PythonError" && val.__error_address) { // A python error
                error = val;
                outputElement.addEntry({
                    method: "error",
                    data: [`${val.toString()}`],
                });
            }
            else if (isPyProxy(val)) { // Something that is proxied
                let hadHTMLOutput = false;
                if (val._repr_html_ !== undefined) { // Has a HTML representation (e.g. a Pandas table)
                    let result = val._repr_html_();
                    if (typeof result === "string") {
                        let div = document.createElement("div");
                        div.className = "rendered_html cell-output-html";
                        div.appendChild(new DOMParser().parseFromString(result, "text/html").body.firstChild);
                        htmlOutput.appendChild(div);
                        hadHTMLOutput = true;
                    }
                }
                else if (val._repr_latex_ !== undefined) { // It has a LateX representation (e.g. Sympy output)
                    let result = val._repr_latex_();
                    if (typeof result === "string") {
                        let div = document.createElement("div");
                        div.className = "rendered_html cell-output-html";
                        const katex = await runtime.exports.libraries.async.KaTeX();
                        if (result.startsWith("$$")) {
                            result = result.substr(2, result.length - 3);
                            katex.render(result, div, {
                                throwOnError: false,
                                errorColor: " #cc0000",
                                displayMode: true,
                            });
                        }
                        else if (result.startsWith("$")) {
                            result = result.substr(1, result.length - 2);
                            katex.render(result, div, {
                                throwOnError: false,
                                errorColor: " #cc0000",
                                displayMode: false,
                            });
                        }
                        htmlOutput.appendChild(div);
                        hadHTMLOutput = true;
                    }
                }
                if (!hadHTMLOutput) {
                    outputElement.addEntry({
                        method: "result",
                        data: [val],
                    });
                }
            }
            else {
                outputElement.addEntry({
                    method: "result",
                    data: [val],
                });
            }
        }
    }
    catch (e) {
        error = e;
        outputElement.addEntry({
            method: "error",
            data: [`${e.name} ${e.message}`],
        });
    }
    // Not entirely sure this has to be awaited, is any output delayed by a tick from pyodide?
    await outputElement.unhookAfterOneTick(runtime.consoleCatcher);
    done.resolve();
    if (error !== undefined) {
        throw error;
    }
    return val;
}

function registerPython(runtime) {
    setupPythonSupport();
    /* These globals are exposed by Starboard Notebook. We can re-use them so we don't have to bundle them again. */
    const lit = runtime.exports.libraries.lit;
    const StarboardTextEditor = runtime.exports.elements.StarboardTextEditor;
    const cellControlsTemplate = runtime.exports.templates.cellControls;
    const PYTHON_CELL_TYPE_DEFINITION = {
        name: "Python",
        cellType: ["python", "python3", "ipython3", "pypy", "py"],
        createHandler: (cell, runtime) => new PythonCellHandler(cell, runtime),
    };
    class PythonCellHandler {
        constructor(cell, runtime) {
            this.lastRunId = 0;
            this.isCurrentlyRunning = false;
            this.isCurrentlyLoadingPyodide = false;
            this.cell = cell;
            this.runtime = runtime;
        }
        getControls() {
            const icon = this.isCurrentlyRunning ? "bi bi-hourglass" : "bi bi-play-circle";
            const tooltip = this.isCurrentlyRunning ? "Cell is running" : "Run Cell";
            const runButton = {
                icon,
                tooltip,
                callback: () => this.runtime.controls.runCell({ id: this.cell.id }),
            };
            let buttons = [runButton];
            if (this.isCurrentlyLoadingPyodide) {
                buttons = [
                    {
                        icon: "bi bi-cloud-arrow-down",
                        tooltip: "Downloading and initializing Pyodide",
                        callback: () => {
                            alert("Loading Python runtime. It's 5 to 15 MB in size, so it may take a while. It will be cached for next time.");
                        },
                    },
                    ...buttons,
                ];
            }
            return cellControlsTemplate({ buttons });
        }
        attach(params) {
            this.elements = params.elements;
            const topElement = this.elements.topElement;
            lit.render(this.getControls(), this.elements.topControlsElement);
            this.editor = new StarboardTextEditor(this.cell, this.runtime, { language: "python" });
            topElement.appendChild(this.editor);
        }
        async run() {
            const codeToRun = this.cell.textContent;
            this.lastRunId++;
            const currentRunId = this.lastRunId;
            this.isCurrentlyRunning = true;
            if (getPyodideLoadingStatus() !== "ready") {
                this.isCurrentlyLoadingPyodide = true;
            }
            lit.render(this.getControls(), this.elements.topControlsElement);
            try {
                const val = await runStarboardPython(this.runtime, codeToRun, this.elements.bottomElement);
                this.isCurrentlyLoadingPyodide = false;
                if (this.lastRunId === currentRunId) {
                    this.isCurrentlyRunning = false;
                    lit.render(this.getControls(), this.elements.topControlsElement);
                }
                return val;
            }
            catch (e) {
                this.isCurrentlyLoadingPyodide = false;
                if (this.lastRunId === currentRunId) {
                    this.isCurrentlyRunning = false;
                    lit.render(this.getControls(), this.elements.topControlsElement);
                }
                throw e;
            }
        }
        focusEditor() {
            this.editor.focus();
        }
        async dispose() {
            this.editor.remove();
        }
        clear() {
            const html = lit.html;
            lit.render(html ``, this.elements.bottomElement);
        }
    }
    runtime.definitions.cellTypes.register(PYTHON_CELL_TYPE_DEFINITION.cellType, PYTHON_CELL_TYPE_DEFINITION);
}
const plugin = {
    id: "starboard-python",
    metadata: {
        name: "Starboard Python",
    },
    exports: {
        getPyodideLoadingStatus: getPyodideLoadingStatus,
        runStarboardPython: runStarboardPython,
        setGlobalPythonOutputElement: setGlobalPythonOutputElement,
        loadPyodide: loadPyodide,
        updatePluginOptions: updatePluginOptions,
    },
    async register(runtime, opts = {}) {
        setPluginOpts(opts);
        registerPython(runtime);
    },
};

export { getPyodideLoadingStatus, loadPyodide, plugin, registerPython, runStarboardPython, setGlobalPythonOutputElement, setupPythonSupport };
