import { timingSafeEqual } from "node:crypto";

export const safeCompare = (left: string, right: string) => {
    const leftBuffer = Buffer.from(left, "utf-8");
    const rightBuffer = Buffer.from(right, "utf-8");

    if (leftBuffer.length !== rightBuffer.length) {
        return false;
    }

    return timingSafeEqual(leftBuffer, rightBuffer);
};
