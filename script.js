document
    .querySelector("#greet-in button")
    .addEventListener("click", toggleGreetAnimation);
document
    .querySelector("#greet-up button")
    .addEventListener("click", toggleGreetAnimation);

function toggleGreetAnimation() {
    document.getElementById("greet").classList.toggle("move-greet-back");
    document.getElementById("greet-in").classList.toggle("move-text");
    document.getElementById("greet-up").classList.toggle("move-text");
}
