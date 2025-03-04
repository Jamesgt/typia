import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_misc_createAssertPrune_ObjectHttpNullable =
    _test_misc_assertPrune("ObjectHttpNullable")<ObjectHttpNullable>(
        ObjectHttpNullable,
    )(typia.misc.createAssertPrune<ObjectHttpNullable>());
