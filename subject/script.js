// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE

// MB



for (var i = 0; i < 10; i++) {
    const index = i;
    var buttonNumber = document.getElementById(`btn${index}`);
    buttonNumber.addEventListener('click', function () {
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
    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] == ""){
            tableau[i] = "0"
        }
    }
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
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i] == ""){
            nombres[i] = "0"
        }
    }
    //on calcule la somme
    if (symboles.includes("+")) {
        var calc = 0
        for (var i = 0; i < nombres.length; i++) {
            calc += parseFloat(nombres[i]);
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
        var calc = nombres[0]
        for (var i = 1; i < nombres.length; i++) {
            calc *= parseFloat(nombres[i]);
        }
    }
    //on calcule le quotient
    if (symboles.includes("/")) {
        var calc = nombres[0]
        for (var i = 1; i < nombres.length; i++) {
            calc /= parseFloat(nombres[i]);
        }
    }
    //on affiche le résultat
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