let breed;
let EnterButton = document.getElementById("buttonEnter");
let imagePerro;
let perroImg = document.getElementById("perro");
let inputBar = document.getElementById("inputBar");

function newperro() {
    breed = inputBar.value;
    // console.log(breed);
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => response.json()) //lo que viene del internet lo pasas a un objeto json
        .then((data) => {
            if (!data.message.includes("puggle")) {
                //si no contiene puggle que lo haga el exlamacion
                imagePerro = data.message;
                console.log(imagePerro);
                console.log(data);
                perroImg.innerHTML = `<div id="perro"><img src="${imagePerro}"></img></div>`;
            } else {
                newperro();
            }
        });
}
// perro();
EnterButton.addEventListener("click", newperro);
