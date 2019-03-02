import { Container } from './Container';
import { GetSet } from "./types";
export declare class Group extends Container {
    needReorder: boolean;
    _validateAdd(child: any): void;
    add(child: any): this | this | this;
    _drawChildren(canvas: any, drawMethod: any, top: any, caching?: any, skipBuffer?: any, skipComposition?: any): void;
    _reorderChildrenByZIndex(): void;
    zIndexEnabled: GetSet<boolean, this>;
}
