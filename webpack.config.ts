import * as path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
    mode: "production",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, ""),
        filename: "sha256.min.js",
        library: "SHA256",
    },
};
export default config;
