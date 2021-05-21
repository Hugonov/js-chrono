'use strict';

// DONNEES
const chrono = {
    value: 0,
    element: null,
    timer: null
};

// FONCTIONS
function onStartChrono()
{
    console.log(chrono.timer);
    
    // Si le timer est null => aucun timer lancé actuellement
    // On lance le timer
    if (chrono.timer === null) {
        // Chaque seconde on va ajouter un à notre chronomètre
        // On enregistre le numéro du timer dans une propriété timer de notre objet
        chrono.timer = setInterval(function () {
            chrono.value++;
            
            chrono.element.textContent = chrono.value;
        }, 1000);
    }
}

function onStopChrono()
{
    clearInterval(chrono.timer);
    
    // Mettre à jour le timer et dire qu'il est arrêté => on le remet à null
    chrono.timer = null;
}

function onResetChrono()
{
    chrono.value = 0;
    chrono.element.textContent = chrono.value;
}

// CODE PRINCIPAL
    document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#start-chrono').addEventListener('click', onStartChrono);
    document.querySelector('#stop-chrono').addEventListener('click', onStopChrono);
    document.querySelector('#reset-chrono').addEventListener('click', onResetChrono);
    
    // Initialisation de l'élément contenant le chronomètre
    chrono.element = document.querySelector('#chrono span');
});