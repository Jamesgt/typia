import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobuf } from "../../../structures/MapSimpleProtobuf";

export const test_protobuf_assertEncode_MapSimpleProtobuf =
    _test_protobuf_assertEncode("MapSimpleProtobuf")<MapSimpleProtobuf>(
        MapSimpleProtobuf,
    )({
        assertEncode: (input: any): Uint8Array => {
            const assert = (input: any): MapSimpleProtobuf => {
                const __is = (input: any): input is MapSimpleProtobuf => {
                    const $io0 = (input: any): boolean =>
                        input.boolean instanceof Map &&
                        (() =>
                            [...input.boolean].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "boolean" === typeof elem[1],
                            ))() &&
                        input.int32 instanceof Map &&
                        (() =>
                            [...input.int32].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "number" === typeof elem[1] &&
                                    Number.isFinite(elem[1]) &&
                                    Math.floor(elem[1]) === elem[1] &&
                                    -2147483648 <= elem[1] &&
                                    elem[1] <= 2147483647,
                            ))() &&
                        input.bigint instanceof Map &&
                        (() =>
                            [...input.bigint].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "bigint" === typeof elem[1],
                            ))() &&
                        input.double instanceof Map &&
                        (() =>
                            [...input.double].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "number" === typeof elem[1] &&
                                    Number.isFinite(elem[1]),
                            ))() &&
                        input.string instanceof Map &&
                        (() =>
                            [...input.string].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "string" === typeof elem[1] &&
                                    1 <= elem[1].length,
                            ))() &&
                        input.bytes instanceof Map &&
                        (() =>
                            [...input.bytes].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    elem[1] instanceof Uint8Array,
                            ))() &&
                        input.objects instanceof Map &&
                        (() =>
                            [...input.objects].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "object" === typeof elem[1] &&
                                    null !== elem[1] &&
                                    $io0(elem[1]),
                            ))();
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is MapSimpleProtobuf => {
                        const $guard = (
                            typia.protobuf.createAssertEncode as any
                        ).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            (((input.boolean instanceof Map ||
                                $guard(_exceptionable, {
                                    path: _path + ".boolean",
                                    expected: "Map<string, boolean>",
                                    value: input.boolean,
                                })) &&
                                (() =>
                                    [...input.boolean].every(
                                        (elem: any, _index1: number) =>
                                            ((Array.isArray(elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "[string, boolean]",
                                                    value: elem,
                                                })) &&
                                                (elem.length === 2 ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".boolean[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "[string, boolean]",
                                                        value: elem,
                                                    })) &&
                                                ("string" === typeof elem[0] ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".boolean[" +
                                                            _index1 +
                                                            "][0]",
                                                        expected: "string",
                                                        value: elem[0],
                                                    })) &&
                                                ("boolean" === typeof elem[1] ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".boolean[" +
                                                            _index1 +
                                                            "][1]",
                                                        expected: "boolean",
                                                        value: elem[1],
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean[" +
                                                    _index1 +
                                                    "]",
                                                expected: "[string, boolean]",
                                                value: elem,
                                            }),
                                    ))()) ||
                                $guard(_exceptionable, {
                                    path: _path + ".boolean",
                                    expected: "Map<string, boolean>",
                                    value: input.boolean,
                                })) &&
                            (((input.int32 instanceof Map ||
                                $guard(_exceptionable, {
                                    path: _path + ".int32",
                                    expected: "Map<string, number>",
                                    value: input.int32,
                                })) &&
                                (() =>
                                    [...input.int32].every(
                                        (elem: any, _index2: number) =>
                                            ((Array.isArray(elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".int32[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "[string, number]",
                                                    value: elem,
                                                })) &&
                                                (elem.length === 2 ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".int32[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "[string, number]",
                                                        value: elem,
                                                    })) &&
                                                ("string" === typeof elem[0] ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".int32[" +
                                                            _index2 +
                                                            "][0]",
                                                        expected: "string",
                                                        value: elem[0],
                                                    })) &&
                                                (("number" === typeof elem[1] &&
                                                    Number.isFinite(elem[1]) &&
                                                    (Math.floor(elem[1]) ===
                                                        elem[1] ||
                                                        $guard(_exceptionable, {
                                                            path:
                                                                _path +
                                                                ".int32[" +
                                                                _index2 +
                                                                "][1]",
                                                            expected:
                                                                "number (@type int32)",
                                                            value: elem[1],
                                                        })) &&
                                                    ((-2147483648 <= elem[1] &&
                                                        elem[1] <=
                                                            2147483647) ||
                                                        $guard(_exceptionable, {
                                                            path:
                                                                _path +
                                                                ".int32[" +
                                                                _index2 +
                                                                "][1]",
                                                            expected:
                                                                "number (@type int32)",
                                                            value: elem[1],
                                                        }))) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".int32[" +
                                                            _index2 +
                                                            "][1]",
                                                        expected: "number",
                                                        value: elem[1],
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".int32[" +
                                                    _index2 +
                                                    "]",
                                                expected: "[string, number]",
                                                value: elem,
                                            }),
                                    ))()) ||
                                $guard(_exceptionable, {
                                    path: _path + ".int32",
                                    expected: "Map<string, number>",
                                    value: input.int32,
                                })) &&
                            (((input.bigint instanceof Map ||
                                $guard(_exceptionable, {
                                    path: _path + ".bigint",
                                    expected: "Map<string, bigint>",
                                    value: input.bigint,
                                })) &&
                                (() =>
                                    [...input.bigint].every(
                                        (elem: any, _index3: number) =>
                                            ((Array.isArray(elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".bigint[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "[string, bigint]",
                                                    value: elem,
                                                })) &&
                                                (elem.length === 2 ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".bigint[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "[string, bigint]",
                                                        value: elem,
                                                    })) &&
                                                ("string" === typeof elem[0] ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".bigint[" +
                                                            _index3 +
                                                            "][0]",
                                                        expected: "string",
                                                        value: elem[0],
                                                    })) &&
                                                ("bigint" === typeof elem[1] ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".bigint[" +
                                                            _index3 +
                                                            "][1]",
                                                        expected: "bigint",
                                                        value: elem[1],
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".bigint[" +
                                                    _index3 +
                                                    "]",
                                                expected: "[string, bigint]",
                                                value: elem,
                                            }),
                                    ))()) ||
                                $guard(_exceptionable, {
                                    path: _path + ".bigint",
                                    expected: "Map<string, bigint>",
                                    value: input.bigint,
                                })) &&
                            (((input.double instanceof Map ||
                                $guard(_exceptionable, {
                                    path: _path + ".double",
                                    expected: "Map<string, number>",
                                    value: input.double,
                                })) &&
                                (() =>
                                    [...input.double].every(
                                        (elem: any, _index4: number) =>
                                            ((Array.isArray(elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".double[" +
                                                        _index4 +
                                                        "]",
                                                    expected:
                                                        "[string, number]",
                                                    value: elem,
                                                })) &&
                                                (elem.length === 2 ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".double[" +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "[string, number]",
                                                        value: elem,
                                                    })) &&
                                                ("string" === typeof elem[0] ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".double[" +
                                                            _index4 +
                                                            "][0]",
                                                        expected: "string",
                                                        value: elem[0],
                                                    })) &&
                                                (("number" === typeof elem[1] &&
                                                    Number.isFinite(elem[1])) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".double[" +
                                                            _index4 +
                                                            "][1]",
                                                        expected: "number",
                                                        value: elem[1],
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".double[" +
                                                    _index4 +
                                                    "]",
                                                expected: "[string, number]",
                                                value: elem,
                                            }),
                                    ))()) ||
                                $guard(_exceptionable, {
                                    path: _path + ".double",
                                    expected: "Map<string, number>",
                                    value: input.double,
                                })) &&
                            (((input.string instanceof Map ||
                                $guard(_exceptionable, {
                                    path: _path + ".string",
                                    expected: "Map<string, string>",
                                    value: input.string,
                                })) &&
                                (() =>
                                    [...input.string].every(
                                        (elem: any, _index5: number) =>
                                            ((Array.isArray(elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".string[" +
                                                        _index5 +
                                                        "]",
                                                    expected:
                                                        "[string, string]",
                                                    value: elem,
                                                })) &&
                                                (elem.length === 2 ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".string[" +
                                                            _index5 +
                                                            "]",
                                                        expected:
                                                            "[string, string]",
                                                        value: elem,
                                                    })) &&
                                                ("string" === typeof elem[0] ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".string[" +
                                                            _index5 +
                                                            "][0]",
                                                        expected: "string",
                                                        value: elem[0],
                                                    })) &&
                                                (("string" === typeof elem[1] &&
                                                    (1 <= elem[1].length ||
                                                        $guard(_exceptionable, {
                                                            path:
                                                                _path +
                                                                ".string[" +
                                                                _index5 +
                                                                "][1]",
                                                            expected:
                                                                "string (@minLength 1)",
                                                            value: elem[1],
                                                        }))) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".string[" +
                                                            _index5 +
                                                            "][1]",
                                                        expected: "string",
                                                        value: elem[1],
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".string[" +
                                                    _index5 +
                                                    "]",
                                                expected: "[string, string]",
                                                value: elem,
                                            }),
                                    ))()) ||
                                $guard(_exceptionable, {
                                    path: _path + ".string",
                                    expected: "Map<string, string>",
                                    value: input.string,
                                })) &&
                            (((input.bytes instanceof Map ||
                                $guard(_exceptionable, {
                                    path: _path + ".bytes",
                                    expected: "Map<string, Uint8Array>",
                                    value: input.bytes,
                                })) &&
                                (() =>
                                    [...input.bytes].every(
                                        (elem: any, _index6: number) =>
                                            ((Array.isArray(elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".bytes[" +
                                                        _index6 +
                                                        "]",
                                                    expected:
                                                        "[string, Uint8Array]",
                                                    value: elem,
                                                })) &&
                                                (elem.length === 2 ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".bytes[" +
                                                            _index6 +
                                                            "]",
                                                        expected:
                                                            "[string, Uint8Array]",
                                                        value: elem,
                                                    })) &&
                                                ("string" === typeof elem[0] ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".bytes[" +
                                                            _index6 +
                                                            "][0]",
                                                        expected: "string",
                                                        value: elem[0],
                                                    })) &&
                                                (elem[1] instanceof
                                                    Uint8Array ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".bytes[" +
                                                            _index6 +
                                                            "][1]",
                                                        expected: "Uint8Array",
                                                        value: elem[1],
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".bytes[" +
                                                    _index6 +
                                                    "]",
                                                expected:
                                                    "[string, Uint8Array]",
                                                value: elem,
                                            }),
                                    ))()) ||
                                $guard(_exceptionable, {
                                    path: _path + ".bytes",
                                    expected: "Map<string, Uint8Array>",
                                    value: input.bytes,
                                })) &&
                            (((input.objects instanceof Map ||
                                $guard(_exceptionable, {
                                    path: _path + ".objects",
                                    expected: "Map<string, MapSimpleProtobuf>",
                                    value: input.objects,
                                })) &&
                                (() =>
                                    [...input.objects].every(
                                        (elem: any, _index7: number) =>
                                            ((Array.isArray(elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".objects[" +
                                                        _index7 +
                                                        "]",
                                                    expected:
                                                        "[string, MapSimpleProtobuf]",
                                                    value: elem,
                                                })) &&
                                                (elem.length === 2 ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".objects[" +
                                                            _index7 +
                                                            "]",
                                                        expected:
                                                            "[string, MapSimpleProtobuf]",
                                                        value: elem,
                                                    })) &&
                                                ("string" === typeof elem[0] ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".objects[" +
                                                            _index7 +
                                                            "][0]",
                                                        expected: "string",
                                                        value: elem[0],
                                                    })) &&
                                                (((("object" ===
                                                    typeof elem[1] &&
                                                    null !== elem[1]) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".objects[" +
                                                            _index7 +
                                                            "][1]",
                                                        expected:
                                                            "MapSimpleProtobuf",
                                                        value: elem[1],
                                                    })) &&
                                                    $ao0(
                                                        elem[1],
                                                        _path +
                                                            ".objects[" +
                                                            _index7 +
                                                            "][1]",
                                                        true && _exceptionable,
                                                    )) ||
                                                    $guard(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".objects[" +
                                                            _index7 +
                                                            "][1]",
                                                        expected:
                                                            "MapSimpleProtobuf",
                                                        value: elem[1],
                                                    }))) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".objects[" +
                                                    _index7 +
                                                    "]",
                                                expected:
                                                    "[string, MapSimpleProtobuf]",
                                                value: elem,
                                            }),
                                    ))()) ||
                                $guard(_exceptionable, {
                                    path: _path + ".objects",
                                    expected: "Map<string, MapSimpleProtobuf>",
                                    value: input.objects,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "MapSimpleProtobuf",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "MapSimpleProtobuf",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const encode = (input: MapSimpleProtobuf): Uint8Array => {
                const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
                const $Writer = (typia.protobuf.createAssertEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "boolean";
                        for (const [key, value] of input.boolean) {
                            writer.uint32(10);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(16);
                            writer.bool(value);
                            writer.ldelim();
                        }
                        // property "int32";
                        for (const [key, value] of input.int32) {
                            writer.uint32(18);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(16);
                            writer.int32(value);
                            writer.ldelim();
                        }
                        // property "bigint";
                        for (const [key, value] of input.bigint) {
                            writer.uint32(26);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(16);
                            writer.int64(value);
                            writer.ldelim();
                        }
                        // property "double";
                        for (const [key, value] of input.double) {
                            writer.uint32(34);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(17);
                            writer.double(value);
                            writer.ldelim();
                        }
                        // property "string";
                        for (const [key, value] of input.string) {
                            writer.uint32(42);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(18);
                            writer.string(value);
                            writer.ldelim();
                        }
                        // property "bytes";
                        for (const [key, value] of input.bytes) {
                            writer.uint32(50);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(18);
                            writer.bytes(value);
                            writer.ldelim();
                        }
                        // property "objects";
                        for (const [key, value] of input.objects) {
                            writer.uint32(58);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(18);
                            writer.fork();
                            $peo0(value);
                            writer.ldelim();
                            writer.ldelim();
                        }
                    };
                    const $io0 = (input: any): boolean =>
                        input.boolean instanceof Map &&
                        (() =>
                            [...input.boolean].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "boolean" === typeof elem[1],
                            ))() &&
                        input.int32 instanceof Map &&
                        (() =>
                            [...input.int32].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "number" === typeof elem[1] &&
                                    Math.floor(elem[1]) === elem[1] &&
                                    -2147483648 <= elem[1] &&
                                    elem[1] <= 2147483647,
                            ))() &&
                        input.bigint instanceof Map &&
                        (() =>
                            [...input.bigint].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "bigint" === typeof elem[1],
                            ))() &&
                        input.double instanceof Map &&
                        (() =>
                            [...input.double].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "number" === typeof elem[1],
                            ))() &&
                        input.string instanceof Map &&
                        (() =>
                            [...input.string].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "string" === typeof elem[1] &&
                                    1 <= elem[1].length,
                            ))() &&
                        input.bytes instanceof Map &&
                        (() =>
                            [...input.bytes].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    elem[1] instanceof Uint8Array,
                            ))() &&
                        input.objects instanceof Map &&
                        (() =>
                            [...input.objects].every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.length === 2 &&
                                    "string" === typeof elem[0] &&
                                    "object" === typeof elem[1] &&
                                    null !== elem[1] &&
                                    $io0(elem[1]),
                            ))();
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            return encode(assert(input));
        },
        message:
            'syntax = "proto3";\n\nmessage MapSimpleProtobuf {\n    map<string, bool> boolean = 1;\n    map<string, int32> int32 = 2;\n    map<string, int64> bigint = 3;\n    map<string, double> double = 4;\n    map<string, string> string = 5;\n    map<string, bytes> bytes = 6;\n    map<string, MapSimpleProtobuf> objects = 7;\n}',
    });
