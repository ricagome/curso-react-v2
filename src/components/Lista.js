import React, { useState, Fragment } from 'react';

const Lista = () => {
    const [arrayNumero, setarrayNumero] = useState([1,2,3,4,5,6])
    
    const [numero, setNumero] = useState(5)

    const agregarElemento = () => {
        setNumero(numero + 1)
        //console.log('click')
        setarrayNumero([...arrayNumero,numero])
    }

    return (
        <Fragment>
        <h2>Lista de un Array</h2>
            <button onClick={agregarElemento}>Agregar</button>
            <ul>
                {
                    arrayNumero.map((item, index) => 
                        <li key={index}>{item} - {index}</li>
                    )
                }
            </ul>
        </Fragment>
    );
}

export default Lista;