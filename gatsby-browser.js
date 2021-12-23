import "@fontsource/noto-sans-kr";
import "@fontsource/noto-sans";
import "@fontsource/imprima";
import "@fontsource/fira-code";
import "@fontsource/carrois-gothic-sc";
import "./src/assets/css/normalize.css";
import "./src/assets/css/main.css";

import { wrapMDX } from "./gatsby-ts/root-mdx";

export const wrapRootElement = wrapMDX;
