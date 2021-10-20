import { generate } from "./sha256";

export { generate } from "./sha256";

export const SHA256: ISHA256 = {
    generate,
};

interface ISHA256 {
    generate: (unicodeText: string) => string;
}
