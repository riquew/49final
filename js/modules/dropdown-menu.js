import outsideClick from "./outsideClick.js";

export default function initDropDownMenu() {
  const itensNav = document.querySelectorAll("[data-dropdown] a");

  function showDropDownMenu(event) {
    if (event.currentTarget.classList.value === "subNav")
      event.preventDefault();
    const dropDownMenu = this.parentElement.querySelector("ul");
    dropDownMenu.classList.add("ativo");
    outsideClick(dropDownMenu, ["touchstart", "click"], () => {
      dropDownMenu.classList.remove("ativo");
    });
  }

  if (itensNav) {
    itensNav.forEach((item) =>
      ["click"].forEach((userEvent) => {
        item.addEventListener(userEvent, showDropDownMenu);
      })
    );
  }
}
