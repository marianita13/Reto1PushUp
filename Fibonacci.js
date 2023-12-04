//Ejercicio 1
function fibonnaci(n){
    var fib=[0,1];

    for (i=2; i<=n; i++){
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib;
}
var num = prompt("DIGITA UN NUMERO PARA LA SECUENCIA DE FIBONACCI")
console.log(fibonnaci(num))


//Ejercicio 2
function fibonnaciConfirmacion(x){
    var fib=[0,1]

    var numero = 2;
    for(i=2;i<=numero;i++){
        numero+=1
        fib[i] = fib[i-1]+fib[i-2];
        if(fib[i] == x){
            return true
            break
        }
        else if(fib[i] > x){
            return false;
        }
    }
}
var x = prompt("DIGITA EL NUMERO DE LA SECUENCIA FIBONACCI")
var bool = fibonnaciConfirmacion(x);
if(bool){
    console.log(`${x} Si es un numero de fibonacci`);
}
else{
    console.log(`${x} No es un numero de fibonacci`);
}


//Ejercicio 3
function fibonacciSecuencia(x){
    var fib=[0,1];

    for (i=2; i<x; i++){
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib;
}
var num = prompt("Digita el limite para la secuencia de fibonacci");
console.log(fibonacciSecuencia(num));