export default function initCarrossel() {
  const imgsCarrossel = document.querySelector(".carousel");
  let fotoPos = 1;

  function changeBackground() {
    if (fotoPos === 5) fotoPos = 0;
    fotoPos += 1;
    console.log(getComputedStyle(imgsCarrossel).animationName);
    getComputedStyle(imgsCarrossel).animationName === "show-down"
      ? (imgsCarrossel.style.animation = "new-show-down 0.4s forwards")
      : (imgsCarrossel.style.animation = "show-down 0.4s forwards");
    imgsCarrossel.style.backgroundImage = `url("../../img/carousel/img_${fotoPos}_resize.jpg")`;
  }

  function initCounter() {
    setInterval(() => {
      changeBackground();
    }, 3000);
  }

  if (imgsCarrossel) {
    initCounter();
  }
}
