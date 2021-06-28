import React, { Fragment } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <Header titulo="cotizador de prestamos" />
      <div className="container">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
