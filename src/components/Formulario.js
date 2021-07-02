import React, { Fragment, useState } from 'react';

import Spinner from './Spinner';

import { calcularTotal } from '../helpers/cotizacion'

function Formulario(props) {
    //definir props
    const {
        cantidad,
        guardarCantidad,
        plazo,
        guardarPlazo,
        total,
        guardarTotal,
        cargando,
        guardarCargando,
    } = props;

    //definir state
    const [error, verificarError] = useState(false)

    const calcularPrestamo = e => {
        e.preventDefault();

        verificarError(cantidad === 0 || plazo === 0)

        if (!error) {
            guardarTotal(0);
            guardarCargando(true);
            setTimeout(() => {
                const total = calcularTotal(cantidad, plazo);
                guardarTotal(total);
                guardarCargando(false);
            }, 3000)
        };
    }

    const cantidadHandler = e => {
        guardarTotal(0);
        guardarCantidad(Number(e.target.value));
    }

    const plazoHandler = e => {
        guardarTotal(0);
        guardarPlazo(Number(e.target.value));
    }

    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            onChange={cantidadHandler}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            onChange={plazoHandler}
                        >
                            <option value="0">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>
            { (error) ? <p className="error">Todos los campos son obligatorios.</p> : null}
            { (cargando) ? <Spinner /> : null}
        </Fragment>
    )
}

export default Formulario;