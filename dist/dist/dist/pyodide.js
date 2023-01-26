var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// node_modules/stackframe/stackframe.js
var require_stackframe = __commonJS({
  "node_modules/stackframe/stackframe.js"(exports, module) {
    (function(root, factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("stackframe", [], factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      } else {
        root.StackFrame = factory();
      }
    })(exports, function() {
      "use strict";
      function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      function _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
      }
      function _getter(p) {
        return function() {
          return this[p];
        };
      }
      var booleanProps = ["isConstructor", "isEval", "isNative", "isToplevel"];
      var numericProps = ["columnNumber", "lineNumber"];
      var stringProps = ["fileName", "functionName", "source"];
      var arrayProps = ["args"];
      var objectProps = ["evalOrigin"];
      var props = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);
      function StackFrame(obj) {
        if (!obj)
          return;
        for (var i2 = 0; i2 < props.length; i2++) {
          if (obj[props[i2]] !== void 0) {
            this["set" + _capitalize(props[i2])](obj[props[i2]]);
          }
        }
      }
      StackFrame.prototype = {
        getArgs: function() {
          return this.args;
        },
        setArgs: function(v) {
          if (Object.prototype.toString.call(v) !== "[object Array]") {
            throw new TypeError("Args must be an Array");
          }
          this.args = v;
        },
        getEvalOrigin: function() {
          return this.evalOrigin;
        },
        setEvalOrigin: function(v) {
          if (v instanceof StackFrame) {
            this.evalOrigin = v;
          } else if (v instanceof Object) {
            this.evalOrigin = new StackFrame(v);
          } else {
            throw new TypeError("Eval Origin must be an Object or StackFrame");
          }
        },
        toString: function() {
          var fileName = this.getFileName() || "";
          var lineNumber = this.getLineNumber() || "";
          var columnNumber = this.getColumnNumber() || "";
          var functionName = this.getFunctionName() || "";
          if (this.getIsEval()) {
            if (fileName) {
              return "[eval] (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
            }
            return "[eval]:" + lineNumber + ":" + columnNumber;
          }
          if (functionName) {
            return functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
          }
          return fileName + ":" + lineNumber + ":" + columnNumber;
        }
      };
      StackFrame.fromString = function StackFrame$$fromString(str) {
        var argsStartIndex = str.indexOf("(");
        var argsEndIndex = str.lastIndexOf(")");
        var functionName = str.substring(0, argsStartIndex);
        var args = str.substring(argsStartIndex + 1, argsEndIndex).split(",");
        var locationString = str.substring(argsEndIndex + 1);
        if (locationString.indexOf("@") === 0) {
          var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, "");
          var fileName = parts[1];
          var lineNumber = parts[2];
          var columnNumber = parts[3];
        }
        return new StackFrame({
          functionName,
          args: args || void 0,
          fileName,
          lineNumber: lineNumber || void 0,
          columnNumber: columnNumber || void 0
        });
      };
      for (var i = 0; i < booleanProps.length; i++) {
        StackFrame.prototype["get" + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
        StackFrame.prototype["set" + _capitalize(booleanProps[i])] = function(p) {
          return function(v) {
            this[p] = Boolean(v);
          };
        }(booleanProps[i]);
      }
      for (var j = 0; j < numericProps.length; j++) {
        StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]);
        StackFrame.prototype["set" + _capitalize(numericProps[j])] = function(p) {
          return function(v) {
            if (!_isNumber(v)) {
              throw new TypeError(p + " must be a Number");
            }
            this[p] = Number(v);
          };
        }(numericProps[j]);
      }
      for (var k = 0; k < stringProps.length; k++) {
        StackFrame.prototype["get" + _capitalize(stringProps[k])] = _getter(stringProps[k]);
        StackFrame.prototype["set" + _capitalize(stringProps[k])] = function(p) {
          return function(v) {
            this[p] = String(v);
          };
        }(stringProps[k]);
      }
      return StackFrame;
    });
  }
});

// node_modules/error-stack-parser/error-stack-parser.js
var require_error_stack_parser = __commonJS({
  "node_modules/error-stack-parser/error-stack-parser.js"(exports, module) {
    (function(root, factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("error-stack-parser", ["stackframe"], factory);
      } else if (typeof exports === "object") {
        module.exports = factory(require_stackframe());
      } else {
        root.ErrorStackParser = factory(root.StackFrame);
      }
    })(exports, function ErrorStackParser3(StackFrame) {
      "use strict";
      var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
      var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
      var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
      return {
        parse: function ErrorStackParser$$parse(error) {
          if (typeof error.stacktrace !== "undefined" || typeof error["opera#sourceloc"] !== "undefined") {
            return this.parseOpera(error);
          } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
            return this.parseV8OrIE(error);
          } else if (error.stack) {
            return this.parseFFOrSafari(error);
          } else {
            throw new Error("Cannot parse given Error object");
          }
        },
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
          if (urlLike.indexOf(":") === -1) {
            return [urlLike];
          }
          var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
          var parts = regExp.exec(urlLike.replace(/[()]/g, ""));
          return [parts[1], parts[2] || void 0, parts[3] || void 0];
        },
        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
          var filtered = error.stack.split("\n").filter(function(line) {
            return !!line.match(CHROME_IE_STACK_REGEXP);
          }, this);
          return filtered.map(function(line) {
            if (line.indexOf("(eval ") > -1) {
              line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
            }
            var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
            var location2 = sanitizedLine.match(/ (\(.+\)$)/);
            sanitizedLine = location2 ? sanitizedLine.replace(location2[0], "") : sanitizedLine;
            var locationParts = this.extractLocation(location2 ? location2[1] : sanitizedLine);
            var functionName = location2 && sanitizedLine || void 0;
            var fileName = ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0];
            return new StackFrame({
              functionName,
              fileName,
              lineNumber: locationParts[1],
              columnNumber: locationParts[2],
              source: line
            });
          }, this);
        },
        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
          var filtered = error.stack.split("\n").filter(function(line) {
            return !line.match(SAFARI_NATIVE_CODE_REGEXP);
          }, this);
          return filtered.map(function(line) {
            if (line.indexOf(" > eval") > -1) {
              line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
            }
            if (line.indexOf("@") === -1 && line.indexOf(":") === -1) {
              return new StackFrame({
                functionName: line
              });
            } else {
              var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
              var matches = line.match(functionNameRegex);
              var functionName = matches && matches[1] ? matches[1] : void 0;
              var locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
              return new StackFrame({
                functionName,
                fileName: locationParts[0],
                lineNumber: locationParts[1],
                columnNumber: locationParts[2],
                source: line
              });
            }
          }, this);
        },
        parseOpera: function ErrorStackParser$$parseOpera(e) {
          if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
            return this.parseOpera9(e);
          } else if (!e.stack) {
            return this.parseOpera10(e);
          } else {
            return this.parseOpera11(e);
          }
        },
        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
          var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
          var lines = e.message.split("\n");
          var result = [];
          for (var i = 2, len = lines.length; i < len; i += 2) {
            var match = lineRE.exec(lines[i]);
            if (match) {
              result.push(new StackFrame({
                fileName: match[2],
                lineNumber: match[1],
                source: lines[i]
              }));
            }
          }
          return result;
        },
        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
          var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
          var lines = e.stacktrace.split("\n");
          var result = [];
          for (var i = 0, len = lines.length; i < len; i += 2) {
            var match = lineRE.exec(lines[i]);
            if (match) {
              result.push(new StackFrame({
                functionName: match[3] || void 0,
                fileName: match[2],
                lineNumber: match[1],
                source: lines[i]
              }));
            }
          }
          return result;
        },
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
          var filtered = error.stack.split("\n").filter(function(line) {
            return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
          }, this);
          return filtered.map(function(line) {
            var tokens = line.split("@");
            var locationParts = this.extractLocation(tokens.pop());
            var functionCall = tokens.shift() || "";
            var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
            var argsRaw;
            if (functionCall.match(/\(([^)]*)\)/)) {
              argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1");
            }
            var args = argsRaw === void 0 || argsRaw === "[arguments not available]" ? void 0 : argsRaw.split(",");
            return new StackFrame({
              functionName,
              args,
              fileName: locationParts[0],
              lineNumber: locationParts[1],
              columnNumber: locationParts[2],
              source: line
            });
          }, this);
        }
      };
    });
  }
});

// node_modules/node-fetch/browser.js
var require_browser = __commonJS({
  "node_modules/node-fetch/browser.js"(exports, module) {
    "use strict";
    var getGlobal = function() {
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      throw new Error("unable to locate global object");
    };
    var global = getGlobal();
    module.exports = exports = global.fetch;
    if (global.fetch) {
      exports.default = global.fetch.bind(global);
    }
    exports.Headers = global.Headers;
    exports.Request = global.Request;
    exports.Response = global.Response;
  }
});

// node_modules/pyodide/pyodide.ts
var import_error_stack_parser2 = __toESM(require_error_stack_parser(), 1);

// node_modules/pyodide/module.ts
var Module = {};
Module.noImageDecoding = true;
Module.noAudioDecoding = true;
Module.noWasmDecoding = false;
Module.preloadedWasm = {};
Module.preRun = [];
var API = {};
Module.API = API;
var Hiwire = {};
Module.hiwire = Hiwire;
var Tests = {};
API.tests = Tests;
function setStandardStreams(stdin, stdout, stderr) {
  if (stdout) {
    Module.print = stdout;
  }
  if (stderr) {
    Module.printErr = stderr;
  }
  if (stdin) {
    Module.preRun.push(function() {
      Module.FS.init(createStdinWrapper(stdin), null, null);
    });
  }
}
function createStdinWrapper(stdin) {
  const encoder = new TextEncoder();
  let input = new Uint8Array(0);
  let inputIndex = -1;
  function stdinWrapper() {
    try {
      if (inputIndex === -1) {
        let text = stdin();
        if (text === void 0 || text === null) {
          return null;
        }
        if (typeof text !== "string") {
          throw new TypeError(`Expected stdin to return string, null, or undefined, got type ${typeof text}.`);
        }
        if (!text.endsWith("\n")) {
          text += "\n";
        }
        input = encoder.encode(text);
        inputIndex = 0;
      }
      if (inputIndex < input.length) {
        let character = input[inputIndex];
        inputIndex++;
        return character;
      } else {
        inputIndex = -1;
        return null;
      }
    } catch (e) {
      console.error("Error thrown in stdin:");
      console.error(e);
      throw e;
    }
  }
  return stdinWrapper;
}
function setHomeDirectory(path) {
  Module.preRun.push(function() {
    const fallbackPath = "/";
    try {
      Module.FS.mkdirTree(path);
    } catch (e) {
      console.error(`Error occurred while making a home directory '${path}':`);
      console.error(e);
      console.error(`Using '${fallbackPath}' for a home directory instead`);
      path = fallbackPath;
    }
    Module.ENV.HOME = path;
    Module.FS.chdir(path);
  });
}

// node_modules/pyodide/compat.ts
var IN_NODE = typeof process !== "undefined" && process.release && process.release.name === "node" && typeof process.browser === "undefined";
var nodePathMod;
var nodeFetch;
var nodeVmMod;
var nodeFsPromisesMod;
async function initNodeModules() {
  if (!IN_NODE) {
    return;
  }
  nodePathMod = (await import(
    /* webpackIgnore: true */
    "path"
  )).default;
  nodeFsPromisesMod = await import(
    /* webpackIgnore: true */
    "fs/promises"
  );
  nodeFetch = (await Promise.resolve().then(() => __toESM(require_browser(), 1))).default;
  nodeVmMod = (await import(
    /* webpackIgnore: true */
    "vm"
  )).default;
}
async function node_loadBinaryFile(indexURL, path) {
  if (path.includes("://")) {
    let response = await nodeFetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load '${path}': request failed.`);
    }
    return await response.arrayBuffer();
  } else {
    const data = await nodeFsPromisesMod.readFile(`${indexURL}${path}`);
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
async function browser_loadBinaryFile(indexURL, path) {
  const base = new URL(indexURL, location);
  const url = new URL(path, base);
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load '${url}': request failed.`);
  }
  return new Uint8Array(await response.arrayBuffer());
}
var _loadBinaryFile;
if (IN_NODE) {
  _loadBinaryFile = node_loadBinaryFile;
} else {
  _loadBinaryFile = browser_loadBinaryFile;
}
var loadScript;
if (globalThis.document) {
  loadScript = async (url) => await import(
    /* webpackIgnore: true */
    url
  );
} else if (globalThis.importScripts) {
  loadScript = async (url) => {
    try {
      globalThis.importScripts(url);
    } catch (e) {
      if (e instanceof TypeError) {
        await import(url);
      } else {
        throw e;
      }
    }
  };
} else if (IN_NODE) {
  loadScript = nodeLoadScript;
} else {
  throw new Error("Cannot determine runtime environment");
}
async function nodeLoadScript(url) {
  if (url.includes("://")) {
    nodeVmMod.runInThisContext(await (await nodeFetch(url)).text());
  } else {
    await import(nodePathMod.resolve(url));
  }
}

// node_modules/pyodide/pyproxy.gen.ts
function isPyProxy(jsobj) {
  return !!jsobj && jsobj.$$ !== void 0 && jsobj.$$.type === "PyProxy";
}
API.isPyProxy = isPyProxy;
if (globalThis.FinalizationRegistry) {
  Module.finalizationRegistry = new FinalizationRegistry(([ptr, cache]) => {
    cache.leaked = true;
    pyproxy_decref_cache(cache);
    try {
      Module._Py_DecRef(ptr);
    } catch (e) {
      API.fatal_error(e);
    }
  });
} else {
  Module.finalizationRegistry = { register() {
  }, unregister() {
  } };
}
var pyproxy_alloc_map = /* @__PURE__ */ new Map();
Module.pyproxy_alloc_map = pyproxy_alloc_map;
var trace_pyproxy_alloc;
var trace_pyproxy_dealloc;
Module.enable_pyproxy_allocation_tracing = function() {
  trace_pyproxy_alloc = function(proxy) {
    pyproxy_alloc_map.set(proxy, Error().stack);
  };
  trace_pyproxy_dealloc = function(proxy) {
    pyproxy_alloc_map.delete(proxy);
  };
};
Module.disable_pyproxy_allocation_tracing = function() {
  trace_pyproxy_alloc = function(proxy) {
  };
  trace_pyproxy_dealloc = function(proxy) {
  };
};
Module.disable_pyproxy_allocation_tracing();
Module.pyproxy_new = function(ptrobj, cache) {
  let flags = Module._pyproxy_getflags(ptrobj);
  let cls = Module.getPyProxyClass(flags);
  let target;
  if (flags & 1 << 8) {
    target = Reflect.construct(Function, [], cls);
    delete target.length;
    delete target.name;
    target.prototype = void 0;
  } else {
    target = Object.create(cls.prototype);
  }
  if (!cache) {
    let cacheId = Hiwire.new_value(/* @__PURE__ */ new Map());
    cache = { cacheId, refcnt: 0 };
  }
  cache.refcnt++;
  Object.defineProperty(target, "$$", {
    value: { ptr: ptrobj, type: "PyProxy", cache }
  });
  Module._Py_IncRef(ptrobj);
  let proxy = new Proxy(target, PyProxyHandlers);
  trace_pyproxy_alloc(proxy);
  Module.finalizationRegistry.register(proxy, [ptrobj, cache], proxy);
  return proxy;
};
function _getPtr(jsobj) {
  let ptr = jsobj.$$.ptr;
  if (ptr === 0) {
    throw new Error(jsobj.$$.destroyed_msg);
  }
  return ptr;
}
var pyproxyClassMap = /* @__PURE__ */ new Map();
Module.getPyProxyClass = function(flags) {
  const FLAG_TYPE_PAIRS = [
    [1 << 0, PyProxyLengthMethods],
    [1 << 1, PyProxyGetItemMethods],
    [1 << 2, PyProxySetItemMethods],
    [1 << 3, PyProxyContainsMethods],
    [1 << 4, PyProxyIterableMethods],
    [1 << 5, PyProxyIteratorMethods],
    [1 << 6, PyProxyAwaitableMethods],
    [1 << 7, PyProxyBufferMethods],
    [1 << 8, PyProxyCallableMethods]
  ];
  let result = pyproxyClassMap.get(flags);
  if (result) {
    return result;
  }
  let descriptors = {};
  for (let [feature_flag, methods] of FLAG_TYPE_PAIRS) {
    if (flags & feature_flag) {
      Object.assign(descriptors, Object.getOwnPropertyDescriptors(methods.prototype));
    }
  }
  descriptors.constructor = Object.getOwnPropertyDescriptor(PyProxyClass.prototype, "constructor");
  Object.assign(descriptors, Object.getOwnPropertyDescriptors({ $$flags: flags }));
  let new_proto = Object.create(PyProxyClass.prototype, descriptors);
  function NewPyProxyClass() {
  }
  NewPyProxyClass.prototype = new_proto;
  pyproxyClassMap.set(flags, NewPyProxyClass);
  return NewPyProxyClass;
};
Module.PyProxy_getPtr = _getPtr;
var pyproxy_cache_destroyed_msg = "This borrowed attribute proxy was automatically destroyed in the process of destroying the proxy it was borrowed from. Try using the 'copy' method.";
function pyproxy_decref_cache(cache) {
  if (!cache) {
    return;
  }
  cache.refcnt--;
  if (cache.refcnt === 0) {
    let cache_map = Hiwire.pop_value(cache.cacheId);
    for (let proxy_id of cache_map.values()) {
      const cache_entry = Hiwire.pop_value(proxy_id);
      if (!cache.leaked) {
        Module.pyproxy_destroy(cache_entry, pyproxy_cache_destroyed_msg);
      }
    }
  }
}
Module.pyproxy_destroy = function(proxy, destroyed_msg) {
  if (proxy.$$.ptr === 0) {
    return;
  }
  let ptrobj = _getPtr(proxy);
  Module.finalizationRegistry.unregister(proxy);
  destroyed_msg = destroyed_msg || "Object has already been destroyed";
  let proxy_type = proxy.type;
  let proxy_repr;
  try {
    proxy_repr = proxy.toString();
  } catch (e) {
    if (e.pyodide_fatal_error) {
      throw e;
    }
  }
  proxy.$$.ptr = 0;
  destroyed_msg += `
The object was of type "${proxy_type}" and `;
  if (proxy_repr) {
    destroyed_msg += `had repr "${proxy_repr}"`;
  } else {
    destroyed_msg += "an error was raised when trying to generate its repr";
  }
  proxy.$$.destroyed_msg = destroyed_msg;
  pyproxy_decref_cache(proxy.$$.cache);
  try {
    Module._Py_DecRef(ptrobj);
    trace_pyproxy_dealloc(proxy);
  } catch (e) {
    API.fatal_error(e);
  }
};
Module.callPyObjectKwargs = function(ptrobj, ...jsargs) {
  let kwargs = jsargs.pop();
  let num_pos_args = jsargs.length;
  let kwargs_names = Object.keys(kwargs);
  let kwargs_values = Object.values(kwargs);
  let num_kwargs = kwargs_names.length;
  jsargs.push(...kwargs_values);
  let idargs = Hiwire.new_value(jsargs);
  let idkwnames = Hiwire.new_value(kwargs_names);
  let idresult;
  try {
    idresult = Module.__pyproxy_apply(ptrobj, idargs, num_pos_args, idkwnames, num_kwargs);
  } catch (e) {
    API.fatal_error(e);
  } finally {
    Hiwire.decref(idargs);
    Hiwire.decref(idkwnames);
  }
  if (idresult === 0) {
    Module._pythonexc2js();
  }
  let result = Hiwire.pop_value(idresult);
  if (result && result.type === "coroutine" && result._ensure_future) {
    result._ensure_future();
  }
  return result;
};
Module.callPyObject = function(ptrobj, ...jsargs) {
  return Module.callPyObjectKwargs(ptrobj, ...jsargs, {});
};
var PyProxyClass = class {
  constructor() {
    throw new TypeError("PyProxy is not a constructor");
  }
  get [Symbol.toStringTag]() {
    return "PyProxy";
  }
  get type() {
    let ptrobj = _getPtr(this);
    return Hiwire.pop_value(Module.__pyproxy_type(ptrobj));
  }
  toString() {
    let ptrobj = _getPtr(this);
    let jsref_repr;
    try {
      jsref_repr = Module.__pyproxy_repr(ptrobj);
    } catch (e) {
      API.fatal_error(e);
    }
    if (jsref_repr === 0) {
      Module._pythonexc2js();
    }
    return Hiwire.pop_value(jsref_repr);
  }
  destroy(destroyed_msg) {
    Module.pyproxy_destroy(this, destroyed_msg);
  }
  copy() {
    let ptrobj = _getPtr(this);
    return Module.pyproxy_new(ptrobj, this.$$.cache);
  }
  toJs({
    depth = -1,
    pyproxies = void 0,
    create_pyproxies = true,
    dict_converter = void 0,
    default_converter = void 0
  } = {}) {
    let ptrobj = _getPtr(this);
    let idresult;
    let proxies_id;
    let dict_converter_id = 0;
    let default_converter_id = 0;
    if (!create_pyproxies) {
      proxies_id = 0;
    } else if (pyproxies) {
      proxies_id = Hiwire.new_value(pyproxies);
    } else {
      proxies_id = Hiwire.new_value([]);
    }
    if (dict_converter) {
      dict_converter_id = Hiwire.new_value(dict_converter);
    }
    if (default_converter) {
      default_converter_id = Hiwire.new_value(default_converter);
    }
    try {
      idresult = Module._python2js_custom(ptrobj, depth, proxies_id, dict_converter_id, default_converter_id);
    } catch (e) {
      API.fatal_error(e);
    } finally {
      Hiwire.decref(proxies_id);
      Hiwire.decref(dict_converter_id);
      Hiwire.decref(default_converter_id);
    }
    if (idresult === 0) {
      Module._pythonexc2js();
    }
    return Hiwire.pop_value(idresult);
  }
  supportsLength() {
    return !!(this.$$flags & 1 << 0);
  }
  supportsGet() {
    return !!(this.$$flags & 1 << 1);
  }
  supportsSet() {
    return !!(this.$$flags & 1 << 2);
  }
  supportsHas() {
    return !!(this.$$flags & 1 << 3);
  }
  isIterable() {
    return !!(this.$$flags & (1 << 4 | 1 << 5));
  }
  isIterator() {
    return !!(this.$$flags & 1 << 5);
  }
  isAwaitable() {
    return !!(this.$$flags & 1 << 6);
  }
  isBuffer() {
    return !!(this.$$flags & 1 << 7);
  }
  isCallable() {
    return !!(this.$$flags & 1 << 8);
  }
};
var PyProxyLengthMethods = class {
  get length() {
    let ptrobj = _getPtr(this);
    let length;
    try {
      length = Module._PyObject_Size(ptrobj);
    } catch (e) {
      API.fatal_error(e);
    }
    if (length === -1) {
      Module._pythonexc2js();
    }
    return length;
  }
};
var PyProxyGetItemMethods = class {
  get(key) {
    let ptrobj = _getPtr(this);
    let idkey = Hiwire.new_value(key);
    let idresult;
    try {
      idresult = Module.__pyproxy_getitem(ptrobj, idkey);
    } catch (e) {
      API.fatal_error(e);
    } finally {
      Hiwire.decref(idkey);
    }
    if (idresult === 0) {
      if (Module._PyErr_Occurred()) {
        Module._pythonexc2js();
      } else {
        return void 0;
      }
    }
    return Hiwire.pop_value(idresult);
  }
};
var PyProxySetItemMethods = class {
  set(key, value) {
    let ptrobj = _getPtr(this);
    let idkey = Hiwire.new_value(key);
    let idval = Hiwire.new_value(value);
    let errcode;
    try {
      errcode = Module.__pyproxy_setitem(ptrobj, idkey, idval);
    } catch (e) {
      API.fatal_error(e);
    } finally {
      Hiwire.decref(idkey);
      Hiwire.decref(idval);
    }
    if (errcode === -1) {
      Module._pythonexc2js();
    }
  }
  delete(key) {
    let ptrobj = _getPtr(this);
    let idkey = Hiwire.new_value(key);
    let errcode;
    try {
      errcode = Module.__pyproxy_delitem(ptrobj, idkey);
    } catch (e) {
      API.fatal_error(e);
    } finally {
      Hiwire.decref(idkey);
    }
    if (errcode === -1) {
      Module._pythonexc2js();
    }
  }
};
var PyProxyContainsMethods = class {
  has(key) {
    let ptrobj = _getPtr(this);
    let idkey = Hiwire.new_value(key);
    let result;
    try {
      result = Module.__pyproxy_contains(ptrobj, idkey);
    } catch (e) {
      API.fatal_error(e);
    } finally {
      Hiwire.decref(idkey);
    }
    if (result === -1) {
      Module._pythonexc2js();
    }
    return result === 1;
  }
};
function* iter_helper(iterptr, token) {
  try {
    let item;
    while (item = Module.__pyproxy_iter_next(iterptr)) {
      yield Hiwire.pop_value(item);
    }
  } catch (e) {
    API.fatal_error(e);
  } finally {
    Module.finalizationRegistry.unregister(token);
    Module._Py_DecRef(iterptr);
  }
  if (Module._PyErr_Occurred()) {
    Module._pythonexc2js();
  }
}
var PyProxyIterableMethods = class {
  [Symbol.iterator]() {
    let ptrobj = _getPtr(this);
    let token = {};
    let iterptr;
    try {
      iterptr = Module._PyObject_GetIter(ptrobj);
    } catch (e) {
      API.fatal_error(e);
    }
    if (iterptr === 0) {
      Module._pythonexc2js();
    }
    let result = iter_helper(iterptr, token);
    Module.finalizationRegistry.register(result, [iterptr, void 0], token);
    return result;
  }
};
var PyProxyIteratorMethods = class {
  [Symbol.iterator]() {
    return this;
  }
  next(arg = void 0) {
    let idarg = Hiwire.new_value(arg);
    let status;
    let done;
    let stackTop = Module.stackSave();
    let res_ptr = Module.stackAlloc(4);
    try {
      status = Module.__pyproxyGen_Send(_getPtr(this), idarg, res_ptr);
    } catch (e) {
      API.fatal_error(e);
    } finally {
      Hiwire.decref(idarg);
    }
    let HEAPU32 = Module.HEAPU32;
    let idresult = HEAPU32[(res_ptr >> 2) + 0];
    Module.stackRestore(stackTop);
    if (status === -1) {
      Module._pythonexc2js();
    }
    let value = Hiwire.pop_value(idresult);
    done = status === 0;
    return { done, value };
  }
};
function python_hasattr(jsobj, jskey) {
  let ptrobj = _getPtr(jsobj);
  let idkey = Hiwire.new_value(jskey);
  let result;
  try {
    result = Module.__pyproxy_hasattr(ptrobj, idkey);
  } catch (e) {
    API.fatal_error(e);
  } finally {
    Hiwire.decref(idkey);
  }
  if (result === -1) {
    Module._pythonexc2js();
  }
  return result !== 0;
}
function python_getattr(jsobj, jskey) {
  let ptrobj = _getPtr(jsobj);
  let idkey = Hiwire.new_value(jskey);
  let idresult;
  let cacheId = jsobj.$$.cache.cacheId;
  try {
    idresult = Module.__pyproxy_getattr(ptrobj, idkey, cacheId);
  } catch (e) {
    API.fatal_error(e);
  } finally {
    Hiwire.decref(idkey);
  }
  if (idresult === 0) {
    if (Module._PyErr_Occurred()) {
      Module._pythonexc2js();
    }
  }
  return idresult;
}
function python_setattr(jsobj, jskey, jsval) {
  let ptrobj = _getPtr(jsobj);
  let idkey = Hiwire.new_value(jskey);
  let idval = Hiwire.new_value(jsval);
  let errcode;
  try {
    errcode = Module.__pyproxy_setattr(ptrobj, idkey, idval);
  } catch (e) {
    API.fatal_error(e);
  } finally {
    Hiwire.decref(idkey);
    Hiwire.decref(idval);
  }
  if (errcode === -1) {
    Module._pythonexc2js();
  }
}
function python_delattr(jsobj, jskey) {
  let ptrobj = _getPtr(jsobj);
  let idkey = Hiwire.new_value(jskey);
  let errcode;
  try {
    errcode = Module.__pyproxy_delattr(ptrobj, idkey);
  } catch (e) {
    API.fatal_error(e);
  } finally {
    Hiwire.decref(idkey);
  }
  if (errcode === -1) {
    Module._pythonexc2js();
  }
}
var PyProxyHandlers = {
  isExtensible() {
    return true;
  },
  has(jsobj, jskey) {
    let objHasKey = Reflect.has(jsobj, jskey);
    if (objHasKey) {
      return true;
    }
    if (typeof jskey === "symbol") {
      return false;
    }
    if (jskey.startsWith("$")) {
      jskey = jskey.slice(1);
    }
    return python_hasattr(jsobj, jskey);
  },
  get(jsobj, jskey) {
    if (jskey in jsobj || typeof jskey === "symbol") {
      return Reflect.get(jsobj, jskey);
    }
    if (jskey.startsWith("$")) {
      jskey = jskey.slice(1);
    }
    let idresult = python_getattr(jsobj, jskey);
    if (idresult !== 0) {
      return Hiwire.pop_value(idresult);
    }
  },
  set(jsobj, jskey, jsval) {
    let descr = Object.getOwnPropertyDescriptor(jsobj, jskey);
    if (descr && !descr.writable) {
      throw new TypeError(`Cannot set read only field '${jskey}'`);
    }
    if (typeof jskey === "symbol") {
      return Reflect.set(jsobj, jskey, jsval);
    }
    if (jskey.startsWith("$")) {
      jskey = jskey.slice(1);
    }
    python_setattr(jsobj, jskey, jsval);
    return true;
  },
  deleteProperty(jsobj, jskey) {
    let descr = Object.getOwnPropertyDescriptor(jsobj, jskey);
    if (descr && !descr.writable) {
      throw new TypeError(`Cannot delete read only field '${jskey}'`);
    }
    if (typeof jskey === "symbol") {
      return Reflect.deleteProperty(jsobj, jskey);
    }
    if (jskey.startsWith("$")) {
      jskey = jskey.slice(1);
    }
    python_delattr(jsobj, jskey);
    return !descr || !!descr.configurable;
  },
  ownKeys(jsobj) {
    let ptrobj = _getPtr(jsobj);
    let idresult;
    try {
      idresult = Module.__pyproxy_ownKeys(ptrobj);
    } catch (e) {
      API.fatal_error(e);
    }
    if (idresult === 0) {
      Module._pythonexc2js();
    }
    let result = Hiwire.pop_value(idresult);
    result.push(...Reflect.ownKeys(jsobj));
    return result;
  },
  apply(jsobj, jsthis, jsargs) {
    return jsobj.apply(jsthis, jsargs);
  }
};
var PyProxyAwaitableMethods = class {
  _ensure_future() {
    if (this.$$.promise) {
      return this.$$.promise;
    }
    let ptrobj = _getPtr(this);
    let resolveHandle;
    let rejectHandle;
    let promise = new Promise((resolve, reject) => {
      resolveHandle = resolve;
      rejectHandle = reject;
    });
    let resolve_handle_id = Hiwire.new_value(resolveHandle);
    let reject_handle_id = Hiwire.new_value(rejectHandle);
    let errcode;
    try {
      errcode = Module.__pyproxy_ensure_future(ptrobj, resolve_handle_id, reject_handle_id);
    } catch (e) {
      API.fatal_error(e);
    } finally {
      Hiwire.decref(reject_handle_id);
      Hiwire.decref(resolve_handle_id);
    }
    if (errcode === -1) {
      Module._pythonexc2js();
    }
    this.$$.promise = promise;
    this.destroy();
    return promise;
  }
  then(onFulfilled, onRejected) {
    let promise = this._ensure_future();
    return promise.then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    let promise = this._ensure_future();
    return promise.catch(onRejected);
  }
  finally(onFinally) {
    let promise = this._ensure_future();
    return promise.finally(onFinally);
  }
};
var PyProxyCallableMethods = class {
  apply(jsthis, jsargs) {
    return Module.callPyObject(_getPtr(this), ...jsargs);
  }
  call(jsthis, ...jsargs) {
    return Module.callPyObject(_getPtr(this), ...jsargs);
  }
  callKwargs(...jsargs) {
    if (jsargs.length === 0) {
      throw new TypeError("callKwargs requires at least one argument (the key word argument object)");
    }
    let kwargs = jsargs[jsargs.length - 1];
    if (kwargs.constructor !== void 0 && kwargs.constructor.name !== "Object") {
      throw new TypeError("kwargs argument is not an object");
    }
    return Module.callPyObjectKwargs(_getPtr(this), ...jsargs);
  }
};
PyProxyCallableMethods.prototype.prototype = Function.prototype;
var type_to_array_map = /* @__PURE__ */ new Map([
  ["i8", Int8Array],
  ["u8", Uint8Array],
  ["u8clamped", Uint8ClampedArray],
  ["i16", Int16Array],
  ["u16", Uint16Array],
  ["i32", Int32Array],
  ["u32", Uint32Array],
  ["i32", Int32Array],
  ["u32", Uint32Array],
  ["i64", globalThis.BigInt64Array],
  ["u64", globalThis.BigUint64Array],
  ["f32", Float32Array],
  ["f64", Float64Array],
  ["dataview", DataView]
]);
var PyProxyBufferMethods = class {
  getBuffer(type) {
    let ArrayType = void 0;
    if (type) {
      ArrayType = type_to_array_map.get(type);
      if (ArrayType === void 0) {
        throw new Error(`Unknown type ${type}`);
      }
    }
    let HEAPU32 = Module.HEAPU32;
    let orig_stack_ptr = Module.stackSave();
    let buffer_struct_ptr = Module.stackAlloc(HEAPU32[(Module._buffer_struct_size >> 2) + 0]);
    let this_ptr = _getPtr(this);
    let errcode;
    try {
      errcode = Module.__pyproxy_get_buffer(buffer_struct_ptr, this_ptr);
    } catch (e) {
      API.fatal_error(e);
    }
    if (errcode === -1) {
      Module._pythonexc2js();
    }
    let startByteOffset = HEAPU32[(buffer_struct_ptr >> 2) + 0];
    let minByteOffset = HEAPU32[(buffer_struct_ptr >> 2) + 1];
    let maxByteOffset = HEAPU32[(buffer_struct_ptr >> 2) + 2];
    let readonly = !!HEAPU32[(buffer_struct_ptr >> 2) + 3];
    let format_ptr = HEAPU32[(buffer_struct_ptr >> 2) + 4];
    let itemsize = HEAPU32[(buffer_struct_ptr >> 2) + 5];
    let shape = Hiwire.pop_value(HEAPU32[(buffer_struct_ptr >> 2) + 6]);
    let strides = Hiwire.pop_value(HEAPU32[(buffer_struct_ptr >> 2) + 7]);
    let view_ptr = HEAPU32[(buffer_struct_ptr >> 2) + 8];
    let c_contiguous = !!HEAPU32[(buffer_struct_ptr >> 2) + 9];
    let f_contiguous = !!HEAPU32[(buffer_struct_ptr >> 2) + 10];
    let format = Module.UTF8ToString(format_ptr);
    Module.stackRestore(orig_stack_ptr);
    let success = false;
    try {
      let bigEndian = false;
      if (ArrayType === void 0) {
        [ArrayType, bigEndian] = Module.processBufferFormatString(format, " In this case, you can pass an explicit type argument.");
      }
      let alignment = parseInt(ArrayType.name.replace(/[^0-9]/g, "")) / 8 || 1;
      if (bigEndian && alignment > 1) {
        throw new Error("Javascript has no native support for big endian buffers. In this case, you can pass an explicit type argument. For instance, `getBuffer('dataview')` will return a `DataView`which has native support for reading big endian data. Alternatively, toJs will automatically convert the buffer to little endian.");
      }
      let numBytes = maxByteOffset - minByteOffset;
      if (numBytes !== 0 && (startByteOffset % alignment !== 0 || minByteOffset % alignment !== 0 || maxByteOffset % alignment !== 0)) {
        throw new Error(`Buffer does not have valid alignment for a ${ArrayType.name}`);
      }
      let numEntries = numBytes / alignment;
      let offset = (startByteOffset - minByteOffset) / alignment;
      let data;
      if (numBytes === 0) {
        data = new ArrayType();
      } else {
        data = new ArrayType(HEAPU32.buffer, minByteOffset, numEntries);
      }
      for (let i of strides.keys()) {
        strides[i] /= alignment;
      }
      success = true;
      let result = Object.create(PyBuffer.prototype, Object.getOwnPropertyDescriptors({
        offset,
        readonly,
        format,
        itemsize,
        ndim: shape.length,
        nbytes: numBytes,
        shape,
        strides,
        data,
        c_contiguous,
        f_contiguous,
        _view_ptr: view_ptr,
        _released: false
      }));
      return result;
    } finally {
      if (!success) {
        try {
          Module._PyBuffer_Release(view_ptr);
          Module._PyMem_Free(view_ptr);
        } catch (e) {
          API.fatal_error(e);
        }
      }
    }
  }
};
var PyBuffer = class {
  constructor() {
    throw new TypeError("PyBuffer is not a constructor");
  }
  release() {
    if (this._released) {
      return;
    }
    try {
      Module._PyBuffer_Release(this._view_ptr);
      Module._PyMem_Free(this._view_ptr);
    } catch (e) {
      API.fatal_error(e);
    }
    this._released = true;
    this.data = null;
  }
};

// node_modules/pyodide/load-package.ts
var baseURL;
async function initializePackageIndex(indexURL) {
  baseURL = indexURL;
  let package_json;
  if (IN_NODE) {
    const package_string = await nodeFsPromisesMod.readFile(`${indexURL}packages.json`);
    package_json = JSON.parse(package_string);
  } else {
    let response = await fetch(`${indexURL}packages.json`);
    package_json = await response.json();
  }
  if (!package_json.packages) {
    throw new Error("Loaded packages.json does not contain the expected key 'packages'.");
  }
  API.packages = package_json.packages;
  API._import_name_to_package_name = /* @__PURE__ */ new Map();
  for (let name of Object.keys(API.packages)) {
    for (let import_name of API.packages[name].imports) {
      API._import_name_to_package_name.set(import_name, name);
    }
  }
}
var DEFAULT_CHANNEL = "default channel";
var package_uri_regexp = /^.*?([^\/]*)\.whl$/;
function _uri_to_package_name(package_uri) {
  let match = package_uri_regexp.exec(package_uri);
  if (match) {
    let wheel_name = match[1].toLowerCase();
    return wheel_name.split("-").slice(0, -4).join("-");
  }
}
function addPackageToLoad(name, toLoad, toLoadShared) {
  name = name.toLowerCase();
  if (toLoad.has(name)) {
    return;
  }
  const pkg_info = API.packages[name];
  if (!pkg_info) {
    throw new Error(`No known package with name '${name}'`);
  }
  if (pkg_info.shared_library) {
    toLoadShared.set(name, DEFAULT_CHANNEL);
  } else {
    toLoad.set(name, DEFAULT_CHANNEL);
  }
  if (loadedPackages[name] !== void 0) {
    return;
  }
  for (let dep_name of pkg_info.depends) {
    addPackageToLoad(dep_name, toLoad, toLoadShared);
  }
}
function recursiveDependencies(names, errorCallback) {
  const toLoad = /* @__PURE__ */ new Map();
  const toLoadShared = /* @__PURE__ */ new Map();
  for (let name of names) {
    const pkgname = _uri_to_package_name(name);
    if (pkgname === void 0) {
      addPackageToLoad(name, toLoad, toLoadShared);
      continue;
    }
    if (toLoad.has(pkgname) && toLoad.get(pkgname) !== name) {
      errorCallback(`Loading same package ${pkgname} from ${name} and ${toLoad.get(pkgname)}`);
      continue;
    }
    toLoad.set(pkgname, name);
  }
  return [toLoad, toLoadShared];
}
async function downloadPackage(name, channel) {
  let file_name;
  if (channel === DEFAULT_CHANNEL) {
    if (!(name in API.packages)) {
      throw new Error(`Internal error: no entry for package named ${name}`);
    }
    file_name = API.packages[name].file_name;
  } else {
    file_name = channel;
  }
  return await _loadBinaryFile(baseURL, file_name);
}
async function installPackage(name, buffer) {
  let pkg = API.packages[name];
  if (!pkg) {
    pkg = {
      file_name: ".whl",
      install_dir: "site",
      shared_library: false,
      depends: [],
      imports: []
    };
  }
  const filename = pkg.file_name;
  const dynlibs = API.package_loader.unpack_buffer.callKwargs({
    buffer,
    filename,
    target: pkg.install_dir,
    calculate_dynlibs: true
  });
  for (const dynlib of dynlibs) {
    await loadDynlib(dynlib, pkg.shared_library);
  }
  loadedPackages[name] = pkg;
}
function createLock() {
  let _lock = Promise.resolve();
  async function acquireLock() {
    const old_lock = _lock;
    let releaseLock;
    _lock = new Promise((resolve) => releaseLock = resolve);
    await old_lock;
    return releaseLock;
  }
  return acquireLock;
}
var acquireDynlibLock = createLock();
async function loadDynlib(lib, shared) {
  const node = Module.FS.lookupPath(lib).node;
  let byteArray;
  if (node.mount.type == Module.FS.filesystems.MEMFS) {
    byteArray = Module.FS.filesystems.MEMFS.getFileDataAsTypedArray(Module.FS.lookupPath(lib).node);
  } else {
    byteArray = Module.FS.readFile(lib);
  }
  const releaseDynlibLock = await acquireDynlibLock();
  try {
    const module = await Module.loadWebAssemblyModule(byteArray, {
      loadAsync: true,
      nodelete: true,
      allowUndefined: true
    });
    Module.preloadedWasm[lib] = module;
    Module.preloadedWasm[lib.split("/").pop()] = module;
    if (shared) {
      Module.loadDynamicLibrary(lib, {
        global: true,
        nodelete: true
      });
    }
  } catch (e) {
    if (e.message.includes("need to see wasm magic number")) {
      console.warn(`Failed to load dynlib ${lib}. We probably just tried to load a linux .so file or something.`);
      return;
    }
    throw e;
  } finally {
    releaseDynlibLock();
  }
}
Tests.loadDynlib = loadDynlib;
var acquirePackageLock = createLock();
async function loadPackage(names, messageCallback, errorCallback) {
  messageCallback = messageCallback || console.log;
  errorCallback = errorCallback || console.error;
  if (isPyProxy(names)) {
    names = names.toJs();
  }
  if (!Array.isArray(names)) {
    names = [names];
  }
  const [toLoad, toLoadShared] = recursiveDependencies(names, errorCallback);
  for (const [pkg, uri] of [...toLoad, ...toLoadShared]) {
    const loaded = loadedPackages[pkg];
    if (loaded === void 0) {
      continue;
    }
    toLoad.delete(pkg);
    toLoadShared.delete(pkg);
    if (loaded === uri || uri === DEFAULT_CHANNEL) {
      messageCallback(`${pkg} already loaded from ${loaded}`);
    } else {
      errorCallback(`URI mismatch, attempting to load package ${pkg} from ${uri} while it is already loaded from ${loaded}. To override a dependency, load the custom package first.`);
    }
  }
  if (toLoad.size === 0 && toLoadShared.size === 0) {
    messageCallback("No new packages to load");
    return;
  }
  const packageNames = [...toLoad.keys(), ...toLoadShared.keys()].join(", ");
  const releaseLock = await acquirePackageLock();
  try {
    messageCallback(`Loading ${packageNames}`);
    const sharedLibraryLoadPromises = {};
    const packageLoadPromises = {};
    for (const [name, channel] of toLoadShared) {
      if (loadedPackages[name]) {
        toLoadShared.delete(name);
        continue;
      }
      sharedLibraryLoadPromises[name] = downloadPackage(name, channel);
    }
    for (const [name, channel] of toLoad) {
      if (loadedPackages[name]) {
        toLoad.delete(name);
        continue;
      }
      packageLoadPromises[name] = downloadPackage(name, channel);
    }
    const loaded = [];
    const failed = {};
    const sharedLibraryInstallPromises = {};
    const packageInstallPromises = {};
    for (const [name, channel] of toLoadShared) {
      sharedLibraryInstallPromises[name] = sharedLibraryLoadPromises[name].then(async (buffer) => {
        await installPackage(name, buffer);
        loaded.push(name);
        loadedPackages[name] = channel;
      }).catch((err) => {
        console.warn(err);
        failed[name] = err;
      });
    }
    await Promise.all(Object.values(sharedLibraryInstallPromises));
    for (const [name, channel] of toLoad) {
      packageInstallPromises[name] = packageLoadPromises[name].then(async (buffer) => {
        await installPackage(name, buffer);
        loaded.push(name);
        loadedPackages[name] = channel;
      }).catch((err) => {
        console.warn(err);
        failed[name] = err;
      });
    }
    await Promise.all(Object.values(packageInstallPromises));
    Module.reportUndefinedSymbols();
    if (loaded.length > 0) {
      const successNames = loaded.join(", ");
      messageCallback(`Loaded ${successNames}`);
    }
    if (Object.keys(failed).length > 0) {
      const failedNames = Object.keys(failed).join(", ");
      messageCallback(`Failed to load ${failedNames}`);
      for (const [name, err] of Object.entries(failed)) {
        console.warn(`The following error occurred while loading ${name}:`);
        console.error(err);
      }
    }
    API.importlib.invalidate_caches();
  } finally {
    releaseLock();
  }
}
var loadedPackages = {};

// node_modules/pyodide/error_handling.gen.ts
var import_error_stack_parser = __toESM(require_error_stack_parser(), 1);
API.dump_traceback = function() {
  const fd_stdout = 1;
  Module.__Py_DumpTraceback(fd_stdout, Module._PyGILState_GetThisThreadState());
};
function ensureCaughtObjectIsError(e) {
  if (typeof e === "string") {
    e = new Error(e);
  } else if (typeof e !== "object" || e === null || typeof e.stack !== "string" || typeof e.message !== "string") {
    let msg = `A value of type ${typeof e} with tag ${Object.prototype.toString.call(e)} was thrown as an error!`;
    try {
      msg += `
String interpolation of the thrown value gives """${e}""".`;
    } catch (e2) {
      msg += `
String interpolation of the thrown value fails.`;
    }
    try {
      msg += `
The thrown value's toString method returns """${e.toString()}""".`;
    } catch (e2) {
      msg += `
The thrown value's toString method fails.`;
    }
    e = new Error(msg);
  }
  return e;
}
var fatal_error_occurred = false;
API.fatal_error = function(e) {
  if (e && e.pyodide_fatal_error) {
    return;
  }
  if (fatal_error_occurred) {
    console.error("Recursive call to fatal_error. Inner error was:");
    console.error(e);
    return;
  }
  if (typeof e === "number") {
    e = convertCppException(e);
  } else {
    e = ensureCaughtObjectIsError(e);
  }
  e.pyodide_fatal_error = true;
  fatal_error_occurred = true;
  console.error("Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers.");
  console.error("The cause of the fatal error was:");
  if (API.inTestHoist) {
    console.error(e.toString());
    console.error(e.stack);
  } else {
    console.error(e);
  }
  try {
    API.dump_traceback();
    for (let key of Object.keys(API.public_api)) {
      if (key.startsWith("_") || key === "version") {
        continue;
      }
      Object.defineProperty(API.public_api, key, {
        enumerable: true,
        configurable: true,
        get: () => {
          throw new Error("Pyodide already fatally failed and can no longer be used.");
        }
      });
    }
    if (API.on_fatal) {
      API.on_fatal(e);
    }
  } catch (err2) {
    console.error("Another error occurred while handling the fatal error:");
    console.error(err2);
  }
  throw e;
};
var CppException = class extends Error {
  constructor(ty, msg) {
    super(msg);
    this.ty = ty;
  }
};
Object.defineProperty(CppException.prototype, "name", {
  get() {
    return `${this.constructor.name} ${this.ty}`;
  }
});
function cppExceptionInfo(ptr) {
  const base_exception_type = Module._exc_type();
  const ei = new Module.ExceptionInfo(ptr);
  const caught_exception_type = ei.get_type();
  const stackTop = Module.stackSave();
  const exceptionThrowBuf = Module.stackAlloc(4);
  Module.HEAP32[exceptionThrowBuf / 4] = ptr;
  const exc_type_name = Module.demangle(Module.UTF8ToString(Module._exc_typename(caught_exception_type)));
  const is_exception_subclass = !!Module.___cxa_can_catch(base_exception_type, caught_exception_type, exceptionThrowBuf);
  const adjusted_ptr = Module.HEAP32[exceptionThrowBuf / 4];
  Module.stackRestore(stackTop);
  return [exc_type_name, is_exception_subclass, adjusted_ptr];
}
function convertCppException(ptr) {
  const [exc_type_name, is_exception_subclass, adjusted_ptr] = cppExceptionInfo(ptr);
  let msg;
  if (is_exception_subclass) {
    const msgPtr = Module._exc_what(adjusted_ptr);
    msg = Module.UTF8ToString(msgPtr);
  } else {
    msg = `The exception is an object of type ${exc_type_name} at address ${ptr} which does not inherit from std::exception`;
  }
  return new CppException(exc_type_name, msg);
}
Tests.convertCppException = convertCppException;
function isPyodideFrame(frame) {
  const fileName = frame.fileName || "";
  if (fileName.includes("pyodide.asm")) {
    return true;
  }
  if (fileName.includes("wasm-function")) {
    return true;
  }
  if (!fileName.includes("pyodide.js")) {
    return false;
  }
  let funcName = frame.functionName || "";
  if (funcName.startsWith("Object.")) {
    funcName = funcName.slice("Object.".length);
  }
  if (funcName in API.public_api && funcName !== "PythonError") {
    frame.functionName = funcName;
    return false;
  }
  return true;
}
function isErrorStart(frame) {
  if (!isPyodideFrame(frame)) {
    return false;
  }
  const funcName = frame.functionName;
  return funcName === "PythonError" || funcName === "new_error";
}
Module.handle_js_error = function(e) {
  if (e && e.pyodide_fatal_error) {
    throw e;
  }
  if (e instanceof Module._PropagatePythonError) {
    return;
  }
  let restored_error = false;
  if (e instanceof API.PythonError) {
    restored_error = Module._restore_sys_last_exception(e.__error_address);
  }
  let stack;
  let weirdCatch;
  try {
    stack = import_error_stack_parser.default.parse(e);
  } catch (_) {
    weirdCatch = true;
  }
  if (weirdCatch) {
    e = ensureCaughtObjectIsError(e);
  }
  if (!restored_error) {
    let eidx = Hiwire.new_value(e);
    let err = Module._JsProxy_create(eidx);
    Module._set_error(err);
    Module._Py_DecRef(err);
    Hiwire.decref(eidx);
  }
  if (weirdCatch) {
    return;
  }
  if (isErrorStart(stack[0])) {
    while (isPyodideFrame(stack[0])) {
      stack.shift();
    }
  }
  for (const frame of stack) {
    if (isPyodideFrame(frame)) {
      break;
    }
    const funcnameAddr = Module.stringToNewUTF8(frame.functionName || "???");
    const fileNameAddr = Module.stringToNewUTF8(frame.fileName || "???.js");
    Module.__PyTraceback_Add(funcnameAddr, fileNameAddr, frame.lineNumber);
    Module._free(funcnameAddr);
    Module._free(fileNameAddr);
  }
};
var PythonError = class extends Error {
  constructor(message, error_address) {
    const oldLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = Infinity;
    super(message);
    Error.stackTraceLimit = oldLimit;
    this.__error_address = error_address;
  }
};
Object.defineProperty(PythonError.prototype, "name", {
  value: PythonError.name
});
API.PythonError = PythonError;
var _PropagatePythonError = class extends Error {
  constructor() {
    API.fail_test = true;
    super("If you are seeing this message, an internal Pyodide error has occurred. Please report it to the Pyodide maintainers.");
  }
};
Object.defineProperty(_PropagatePythonError.prototype, "name", {
  value: _PropagatePythonError.name
});
Module._PropagatePythonError = _PropagatePythonError;

// node_modules/pyodide/api.ts
var pyodide_py;
var globals;
var version = "";
var runPythonPositionalGlobalsDeprecationWarned = false;
function runPython(code, options = {}) {
  if (API.isPyProxy(options)) {
    options = { globals: options };
    if (!runPythonPositionalGlobalsDeprecationWarned) {
      console.warn("Passing a PyProxy as the second argument to runPython is deprecated and will be removed in v0.21. Use 'runPython(code, {globals : some_dict})' instead.");
      runPythonPositionalGlobalsDeprecationWarned = true;
    }
  }
  if (!options.globals) {
    options.globals = API.globals;
  }
  return API.pyodide_py.eval_code(code, options.globals);
}
API.runPython = runPython;
async function loadPackagesFromImports(code, messageCallback, errorCallback) {
  let pyimports = API.pyodide_py.find_imports(code);
  let imports;
  try {
    imports = pyimports.toJs();
  } finally {
    pyimports.destroy();
  }
  if (imports.length === 0) {
    return;
  }
  let packageNames = API._import_name_to_package_name;
  let packages = /* @__PURE__ */ new Set();
  for (let name of imports) {
    if (packageNames.has(name)) {
      packages.add(packageNames.get(name));
    }
  }
  if (packages.size) {
    await loadPackage(Array.from(packages), messageCallback, errorCallback);
  }
}
async function runPythonAsync(code, options = {}) {
  if (API.isPyProxy(options)) {
    options = { globals: options };
    if (!runPythonPositionalGlobalsDeprecationWarned) {
      console.warn("Passing a PyProxy as the second argument to runPythonAsync is deprecated and will be removed in v0.21. Use 'runPythonAsync(code, {globals : some_dict})' instead.");
      runPythonPositionalGlobalsDeprecationWarned = true;
    }
  }
  if (!options.globals) {
    options.globals = API.globals;
  }
  return await API.pyodide_py.eval_code_async(code, options.globals);
}
API.runPythonAsync = runPythonAsync;
function registerJsModule(name, module) {
  API.pyodide_py.register_js_module(name, module);
}
function registerComlink(Comlink) {
  API._Comlink = Comlink;
}
function unregisterJsModule(name) {
  API.pyodide_py.unregister_js_module(name);
}
function toPy(obj, {
  depth,
  defaultConverter
} = { depth: -1 }) {
  switch (typeof obj) {
    case "string":
    case "number":
    case "boolean":
    case "bigint":
    case "undefined":
      return obj;
  }
  if (!obj || API.isPyProxy(obj)) {
    return obj;
  }
  let obj_id = 0;
  let py_result = 0;
  let result = 0;
  try {
    obj_id = Hiwire.new_value(obj);
    try {
      py_result = Module.js2python_convert(obj_id, { depth, defaultConverter });
    } catch (e) {
      if (e instanceof Module._PropagatePythonError) {
        Module._pythonexc2js();
      }
      throw e;
    }
    if (Module._JsProxy_Check(py_result)) {
      return obj;
    }
    result = Module._python2js(py_result);
    if (result === 0) {
      Module._pythonexc2js();
    }
  } finally {
    Hiwire.decref(obj_id);
    Module._Py_DecRef(py_result);
  }
  return Hiwire.pop_value(result);
}
function pyimport(mod_name) {
  return API.importlib.import_module(mod_name);
}
var unpackArchivePositionalExtractDirDeprecationWarned = false;
function unpackArchive(buffer, format, options = {}) {
  if (typeof options === "string") {
    if (!unpackArchivePositionalExtractDirDeprecationWarned) {
      console.warn("Passing a string as the third argument to unpackArchive is deprecated and will be removed in v0.21. Instead use { extract_dir : 'some_path' }");
      unpackArchivePositionalExtractDirDeprecationWarned = true;
    }
    options = { extractDir: options };
  }
  let extract_dir = options.extractDir;
  API.package_loader.unpack_buffer.callKwargs({
    buffer,
    format,
    extract_dir
  });
}
API.saveState = () => API.pyodide_py._state.save_state();
API.restoreState = (state) => API.pyodide_py._state.restore_state(state);
function setInterruptBuffer(interrupt_buffer) {
  Module.HEAP8[Module._Py_EMSCRIPTEN_SIGNAL_HANDLING] = !!interrupt_buffer;
  Module.Py_EmscriptenSignalBuffer = interrupt_buffer;
}
function checkInterrupt() {
  if (Module.__PyErr_CheckSignals()) {
    Module._pythonexc2js();
  }
}
var FS;
function makePublicAPI() {
  FS = Module.FS;
  let namespace = {
    globals,
    FS,
    pyodide_py,
    version,
    loadPackage,
    loadPackagesFromImports,
    loadedPackages,
    isPyProxy,
    runPython,
    runPythonAsync,
    registerJsModule,
    unregisterJsModule,
    setInterruptBuffer,
    checkInterrupt,
    toPy,
    pyimport,
    unpackArchive,
    registerComlink,
    PythonError,
    PyBuffer,
    _module: Module,
    _api: API
  };
  API.public_api = namespace;
  return namespace;
}

// node_modules/pyodide/pyodide.ts
var runPythonInternal_dict;
API.runPythonInternal = function(code) {
  return API._pyodide._base.eval_code(code, runPythonInternal_dict);
};
function wrapPythonGlobals(globals_dict, builtins_dict) {
  return new Proxy(globals_dict, {
    get(target, symbol) {
      if (symbol === "get") {
        return (key) => {
          let result = target.get(key);
          if (result === void 0) {
            result = builtins_dict.get(key);
          }
          return result;
        };
      }
      if (symbol === "has") {
        return (key) => target.has(key) || builtins_dict.has(key);
      }
      return Reflect.get(target, symbol);
    }
  });
}
function unpackPyodidePy(pyodide_py_tar) {
  const fileName = "/pyodide_py.tar";
  let stream = Module.FS.open(fileName, "w");
  Module.FS.write(stream, pyodide_py_tar, 0, pyodide_py_tar.byteLength, void 0, true);
  Module.FS.close(stream);
  const code_ptr = Module.stringToNewUTF8(`
from sys import version_info
pyversion = f"python{version_info.major}.{version_info.minor}"
import shutil
shutil.unpack_archive("/pyodide_py.tar", f"/lib/{pyversion}/site-packages/")
del shutil
import importlib
importlib.invalidate_caches()
del importlib
    `);
  let errcode = Module._PyRun_SimpleString(code_ptr);
  if (errcode) {
    throw new Error("OOPS!");
  }
  Module._free(code_ptr);
  Module.FS.unlink(fileName);
}
function finalizeBootstrap(config) {
  runPythonInternal_dict = API._pyodide._base.eval_code("{}");
  API.importlib = API.runPythonInternal("import importlib; importlib");
  let import_module6 = API.importlib.import_module;
  API.sys = import_module6("sys");
  API.sys.path.insert(0, config.homedir);
  let globals2 = API.runPythonInternal("import __main__; __main__.__dict__");
  let builtins = API.runPythonInternal("import builtins; builtins.__dict__");
  API.globals = wrapPythonGlobals(globals2, builtins);
  let importhook = API._pyodide._importhook;
  importhook.register_js_finder();
  importhook.register_js_module("js", config.jsglobals);
  let pyodide = makePublicAPI();
  importhook.register_js_module("pyodide_js", pyodide);
  API.pyodide_py = import_module6("pyodide");
  API.package_loader = import_module6("pyodide._package_loader");
  API.version = API.pyodide_py.__version__;
  pyodide.pyodide_py = API.pyodide_py;
  pyodide.version = API.version;
  pyodide.globals = API.globals;
  return pyodide;
}
function calculateIndexURL() {
  let err;
  try {
    throw new Error();
  } catch (e) {
    err = e;
  }
  const fileName = import_error_stack_parser2.default.parse(err)[0].fileName;
  return fileName.slice(0, fileName.lastIndexOf("/"));
}
async function loadPyodide(options = {}) {
  if (loadPyodide.inProgress) {
    throw new Error("Pyodide is already loading.");
  }
  if (!options.indexURL) {
    options.indexURL = calculateIndexURL();
  }
  loadPyodide.inProgress = true;
  const default_config = {
    fullStdLib: true,
    jsglobals: globalThis,
    stdin: globalThis.prompt ? globalThis.prompt : void 0,
    homedir: "/home/pyodide"
  };
  let config = Object.assign(default_config, options);
  if (!config.indexURL.endsWith("/")) {
    config.indexURL += "/";
  }
  await initNodeModules();
  let packageIndexReady = initializePackageIndex(config.indexURL);
  let pyodide_py_tar_promise = _loadBinaryFile(config.indexURL, "pyodide_py.tar");
  setStandardStreams(config.stdin, config.stdout, config.stderr);
  setHomeDirectory(config.homedir);
  let moduleLoaded = new Promise((r) => Module.postRun = r);
  Module.locateFile = (path) => config.indexURL + path;
  const scriptSrc = `${config.indexURL}pyodide.asm.js`;
  await loadScript(scriptSrc);
  await _createPyodideModule(Module);
  await moduleLoaded;
  Module.locateFile = (path) => {
    throw new Error("Didn't expect to load any more file_packager files!");
  };
  const pyodide_py_tar = await pyodide_py_tar_promise;
  unpackPyodidePy(pyodide_py_tar);
  Module._pyodide_init();
  let pyodide = finalizeBootstrap(config);
  await packageIndexReady;
  if (config.fullStdLib) {
    await loadPackage(["distutils"]);
  }
  pyodide.runPython("print('Python initialization complete')");
  return pyodide;
}
export {
  PyBuffer,
  loadPyodide
};
