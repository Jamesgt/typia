import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_protobuf_assertEncode_ArrayHierarchicalPointer =
    _test_protobuf_assertEncode(
        "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
        assertEncode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): ArrayHierarchicalPointer => {
                    const __is = (
                        input: any,
                    ): input is ArrayHierarchicalPointer => {
                        const $io0 = (input: any): boolean =>
                            Array.isArray(input.value) &&
                            input.value.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io1(elem),
                            );
                        const $io1 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "number" === typeof input.serial &&
                            Number.isFinite(input.serial) &&
                            "string" === typeof input.name &&
                            "object" === typeof input.established_at &&
                            null !== input.established_at &&
                            "number" ===
                                typeof (input.established_at as any).time &&
                            Number.isFinite(
                                (input.established_at as any).time,
                            ) &&
                            "number" ===
                                typeof (input.established_at as any).zone &&
                            Number.isFinite(
                                (input.established_at as any).zone,
                            ) &&
                            Array.isArray(input.departments) &&
                            input.departments.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            );
                        const $io3 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "string" === typeof input.code &&
                            "number" === typeof input.sales &&
                            Number.isFinite(input.sales) &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            "number" ===
                                typeof (input.created_at as any).time &&
                            Number.isFinite((input.created_at as any).time) &&
                            "number" ===
                                typeof (input.created_at as any).zone &&
                            Number.isFinite((input.created_at as any).zone) &&
                            Array.isArray(input.employees) &&
                            input.employees.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io4(elem),
                            );
                        const $io4 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "string" === typeof input.name &&
                            "number" === typeof input.age &&
                            Number.isFinite(input.age) &&
                            "number" === typeof input.grade &&
                            Number.isFinite(input.grade) &&
                            "object" === typeof input.employeed_at &&
                            null !== input.employeed_at &&
                            "number" ===
                                typeof (input.employeed_at as any).time &&
                            Number.isFinite((input.employeed_at as any).time) &&
                            "number" ===
                                typeof (input.employeed_at as any).zone &&
                            Number.isFinite((input.employeed_at as any).zone);
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
                        ): input is ArrayHierarchicalPointer => {
                            const $guard = (typia.protobuf.assertEncode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ((Array.isArray(input.value) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "Array<ArrayHierarchicalPointer.ICompany>",
                                        value: input.value,
                                    })) &&
                                    input.value.every(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "ArrayHierarchicalPointer.ICompany",
                                                    value: elem,
                                                })) &&
                                                $ao1(
                                                    elem,
                                                    _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "ArrayHierarchicalPointer.ICompany",
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "Array<ArrayHierarchicalPointer.ICompany>",
                                    value: input.value,
                                });
                            const $ao1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.id &&
                                    Number.isFinite(input.id)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "number",
                                        value: input.id,
                                    })) &&
                                (("number" === typeof input.serial &&
                                    Number.isFinite(input.serial)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".serial",
                                        expected: "number",
                                        value: input.serial,
                                    })) &&
                                ("string" === typeof input.name ||
                                    $guard(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    })) &&
                                (((("object" === typeof input.established_at &&
                                    null !== input.established_at) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".established_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.established_at,
                                    })) &&
                                    $ao2(
                                        input.established_at,
                                        _path + ".established_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".established_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.established_at,
                                    })) &&
                                (((Array.isArray(input.departments) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".departments",
                                        expected:
                                            "Array<ArrayHierarchicalPointer.IDepartment>",
                                        value: input.departments,
                                    })) &&
                                    input.departments.every(
                                        (elem: any, _index2: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".departments[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "ArrayHierarchicalPointer.IDepartment",
                                                    value: elem,
                                                })) &&
                                                $ao3(
                                                    elem,
                                                    _path +
                                                        ".departments[" +
                                                        _index2 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".departments[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "ArrayHierarchicalPointer.IDepartment",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".departments",
                                        expected:
                                            "Array<ArrayHierarchicalPointer.IDepartment>",
                                        value: input.departments,
                                    }));
                            const $ao2 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.time &&
                                    Number.isFinite(input.time)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".time",
                                        expected: "number",
                                        value: input.time,
                                    })) &&
                                (("number" === typeof input.zone &&
                                    Number.isFinite(input.zone)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".zone",
                                        expected: "number",
                                        value: input.zone,
                                    }));
                            const $ao3 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.id &&
                                    Number.isFinite(input.id)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "number",
                                        value: input.id,
                                    })) &&
                                ("string" === typeof input.code ||
                                    $guard(_exceptionable, {
                                        path: _path + ".code",
                                        expected: "string",
                                        value: input.code,
                                    })) &&
                                (("number" === typeof input.sales &&
                                    Number.isFinite(input.sales)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".sales",
                                        expected: "number",
                                        value: input.sales,
                                    })) &&
                                (((("object" === typeof input.created_at &&
                                    null !== input.created_at) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                    $ao2(
                                        input.created_at,
                                        _path + ".created_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                (((Array.isArray(input.employees) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".employees",
                                        expected:
                                            "Array<ArrayHierarchicalPointer.IEmployee>",
                                        value: input.employees,
                                    })) &&
                                    input.employees.every(
                                        (elem: any, _index3: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".employees[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "ArrayHierarchicalPointer.IEmployee",
                                                    value: elem,
                                                })) &&
                                                $ao4(
                                                    elem,
                                                    _path +
                                                        ".employees[" +
                                                        _index3 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".employees[" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    "ArrayHierarchicalPointer.IEmployee",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".employees",
                                        expected:
                                            "Array<ArrayHierarchicalPointer.IEmployee>",
                                        value: input.employees,
                                    }));
                            const $ao4 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.id &&
                                    Number.isFinite(input.id)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "number",
                                        value: input.id,
                                    })) &&
                                ("string" === typeof input.name ||
                                    $guard(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    })) &&
                                (("number" === typeof input.age &&
                                    Number.isFinite(input.age)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".age",
                                        expected: "number",
                                        value: input.age,
                                    })) &&
                                (("number" === typeof input.grade &&
                                    Number.isFinite(input.grade)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".grade",
                                        expected: "number",
                                        value: input.grade,
                                    })) &&
                                (((("object" === typeof input.employeed_at &&
                                    null !== input.employeed_at) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".employeed_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.employeed_at,
                                    })) &&
                                    $ao2(
                                        input.employeed_at,
                                        _path + ".employeed_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".employeed_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.employeed_at,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ArrayHierarchicalPointer",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ArrayHierarchicalPointer",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const encode = (
                    input: ArrayHierarchicalPointer,
                ): Uint8Array => {
                    const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                    const $Writer = (typia.protobuf.assertEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "value";
                            if (0 !== input.value.length) {
                                for (const elem of input.value) {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo1(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo1 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "serial";
                            writer.uint32(17);
                            writer.double(input.serial);
                            // property "name";
                            writer.uint32(26);
                            writer.string(input.name);
                            // property "established_at";
                            writer.uint32(34);
                            writer.fork();
                            $peo2(input.established_at);
                            writer.ldelim();
                            // property "departments";
                            if (0 !== input.departments.length) {
                                for (const elem of input.departments) {
                                    writer.uint32(42);
                                    writer.fork();
                                    $peo3(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo2 = (input: any): any => {
                            // property "time";
                            writer.uint32(9);
                            writer.double(input.time);
                            // property "zone";
                            writer.uint32(17);
                            writer.double(input.zone);
                        };
                        const $peo3 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "code";
                            writer.uint32(18);
                            writer.string(input.code);
                            // property "sales";
                            writer.uint32(25);
                            writer.double(input.sales);
                            // property "created_at";
                            writer.uint32(34);
                            writer.fork();
                            $peo2(input.created_at);
                            writer.ldelim();
                            // property "employees";
                            if (0 !== input.employees.length) {
                                for (const elem of input.employees) {
                                    writer.uint32(42);
                                    writer.fork();
                                    $peo4(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo4 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "name";
                            writer.uint32(18);
                            writer.string(input.name);
                            // property "age";
                            writer.uint32(25);
                            writer.double(input.age);
                            // property "grade";
                            writer.uint32(33);
                            writer.double(input.grade);
                            // property "employeed_at";
                            writer.uint32(42);
                            writer.fork();
                            $peo2(input.employeed_at);
                            writer.ldelim();
                        };
                        const $io1 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "number" === typeof input.serial &&
                            "string" === typeof input.name &&
                            "object" === typeof input.established_at &&
                            null !== input.established_at &&
                            $io2(input.established_at) &&
                            Array.isArray(input.departments) &&
                            input.departments.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            );
                        const $io2 = (input: any): boolean =>
                            "number" === typeof input.time &&
                            "number" === typeof input.zone;
                        const $io3 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.code &&
                            "number" === typeof input.sales &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            $io2(input.created_at) &&
                            Array.isArray(input.employees) &&
                            input.employees.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io4(elem),
                            );
                        const $io4 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.name &&
                            "number" === typeof input.age &&
                            "number" === typeof input.grade &&
                            "object" === typeof input.employeed_at &&
                            null !== input.employeed_at &&
                            $io2(input.employeed_at);
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
            'syntax = "proto3";\n\nmessage ArrayHierarchicalPointer {\n    repeated ArrayHierarchicalPointer.ICompany value = 1;\n    message ICompany {\n        required double id = 1;\n        required double serial = 2;\n        required string name = 3;\n        required ArrayHierarchicalPointer.ITimestamp established_at = 4;\n        repeated ArrayHierarchicalPointer.IDepartment departments = 5;\n    }\n\n    message ITimestamp {\n        required double time = 1;\n        required double zone = 2;\n    }\n\n    message IDepartment {\n        required double id = 1;\n        required string code = 2;\n        required double sales = 3;\n        required ArrayHierarchicalPointer.ITimestamp created_at = 4;\n        repeated ArrayHierarchicalPointer.IEmployee employees = 5;\n    }\n\n    message IEmployee {\n        required double id = 1;\n        required string name = 2;\n        required double age = 3;\n        required double grade = 4;\n        required ArrayHierarchicalPointer.ITimestamp employeed_at = 5;\n    }\n}',
    });
