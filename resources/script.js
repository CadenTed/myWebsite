const popup = document.querySelectorAll(".popup")
const ccPopup = document.querySelector("#ccPopup")
const sqPopup = document.querySelector("#sqPopup")
const cgPopup = document.querySelector("#cgPopup")
const lmCC = document.querySelector(".lmCC")
const lmSQ = document.querySelector(".lmSQ")
const lmCG = document.querySelector(".lmCG")
const overlay = document.querySelector(".overlay")
const closeBtn = document.querySelectorAll(".close")


//////////////////////////////////////////Event Listeners//////////////////////////////////////////

lmCC.addEventListener("click", (event) => {
    ccPopup.classList.remove("hide");
    overlay.classList.remove("hide");
})

lmSQ.addEventListener("click", (event) => {
    overlay.classList.remove("hide");
    sqPopup.classList.remove("hide");
})

lmCG.addEventListener("click", (event) => {
    overlay.classList.remove("hide");
    cgPopup.classList.remove("hide");
})

overlay.addEventListener("click", (event) =>{
    overlay.classList.add("hide");
    cgPopup.classList.add("hide");
    sqPopup.classList.add("hide");
    ccPopup.classList.add("hide");
})

for (let index = 0; index < closeBtn.length; index++) {
    closeBtn[index].addEventListener("click", (event) =>{
        overlay.classList.add("hide");
        cgPopup.classList.add("hide");
        sqPopup.classList.add("hide");
        ccPopup.classList.add("hide");
    });
  }s