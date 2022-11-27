
let salud1 = 100
let armas = 0
let personaje = ""
let orco = 60
let apuñalar = 70
let lucha = 0
let= saludorco =0


do { 
    personaje = prompt("Ingrese el nombre de su personaje")
    
    if (personaje >=0) {
         alert ("Ingresa un nombre válido")
    }

    else {
        alert ("El nombre de su personaje es " + personaje)
        alert ("Ahora escoja su arma")
    }

} while (personaje >=0);

do {
    armas = Number(prompt("Para espada dos manos, pulse 1 \nPara hacha, pulse 2 \nPara la espada matadragones, pulse 3"))

    if (armas===1) {
        alert("Haz seleccionado espada dos manos")
    }

    if (armas===2) {
        alert("Haz seleccionado hacha")
    }

    if (armas===3) {
        alert("Haz seleccionado espada matadragones")
    }
    
} while (armas ===0 || armas >=4);

alert ("Si quiere obtener un escudo, para aumentar en 10ptos su vida, resuelva esta ecuación")

let escudo = Number(prompt("Cual es el resultado de 7*7*7*0+1?"))


if (escudo ==1) { 
    salud1 + 10
    alert ("Su vida se incrementó 10 ptos")
    
} else {  salud1
    
}

if (escudo==0 || escudo>1) {
    salud1 
    alert ("Respuesta incorrecta, tu vida sigue siendo la misma")
    
} 

alert ("Un orco brujo te esta comenzando a atacar \nA Luchar") 

lucha=Number(prompt("Para apuñalar al ogro, pulse 1 \nPara huir de la batalla, pulse 2"))

if (lucha ===1) {
    saludorco = (orco-apuñalar)
    alert("Has vencido. Sumas 1500 de Exp y subes al lvl 2")
    
} 

if (lucha===2) {
    alert("No tienes honor, un guerrero nunca huye. Game over")
    
}

if (lucha ===0 || lucha >2) {
    alert("Elegiste otra opción, como castigo los dioses te haran pagar. Game over")
}

