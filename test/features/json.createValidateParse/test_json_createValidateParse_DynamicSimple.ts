import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_validateParse_DynamicSimple =
    _test_json_validateParse<DynamicSimple>(DynamicSimple)(
        typia.json.createValidateParse<DynamicSimple>(),
    );