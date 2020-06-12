var colores =  ["negro", "rosa", "rojo"]
console.log(colores)
console.log(colores[1])

colores[3] =  "verde" 

//.push()

colores.push("gris") 
console.log(colores)

//.pop() lo que hace es borrar el ultimo elemento

colores.pop()
colores.pop()
console.log(colores)

//.splice --- borra elementos especificos
// primer numero es la posicion //segundo numero son los elementos a borrar     

colores.splice(0,1)
colores.splice(0,1,"violeta")
console.log(colores)


//objetos { Array } [ Object ]

//Objetos

var persona = {

    nombre: 'Ricardo',
    cel: '45645647894',
    direccion: 'CDMX',
    email: 'kelebra@devf.mx',
    password: '123456',
    musica: ['rock', 'corridos tumbados', 'cumbia', 'pop', 'k-pop', 'trap'],
    peliculas : {
        accion: ['R&F', 'MI', 'El trasportador'],
        survivalHorror:['Chuky', 'blair wich', 'El exorsista'],
        comedia: ['This is my son','scary movie', 'click' ],
        romanticas: {
            comediasRomanticas: ['La propuesta', 'Zohan'],
            tristeza: ['Titanic', 'Robando a la novia', 'Cartas a Jhon']
        }
    }

}

console.log(persona)
console.log(persona.nombre)
console.log(persona.password)
console.log(persona.musica[1])
console.log(persona.peliculas.romanticas.comediasRomanticas[1])