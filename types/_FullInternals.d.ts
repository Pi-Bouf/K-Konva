export * from './_CoreInternals';
export { Arc } from './shapes/Arc';
export { Arrow } from './shapes/Arrow';
export { Circle } from './shapes/Circle';
export { Ellipse } from './shapes/Ellipse';
export { Image } from './shapes/Image';
export { Label, Tag } from './shapes/Label';
export { Line } from './shapes/Line';
export { Path } from './shapes/Path';
export { Rect } from './shapes/Rect';
export { RegularPolygon } from './shapes/RegularPolygon';
export { Ring } from './shapes/Ring';
export { Sprite } from './shapes/Sprite';
export { Star } from './shapes/Star';
export { Text } from './shapes/Text';
export { TextPath } from './shapes/TextPath';
export { Transformer } from './shapes/Transformer';
export { Wedge } from './shapes/Wedge';
export declare const Filters: {
    Blur: (this: import("./Node").Node, imageData: CanvasImageData) => void;
    Brighten: import("./Node").Filter;
    Contrast: (imageData: any) => void;
    Emboss: (imageData: any) => void;
    Enhance: (imageData: any) => void;
    Grayscale: (imageData: any) => void;
    HSL: (imageData: any) => void;
    HSV: (imageData: any) => void;
    Invert: (imageData: any) => void;
    Kaleidoscope: (imageData: any) => void;
    Mask: (imageData: any) => any;
    Noise: (imageData: any) => void;
    Pixelate: (imageData: any) => void;
    Posterize: (imageData: any) => void;
    RGB: (imageData: any) => void;
    RGBA: (imageData: any) => void;
    Sepia: (imageData: any) => void;
    Solarize: (imageData: any) => void;
    Threshold: (imageData: any) => void;
};
