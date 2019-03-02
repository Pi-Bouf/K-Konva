export * from './Global';
export { Collection, Util } from './Util';
export { Node, ids, names } from './Node';
export { Container } from './Container';
export { Stage, stages } from './Stage';
export { Layer } from './Layer';
export { FastLayer } from './FastLayer';
export { Group } from './Group';
export declare const DD: {
    startPointerPos: {
        x: number;
        y: number;
    };
    anim: import("./Animation").Animation;
    isDragging: boolean;
    justDragged: boolean;
    offset: {
        x: number;
        y: number;
    };
    node: any;
    _drag(evt: any): void;
    _endDragBefore(evt: any): void;
    _endDragAfter(evt: any): void;
};
export { Shape, shapes } from './Shape';
export { Animation } from './Animation';
export { Tween, Easings } from './Tween';
export declare const enableTrace = false;
export declare const listenClickTap = false;
export declare const inDblClickWindow = false;
export declare const pixelRatio: any;
export declare const dragDistance = 3;
export declare const angleDeg = true;
export declare const showWarnings = true;
export declare const dragButtons: number[];
export declare const isDragging: () => boolean;
export declare const isDragReady: () => boolean;
