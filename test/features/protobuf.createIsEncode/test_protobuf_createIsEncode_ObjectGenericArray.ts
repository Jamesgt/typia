import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_createIsEncode_ObjectGenericArray =
    _test_protobuf_isEncode("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )({
        encode: typia.protobuf.createIsEncode<ObjectGenericArray>(),
        decode: typia.protobuf.createDecode<ObjectGenericArray>(),
        message: typia.protobuf.message<ObjectGenericArray>(),
    });
