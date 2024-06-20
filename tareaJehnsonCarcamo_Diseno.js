
//Ejercicio #1-----------------------------------------------------------------------------
console.log("----------------Ejercicio #1-------------------------------------------------");
const libros = [ { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio:
1967 }, { titulo : "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio:  1605 }, {
titulo: " 1984", autor: "George Orwell", anio: 1949 }];

let autores = [];
for (let i = 0; i < libros.length; i++) {
    autores.push(libros[i].autor);
}

console.log(autores);



//Ejercicio #2----------------------------------------------------------------------------------
console.log("----------------Ejercicio #2-------------------------------------------------");   
const empleado = { nombre: " Juan", salario: 10000 , antiguedad: 6 };

if(empleado.antiguedad > 5){
    empleado.salario += empleado.salario * 0.1;
}
console.log(empleado.salario);

//Ejercicio #3------------------------------------------------------------------------------------
console.log("----------------Ejercicio #3-------------------------------------------------");
const numeros = [ 5 , 8 , 12 , 3 , 7 , 19 , 1, 10, 2];

let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if(numeros[i] > mayor){
        mayor = numeros[i];
    }
}
console.log(mayor);


//Ejercicio #4------------------------------------------------------------------------------------
console.log("----------------Ejercicio #4-------------------------------------------------");   

let contador = 0
let suma = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        suma += numeros[i]
        contador++
    }
}    


let promedio = suma/contador

console.log("El Promedio de impares es: " + promedio )
    

//Ejercicio #5------------------------------------------------------------------------------------
console.log("----------------Ejercicio #5-------------------------------------------------");
const persona = { nombre: " Ana", edad: 25 , ciudad:"SPS"};

const {nombre} = persona;
const {edad} = persona;
const {ciudad} = persona;

console.log(nombre);
console.log(edad);
console.log(ciudad);
