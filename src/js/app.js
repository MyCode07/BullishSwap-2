import "./parts/menu.js";
import "./parts/langs.js";
import "./parts/sliders.js";
import "./parts/video.js";
import "./parts/coronation.js";

import { replaceDomElements } from "./static/replace.js";
import { accorden } from "./static/accordeon.js";
import { toTop } from "./static/to-top.js";
import { clock } from "./parts/countdown.js";
accorden();
toTop();
replaceDomElements();
clock();