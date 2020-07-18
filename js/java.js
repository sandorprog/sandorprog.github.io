
function calcAmaunt() {
    let n1 = document.querySelector("select[name='pizzaPrice']");
    let n2 = document.querySelector("select[name='extraPrice']");
    let amauntInput = document.querySelector("input[name='order']");
    let amauont = parseInt(amauntInput.value) * parseInt(n1.value) + parseInt(n2.value);
    let showAmaunt = document.querySelector("span.show");
    showAmaunt.innerHTML = amauont;
}

function calcBuy() {
    let n3 = document.querySelector("input[name='persName']");
    let n4 = document.querySelector("input[name='persAddres']");
    alert("Szállítási adatok Név: " + n3.value + " Cím: " + n4.value + " Fzetendő:   Ft"
        + " Köszönjük rendelését! ");
}
// Select elem kitőltése kell egy tömb

let toppings = [
    "Szalonna", "Hagyma", "Sonka", "Tojás","Paprika", "Sajt"
]

//Ki kell választani a selectet id segítségével

let toppingSelect = document.querySelector("#topInput");

//Jön a ciklus

let index = 0;

//Addig fussona a program míg az toppings hossza tart
while(index < toppings.length){

//létrehoz a htmlbe egy option menüt
let option = document.createElement("option");
option.value = toppings[index];
option.innerHTML = toppings[index];
toppingSelect.appendChild(option);
index++;


}
