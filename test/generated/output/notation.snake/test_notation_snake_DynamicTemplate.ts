import typia from "../../../../src";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_notation_validateSnake_DynamicTemplate =
    _test_notation_validateGeneral("DynamicTemplate")<DynamicTemplate>(
        DynamicTemplate,
    )<typia.SnakeCase<DynamicTemplate>>({
        convert: (input) =>
            ((
                input: any,
            ): typia.IValidation<typia.SnakeCase<DynamicTemplate>> => {
                const validate = (
                    input: any,
                ): typia.IValidation<DynamicTemplate> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is DynamicTemplate => {
                        const $io0 = (input: any): boolean =>
                            Object.keys(input).every((key: any) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/^(prefix_(.*))/).test(key))
                                    return "string" === typeof value;
                                if (RegExp(/((.*)_postfix)$/).test(key))
                                    return "string" === typeof value;
                                if (
                                    RegExp(
                                        /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                    ).test(key)
                                )
                                    return (
                                        "number" === typeof value &&
                                        Number.isFinite(value)
                                    );
                                if (
                                    RegExp(
                                        /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                    ).test(key)
                                )
                                    return "boolean" === typeof value;
                                return true;
                            });
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input) &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.notations.validateSnake as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is DynamicTemplate => {
                            const $join = (typia.notations.validateSnake as any)
                                .join;
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    false === _exceptionable ||
                                        Object.keys(input)
                                            .map((key: any) => {
                                                const value = input[key];
                                                if (undefined === value)
                                                    return true;
                                                if (
                                                    RegExp(
                                                        /^(prefix_(.*))/,
                                                    ).test(key)
                                                )
                                                    return (
                                                        "string" ===
                                                            typeof value ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    $join(key),
                                                                expected:
                                                                    "string",
                                                                value: value,
                                                            },
                                                        )
                                                    );
                                                if (
                                                    RegExp(
                                                        /((.*)_postfix)$/,
                                                    ).test(key)
                                                )
                                                    return (
                                                        "string" ===
                                                            typeof value ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    $join(key),
                                                                expected:
                                                                    "string",
                                                                value: value,
                                                            },
                                                        )
                                                    );
                                                if (
                                                    RegExp(
                                                        /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                                    ).test(key)
                                                )
                                                    return (
                                                        ("number" ===
                                                            typeof value &&
                                                            Number.isFinite(
                                                                value,
                                                            )) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    $join(key),
                                                                expected:
                                                                    "number",
                                                                value: value,
                                                            },
                                                        )
                                                    );
                                                if (
                                                    RegExp(
                                                        /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                                    ).test(key)
                                                )
                                                    return (
                                                        "boolean" ===
                                                            typeof value ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    $join(key),
                                                                expected:
                                                                    "boolean",
                                                                value: value,
                                                            },
                                                        )
                                                    );
                                                return true;
                                            })
                                            .every((flag: boolean) => flag),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input &&
                                    false === Array.isArray(input)) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "DynamicTemplate",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "DynamicTemplate",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    }
                    const success = 0 === errors.length;
                    return {
                        success,
                        errors,
                        data: success ? input : undefined,
                    } as any;
                };
                const general = (
                    input: DynamicTemplate,
                ): typia.SnakeCase<DynamicTemplate> => {
                    const $co0 = (input: any): any => {
                        const output = {} as any;
                        for (const [key, value] of Object.entries(input)) {
                            if (RegExp(/^(prefix_(.*))/).test(key)) {
                                output[key] = value as any;
                                continue;
                            }
                            if (RegExp(/((.*)_postfix)$/).test(key)) {
                                output[key] = value as any;
                                continue;
                            }
                            if (
                                RegExp(
                                    /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                ).test(key)
                            ) {
                                output[key] = value as any;
                                continue;
                            }
                            if (
                                RegExp(
                                    /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                ).test(key)
                            ) {
                                output[key] = value as any;
                                continue;
                            }
                        }
                        return output;
                    };
                    return "object" === typeof input && null !== input
                        ? $co0(input)
                        : (input as any);
                };
                const output = validate(input) as any;
                if (output.success) output.data = general(input);
                return output;
            })(input),
        assert: (input: any): typia.SnakeCase<DynamicTemplate> => {
            const __is = (
                input: any,
            ): input is typia.SnakeCase<DynamicTemplate> => {
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/^(prefix_(.*))/).test(key))
                            return "string" === typeof value;
                        if (RegExp(/((.*)_postfix)$/).test(key))
                            return "string" === typeof value;
                        if (
                            RegExp(
                                /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                            ).test(key)
                        )
                            return (
                                "number" === typeof value &&
                                Number.isFinite(value)
                            );
                        if (
                            RegExp(
                                /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                            ).test(key)
                        )
                            return "boolean" === typeof value;
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
                ): input is typia.SnakeCase<DynamicTemplate> => {
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
                                    /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
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
                            if (
                                RegExp(
                                    /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                ).test(key)
                            )
                                return (
                                    "boolean" === typeof value ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "boolean",
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
                                expected: "DynamicTemplate",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "DynamicTemplate",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    });
