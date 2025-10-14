function nombreFuncion(nombre, edad) {
    console.log("Hola " + nombre + ", tienes " + edad + " años");
}

nombreFuncion("Mónica", 25);
nombreFuncion("Raul", 15);

function suma(n1, n2) {

    suma = n1 + n2;
}


suma(2, 3);
console.log("El resultado de la suma es " + suma);

function saludar() {
    return "Hola carapapa";
}
saludar();
console.log(saludar());

function doblar(num) {
    return num * 2;
}

console.log(doblar(5));

const doblar2=(num)=>{
    return num*2;
}
console.log(doblar2(5));

function calcularPropina(cuenta, porcentaje) {
    const propina = cuenta * (porcentaje / 100);
    const total = cuenta + propina;

    console.log("Cuenta: "+ cuenta + "€");
    console.log("Propina(" + porcentaje + "%): " + propina + "€");
    console.log("Total a pagar: " + total + "€");

    return total;
}
calcularPropina(50,10);

const saludar3 = (nombre) => ("¡Hola, " + nombre + "!");

console.log(saludar3("María"));

const restas =(a,b) => a+b;
console.log(restas(1,2));

