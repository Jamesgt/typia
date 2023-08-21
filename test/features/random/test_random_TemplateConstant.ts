import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_random_TemplateConstant = _test_random(
    "TemplateConstant",
)<TemplateConstant>(TemplateConstant)({
    random: () => typia.random<TemplateConstant>(),
    assert: typia.createAssert<TemplateConstant>(),
});
