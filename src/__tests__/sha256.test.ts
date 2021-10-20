import { SHA256 } from "../index";

test("Generate", () => {
    expect(SHA256.generate("fvp-_few0dew^&FE^Efew")).toBe(
        "24b08156b54d1a07776794c4679395b4264b8ea539aaca7cd21b3eabc53024b9",
    );
    expect(SHA256.generate("cds&9_+c")).toBe(
        "ba5f73557be57db837cbd689f3b49cd57ec9e3dc936354dbaabda52881debc63",
    );
});
