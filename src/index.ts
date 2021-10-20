import { work } from "./sha256";

export { work } from "./sha256";

export const SHA256: ISHA256 = {
    work,
};

interface ISHA256 {
    work: (value: string) => string;
}
