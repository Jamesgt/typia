import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_assertDecode_TypeTagAtomicUnion =
    _test_protobuf_assertDecode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TypeTagAtomicUnion>(input),
        encode: typia.protobuf.createEncode<TypeTagAtomicUnion>(),
    });
