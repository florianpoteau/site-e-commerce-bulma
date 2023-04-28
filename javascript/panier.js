const pan = document.querySelector(".pan");
const acheter = document.querySelector(".acheter");
const bod = document.querySelector(".bod");
const body1 = document.querySelector(".body1");
const payer = document.querySelector(".payer");

acheter.addEventListener("click", (e) =>{
    e.preventDefault();
    body1.style.filter = "blur(4px)";
    pan.classList.add("pan1");
});

payer.addEventListener("click", () =>{
    alert("Merci, c'était gratuit");
})