import data from "../data/dadosSubUnidades.json" assert { type: "json" };

export default function initChangeCard() {
  const fotoSecundarias = document.querySelectorAll(".fotoSecundaria img");
  const fotoPrincipal = document.querySelector(".fotoPrincipal img");
  const cardTexto = document.querySelector(".cardTexto");
  const dados = data;

  function changeCard(event) {
    checkAnimation(fotoPrincipal);
    let fotoTemp = {
      src: fotoPrincipal.src,
      id: fotoPrincipal.id,
    };
    fotoPrincipal.src = event.currentTarget.src;
    fotoPrincipal.id = event.currentTarget.id;
    this.src = fotoTemp.src;
    this.id = fotoTemp.id;
    changeText(fotoPrincipal.id);
  }

  function changeText(id) {
    checkAnimation(cardTexto);
    cardTexto.querySelector("h2").innerText = dados[id].titulo;
    cardTexto.querySelector(".endereco").innerText = dados[id].endereco;
    cardTexto.querySelector(".municipio").innerText = dados[id].municipio;
    cardTexto.querySelector(".telefone").innerText = dados[id].telefone;
    cardTexto.querySelector(".email").innerText = dados[id].email;
  }

  function checkAnimation(foto) {
    getComputedStyle(foto).animationName === "show-down"
      ? (foto.style.animation = "new-show-down 0.4s forwards")
      : (foto.style.animation = "show-down 0.4s forwards");
  }

  if (fotoSecundarias) {
    fotoSecundarias.forEach((foto) => {
      foto.addEventListener("click", changeCard);
    });
  }
}
