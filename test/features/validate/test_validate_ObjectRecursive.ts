import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_validate_ObjectRecursive = _test_validate(
    "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input) =>
    typia.validate<ObjectRecursive>(input),
);
