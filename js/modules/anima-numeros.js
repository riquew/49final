export default function initAnimaNumeros() {
  const observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".numeros-icones");
  const ano = document.querySelector(".numero-ano");
  const numeros = Array.from(document.querySelectorAll(".quantidade"));
  const dados = [237, 1407, 588, 301, 28];

  function insertData() {
    console.log("aqui");
    let i = 0;
    numeros.forEach((numero) => {
      numero.textContent = dados[i];
      i++;
    });
  }

  function getYear() {
    ano.textContent = new Date().getFullYear() - 1;
  }

  function handleMutation() {
    observer.disconnect();
    insertData();
  }

  function addMutationObserver() {
    observer.observe(observerTarget, { attributes: true });
  }

  if (numeros && ano && observerTarget) {
    getYear();
    addMutationObserver();
  }
}
