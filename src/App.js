import React, {useState} from 'react';
import Header from './components/Header';
import Formuario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Contenedor = styled.div `
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div `
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {

  const[resumen,guardarResumen] = useState({
    cotizacion : 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);

  //extraer datos y cotizacion

  const {datos,cotizacion} = resumen;
  return (
   <Contenedor>
      <Header 
      titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formuario
          guardarResumen = {guardarResumen}
          guardarCargando = {guardarCargando}
        />

        {cargando && <Spinner/> }
       
        <Resumen
          datos={datos}
        />

        {!cargando 
        
        &&
          <Resultado
          cotizacion = {cotizacion}
        />
        }

        
      </ContenedorFormulario>
   </Contenedor>
  );
}

export default App;
