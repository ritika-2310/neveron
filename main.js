function myopen(button) {
    button.style.display = "none";
    button.nextElementSibling.style.display = "";
    button.nextElementSibling.classList.add("arrow_shadow");
    setTimeout(()=>{
        button.nextElementSibling.classList.remove("arrow_shadow");
    },200);
}
function myclose(button) {
    button.style.display = "none";
    button.previousElementSibling.style.display = "";
    button.previousElementSibling.classList.add("arrow_shadow");
    setTimeout(()=>{
        button.previousElementSibling.classList.remove("arrow_shadow");
    },200);
}
let log = document.querySelector("#log");
log.addEventListener("click",()=>{
    log.classList.add("arrow_shadow");
    setTimeout(()=>{
        log.classList.remove("arrow_shadow");
    },200);
});