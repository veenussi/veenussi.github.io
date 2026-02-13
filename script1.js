let yesBtn = document.querySelector("button");

yesBtn.addEventListener("click", () => {
    window.location.href = "flower.html";
})
const wrapper = document.querySelector('.wrapper');
const quesion = document.querySelector('.quesion');
const noBtn = document.querySelector('.no-btn');

noBtn.addEventListener('click', () => {
    quesion.innerHTML = 'wrong!! try again';
});