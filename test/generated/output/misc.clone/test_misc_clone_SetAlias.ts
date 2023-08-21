import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { SetAlias } from "../../../structures/SetAlias";

export const test_misc_clone_SetAlias = _test_misc_clone("SetAlias")<SetAlias>(
    SetAlias,
)((input) =>
    ((input: SetAlias): typia.Primitive<SetAlias> => {
        const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age;
        const $co0 = (input: any): any => ({
            booleans:
                input.booleans instanceof Set ? {} : (input.booleans as any),
            numbers: input.numbers instanceof Set ? {} : (input.numbers as any),
            strings: input.strings instanceof Set ? {} : (input.strings as any),
            arrays: input.arrays instanceof Set ? {} : (input.arrays as any),
            objects: input.objects instanceof Set ? {} : (input.objects as any),
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    })(input),
);
