import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { FunctionalTuple } from "../../../structures/FunctionalTuple";

export const test_is_FunctionalTuple = _test_is(
    "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)((input: any): input is FunctionalTuple => {
    return (
        Array.isArray(input) &&
        input.length === 3 &&
        "function" === typeof input[0] &&
        "function" === typeof input[1] &&
        "function" === typeof input[2]
    );
});
