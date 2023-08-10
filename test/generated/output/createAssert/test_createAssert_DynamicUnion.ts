import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_assert_DynamicUnion = _test_assert<DynamicUnion>(
    DynamicUnion,
)((input: any): DynamicUnion => {
    const __is = (input: any): input is DynamicUnion => {
        const $join = (typia.createAssert as any).join;
        const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key))
                    return "string" === typeof value;
                if (RegExp(/^(prefix_(.*))/).test(key))
                    return "string" === typeof value;
                if (RegExp(/((.*)_postfix)$/).test(key))
                    return "string" === typeof value;
                if (
                    RegExp(
                        /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                    ).test(key)
                )
                    return "number" === typeof value && Number.isFinite(value);
                return true;
            });
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
        ): input is DynamicUnion => {
            const $guard = (typia.createAssert as any).guard;
            const $join = (typia.createAssert as any).join;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (
                        RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                            key,
                        )
                    )
                        return (
                            "string" === typeof value ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                            })
                        );
                    if (RegExp(/^(prefix_(.*))/).test(key))
                        return (
                            "string" === typeof value ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                            })
                        );
                    if (RegExp(/((.*)_postfix)$/).test(key))
                        return (
                            "string" === typeof value ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                            })
                        );
                    if (
                        RegExp(
                            /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key)
                    )
                        return (
                            ("number" === typeof value &&
                                Number.isFinite(value)) ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "number",
                                value: value,
                            })
                        );
                    return true;
                });
            return (
                ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "DynamicUnion",
                        value: input,
                    })) &&
                    $ao0(input, _path + "", true)) ||
                $guard(true, {
                    path: _path + "",
                    expected: "DynamicUnion",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});