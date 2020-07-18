// Lezs egy tömb amibe objektumként lesznek  a felasználók
let users = [
    { surname: "Margarita", firstname: "paradicsomos alap, sajt", age: "1250" },
    { surname: "Sonkás", firstname: "paradicsomos alap, sonka, sajt", age: "1300" },
    { surname: "Sonkás-Gombás", firstname: "paradicsomos alap, sonka, gomba, sajt", age: "1300" },
    { surname: "Kukoricás", firstname: "paradicsomos alap, sonka, kukorica, sajt", age: "1320" },
    { surname: "Tavasz", firstname: "paradicsomos alap, sonka, gomba, kukorica, borsó, sajt", age: "1400" },
    { surname: "Vega", firstname: "paradicsomos alap, gomba, kukorica, paradcsom, borsó", age: "1400" },
    { surname: "Paraszt", firstname: "tejfölös alap, bacon, hagyma, paprica, sajt", age: "1400" },
    { surname: "Májas", firstname: "paradicsomos alap, sonka, csirkemáj, hagyma, sajt", age: "1450" },
    { surname: "Négysajtos", firstname: "paradicsomos alap, 4 féle sajt", age: "1470" },
    { surname: "Tenger gyümölcse", firstname: "paradicsomos alap, sonka, kagyló, tonhal, oliva, sajt", age: "1490" },
    { surname: "Sanyi kedvence", firstname: "paradicsomos alap, sonka, csirkehús, csirkemáj, füstöltsajt", age: "1550" }
];

//Kell egy ciklus ami bejárja a tömböt

let tableBody = document.querySelector("#userTabel tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-shopping-basket"> Kosárba</i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);

}

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k) + 1, tr);
    for (let value of Object.values(users[k])) {
        createTD(value, tr);
    };
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}