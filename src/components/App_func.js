import React from 'react';
import Contador from './Contador'
import Jsx from './Jsx'
import Lista from './Lista'
import Formulario from './Formulario'
import FormHook from './FormHook'
import FormHooks_2 from './FormHooks_2'
//import Binary from './components/FormBinary'
import Saludo from './Saludo'
import Comentario from './Comentario'


function App_func() {
  const author = {
    nombre: 'Juanito',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem Ipsum kdljkslfjdksljfksdjlfjdskljfkdsjfljsdlkfjlksdjfl'
  }

  return (
    <div className="container mt-5">
      <h1>Hola Mundo React</h1>
      <Contador/>
      <Jsx />
      <Lista />
      <Formulario />
      <FormHook />
      <FormHooks_2 />
      <h1>Compnents </h1>

      <Saludo persona="Juanito" edad={25} />
      <Saludo persona="Pepe"/>

      <Comentario author={author}/>
      <Comentario author={author}/>

    </div>
  );
}

export default App_func;
