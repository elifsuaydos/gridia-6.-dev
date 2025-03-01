const liste = document.getElementsByClassName("add_button");

const listem = Array.from(liste);
    listem.forEach((element) =>{
    element.addEventListener(onclick, sepeteEkle);
});

function sepeteEkle(e) {
    ; 
}

let cartIcon = document.getElementById("cartAmount");
// cartIcon.innerHTML= ;