const craterPopup = document.getElementById("crater-popup");
const crater = document.getElementById("crater");
const carPopup = document.getElementById("cargame-popup");
const car = document.getElementById("car");

const craterSpan = document.getElementsByClassName("close")[0];
const carSpan = document.getElementsByClassName("close")[1];
const sidePSpan = document.getElementsByClassName("close")[2];

crater.onclick = () => {
  craterPopup.style.display = "block";
};

craterSpan.onclick = () => {
  craterPopup.style.display = "none";
};
car.onclick = () => {
  carPopup.style.display = "block";
};

carSpan.onclick = () => {
  carPopup.style.display = "none";
};

window.onclick = (event) => {
  if (
    event.target == craterPopup ||
    event.target == carPopup ||
    event.target == sidePopup
  ) {
    craterPopup.style.display = "none";
    carPopup.style.display = "none";
  }
};
