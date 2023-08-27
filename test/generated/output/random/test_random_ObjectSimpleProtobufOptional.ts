import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";

export const test_random_ObjectSimpleProtobufOptional = _test_random(
    "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Resolved<ObjectSimpleProtobufOptional> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                bool: $pick([
                    () => undefined,
                    () => (generator?.boolean ?? $generator.boolean)(),
                ])(),
                int32: $pick([
                    () => undefined,
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.([
                            {
                                target: "number",
                                name: 'Type<"int32">',
                                kind: "type",
                                value: "int32",
                                validate:
                                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                                exclusive: true,
                            },
                        ]) ??
                        (generator?.integer ?? $generator.integer)(0, 100),
                ])(),
                uint32: $pick([
                    () => undefined,
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.([
                            {
                                target: "number",
                                name: 'Type<"uint32">',
                                kind: "type",
                                value: "uint32",
                                validate:
                                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                                exclusive: true,
                            },
                        ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
                ])(),
                int64: $pick([
                    () => undefined,
                    () =>
                        (generator?.customs ?? $generator.customs)?.bigint?.(
                            [],
                        ) ??
                        (generator?.bigint ?? $generator.bigint)(
                            BigInt(0),
                            BigInt(100),
                        ),
                ])(),
                uint64: $pick([
                    () => undefined,
                    () =>
                        (generator?.customs ?? $generator.customs)?.bigint?.([
                            {
                                target: "number",
                                name: 'Type<"uint64">',
                                kind: "type",
                                value: "uint64",
                                validate: "BigInt(0) <= $input",
                                exclusive: true,
                            },
                        ]) ??
                        (generator?.bigint ?? $generator.bigint)(
                            BigInt(0),
                            BigInt(10),
                        ),
                ])(),
                float: $pick([
                    () => undefined,
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.([
                            {
                                target: "number",
                                name: 'Type<"float">',
                                kind: "type",
                                value: "float",
                                validate:
                                    "-1.175494351e38 <= $input && $input <= 3.4028235e38",
                                exclusive: true,
                            },
                        ]) ?? (generator?.number ?? $generator.number)(0, 100),
                ])(),
                double: $pick([
                    () => undefined,
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.([
                            {
                                target: "number",
                                name: 'Type<"double">',
                                kind: "type",
                                value: "double",
                                validate: "true",
                                exclusive: true,
                            },
                        ]) ?? (generator?.number ?? $generator.number)(0, 100),
                ])(),
                string: $pick([
                    () => undefined,
                    () =>
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)(),
                ])(),
                bytes: $pick([
                    () => undefined,
                    () =>
                        new Uint8Array(
                            (generator?.array ?? $generator.array)((): any =>
                                (generator?.integer ?? $generator.integer)(
                                    0,
                                    255,
                                ),
                            ),
                        ),
                ])(),
            });
            return $ro0();
        })(),
    assert: (input: any): ObjectSimpleProtobufOptional => {
        const __is = (input: any): input is ObjectSimpleProtobufOptional => {
            const $io0 = (input: any): boolean =>
                (undefined === input.bool || "boolean" === typeof input.bool) &&
                (undefined === input.int32 ||
                    ("number" === typeof input.int32 &&
                        Math.floor(input.int32) === input.int32 &&
                        -2147483648 <= input.int32 &&
                        input.int32 <= 2147483647)) &&
                (undefined === input.uint32 ||
                    ("number" === typeof input.uint32 &&
                        Math.floor(input.uint32) === input.uint32 &&
                        0 <= input.uint32 &&
                        input.uint32 <= 4294967295)) &&
                (undefined === input.int64 ||
                    "bigint" === typeof input.int64) &&
                (undefined === input.uint64 ||
                    ("bigint" === typeof input.uint64 &&
                        BigInt(0) <= input.uint64)) &&
                (undefined === input.float ||
                    ("number" === typeof input.float &&
                        -1.175494351e38 <= input.float &&
                        input.float <= 3.4028235e38)) &&
                (undefined === input.double ||
                    ("number" === typeof input.double &&
                        Number.isFinite(input.double) &&
                        true)) &&
                (undefined === input.string ||
                    "string" === typeof input.string) &&
                (undefined === input.bytes ||
                    input.bytes instanceof Uint8Array);
            return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectSimpleProtobufOptional => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.bool ||
                        "boolean" === typeof input.bool ||
                        $guard(_exceptionable, {
                            path: _path + ".bool",
                            expected: "(boolean | undefined)",
                            value: input.bool,
                        })) &&
                    (undefined === input.int32 ||
                        ("number" === typeof input.int32 &&
                            ((Math.floor(input.int32) === input.int32 &&
                                -2147483648 <= input.int32 &&
                                input.int32 <= 2147483647) ||
                                $guard(_exceptionable, {
                                    path: _path + ".int32",
                                    expected: 'number & Type<"int32">',
                                    value: input.int32,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".int32",
                            expected: '((number & Type<"int32">) | undefined)',
                            value: input.int32,
                        })) &&
                    (undefined === input.uint32 ||
                        ("number" === typeof input.uint32 &&
                            ((Math.floor(input.uint32) === input.uint32 &&
                                0 <= input.uint32 &&
                                input.uint32 <= 4294967295) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint32",
                                    expected: 'number & Type<"uint32">',
                                    value: input.uint32,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".uint32",
                            expected: '((number & Type<"uint32">) | undefined)',
                            value: input.uint32,
                        })) &&
                    (undefined === input.int64 ||
                        "bigint" === typeof input.int64 ||
                        $guard(_exceptionable, {
                            path: _path + ".int64",
                            expected: "(bigint | undefined)",
                            value: input.int64,
                        })) &&
                    (undefined === input.uint64 ||
                        ("bigint" === typeof input.uint64 &&
                            (BigInt(0) <= input.uint64 ||
                                $guard(_exceptionable, {
                                    path: _path + ".uint64",
                                    expected: 'bigint & Type<"uint64">',
                                    value: input.uint64,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".uint64",
                            expected: '((bigint & Type<"uint64">) | undefined)',
                            value: input.uint64,
                        })) &&
                    (undefined === input.float ||
                        ("number" === typeof input.float &&
                            ((-1.175494351e38 <= input.float &&
                                input.float <= 3.4028235e38) ||
                                $guard(_exceptionable, {
                                    path: _path + ".float",
                                    expected: 'number & Type<"float">',
                                    value: input.float,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".float",
                            expected: '((number & Type<"float">) | undefined)',
                            value: input.float,
                        })) &&
                    (undefined === input.double ||
                        ("number" === typeof input.double &&
                            (Number.isFinite(input.double) ||
                                $guard(_exceptionable, {
                                    path: _path + ".double",
                                    expected: "number",
                                    value: input.double,
                                })) &&
                            (true ||
                                $guard(_exceptionable, {
                                    path: _path + ".double",
                                    expected: 'number & Type<"double">',
                                    value: input.double,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".double",
                            expected: '((number & Type<"double">) | undefined)',
                            value: input.double,
                        })) &&
                    (undefined === input.string ||
                        "string" === typeof input.string ||
                        $guard(_exceptionable, {
                            path: _path + ".string",
                            expected: "(string | undefined)",
                            value: input.string,
                        })) &&
                    (undefined === input.bytes ||
                        input.bytes instanceof Uint8Array ||
                        $guard(_exceptionable, {
                            path: _path + ".bytes",
                            expected: "(Uint8Array | undefined)",
                            value: input.bytes,
                        }));
                return (
                    ((("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectSimpleProtobufOptional",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectSimpleProtobufOptional",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
