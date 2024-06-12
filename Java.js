// Función para simular la obtención de precios de un activo
function obtenerPrecioActivo() {
    // Simulación: Retorna un precio aleatorio entre 1 y 100
    return Math.floor(Math.random() * 100) + 1;
}

// Función para decidir si comprar o vender
function decidirOperacion(precio) {
    const precioCompra = 30; // Define tu propio umbral de precio para comprar
    const precioVenta = 70; // Define tu propio umbral de precio para vender

    if (precio <= precioCompra) {
        // Lógica para comprar
        console.log('Comprar activo');
        document.getElementById('estado').textContent = 'Estado: Compra realizada a ' + precio;
    } else if (precio >= precioVenta) {
        // Lógica para vender
        console.log('Vender activo');
        document.getElementById('estado').textContent = 'Estado: Venta realizada a ' + precio;
    } else {
        // No hacer nada
        console.log('No realizar operación');
        document.getElementById('estado').textContent = 'Estado: Esperando oportunidad';
    }
}

// Ejecutar la lógica de arbitraje cada cierto intervalo
setInterval(function() {
    const precioActual = obtenerPrecioActivo();
    decidirOperacion(precioActual);
}, 5000); // Intervalo de 5 segundos
