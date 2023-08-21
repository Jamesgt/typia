import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_protobuf_assertEncode_ObjectSimple =
    _test_protobuf_assertEncode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
        assertEncode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): ObjectSimple => {
                    const __is = (input: any): input is ObjectSimple => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "object" === typeof (input as any).scale &&
                            null !== (input as any).scale &&
                            "number" ===
                                typeof ((input as any).scale as any).x &&
                            Number.isFinite(((input as any).scale as any).x) &&
                            "number" ===
                                typeof ((input as any).scale as any).y &&
                            Number.isFinite(((input as any).scale as any).y) &&
                            "number" ===
                                typeof ((input as any).scale as any).z &&
                            Number.isFinite(((input as any).scale as any).z) &&
                            "object" === typeof (input as any).position &&
                            null !== (input as any).position &&
                            "number" ===
                                typeof ((input as any).position as any).x &&
                            Number.isFinite(
                                ((input as any).position as any).x,
                            ) &&
                            "number" ===
                                typeof ((input as any).position as any).y &&
                            Number.isFinite(
                                ((input as any).position as any).y,
                            ) &&
                            "number" ===
                                typeof ((input as any).position as any).z &&
                            Number.isFinite(
                                ((input as any).position as any).z,
                            ) &&
                            "object" === typeof (input as any).rotate &&
                            null !== (input as any).rotate &&
                            "number" ===
                                typeof ((input as any).rotate as any).x &&
                            Number.isFinite(((input as any).rotate as any).x) &&
                            "number" ===
                                typeof ((input as any).rotate as any).y &&
                            Number.isFinite(((input as any).rotate as any).y) &&
                            "number" ===
                                typeof ((input as any).rotate as any).z &&
                            Number.isFinite(((input as any).rotate as any).z) &&
                            "object" === typeof (input as any).pivot &&
                            null !== (input as any).pivot &&
                            "number" ===
                                typeof ((input as any).pivot as any).x &&
                            Number.isFinite(((input as any).pivot as any).x) &&
                            "number" ===
                                typeof ((input as any).pivot as any).y &&
                            Number.isFinite(((input as any).pivot as any).y) &&
                            "number" ===
                                typeof ((input as any).pivot as any).z &&
                            Number.isFinite(((input as any).pivot as any).z)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectSimple => {
                            const $guard = (typia.protobuf.assertEncode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (((("object" === typeof input.scale &&
                                    null !== input.scale) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".scale",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.scale,
                                    })) &&
                                    $ao1(
                                        input.scale,
                                        _path + ".scale",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".scale",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.scale,
                                    })) &&
                                (((("object" === typeof input.position &&
                                    null !== input.position) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".position",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.position,
                                    })) &&
                                    $ao1(
                                        input.position,
                                        _path + ".position",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".position",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.position,
                                    })) &&
                                (((("object" === typeof input.rotate &&
                                    null !== input.rotate) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".rotate",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.rotate,
                                    })) &&
                                    $ao1(
                                        input.rotate,
                                        _path + ".rotate",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".rotate",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.rotate,
                                    })) &&
                                (((("object" === typeof input.pivot &&
                                    null !== input.pivot) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".pivot",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.pivot,
                                    })) &&
                                    $ao1(
                                        input.pivot,
                                        _path + ".pivot",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".pivot",
                                        expected: "ObjectSimple.IPoint3D",
                                        value: input.pivot,
                                    }));
                            const $ao1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.x &&
                                    Number.isFinite(input.x)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".x",
                                        expected: "number",
                                        value: input.x,
                                    })) &&
                                (("number" === typeof input.y &&
                                    Number.isFinite(input.y)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".y",
                                        expected: "number",
                                        value: input.y,
                                    })) &&
                                (("number" === typeof input.z &&
                                    Number.isFinite(input.z)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".z",
                                        expected: "number",
                                        value: input.z,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ObjectSimple.IBox3D",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectSimple.IBox3D",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const encode = (input: ObjectSimple): Uint8Array => {
                    const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                    const $Writer = (typia.protobuf.assertEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "scale";
                            writer.uint32(10);
                            writer.fork();
                            $peo1(input.scale);
                            writer.ldelim();
                            // property "position";
                            writer.uint32(18);
                            writer.fork();
                            $peo1(input.position);
                            writer.ldelim();
                            // property "rotate";
                            writer.uint32(26);
                            writer.fork();
                            $peo1(input.rotate);
                            writer.ldelim();
                            // property "pivot";
                            writer.uint32(34);
                            writer.fork();
                            $peo1(input.pivot);
                            writer.ldelim();
                        };
                        const $peo1 = (input: any): any => {
                            // property "x";
                            writer.uint32(9);
                            writer.double(input.x);
                            // property "y";
                            writer.uint32(17);
                            writer.double(input.y);
                            // property "z";
                            writer.uint32(25);
                            writer.double(input.z);
                        };
                        const $io1 = (input: any): boolean =>
                            "number" === typeof input.x &&
                            "number" === typeof input.y &&
                            "number" === typeof input.z;
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return encode(assert(input));
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ObjectSimple {\n    message IBox3D {\n        required ObjectSimple.IPoint3D scale = 1;\n        required ObjectSimple.IPoint3D position = 2;\n        required ObjectSimple.IPoint3D rotate = 3;\n        required ObjectSimple.IPoint3D pivot = 4;\n    }\n\n    message IPoint3D {\n        required double x = 1;\n        required double y = 2;\n        required double z = 3;\n    }\n}',
    });
