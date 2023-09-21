export default function initCarrossel() {
  const imgsCarrossel = document.querySelector(".carousel");
  let fotoPos = 1;
  imgsCarrossel.style.backgroundImage = `url("../img/carousel/carousel_${fotoPos}.jpg")`;

  function changeBackground() {
    if (fotoPos === 5) fotoPos = 0;
    fotoPos += 1;
    getComputedStyle(imgsCarrossel).animationName === "show-down"
      ? (imgsCarrossel.style.animation = "new-show-down 0.4s forwards")
      : (imgsCarrossel.style.animation = "show-down 0.4s forwards");
    imgsCarrossel.style.backgroundImage = `url("../img/carousel/carousel_${fotoPos}.jpg")`;
  }

  function initCounter() {
    setInterval(() => {
      changeBackground();
    }, 3500);
  }

  if (imgsCarrossel) {
    initCounter();
  }
}
