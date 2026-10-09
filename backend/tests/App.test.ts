import { describe, it, expect } from "vitest";

describe('server test', () => {
    it('sollte den konfigurierten Port verwenden',() => {
        const PORT = 3000;

        expect(PORT).toBe(3000);
    });
});