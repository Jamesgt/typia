import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_random_ObjectNullable = _test_random<ObjectNullable>(
    ObjectNullable,
)({
    random: () => typia.random<ObjectNullable>(),
    assert: typia.createAssert<ObjectNullable>(),
});