export default function initAnimaMural() {
  const fotosMural = document.querySelectorAll(".mural-conteudo");

  function onMouseLeave(event) {
    event.currentTarget.classList.remove("ativo");
  }

  function onMouseOver(event) {
    event.currentTarget.classList.add("ativo");
    event.currentTarget.addEventListener("mouseleave", onMouseLeave);
  }

  if (fotosMural) {
    fotosMural.forEach((foto) => {
      foto.addEventListener("mouseover", onMouseOver);
    });
  }
}
