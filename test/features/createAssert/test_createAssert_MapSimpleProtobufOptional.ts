import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_assert_MapSimpleProtobufOptional = _test_assert(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)(
    typia.createAssert<MapSimpleProtobufOptional>(),
);