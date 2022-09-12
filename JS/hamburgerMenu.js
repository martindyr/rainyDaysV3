const hMenuBtn = document.querySelector("#hamburgerMenuBtn")
const hamburgerMenu = document.querySelector(".hamburgerMenu")

hMenuBtn.addEventListener("click", toggleMenu)


function toggleMenu() {
    hamburgerMenu.classList.toggle('hamburgerMenu')
}
