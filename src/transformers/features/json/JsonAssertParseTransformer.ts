import { JsonAssertParseProgrammer } from "../../../programmers/json/JsonAssertParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonAssertParseTransformer {
    export const transform = GenericTransformer.scalar("json.assertParse")(
        (project) => (modulo) =>
            JsonAssertParseProgrammer.write(project)(modulo),
    );
}
