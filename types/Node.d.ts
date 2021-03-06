import { Collection, Transform } from './Util';
import { SceneCanvas } from './Canvas';
import { Container } from './Container';
import { GetSet, Vector2d } from './types';
export declare const ids: {};
export declare const names: {};
export declare const _removeId: (id: string, node: any) => void;
export declare const _addName: (node: any, name: any) => void;
export declare const _removeName: (name: any, _id: any) => void;
export declare type Filter = (this: Node, imageData: ImageData) => void;
declare type globalCompositeOperationType = '' | 'source-over' | 'source-in' | 'source-out' | 'source-atop' | 'destination-over' | 'destination-in' | 'destination-out' | 'destination-atop' | 'lighter' | 'copy' | 'xor' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
export declare abstract class Node {
    _id: number;
    eventListeners: {};
    attrs: any;
    index: number;
    parent: Container;
    _cache: Map<string, any>;
    _lastPos: any;
    _attrsAffectingSize: string[];
    _filterUpToDate: boolean;
    _isUnderCache: boolean;
    children: Collection<Node>;
    nodeType: string;
    className: string;
    constructor(config: any);
    hasChildren(): boolean;
    getChildren(): Collection<Node>;
    _clearCache(attr: any): void;
    _getCache(attr: any, privateGetter: any): any;
    _getCanvasCache(): any;
    _clearSelfAndDescendantCache(attr?: any): void;
    clearCache(): this;
    cache(config: any): this;
    abstract drawScene(canvas?: any, top?: any, caching?: any, skipBuffer?: any): void;
    abstract drawHit(canvas?: any, top?: any, caching?: any, skipBuffer?: any): void;
    getClientRect(config?: {
        skipTransform?: boolean;
        skipShadow?: boolean;
        skipStroke?: boolean;
        relativeTo?: Container;
    }): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    _transformedRect(rect: any, top: any): {
        x: any;
        y: any;
        width: number;
        height: number;
    };
    _drawCachedSceneCanvas(context: any): void;
    _drawCachedHitCanvas(context: any): void;
    _getCachedSceneCanvas(): any;
    on(evtStr: any, handler: any): any;
    off(evtStr: any, callback?: any): this;
    dispatchEvent(evt: any): this;
    addEventListener(type: any, handler: any): this;
    removeEventListener(type: any): this;
    _delegate(event: any, selector: any, handler: any): void;
    remove(): this;
    _remove(): void;
    destroy(): this;
    getAttr(attr: any): any;
    getAncestors(): Collection<Node>;
    getAttrs(): any;
    setAttrs(config: any): this;
    isListening(): any;
    _isListening(): any;
    isVisible(): any;
    _isVisible(relativeTo: any): any;
    shouldDrawHit(): any;
    show(): this;
    hide(): this;
    getZIndex(): number;
    getAbsoluteZIndex(): number;
    getDepth(): number;
    setPosition(pos: any): this;
    getPosition(): {
        x: number;
        y: number;
    };
    getAbsolutePosition(top?: any): {
        x: number;
        y: number;
    };
    setAbsolutePosition(pos: any): this;
    _setTransform(trans: any): void;
    _clearTransform(): {
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        offsetX: number;
        offsetY: number;
        skewX: number;
        skewY: number;
    };
    move(change: any): this;
    _eachAncestorReverse(func: any, top: any): void;
    rotate(theta: any): this;
    moveToTop(): boolean;
    moveUp(): boolean;
    moveDown(): boolean;
    moveToBottom(): boolean;
    setZIndex(zIndex: any): false | this;
    getAbsoluteOpacity(): any;
    _getAbsoluteOpacity(): number;
    moveTo(newContainer: any): this;
    toObject(): any;
    toJSON(): string;
    getParent(): Container;
    findAncestors(selector: any, includeSelf: any, stopNode: any): any[];
    isAncestorOf(node: any): boolean;
    findAncestor(selector: any, includeSelf: any, stopNode: any): any;
    _isMatch(selector: any): boolean;
    getLayer(): any;
    getStage(): any;
    _getStage(): any;
    fire(eventType: any, evt: any, bubble?: any): this;
    getAbsoluteTransform(top?: any): any;
    _getAbsoluteTransform(top: any): Transform;
    getAbsoluteScale(top?: any): any;
    _getAbsoluteScale(top: any): {
        x: number;
        y: number;
    };
    getTransform(): any;
    _getTransform(): Transform;
    clone(obj: any): any;
    _toKonvaCanvas(config: any): SceneCanvas;
    toCanvas(config: any): HTMLCanvasElement;
    toDataURL(config: any): string;
    toImage(config: any): void;
    setSize(size: any): this;
    getSize(): {
        width: number;
        height: number;
    };
    getClassName(): string;
    getType(): string;
    getDragDistance(): any;
    _get(selector: any): this[];
    _off(type: any, name?: any, callback?: any): void;
    _fireChangeEvent(attr: any, oldVal: any, newVal: any): void;
    setId(id: any): this;
    setName(name: any): this;
    addName(name: any): this;
    hasName(name: any): boolean;
    removeName(name: any): this;
    setAttr(attr: any, val: any): this;
    _setAttr(key: any, val: any): void;
    _setComponentAttr(key: any, component: any, val: any): void;
    _fireAndBubble(eventType: any, evt: any, compareShape?: any): void;
    _fire(eventType: any, evt: any): void;
    draw(): this;
    startDrag(): void;
    _setDragPosition(evt?: any): void;
    stopDrag(): void;
    setDraggable(draggable: any): void;
    isDragging(): boolean;
    _listenDrag(): void;
    _dragChange(): void;
    _dragCleanup(): void;
    preventDefault: GetSet<boolean, this>;
    blue: GetSet<number, this>;
    brightness: GetSet<number, this>;
    contrast: GetSet<number, this>;
    blurRadius: GetSet<number, this>;
    green: GetSet<number, this>;
    hue: GetSet<number, this>;
    kaleidoscopeAngle: GetSet<number, this>;
    kaleidoscopePower: GetSet<number, this>;
    levels: GetSet<number, this>;
    noise: GetSet<number, this>;
    pixelSize: GetSet<number, this>;
    red: GetSet<number, this>;
    saturation: GetSet<number, this>;
    threshold: GetSet<number, this>;
    value: GetSet<number, this>;
    dragBoundFunc: GetSet<(pos: Vector2d) => Vector2d, this>;
    draggable: GetSet<boolean, this>;
    embossBlend: GetSet<boolean, this>;
    embossDirection: GetSet<string, this>;
    embossStrength: GetSet<number, this>;
    embossWhiteLevel: GetSet<number, this>;
    enhance: GetSet<number, this>;
    filters: GetSet<Filter[], this>;
    position: GetSet<Vector2d, this>;
    size: GetSet<{
        width: number;
        height: number;
    }, this>;
    id: GetSet<string, this>;
    listening: GetSet<boolean | 'inherit', this>;
    name: GetSet<string, this>;
    offset: GetSet<Vector2d, this>;
    offsetX: GetSet<number, this>;
    offsetY: GetSet<number, this>;
    opacity: GetSet<number, this>;
    rotation: GetSet<number, this>;
    zIndex: GetSet<number, this>;
    scale: GetSet<Vector2d, this>;
    scaleX: GetSet<number, this>;
    scaleY: GetSet<number, this>;
    skew: GetSet<Vector2d, this>;
    skewX: GetSet<number, this>;
    skewY: GetSet<number, this>;
    to: (params: any) => void;
    transformsEnabled: GetSet<string, this>;
    visible: GetSet<boolean | 'inherit', this>;
    width: GetSet<number, this>;
    height: GetSet<number, this>;
    x: GetSet<number, this>;
    y: GetSet<number, this>;
    z: GetSet<number, this>;
    globalCompositeOperation: GetSet<globalCompositeOperationType, this>;
    static create(data: any, container: any): any;
    static _createNode(obj: any, container?: any): any;
}
export {};
