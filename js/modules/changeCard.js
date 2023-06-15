export default function initChangeCard() {
  const fotoSecundarias = document.querySelectorAll(".fotoSecundaria img");
  const fotoPrincipal = document.querySelector(".fotoPrincipal img");

  function changeCard(event) {
    let fotoTemp = fotoPrincipal.src;
    // this.src = fotoPrincipal.src;
    fotoPrincipal.src = event.currentTarget.src;
    this.src = fotoTemp;
  }

  if (fotoSecundarias) {
    fotoSecundarias.forEach((foto) => {
      foto.addEventListener("click", changeCard);
    });
  }
}
