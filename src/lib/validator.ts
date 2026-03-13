import { sValidator } from "@hono/standard-validator";
import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { ValidationTargets } from "hono";
import { Err } from "./errorHandler.js";

export const validator = <T extends StandardSchemaV1, Target extends keyof ValidationTargets>(
    target: Target,
    schema: T,
) =>
    sValidator(target, schema, (result) => {
        if (!result.success) {
            const error = result.error
                .map((issue: any) => {
                    const field = issue.path?.[0]?.key ?? "unknown";
                    return `${field}: ${issue.message}`;
                })
                .join("; ");

            throw Err(error, 400);
        }
    });
