import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_misc_clone_ToJsonArray = _test_misc_clone<ToJsonArray>(
    ToJsonArray,
)(typia.misc.createClone<ToJsonArray>());