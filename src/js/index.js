document.querySelectorAll(".icons i").forEach((icon) => {
  icon.addEventListener("click", () => {
    document.querySelectorAll(".icons i").forEach((ico) => {
      ico.classList.remove("d-none");
    });

    const menuContainer = document.querySelector(".menuContainer");
    menuContainer.classList.contains("d-none")
      ? menuContainer.classList.remove("d-none")
      : menuContainer.classList.add("d-none");

    icon.classList.add("d-none");
  });
});
