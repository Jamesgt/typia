import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TagFormat } from "../../structures/TagFormat";

export const test_protobuf_validateEncode_TagFormat =
    _test_protobuf_validateEncode("TagFormat")<TagFormat>(TagFormat)({
        validateEncode: typia.protobuf.createValidateEncode<TagFormat>(),
        message: typia.protobuf.message<TagFormat>(),
    });
