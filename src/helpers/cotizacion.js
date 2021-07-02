export function calcularTotal(cantidad, plazo) {
    const interesCantidad = determinarCantidad(cantidad) * cantidad;
    const interesPlazo = determinarPlazo(plazo) * cantidad;

    const total = interesCantidad + interesPlazo + Number(cantidad);
    return total;
}

function determinarCantidad(cantidad) {
    if (cantidad <= 1000)
        return 0.25
    if (cantidad > 1000 && cantidad <= 5000)
        return 0.2
    if (cantidad > 5000 && cantidad <= 10000)
        return 0.15
    if (cantidad > 10000)
        return 0.1
}

function determinarPlazo(plazo) {
    switch (Number(plazo)) {
        case 3:
            return 0.05
        case 6:
            return 0.1
        case 12:
            return 0.15
        case 24:
            return 0.2
        default:
            return 5
    }
}