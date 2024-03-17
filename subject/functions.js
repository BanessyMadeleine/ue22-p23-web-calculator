for (var i = 0; i < 10; i++) {
    const index = i;
    var buttonNumber = document.getElementById(`btn${index}`);
    document.getElementById(`btn${i}`).addEventListener('click', function () {
        afficherNombre(index);
    });
}
function afficherNombre(number) {
    console.log(number);
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = number;
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}