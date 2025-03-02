const liste = document.getElementsByClassName("add_button");
const listem = Array.from(liste);
let cartIcon = document.getElementById("cartAmount");
let count = 0;

listem.forEach((element) => {
    element.addEventListener("click", sepeteEkle);
});

function sepeteEkle() {
    if (count < 9) {
        count++;
        cartIcon.textContent = count;
        cartIcon.style.backgroundColor = count === 9 ? "red" : "yellow";
    }
}