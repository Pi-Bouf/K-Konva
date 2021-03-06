import { Node } from './Node';
export declare type Point = {
    x: number;
    y: number;
};
export interface RectConf {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class Collection<Child extends Node> {
    [index: number]: Child;
    length: number;
    each: (f: Function) => void;
    toArray: () => Array<any>;
    push: (item: Child) => void;
    unshift: (item: Child) => void;
    splice: (start: number, length: number, replace?: any) => void;
    static toCollection(arr: Array<Node>): Collection<Node>;
    static _mapMethod(methodName: any): void;
    static mapMethods: (constructor: Function) => void;
}
export declare class Transform {
    m: Array<number>;
    constructor(m?: number[]);
    copy(): Transform;
    point(point: Point): {
        x: number;
        y: number;
    };
    translate(x: number, y: number): this;
    scale(sx: number, sy: number): this;
    rotate(rad: number): this;
    getTranslation(): {
        x: number;
        y: number;
    };
    skew(sx: number, sy: number): this;
    multiply(matrix: Transform): this;
    invert(): this;
    getMatrix(): number[];
    setAbsolutePosition(x: number, y: number): this;
}
export declare const Util: {
    _isElement(obj: any): boolean;
    _isFunction(obj: any): boolean;
    _isPlainObject(obj: any): boolean;
    _isArray(obj: any): boolean;
    _isNumber(obj: any): boolean;
    _isString(obj: any): boolean;
    _isBoolean(obj: any): boolean;
    isObject(val: any): boolean;
    isValidSelector(selector: any): boolean;
    _sign(number: number): 1 | 0 | -1;
    requestAnimFrame(callback: Function): void;
    createCanvasElement(): any;
    createImageElement(): any;
    _isInDocument(el: any): boolean;
    _simplifyArray(arr: []): any[];
    _urlToImage(url: string, callback: Function): void;
    _rgbToHex(r: number, g: number, b: number): string;
    _hexToRgb(hex: string): {
        r: number;
        g: number;
        b: number;
    };
    getRandomColor(): string;
    get(val: any, def: any): any;
    getRGB(color: any): any;
    colorToRGBA(str: any): {
        r: any;
        g: any;
        b: any;
        a: any;
    };
    _namedColorToRBA(str: any): {
        r: any;
        g: any;
        b: any;
        a: number;
    };
    _rgbColorToRGBA(str: any): {
        r: any;
        g: any;
        b: any;
        a: number;
    };
    _rgbaColorToRGBA(str: any): {
        r: any;
        g: any;
        b: any;
        a: any;
    };
    _hex6ColorToRGBA(str: any): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    _hex3ColorToRGBA(str: any): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    haveIntersection(r1: any, r2: any): boolean;
    cloneObject<Any>(obj: Any): Any;
    cloneArray(arr: any): any;
    _degToRad(deg: any): number;
    _radToDeg(rad: any): number;
    _capitalize(str: any): any;
    throw(str: any): never;
    error(str: any): void;
    warn(str: any): void;
    extend(child: any, parent: any): void;
    _getControlPoints(x0: any, y0: any, x1: any, y1: any, x2: any, y2: any, t: any): any[];
    _expandPoints(p: any, tension: any): any[];
    each(obj: any, func: any): void;
    _inRange(val: any, left: any, right: any): boolean;
    _getProjectionToSegment(x1: any, y1: any, x2: any, y2: any, x3: any, y3: any): any[];
    _getProjectionToLine(pt: Point, line: any, isClosed: any): Point;
    _prepareArrayForTween(startArray: any, endArray: any, isClosed: any): any[];
    _prepareToStringify(obj: any): any;
};
