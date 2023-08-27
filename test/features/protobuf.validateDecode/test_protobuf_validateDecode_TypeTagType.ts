import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_validateDecode_TypeTagType =
    _test_protobuf_validateDecode("TypeTagType")<TypeTagType>(TypeTagType)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TypeTagType>(input),
        encode: typia.protobuf.createEncode<TypeTagType>(),
    });
