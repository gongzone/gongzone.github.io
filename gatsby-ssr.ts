// global style
import './src/assets/css/global.css';

// fonts
import '@fontsource/roboto';
import '@fontsource/noto-sans-kr';
import '@fontsource/poor-story';

// gatsby-api
import { wrapRootWithMdx } from './gatsby-api';

export const wrapRootElement = wrapRootWithMdx;
