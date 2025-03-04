import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_assertEquals_ObjectIntersection = _test_assertEquals(
    "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)((input) =>
    ((input: any): ObjectIntersection => {
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectIntersection => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.email &&
                "string" === typeof input.name &&
                "boolean" === typeof input.vulnerable &&
                (3 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["email", "name", "vulnerable"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectIntersection => {
                const $guard = (typia.assertEquals as any).guard;
                const $join = (typia.assertEquals as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.email ||
                        $guard(_exceptionable, {
                            path: _path + ".email",
                            expected: "string",
                            value: input.email,
                        })) &&
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    ("boolean" === typeof input.vulnerable ||
                        $guard(_exceptionable, {
                            path: _path + ".vulnerable",
                            expected: "boolean",
                            value: input.vulnerable,
                        })) &&
                    (3 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["email", "name", "vulnerable"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectIntersection",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectIntersection",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    })(input),
);
