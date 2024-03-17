// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE

// Afficher 3 quand on clique sur 3






//btn 0
var buttonThree = document.getElementById('btn0');
buttonThree.addEventListener('click', function () {
    afficherZero();
});
function afficherZero() {
    console.log("zéro");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "0";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}
//attention à la virgule

//btn 1
var buttonThree = document.getElementById('btn1');
buttonThree.addEventListener('click', function () {
    afficherUn();
});
function afficherUn() {
    console.log("un");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "1";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 2
var buttonThree = document.getElementById('btn2');
buttonThree.addEventListener('click', function () {
    afficherDeux();
});
function afficherDeux() {
    console.log("deux");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "2";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 3
var buttonThree = document.getElementById('btn3');
buttonThree.addEventListener('click', function () {
    afficherTrois();
});
function afficherTrois() {
    console.log("trois");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "3";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 4
var buttonThree = document.getElementById('btn4');
buttonThree.addEventListener('click', function () {
    afficherQuatre();
});
function afficherQuatre() {
    console.log("quatre");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "4";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 5
var buttonThree = document.getElementById('btn5');
buttonThree.addEventListener('click', function () {
    afficherCinq();
});
function afficherCinq() {
    console.log("Cinq");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "5";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 6
var buttonThree = document.getElementById('btn6');
buttonThree.addEventListener('click', function () {
    afficherSix();
});
function afficherSix() {
    console.log("Six");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "6";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 7
var buttonThree = document.getElementById('btn7');
buttonThree.addEventListener('click', function () {
    afficherSept();
});
function afficherSept() {
    console.log("Sept");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "7";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 8
var buttonThree = document.getElementById('btn8');
buttonThree.addEventListener('click', function () {
    afficherHuit();
});
function afficherHuit() {
    console.log("Huit");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "8";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn 9
var buttonThree = document.getElementById('btn9');
buttonThree.addEventListener('click', function () {
    afficherNeuf();
});
function afficherNeuf() {
    console.log("Neuf");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "9";
    if (ancienne_valeur === "0") {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn +
var buttonThree = document.getElementById('btn+');
buttonThree.addEventListener('click', function () {
    afficherPlus();
});
function afficherPlus() {
    console.log("+");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "+";
    if (ancienne_valeur == 0) {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn -
var buttonThree = document.getElementById('btn-');
buttonThree.addEventListener('click', function () {
    afficherMoins();
});
function afficherMoins() {
    console.log("-");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "-";
    if (ancienne_valeur == 0) {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn *
var buttonThree = document.getElementById('btnx');
buttonThree.addEventListener('click', function () {
    afficherFois();
});
function afficherFois() {
    console.log("*");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "*";
    if (ancienne_valeur == 0) {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn /
var buttonThree = document.getElementById('btn/');
buttonThree.addEventListener('click', function () {
    afficherDiv();
});
function afficherDiv() {
    console.log("/");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = "/";
    if (ancienne_valeur == 0) {
        valeur_ecran.textContent = nouvelle_valeur
    }
    else {
        valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    }
}

//btn .
var buttonThree = document.getElementById('btn.');
buttonThree.addEventListener('click', function () {
    afficherPt();
});
function afficherPt() {
    console.log(".");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var ancienne_valeur = valeur_ecran.textContent;
    var nouvelle_valeur = ".";
    valeur_ecran.textContent = ancienne_valeur + nouvelle_valeur;
    // attention problème ça marche pas quand c'est 0.qch
}

//btn AC
var buttonThree = document.getElementById('btnAC');
buttonThree.addEventListener('click', function () {
    afficherAC();
});
function afficherAC() {
    console.log("AC");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    valeur_ecran.textContent = '0'
}

//btn =
var buttonThree = document.getElementById('btn=');
buttonThree.addEventListener('click', function () {
    calcul()
});
function afficherEgal() {
    console.log("=");
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    valeur_ecran.textContent = '='
}
function addition() {
    //on récupère les données
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var tableau = valeur_ecran.textContent.split("+");
    console.log(tableau)
    //on calcule la somme
    var somme = 0
    for (var i = 0; i < tableau.length; i++) {
        somme += parseFloat(tableau[i])
    }
    //on affiche la somme
    console.log(somme)
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    valeur_ecran.textContent = somme;

}

function calcul() {
    //ne marche que quand c'est la même opération
    //on récupère les données
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    var nombres = valeur_ecran.textContent.split(/[\+\-\*\/]/);
    var symboles = valeur_ecran.textContent.split("");
    console.log(nombres)
    //on calcule la somme
    if (symboles.includes("+")) {
        var calc = 0
        for (var i = 0; i < nombres.length; i++) {
            calc += parseFloat(nombres[i]);
            console.log(calc)
        }
    }
    //on calcule la différence
    if (symboles.includes("-")) {
        var calc = nombres[0]
        for (var i = 1; i < nombres.length; i++) {
            calc -= parseFloat(nombres[i]);
        }
    }
    //on calcule la produit
    if (symboles.includes("*")) {
        var calc = 0
        for (var i = 0; i < nombres.length; i++) {
            calc *= parseFloat(nombres[i]);
        }
    }
    //on calcule le quotient
    if (symboles.includes("/")) {
        var calc = 0
        for (var i = 0; i < nombres.length; i++) {
            calc /= parseFloat(nombres[i]);
        }
    }
    //on affiche la somme
    console.log(calc)
    var elements = document.getElementsByClassName('calculator__display');
    var valeur_ecran = elements[0];
    valeur_ecran.textContent = calc;
}


//btn
//var button = document.getElementById('btn');
//button.addEventListener('click', function() {
//    afficher();
//});
//function afficher() {
//    console.log(button.textContent);
//    var elements = document.getElementsByClassName('calculator__display');
//    var valeur_ecran = elements[0];
//    valeur_ecran.textContent = button.textContent
//}




//Essai qui marche pas
for (var i = 0; i < 10; i++) {
    var btn = document.getElementById('btn${i}');
    btn.addEventListener('click', function () {
        affichernb;
    });
    function affichernb() {
        console.log('${i}')
    }

}