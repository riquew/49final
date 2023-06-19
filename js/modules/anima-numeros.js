export default function initAnimaNumeros() {
  const observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".numeros-icones");
  const ano = document.querySelector(".numero-ano");
  const numeros = Array.from(document.querySelectorAll(".quantidade"));
  const dados = [186, 397, 6307, 828, 26];

  function incrementarNumero(numero, dados) {
    const total = dados;
    const incremento = Math.floor((total * 4) / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        total === 828
          ? (numero.innerText = total + " t")
          : (numero.innerText = total);
        clearInterval(timer);
      }
    }, 100 * Math.random());
  }

  function insertData() {
    let i = 0;
    numeros.forEach((numero) => {
      incrementarNumero(numero, dados[i]);
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
