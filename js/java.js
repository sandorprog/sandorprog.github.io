
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
