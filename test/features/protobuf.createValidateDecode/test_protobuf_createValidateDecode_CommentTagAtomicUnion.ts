import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_validateDecode_CommentTagAtomicUnion =
    _test_protobuf_validateDecode(
        "CommentTagAtomicUnion",
    )<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
        validateDecode:
            typia.protobuf.createValidateDecode<CommentTagAtomicUnion>(),
        encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
    });
