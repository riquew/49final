import initDropDownMenu from "./modules/dropdown-menu.js";
import initCarrossel from "./modules/anima-carrossel.js";
import ScrollAnima from "./modules/anima-scroll.js";
import initAnimaMapa from "./modules/anima-mapa.js";
import initAnimaMural from "./modules/anima-mural.js";
import initAnimaNumeros from "./modules/anima-numeros.js";
import Slide from "./modules/anima-slide.js";

const scroll = new ScrollAnima("[data-anime='scroll']");
scroll.init();
const slide = new Slide(".mural", ".wrapper-mural");
slide.init();
initDropDownMenu();
initCarrossel();
initAnimaMapa();
initAnimaMural();
initAnimaNumeros();
