import typia from "../../../../src";
import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_protobuf_decode_TagBigInt = _test_protobuf_decode(
    "TagBigInt",
)<TagBigInt>(TagBigInt)({
    decode: (input) =>
        ((input: Uint8Array): typia.Resolved<TagBigInt> => {
            const $Reader = (typia.protobuf.decode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: undefined as any,
                    ranged: undefined as any,
                    minimum: undefined as any,
                    maximum: undefined as any,
                    multipleOf: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // bigint;
                            output.value = reader.int64();
                            break;
                        case 2:
                            // bigint;
                            output.ranged = reader.int64();
                            break;
                        case 3:
                            // bigint;
                            output.minimum = reader.int64();
                            break;
                        case 4:
                            // bigint;
                            output.maximum = reader.int64();
                            break;
                        case 5:
                            // bigint;
                            output.multipleOf = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const reader = new $Reader(input);
            return $pdo0(reader);
        })(input),
    encode: (input: TagBigInt): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "value";
                writer.uint32(8);
                writer.int64(input.value);
                // property "ranged";
                writer.uint32(16);
                writer.int64(input.ranged);
                // property "minimum";
                writer.uint32(24);
                writer.int64(input.minimum);
                // property "maximum";
                writer.uint32(32);
                writer.int64(input.maximum);
                // property "multipleOf";
                writer.uint32(40);
                writer.int64(input.multipleOf);
            };
            //TagBigInt;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});