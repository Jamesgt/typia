import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_json_createIsParse_ObjectUnionNonPredictable =
    _test_json_isParse("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )((input: any): typia.Primitive<ObjectUnionNonPredictable> => {
        const is = (input: any): input is ObjectUnionNonPredictable => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io2(input.value);
            const $io2 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $iu0(input.value);
            const $io3 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "boolean" === typeof (input.value as any).value;
            const $io5 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "number" === typeof (input.value as any).value &&
                Number.isFinite((input.value as any).value);
            const $io7 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "string" === typeof (input.value as any).value;
            const $iu0 = (input: any): any =>
                (() => {
                    if ($io7(input)) return $io7(input);
                    else if ($io5(input)) return $io5(input);
                    else if ($io3(input)) return $io3(input);
                    else return false;
                })();
            return "object" === typeof input && null !== input && $io0(input);
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    });
