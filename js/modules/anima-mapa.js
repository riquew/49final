export default function initAnimaMapa() {
  const observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".mapa");
  const cias = Array.from(document.querySelectorAll(".mapa-cias h2"));
  const subTitles = Array.from(document.querySelectorAll(".mapa-cias article"));

  function addAnimation(item, size, properties) {
    let i = 0;
    const animation = setInterval(() => {
      console.log(item[i]);
      item[i].classList.add(properties.animation);
      if (i === size) {
        clearInterval(animation);
      }
      i++;
    }, properties.counter);
  }

  function verifySize(item) {
    const size = item.length - 1;
    const properties =
      item === cias
        ? {
            counter: 400,
            animation: "fadeRight",
          }
        : {
            counter: 300,
            animation: "fadeDown",
          };
    addAnimation(item, size, properties);
  }

  function handleMutation() {
    observer.disconnect();
    verifySize(cias);
    setTimeout(verifySize, 1000, subTitles);
  }

  function addMutationObserver() {
    observer.observe(observerTarget, { attributes: true });
  }

  if (observerTarget && cias && subTitles) {
    addMutationObserver();
  }
}
