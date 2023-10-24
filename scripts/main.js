//references for A
const showA = document.getElementById("showA");
const hideA = document.getElementById("hideA");
const imageA = document.getElementById("imageA");

//references for B
const showB = document.getElementById("showB");
const hideB = document.getElementById("hideB");
const imageB = document.getElementById("imageB");

//references for C
const showC = document.getElementById("showC");
const hideC = document.getElementById("hideC");
const imageC = document.getElementById("imageC");



//Listeners for A
showA.addEventListener("click", () => {
    hideA.style.display = "block";
    imageA.style.display = "block";
    showA.style.display = "none";
});

hideA.addEventListener("click", () => {
    hideA.style.display = "none";
    imageA.style.display = "none";
    showA.style.display = "block";
});

//Listeners for B
showB.addEventListener("click", () => {
    hideB.style.display = "block";
    imageB.style.display = "block";
    showB.style.display = "none";
});

hideB.addEventListener("click", () => {
    hideB.style.display = "none";
    imageB.style.display = "none";
    showB.style.display = "block";
});

//Listeners for C
showC.addEventListener("click", () => {
    hideC.style.display = "block";
    imageC.style.display = "block";
    showC.style.display = "none";
});

hideC.addEventListener("click", () => {
    hideC.style.display = "none";
    imageC.style.display = "none";
    showC.style.display = "block";
});