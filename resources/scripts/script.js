const craterPopup = document.getElementById("crater-popup");
const crater = document.getElementById("crater");
const carPopup = document.getElementById("cargame-popup");
const car = document.getElementById("car");
const sidePopup = document.getElementById("side-popup");
const side = document.getElementById("side");
const blogPopup = document.getElementById("blog-popup");
const blog = document.getElementById("blog");

const craterSpan = document.getElementsByClassName("close")[0];
const carSpan = document.getElementsByClassName("close")[1];
const sideSpan = document.getElementsByClassName("close")[2];
const blogSpan = document.getElementsByClassName("close")[3];

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

side.onclick = () => {
  sidePopup.style.display = "block";
}

sideSpan.onclick = () => {
  sidePopup.style.display = "none";
}

blog.onclick = () => {
  blogPopup.style.display = "block";
}

blogSpan.onclick = () => {
  blogPopup.style.display = "none";
}

window.onclick = (event) => {
  if (
    event.target === craterPopup ||
    event.target === carPopup ||
    event.target === sidePopup ||
      event.target === blogPopup
  ) {
    craterPopup.style.display = "none";
    carPopup.style.display = "none";
    sidePopup.style.display = "none";
    blogPopup.style.display = "none";
  }
};

function openTab(evt, tabName) {
  let index, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (index = 0; index < tabcontent.length; index++) {
    tabcontent[index].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (index = 0; index < tablinks.length; index++) {
    tablinks[index].className = tablinks[index].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
