import { usFmt } from "@/helper/utils.js"

test('fmt num', () => {
    expect(usFmt(6000000000.0000)).toBe("6,000,000,000.00");
});