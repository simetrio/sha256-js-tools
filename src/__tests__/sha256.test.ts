import { SHA256 } from "../index";

test("Work", () => {
    expect(SHA256.work("Hellow World!!!")).toBe("Hellow World!!!");
});
