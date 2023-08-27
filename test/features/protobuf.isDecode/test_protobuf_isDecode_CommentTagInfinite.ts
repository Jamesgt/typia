import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_isDecode_CommentTagInfinite =
    _test_protobuf_isDecode("CommentTagInfinite")<CommentTagInfinite>(
        CommentTagInfinite,
    )({
        isDecode: (input) => typia.protobuf.isDecode<CommentTagInfinite>(input),
        encode: typia.protobuf.createEncode<CommentTagInfinite>(),
    });
