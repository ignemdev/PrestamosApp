import React from 'react';

const Resultado = (props) => {
    const {
        total,
        plazo,
        cantidad,
    } = props;
    return (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: ${cantidad}</p>
            <p>A pagar en: {plazo} Meses</p>
            <p>Pago mensual: ${(total / plazo).toFixed(2)}</p>
            <p>Total a pagar: ${total}</p>
        </div>
    );
}

export default Resultado;