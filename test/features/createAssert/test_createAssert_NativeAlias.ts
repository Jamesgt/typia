import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_assert_NativeAlias = _test_assert<NativeAlias>(NativeAlias)(
    typia.createAssert<NativeAlias>(),
);