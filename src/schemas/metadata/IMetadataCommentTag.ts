export type IMetadataCommentTag =
    // NUMBER
    | IMetadataCommentTag.INumberType
    | IMetadataCommentTag.IMinimum
    | IMetadataCommentTag.IMaximum
    | IMetadataCommentTag.IExclusiveMinimum
    | IMetadataCommentTag.IExclusiveMaximum
    | IMetadataCommentTag.IMultipleOf
    | IMetadataCommentTag.IStep
    // STRING
    | IMetadataCommentTag.IFormat
    | IMetadataCommentTag.IPattern
    | IMetadataCommentTag.ILength
    | IMetadataCommentTag.IMinLength
    | IMetadataCommentTag.IMaxLength
    // ARRAY
    | IMetadataCommentTag.IItems
    | IMetadataCommentTag.IMinItems
    | IMetadataCommentTag.IMaxItems;

export namespace IMetadataCommentTag {
    /* -----------------------------------------------------------
        NUMBER
    ----------------------------------------------------------- */
    export interface INumberType {
        kind: "type";
        value:
            | "int"
            | "uint"
            | "int32"
            | "uint32"
            | "int64"
            | "uint64"
            | "float";
    }

    export interface IMinimum {
        kind: "minimum";
        value: number;
    }

    export interface IMaximum {
        kind: "maximum";
        value: number;
    }

    export interface IExclusiveMinimum {
        kind: "exclusiveMinimum";
        value: number;
    }

    export interface IExclusiveMaximum {
        kind: "exclusiveMaximum";
        value: number;
    }

    export interface IMultipleOf {
        kind: "multipleOf";
        value: number;
    }

    export interface IStep {
        kind: "step";
        value: number;
    }

    /* -----------------------------------------------------------
        STRING
    ----------------------------------------------------------- */
    export interface IFormat {
        kind: "format";
        value: "uuid" | "email" | "url" | "ipv4" | "ipv6" | "date" | "datetime";
    }

    export interface IPattern {
        kind: "pattern";
        value: string;
    }

    export interface ILength {
        kind: "length";
        value: number;
    }

    export interface IMinLength {
        kind: "minLength";
        value: number;
    }

    export interface IMaxLength {
        kind: "maxLength";
        value: number;
    }

    /* -----------------------------------------------------------
        ARRAY   
    ----------------------------------------------------------- */
    export interface IItems {
        kind: "items";
        value: number;
    }

    export interface IMinItems {
        kind: "minItems";
        value: number;
    }

    export interface IMaxItems {
        kind: "maxItems";
        value: number;
    }
}