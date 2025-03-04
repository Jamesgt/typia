import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createIsDecode_TypeTagAtomicUnion =
    _test_protobuf_isDecode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )({
        decode: (input) => typia.protobuf.isDecode<TypeTagAtomicUnion>(input),
        encode: typia.protobuf.createEncode<TypeTagAtomicUnion>(),
    });
