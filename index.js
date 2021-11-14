let calcular = (numero = prompt('ingresa un numero entre 1 y 20', 0)) => {
    if (numero >= 1 && numero <= 20) {
        var resultado = 1;
        for (var x = 1; x <= numero; x++) {
            console.log(numero + " x " + x + " = " + (numero * x));
        }
        for (var i = 1; i <= numero; i++) {
            resultado = resultado * i;
            for (var j = 1; j <= numero; j++) {
                console.log('Factorial de: ' + i + ' es: ' + resultado);
            }
        }
    } else {
        alert('El numero a ingresar debe ser entre 1 y 20')
        calcular();
    }
}
calcular();