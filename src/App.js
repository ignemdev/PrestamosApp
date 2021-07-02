import React, { Fragment, useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';

function App() {
  //state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState(0);
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;

  if (cantidad === 0 || plazo === 0) {
    componente = <Mensaje />
  } else if (total !== 0) {
    componente = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad}
    />
  }

  return (
    <Fragment>
      <Header
        titulo="cotizador de prestamos"
        cantidad={cantidad}
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          cargando={cargando}
          guardarCargando={guardarCargando}
        />

        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
