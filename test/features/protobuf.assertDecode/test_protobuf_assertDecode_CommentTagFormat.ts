import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_createAssertDecode_CommentTagFormat =
    _test_protobuf_assertDecode("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )({
        decode: (input) => typia.protobuf.assertDecode<CommentTagFormat>(input),
        encode: typia.protobuf.createEncode<CommentTagFormat>(),
    });
