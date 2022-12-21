import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Comments = () => {

    const [equipo, setEquipo ] = useState([])

    useEffect(() => {
        //console.log('useEffect')
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/comments')
        const users = await data.json()
        //console.log(users)
        setEquipo(users)
    }

    return (
        <div>
            <h1>Comentarios</h1>
            <ul>
                {equipo.map(item => (
                    <li key={item.id}>
                        <Link to = {`/Comments/${item.id}`}>
                        {item.name} - {item.email}
                        </Link>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Comments