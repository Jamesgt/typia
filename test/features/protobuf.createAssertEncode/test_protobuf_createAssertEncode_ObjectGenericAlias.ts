import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_assertEncode_ObjectGenericAlias =
    _test_protobuf_assertEncode("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ObjectGenericAlias>(),
        message: typia.protobuf.message<ObjectGenericAlias>(),
    });
