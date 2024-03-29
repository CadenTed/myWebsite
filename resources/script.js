const popup = document.querySelectorAll(".popup")
const ccPopup = document.querySelector("#ccPopup")
const sqPopup = document.querySelector("#sqPopup")
const cgPopup = document.querySelector("#cgPopup")
const scPopup = document.querySelector("#scPopup")
const lmCC = document.querySelector(".lmCC")
const lmSQ = document.querySelector(".lmSQ")
const lmCG = document.querySelector(".lmCG")
const lmSC = document.querySelector(".lmSC")
const overlay = document.querySelector(".overlay")
const closeBtn = document.querySelectorAll(".close")
const body = document.querySelector("body")


//////////////////////////////////////////Event Listeners//////////////////////////////////////////

lmCC.addEventListener("click", (event) => {
    ccPopup.classList.remove("hide");
    overlay.classList.remove("hide");
	body.style.overflow = "hidden";
    body.style.height = "100%";
})

lmSQ.addEventListener("click", (event) => {
    overlay.classList.remove("hide");
    sqPopup.classList.remove("hide");
})

lmCG.addEventListener("click", (event) => {
    overlay.classList.remove("hide");
    cgPopup.classList.remove("hide");
})

lmSC.addEventListener("click", () => {
    overlay.classList.remove("hide")
    scPopup.classList.remove("hide")
})

overlay.addEventListener("click", (event) =>{
    overlay.classList.add("hide");
    cgPopup.classList.add("hide");
    sqPopup.classList.add("hide");
    ccPopup.classList.add("hide");
    scPopup.classList.add("hide");
})

for (let index = 0; index < closeBtn.length; index++) {
    closeBtn[index].addEventListener("click", (event) =>{
        overlay.classList.add("hide");
        cgPopup.classList.add("hide");
        sqPopup.classList.add("hide");
        ccPopup.classList.add("hide");
        scPopup.classList.add("hide");
    });
  }