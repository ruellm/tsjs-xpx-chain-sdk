export declare const gf: (init?: any) => Float64Array;
export declare const cleanup: (arr: any) => void;
export declare const crypto_shared_key_hash: (shared: any, pk: any, sk: any, hashfunc: any, signSchema: any) => void;
export declare const crypto_verify_32: (x: any, xi: any, y: any, yi: any) => number;
export declare const add: (p: any, q: any) => void;
export declare const modL: (r: any, x: any) => void;
export declare const reduce: (r: any) => void;
export declare const pack: (r: any, p: any) => void;
export declare const scalarmult: (p: any, q: any, s: any) => void;
export declare const scalarbase: (p: any, s: any) => void;
<<<<<<< HEAD
export declare const unpackneg: (r: any, p: any) => 0 | -1;
export declare const unpack: (r: any, p: any) => 0 | -1;
=======
export declare const unpackneg: (r: any, p: any) => -1 | 0;
export declare const unpack: (r: any, p: any) => -1 | 0;
>>>>>>> jwt
