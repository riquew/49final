import outsideClick from "./outsideClick.js";

export default function initDropDownMenu() {
  const itensNav = document.querySelectorAll("[data-dropdown]");
  function showDropDownMenu(event) {
    event.preventDefault();
    const dropDownMenu = this.querySelector("ul");
    dropDownMenu.classList.add("ativo");
    outsideClick(dropDownMenu, ["touchstart", "click"], () => {
      dropDownMenu.classList.remove("ativo");
    });
  }

  if (itensNav) {
    itensNav.forEach((item) =>
      ["click", "touchstart"].forEach((userEvent) => {
        item.addEventListener(userEvent, showDropDownMenu);
      })
    );
  }
}
