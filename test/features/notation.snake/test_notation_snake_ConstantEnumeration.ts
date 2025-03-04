import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_notation_validateSnake_ConstantEnumeration =
    _test_notation_validateGeneral("ConstantEnumeration")<ConstantEnumeration>(
        ConstantEnumeration,
    )<typia.SnakeCase<ConstantEnumeration>>({
        convert: (input) =>
            typia.notations.validateSnake<ConstantEnumeration>(input),
        assert: typia.createAssert<typia.SnakeCase<ConstantEnumeration>>(),
    });
