import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_misc_createPrune_TupleUnion = _test_misc_prune(
    "TupleUnion",
)<TupleUnion>(TupleUnion)((input: TupleUnion): void => {});
