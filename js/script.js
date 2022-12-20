function openMenu() {

  const navLinks = document.querySelector('.nav-links')
  const menu = document.querySelector('#menu')
  const logo = document.querySelector('.logo')
  const menuIcon = document.querySelector('.menuIcon')
  const signInBtn = document.querySelector('#signInBtn')

  if (menu.checked) {
    navLinks.classList.add("visible")
    logo.classList.add("logo-change")
    menuIcon.classList.replace("fa-bars", "fa-xmark")
    signInBtn.classList.add("btn-change")
  } else {
    navLinks.classList.remove("visible")
    logo.classList.remove("logo-change")
    menuIcon.classList.replace("fa-xmark", "fa-bars")
    signInBtn.classList.remove("btn-change")
  }

}