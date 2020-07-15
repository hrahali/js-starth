"use strict"

const answer = confirm(`confirmez-vous d'étre majeur ?`)
console.log(answer)
let message
console.log(answer)
let message = answer ? "bienvenue !" : "vous n'êtes pas autorisé !"

console.log(message)
alert(message)
/* demander confirmation 'Confirmez-vous d'être majeur ?' 
et affecter la réponse à la variable answer */
/* créer la variable message
affecter-lui 'Bienvenue !' si la réponse et positive ou 
'Vous n'être pas autorisé !' dans le cas contraire */
/* Afficher le message */
/* 2 solutions avec if et avec l'opérateur conditionnel (ternary operator) */
