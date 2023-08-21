import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_random_TagBigInt = _test_random("TagBigInt")<TagBigInt>(
    TagBigInt,
)({
    random: typia.createRandom<TagBigInt>(),
    assert: typia.createAssert<TagBigInt>(),
});
