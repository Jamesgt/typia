import typia from "../../../../src";
import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_json_validateParse_DynamicComposite =
    _test_json_validateParse("DynamicComposite")<DynamicComposite>(
        DynamicComposite,
    )((input) =>
        ((
            input: string,
        ): typia.IValidation<typia.Primitive<DynamicComposite>> => {
            const validate = (
                input: any,
            ): typia.IValidation<DynamicComposite> => {
                const errors = [] as any[];
                const __is = (input: any): input is DynamicComposite => {
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "string" === typeof input.name &&
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "name"].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            if (
                                RegExp(
                                    /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                ).test(key)
                            )
                                return (
                                    "number" === typeof value &&
                                    Number.isFinite(value)
                                );
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
                                    "string" === typeof value ||
                                    ("number" === typeof value &&
                                        Number.isFinite(value)) ||
                                    "boolean" === typeof value
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
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (typia.json.validateParse as any).report(
                        errors,
                    );
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicComposite => {
                        const $join = (typia.json.validateParse as any).join;
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.id ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string",
                                        value: input.id,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                                false === _exceptionable ||
                                    Object.keys(input)
                                        .map((key: any) => {
                                            if (
                                                ["id", "name"].some(
                                                    (prop: any) => key === prop,
                                                )
                                            )
                                                return true;
                                            const value = input[key];
                                            if (undefined === value)
                                                return true;
                                            if (
                                                RegExp(
                                                    /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                                ).test(key)
                                            )
                                                return (
                                                    ("number" ===
                                                        typeof value &&
                                                        Number.isFinite(
                                                            value,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "number",
                                                        value: value,
                                                    })
                                                );
                                            if (
                                                RegExp(/^(prefix_(.*))/).test(
                                                    key,
                                                )
                                            )
                                                return (
                                                    "string" === typeof value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "string",
                                                        value: value,
                                                    })
                                                );
                                            if (
                                                RegExp(/((.*)_postfix)$/).test(
                                                    key,
                                                )
                                            )
                                                return (
                                                    "string" === typeof value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
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
                                                    "string" === typeof value ||
                                                    ("number" ===
                                                        typeof value &&
                                                        Number.isFinite(
                                                            value,
                                                        )) ||
                                                    "boolean" ===
                                                        typeof value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            "(boolean | number | string)",
                                                        value: value,
                                                    })
                                                );
                                            if (
                                                RegExp(
                                                    /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                                ).test(key)
                                            )
                                                return (
                                                    "boolean" ===
                                                        typeof value ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected: "boolean",
                                                        value: value,
                                                    })
                                                );
                                            return true;
                                        })
                                        .every((flag: boolean) => flag),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "DynamicComposite",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "DynamicComposite",
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
            const output = JSON.parse(input);
            return validate(output) as any;
        })(input),
    );
