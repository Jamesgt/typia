import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_random_ObjectDynamic = _test_random<ObjectDynamic>(
    ObjectDynamic,
)({
    random: typia.createRandom<ObjectDynamic>(),
    assert: typia.createAssert<ObjectDynamic>(),
});