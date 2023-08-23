import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_protobuf_assertEncode_TagAtomicUnion =
    _test_protobuf_assertEncode("TagAtomicUnion")<TagAtomicUnion>(
        TagAtomicUnion,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TagAtomicUnion>(input),
        message: typia.protobuf.message<TagAtomicUnion>(),
        decode: typia.protobuf.createDecode<TagAtomicUnion>(),
    });