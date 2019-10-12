import {
    usFmt
} from "@/helper/util.js"

test('rand str', () => {
    expect(usFmt(6000000000.0000)).toBe(6);
});