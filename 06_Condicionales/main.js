// var numero = prompt("Ingresa un numero")
// var numreal = Number(numero)

// if(numreal % 2 === 0)
// { 
//     console.log(numreal + ":es par")

// }


// else if(numreal % 2 === 1)
// {
//     console.log(numreal + ":es impar")

// }
// else{
//     console.error("Es un error, checa tu numero")
// }



// var contraseña = prompt("ingresa pass")
// if(contraseña === "perritoSalchicha1234") {
//     console.log(contraseña + ":correcta")
// }
// else
// {
//     console.log(contraseña + ":incorrecta")
// }

//
var j1 = prompt("jugador 1, ingresa p/p/t")
var j2 = prompt("jugador 2, ingresa p/p/t")

if(j1 ===  "papel" && j2 === "piedra")
console.log("Gana jugador 2")

else if (j1 === "tijera" && j2 === "piedra")
console.log("Gana jugador 2")

else if ( j1=== "piedra" && j2 ===" piedra")
console.log("empate, jueguen de nuevo")

else if (j1 === "tijera "&& j2 === "tijera")
console.log("Empate, jueguen de nuevo")

else if (j1 === "papel" && j2=== "papel")
console.log("empate, jueguen de nuevo")

else if (j1 === "piedra" && j2 === "papel")
console.log("Gana jugador 1")

else if (j1 === "tijera" && j2 === "papel")
console.log("gana jugador 1")

else if (j1==="papel" && j2 === "tijera")
console.log("gana jugador 2")
 
else if ( j1=== "piedra" && j2 === "tijera")
console.log ("gana jugador 1")