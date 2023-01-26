import * as litLibrary from 'lit';
import { LitElement, TemplateResult } from 'lit';
import * as lit_html from 'lit-html';
import { Methods } from 'console-feed-modern/lib/definitions/Methods';
import * as asyncAppend_js from 'lit/directives/async-append.js';
import * as asyncReplace_js from 'lit/directives/async-replace.js';
import * as cache_js from 'lit/directives/cache.js';
import * as classMap_js from 'lit/directives/class-map.js';
import * as guard_js from 'lit/directives/guard.js';
import * as ifDefined_js from 'lit/directives/if-defined.js';
import * as live_js from 'lit/directives/live.js';
import * as ref_js from 'lit/directives/ref.js';
import * as repeat_js from 'lit/directives/repeat.js';
import * as styleMap_js from 'lit/directives/style-map.js';
import * as templateContent_js from 'lit/directives/template-content.js';
import * as unsafeHtml_js from 'lit/directives/unsafe-html.js';
import * as unsafeSvg_js from 'lit/directives/unsafe-svg.js';
import * as until_js from 'lit/directives/until.js';
import * as litDecorators from 'lit/decorators';
import katex from 'katex';
import * as YAML from 'js-yaml';
import mdlib from 'markdown-it';
import * as Popper from '@popperjs/core';
import { StarboardRichEditorElement } from 'starboard-rich-editor';

function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

declare type MessageMethod = Methods | "result" | "command";
interface Message {
    method: MessageMethod;
    data: any[];
}
declare type MessageCallback = (message: Message) => void;
declare class ConsoleCatcher {
    private currentHook?;
    /**
     * The console's original log/debug/etc methods, so we can still
     * log unhooked.
     */
    private originalMethods;
    constructor(console: Console);
    hook(callback: MessageCallback): void;
    unhook(callback: MessageCallback): void;
    /**
     * Can be used to circumvent the console catcher.
     */
    getRawConsoleMethods(): {
        log: (...v: any) => any;
        debug: (...v: any) => any;
        info: (...v: any) => any;
        warn: (...v: any) => any;
        error: (...v: any) => any;
        table: (...v: any) => any;
        clear: (...v: any) => any;
        time: (...v: any) => any;
        timeEnd: (...v: any) => any;
        count: (...v: any) => any;
        assert: (...v: any) => any;
    };
}

declare abstract class BaseCellHandler implements CellHandler {
    cell: Cell;
    runtime: Runtime;
    constructor(cell: Cell, runtime: Runtime);
    abstract attach(param: CellHandlerAttachParameters): void;
    run(): Promise<any>;
    dispose(): Promise<void>;
    focusEditor(_opts: {
        position?: "start" | "end";
    }): void;
    clear(): void;
}

declare class CellElement extends LitElement {
    private topElement;
    private topControlsElement;
    private bottomElement;
    private bottomControlsElement;
    cellTypeDefinition: CellTypeDefinition;
    cellHandler: BaseCellHandler;
    cell: Cell;
    private isCurrentlyRunning;
    isBeingMoved: boolean;
    runtime: Runtime;
    constructor(cell: Cell, runtime: Runtime);
    createRenderRoot(): this;
    connectedCallback(): void;
    firstUpdated(changedProperties: any): void;
    run(): Promise<void>;
    focusEditor(opts: {
        position?: "start" | "end";
    }): void;
    clear(): void;
    changeCellType(newCellType: string | string[]): boolean;
    /**
     * Toggles the property between `true` and not present.
     * If force is passed it is deleted in case you pass `false`, and set to `true` in case of `true`.
     */
    private toggleProperty;
    private onTopGutterButtonClick;
    render(): lit_html.TemplateResult<1>;
    disconnectedCallback(): void;
}

declare global {
    interface Window {
        starboardEditUrl?: string;
    }
}
declare class StarboardNotebookElement extends LitElement {
    private runtime;
    config?: RuntimeConfig;
    private cellsParentElement;
    private sourceModalElement;
    private sourceModal;
    createRenderRoot(): this;
    initialRunStarted: boolean;
    connectedCallback(): void;
    loadPlugins(): Promise<void>;
    notebookInitialize(): Promise<void>;
    firstUpdated(changedProperties: any): void;
    moveCellDomElement(fromIndex: number, toIndex: number): void;
    performUpdate(): void;
    showSourceModal(): void;
    render(): lit_html.TemplateResult<1>;
}

declare type SupportedLanguage = "javascript" | "typescript" | "markdown" | "css" | "html" | "python" | "latex";
declare type WordWrapSetting = "off" | "on";
/**
 * StarboardTextEditor abstracts over different text editors that are loaded dynamically.
 * The user can choose: monaco for desktop devices, or a more minimal editor for mobile phones.
 *
 * TODO: this file needs a big cleanup..
 */
declare class StarboardTextEditor extends LitElement {
    private editorMountpoint;
    private cell;
    private runtime;
    private opts;
    editorInstance?: any;
    constructor(cell: Cell, runtime: Runtime, opts?: {
        language?: SupportedLanguage;
        wordWrap?: WordWrapSetting;
    });
    createRenderRoot(): this;
    connectedCallback(): void;
    handleDblClick(): void;
    firstUpdated(changedProperties: any): void;
    initEditor(): Promise<void>;
    switchToCodeMirrorEditor(): void;
    switchToMonacoEditor(): void;
    copyCellText(): void;
    render(): lit_html.TemplateResult<1>;
    focus(): void;
    setCaretPosition(position: "start" | "end"): void;
    dispose(): void;
}

declare class ConsoleOutputElement extends LitElement {
    private logHook;
    private updatePending;
    logs: any[];
    constructor();
    createRenderRoot(): this;
    hook(consoleCatcher: ConsoleCatcher): void;
    unhook(consoleCatcher: ConsoleCatcher): void;
    unhookAfterOneTick(consoleCatcher: ConsoleCatcher): Promise<unknown>;
    addEntry(msg: Message): void;
    render(): lit_html.TemplateResult<1>;
}

var litDirectives = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null
}, [asyncAppend_js, asyncReplace_js, cache_js, classMap_js, guard_js, ifDefined_js, live_js, ref_js, repeat_js, styleMap_js, templateContent_js, unsafeHtml_js, unsafeSvg_js, until_js]));

declare global {
    interface Window {
        eval: (command: string) => any;
    }
}
interface RunResult {
    error: boolean;
    code: string;
    value?: any;
}
declare class JavascriptEvaluator {
    run(code: string): Promise<RunResult>;
    precompile(code: string): Promise<string>;
}

/**
 * Wraps given cell in a proxy. This proxy will call the changedCallback whenever the cell changes in
 * such a way that would change the text representation of the cell.
 * @param cell
 * @param changedCallback
 */
declare function createCellProxy(cell: Cell, changedCallback: () => void): Cell;

declare function notebookContentToText(nb: NotebookContent): string;
declare function cellToText(cell: Cell): string;

/**
 * Precompile takes a cell's code as a string, parses it and transforms it.
 * In particular it wraps everything in an async function, handles the var->global magic.
 */
declare function precompileJavascriptCode(content: string): Promise<string>;

declare type RegistryEventType = "register" | "deregister";
declare type RegistryEvent<S, T> = {
    type: RegistryEventType;
    key: S;
    value: T;
};
declare type MapRegistryListenerFunction<S, T> = (event: RegistryEvent<S, T>) => void;
/**
 * A registry here is just a wrapper around a Map. It has a register function that calls set,
 * but also emits an event for internal use.
 */
declare class MapRegistry<S, T> {
    protected map: Map<S, T>;
    private handlers;
    subscribe(handler: MapRegistryListenerFunction<S, T>): void;
    unsubscribe(handler: MapRegistryListenerFunction<S, T>): void;
    private notifyHandlers;
    get(key: S): T | undefined;
    /**
     * This does *not* trigger a register event, so cells already present with this cell type will not switch automatically.
     * Use register instead.
     */
    set(key: S | Array<S>, value: T): void;
    has(key: S): boolean;
    keys(): IterableIterator<S>;
    values(): IterableIterator<T>;
    register(key: S | Array<S>, value: T): void;
    deregister(key: S): false | undefined;
    /**
     * Get the underlying Map
     */
    getMap(): Map<S, T>;
}

declare function renderIfHtmlOutput(val: any, intoElement: HTMLElement): boolean;

declare type OutboundNotebookMessage = ContentUpdateMessage | ReadySignalMessage | SaveMessage | ResizeMessage;
/**
 * Sent from notebook to parent webpage when the textual representation of the notebook changes in any way.
 * E.g. whenever a character is typed.
 *
 * There is some debouncing/rate limiting to ensure this doesn't fire too often.
 */
declare type ContentUpdateMessage = NotebookMessage<"NOTEBOOK_CONTENT_UPDATE", {
    content: NotebookMessageContentData;
}>;
/**
 * Sent from notebook when it is ready to receive the initial content.
 */
declare type ReadySignalMessage = NotebookMessage<"NOTEBOOK_READY_SIGNAL", {
    /**
     * Version of these communication messages, currently always 1.
     */
    communicationFormatVersion: 1;
    /**
     * The content at the time of the ready signal, this will likely be an empty string, but can be
     * actual content in case the notebook content gets set from within the iframe.
     */
    content: NotebookMessageContentData;
    runtime: {
        name: "starboard-notebook";
        /**
         * The version of Starboard Notebook
         */
        version: string;
    };
}>;
/**
 * Sent from notebook to parent webpage when the user initiates a save (e.g. by pressing CTRL+S on Windows).
 */
declare type SaveMessage = NotebookMessage<"NOTEBOOK_SAVE_REQUEST", {
    content: NotebookMessageContentData;
}>;
declare type ResizeMessage = NotebookMessage<"NOTEBOOK_RESIZE_REQUEST", {
    width: number;
    height: number;
}>;

/**
 * Description of the content of the notebook
 */
declare type NotebookMessageContentData = string;
/**
 * The base type of a message sent to or from an iframe containing a Starboard Notebook.
 */
declare type NotebookMessage<Name extends string, PayloadType> = {
    type: Name;
    payload: PayloadType;
};

interface StarboardPlugin<PluginRegisterOpts = any, PluginExports extends Record<string, any> | undefined = any> {
    /**
     * Unique identifier for this plugin.
     */
    id: string;
    metadata: {
        /**
         * Name of the plugin (for humans)
         */
        name: string;
        version?: string;
    };
    exports: PluginExports;
    /**
     * Called automatically when the plugin gets registered, use this to create any DOM elements or register any cell types.
     */
    register(runtime: Runtime, opts?: PluginRegisterOpts): Promise<void> | void;
    [key: string]: any;
}

declare function textToNotebookContent(text: string): NotebookContent;

declare global {
    interface HTMLElementEventMap {
        "sb:run_cell": RunCellEvent;
        "sb:run_all_cells": RunCellEvent;
        "sb:insert_cell": InsertCellEvent;
        "sb:change_cell_type": ChangeCellTypeEvent;
        "sb:set_cell_property": SetCellPropertyEvent;
        "sb:remove_cell": RemoveCellEvent;
        "sb:reset_cell": ResetCellEvent;
        "sb:focus_cell": FocusCellEvent;
        "sb:clear_cell": ClearCellEvent;
        "sb:move_cell": MoveCellEvent;
        "sb:save": SaveEvent;
    }
}
declare type InsertCellOptions = {
    adjacentCellId?: string;
    position: "before" | "after" | "notebookEnd";
    data?: Partial<Cell>;
};
declare type InsertCellEvent = CustomEvent<InsertCellOptions>;
declare type RunCellOptions = {
    id: string;
};
declare type RunCellEvent = CustomEvent<RunCellOptions>;
declare type RemoveCellOptions = {
    id: string;
};
declare type RemoveCellEvent = CustomEvent<RemoveCellOptions>;
declare type ChangeCellTypeOptions = {
    id: string;
    newCellType: string;
};
declare type ChangeCellTypeEvent = CustomEvent<ChangeCellTypeOptions>;
declare type SetCellPropertyOptions = {
    id: string;
    property: string;
    value: any;
};
declare type SetCellPropertyEvent = CustomEvent<SetCellPropertyOptions>;
declare type ResetCellOptions = {
    id: string;
};
/** Resets the given cell, recreating the entire thing. */
declare type ResetCellEvent = CustomEvent<ResetCellOptions>;
declare type FocusCellOptions = {
    id: string;
    focusTarget?: "previous" | "next";
};
declare type FocusCellEvent = CustomEvent<FocusCellOptions>;
declare type ClearCellOptions = {
    id: string;
};
declare type ClearCellEvent = CustomEvent<ClearCellOptions>;
declare type MoveCellOptions = {
    id: string;
    fromIndex: number;
    toIndex: number;
};
declare type MoveCellEvent = CustomEvent<MoveCellOptions>;
declare type SaveEvent = CustomEvent<Record<string, never>>;

declare function getMarkdownItWithDefaultPlugins(markdownitOpts?: mdlib.Options): {
    md: mdlib;
    katexLoaded: Promise<void>;
};

declare type AsyncResult<T, E = Error> = Promise<{
    ok: true;
    data: T;
} | {
    ok: false;
    status: number;
    error: E;
    detail?: string;
}>;
interface NotebookFilesystem {
    /**
     * Get a file or directory at a given path.
     * @returns The contents of the file. `null` corresponds to a directory
     */
    get(opts: {
        path: string;
    }): AsyncResult<string | null>;
    /**
     * Creates or replaces a file or directory at a given path.
     * @param opts.value The contents of the file. `null` corresponds to a directory
     */
    put(opts: {
        path: string;
        value: string | null;
    }): AsyncResult<undefined>;
    /**
     * Deletes a file or directory at a given path
     */
    delete(opts: {
        path: string;
    }): AsyncResult<undefined>;
    /**
     * Move a file or directory to a new path. Can be used for renaming
     */
    move(opts: {
        path: string;
        newPath: string;
    }): AsyncResult<undefined>;
    /**
     * List the names of the files and subdirectories in a directory.
     */
    listDirectory(opts: {
        path: string;
    }): AsyncResult<string[]>;
}

interface RuntimeControls {
    insertCell(opts: InsertCellOptions): string | false;
    removeCell(opts: RemoveCellOptions): boolean;
    changeCellType(opts: ChangeCellTypeOptions): boolean;
    setCellProperty(opts: SetCellPropertyOptions): boolean;
    resetCell(opts: ResetCellOptions): boolean;
    runCell(opts: RunCellOptions): boolean;
    focusCell(opts: FocusCellOptions): Promise<boolean>;
    clearCell(opts: ClearCellOptions): boolean;
    runAllCells(opts: {
        onlyRunOnLoad?: boolean;
        isInitialRun?: boolean;
    }): Promise<boolean>;
    clearAllCells(opts: Record<string, any>): void;
    moveCellToIndex(opts: {
        id: string;
        toIndex: number;
    }): boolean;
    moveCell(opts: {
        id: string;
        amount: number;
    }): boolean;
    /**
     * Requests a save operation from the parent iframe.
     */
    save(opts: any): boolean;
    /** To be called to indicate that the notebook content has changed */
    contentChanged(): void;
    /**
     * Send a message to the parent iframe through the iframeResizer library.
     * Optionally you can pass the only target origin you want the message to be sent to, see the iframeresizer docs.
     * Returns whether a listening parent iframe is present (and thus if the message could be sent).
     */
    sendMessage(message: OutboundNotebookMessage, opts?: {
        targetOrigin?: string;
    }): boolean;
    /**
     * @deprecated Use `runtime.controls` directly, these will emit DOM events.
     * Publish to the notebook event bus, used to propagate messages upwards such as "focus on the next cell".
     */
    emit(e: CellEvent): void;
    /**
     * The given callback will be called when the text representation of a cell changes.
     * @param id
     * @param callback
     */
    subscribeToCellChanges(id: string, callback: () => void): void;
    unsubscribeToCellChanges(id: string, callback: () => void): void;
    registerPlugin(plugin: StarboardPlugin, opts?: any): Promise<void>;
}
/**
 * These are exposed functions and libraries. They are exposed so that they can be easily used within notebooks or
 * by plugins or extensions (so they don't have to bundled again).
 */
interface RuntimeExports {
    templates: {
        cellControls: (c: ControlsDefinition) => TemplateResult | string;
        /** @deprecated */
        icons: {
            /** @deprecated */
            StarboardLogo: IconTemplate;
            /** @deprecated */
            AssetsAddedIcon: IconTemplate;
            /** @deprecated */
            DeleteIcon: IconTemplate;
            /** @deprecated */
            BooleanIcon: IconTemplate;
            /** @deprecated */
            ClockIcon: IconTemplate;
            /** @deprecated */
            PlayCircleIcon: IconTemplate;
            /** @deprecated */
            TextEditIcon: IconTemplate;
            /** @deprecated */
            GearsIcon: IconTemplate;
            /** @deprecated */
            LockClosedIcon: IconTemplate;
        };
    };
    elements: {
        StarboardTextEditor: typeof StarboardTextEditor;
        ConsoleOutputElement: typeof ConsoleOutputElement;
        StarboardRichEditorElement: typeof StarboardRichEditorElement;
    };
    /**
     * Starboard-notebook internal routines
     */
    core: {
        JavascriptEvaluator: typeof JavascriptEvaluator;
        ConsoleCatcher: typeof ConsoleCatcher;
        renderIfHtmlOutput: typeof renderIfHtmlOutput;
        createCellProxy: typeof createCellProxy;
        /** @deprecated: soon this won't be exported anymore. */
        getMarkdownItWithDefaultPlugins: typeof getMarkdownItWithDefaultPlugins;
        cellToText: typeof cellToText;
        notebookContentToText: typeof notebookContentToText;
        textToNotebookContent: typeof textToNotebookContent;
        precompileJavascriptCode: typeof precompileJavascriptCode;
    };
    /**
     * Libraries that are re-exported
     */
    libraries: {
        lit: typeof litLibrary;
        /** @deprecated WILL BE REMOVED SOON - you must upgrade to use `lit` instead. */
        LitHtml: typeof litLibrary;
        /** @deprecated WILL BE REMOVED SOON - you must upgrade to use `lit` instead. */
        LitElement: typeof litLibrary;
        litDirectives: typeof litDirectives;
        litDecorators: typeof litDecorators;
        MarkdownIt: typeof mdlib;
        YAML: typeof YAML;
        Popper: typeof Popper;
        /**
         * Libraries that are loaded asynchronously on demand.
         */
        async: {
            KaTeX: () => Promise<typeof katex>;
            StarboardPython: () => Promise<any>;
        };
    };
}
/**
 * Runtime is the main state/store for a notebook.
 */
interface Runtime {
    /**
     * The state of the notebook that exactly describes the text in the notebook.
     */
    content: NotebookContent;
    definitions: {
        /**
         * Map of registered cell types, indexed by cellType (e.g. "javascript").
         */
        cellTypes: MapRegistry<string, CellTypeDefinition>;
        /**
         * Map of registered cell properties, indexed by property name (e.g. "collapsed" or "runOnLoad").
         */
        cellProperties: MapRegistry<string, CellPropertyDefinition>;
    };
    /**
     * Contains HTML elements in this notebook runtime.
     */
    dom: {
        notebook: StarboardNotebookElement;
        cells: CellElement[];
        getCellById(id: string): CellElement | null;
    };
    /**
     * Used to coordinate listening to the console hook.
     */
    consoleCatcher: ConsoleCatcher;
    /**
     * Version of Starboard Notebook
     */
    version: string;
    /**
     * Name of the runtime.
     */
    name: "starboard-notebook";
    /**
     * "Settings" for the runtime itself.
     */
    config: RuntimeConfig;
    /**
     * Contains all actions that can be performed on the runtime
     */
    controls: RuntimeControls;
    exports: RuntimeExports;
    /**
     * Internal state, don't depend on this externally
     */
    internal: {
        listeners: {
            cellContentChanges: Map<string, (() => void)[]>;
        };
        /**
         * An optional filesystem that can be added by a plugin. Internal until we figure out the best way of dealing with this.
         */
        fs?: NotebookFilesystem;
    };
    /**
     * If plugins want to expose data or functionality this is a good place for it.
     */
    plugins: MapRegistry<string, any>;
}
/**
 * "Settings" for the runtime, these can be set from the surrounding webpage.
 */
interface RuntimeConfig {
    /**
     * Cell IDs written to the metadata of the cell for new cells if this is true, which causes them to be persisted.
     */
    persistCellIds: boolean;
    defaultTextEditor: "monaco" | "codemirror" | "";
    useCrossOriginIsolationServiceWorker?: boolean;
}

/**
 * Events that can be sent from the cell for central handling in the notebook component.
 */
declare type CellEvent = {
    id: string;
    type: "RUN_CELL";
    focus?: "previous" | "next";
    insertNewCell?: boolean;
} | {
    id: string;
    type: "INSERT_CELL";
    position: "before" | "after";
    data?: Partial<Cell>;
} | {
    id: string;
    type: "REMOVE_CELL";
} | {
    id: string;
    type: "CHANGE_CELL_TYPE";
    newCellType: string;
} | {
    id: string;
    type: "RESET_CELL";
} | {
    id: string;
    type: "FOCUS_CELL";
    focus?: "previous" | "next";
} | {
    id: string;
    type: "MOVE_CELL";
    amount: number;
} | {
    type: "SAVE";
};
/**
 * The backing data for an editor
 */
interface ContentContainer {
    textContent: string;
}
/**
 * The backing data for a cell, can be JSON serialized or converted to a notebook string.
 */
interface Cell extends ContentContainer {
    /**
     * An identifier such as "javascript" or "markdown" for Javascript and Markdown respectively.
     */
    cellType: string;
    textContent: string;
    metadata: {
        /**
         * The cell identifier, if it is present in the metadata it should be persisted between runs.
         */
        id?: string;
        properties: {
            run_on_load?: true;
            collapsed?: true;
            locked?: true;
            [key: string]: any;
        };
        [key: string]: any;
    };
    /**
     * Every cell has a unique ID, this is not persisted between runs.
     * It has to be unique within this notebook.
     */
    id: string;
}
interface PluginDependency {
    src: string;
    /**
     * Args passed into the `register` function of the plugin.
     */
    args?: any;
    async?: boolean;
}
interface NotebookMetadata {
    title?: string;
    /**
     * The subtitle description for the notebook, should be under 200 characters ideally.
     */
    description?: string;
    tags?: string[];
    starboard?: {
        notebook?: {
            format_version: 1;
            runtime_version: string;
        };
        plugins?: PluginDependency[];
        python?: {
            /**
             * Where to run python code, defaults to "pyodide_main_thread". "auto" switches based on the availability of SharedArrayBuffer and Atomics.
             */
            execution_mode?: "pyodide_webworker" | "pyodide_main_thread" | "auto";
        };
    };
    [key: string]: any;
}
/**
 * The entire state of a notebook that is to be persisted.
 */
interface NotebookContent {
    metadata: NotebookMetadata;
    cells: Cell[];
}
interface CellTypeDefinition {
    createHandler(cell: Cell, runtime: Runtime): CellHandler;
    /**
     * Name for human consumption, e.g. "Javascript"
     */
    name: string;
    /**
     * Identifiers for this cell type, can be a single value (e.g. "html") or multiple (e.g. ["javascript", "js"])
     * If multiple identifiers are defined, the first one is the preferred one.
     */
    cellType: string | string[];
    /**
     * Specify this to customize the cell creation interface. By default the name is shown at the top with a big button underneath.
     */
    createCellCreationInterface?: (runtime: Runtime, opts: {
        create: () => void;
    }) => CellCreationInterface;
}
/**
 * A CellHandler contains the actual logic of a cell.
 */
interface CellHandler {
    cell: Cell;
    runtime: Runtime;
    attach(param: CellHandlerAttachParameters): void;
    run(): Promise<any>;
    dispose(): Promise<void>;
    focusEditor(opts: {
        position?: "start" | "end";
    }): void;
    /**
     * Clear the output of the cell.
     */
    clear(): void;
}
interface CellCreationInterface {
    render(): string | TemplateResult | HTMLElement;
    getCellInit?(): Partial<Cell>;
    dispose?(): void;
}
interface CellHandlerAttachParameters {
    elements: CellElements;
}
interface CellElements {
    cell: CellElement;
    topElement: HTMLElement;
    bottomElement: HTMLElement;
    topControlsElement: HTMLElement;
    bottomControlsElement: HTMLElement;
}
declare type IconTemplate = string | ((iconOpts?: {
    width?: number;
    height?: number;
}) => TemplateResult | string);
interface ControlButton {
    icon: IconTemplate;
    tooltip: string;
    callback: (event: Event) => any;
}
interface ControlsDefinition {
    buttons: ControlButton[];
}
interface CellPropertyDefinition {
    /**
     * Identifier for the cell property, e.g. "collapsed" or "run_on_load"
     *
     * Must be a string without spaces or special characters, `snake_case` is recommended.
     */
    cellProperty: string;
    /**
     * Name for human consumption, e.g. "Collapse Cell"
     */
    name: string;
    icon: IconTemplate;
    textEnabled: string;
    textDisabled: string;
}

declare function setGlobalPythonOutputElement(el: HTMLElement | undefined): void;
/**
 * Initial setup for Python support, this includes only the synchronous parts (such as adding a stylesheet used for the output).
 * @returns
 */
declare function setupPythonSupport(): void;
declare function loadPyodide(runtime?: Runtime): Promise<string>;
declare function getPyodideLoadingStatus(): "unstarted" | "loading" | "ready";

declare function runStarboardPython(runtime: Runtime, codeToRun: string, renderOutputIntoElement: HTMLElement): Promise<any>;

declare type KernelSource = {
    type: "code";
    code: string;
} | {
    type: "url";
    url: string;
};

declare type StarboardPythonPluginOpts = {
    artifactsUrl?: string;
    workerSource?: KernelSource;
    runInMainThread?: boolean;
};
/**
 * Overwrite present options
 */
declare function updatePluginOptions(opts: Partial<StarboardPythonPluginOpts>): void;

declare function registerPython(runtime: Runtime): void;
declare type StarboardPluginExports = {
    getPyodideLoadingStatus: typeof getPyodideLoadingStatus;
    runStarboardPython: typeof runStarboardPython;
    setGlobalPythonOutputElement: typeof setGlobalPythonOutputElement;
    loadPyodide: typeof loadPyodide;
    updatePluginOptions: typeof updatePluginOptions;
};
declare const plugin: StarboardPlugin<StarboardPythonPluginOpts, StarboardPluginExports>;

export { StarboardPluginExports, getPyodideLoadingStatus, loadPyodide, plugin, registerPython, runStarboardPython, setGlobalPythonOutputElement, setupPythonSupport };
