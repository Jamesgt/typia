import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_isStringify_TupleRestAtomic = _test_json_isStringify(
    "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
    ((input: TupleRestAtomic): string | null => {
        const is = (input: any): input is TupleRestAtomic => {
            return (
                Array.isArray(input) &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                Array.isArray(input.slice(2)) &&
                input.slice(2).every((elem: any) => "string" === typeof elem)
            );
        };
        const stringify = (input: TupleRestAtomic): string => {
            const $number = (typia.json.isStringify as any).number;
            const $string = (typia.json.isStringify as any).string;
            const $rest = (typia.json.isStringify as any).rest;
            return `[${input[0]},${$number(input[1])}${$rest(
                `[${input
                    .slice(2)
                    .map((elem: any) => $string(elem))
                    .join(",")}]`,
            )}]`;
        };
        return is(input) ? stringify(input) : null;
    })(input),
);
