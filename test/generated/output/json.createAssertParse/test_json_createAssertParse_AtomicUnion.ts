import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_createAssertParse_AtomicUnion = _test_json_assertParse(
    "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input: string): typia.Primitive<AtomicUnion> => {
    const assert = (input: any): AtomicUnion => {
        const __is = (input: any): input is AtomicUnion => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        null === elem ||
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        "boolean" === typeof elem,
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is AtomicUnion => {
                const $guard = (typia.json.createAssertParse as any).guard;
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "AtomicUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                null === elem ||
                                "string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                "boolean" === typeof elem ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(boolean | null | number | string)",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "AtomicUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    };
    input = JSON.parse(input);
    return assert(input) as any;
});
