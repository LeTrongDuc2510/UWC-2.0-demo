let notiCount = 10;

function activeModal() {
  const Modal = document.getElementById("notiModal");
  Modal.style.display = "block";
}

if (notiCount == 0) {
  document.getElementById("notiIcon").className = "fa-solid fa-bell";
} else {
  document.getElementById("notiIcon").className = "fa-solid fa-bell fa-shake";
}
