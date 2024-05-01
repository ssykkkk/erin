
function openBlock(id) {
  const elem = document.getElementById(id);
  if (elem.style.display == "none") {
    elem.style.display = "grid";
    elem.parentElement.querySelector('img').style.transform = "rotate(180deg)"
  } else {
    elem.style.display = "none";
    elem.parentElement.querySelector('img').style.transform = "rotate(0)"
  }
}
