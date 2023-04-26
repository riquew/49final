import initDropDownMenu from "./modules/dropdown-menu.js";
import initCarrossel from "./modules/anima-carrossel.js";
import ScrollAnima from "./modules/anima-scroll.js";
import initAnimaMapa from "./modules/anima-mapa.js";

const scroll = new ScrollAnima("[data-anime='scroll']");
scroll.init();
initDropDownMenu();
initCarrossel();
initAnimaMapa();
