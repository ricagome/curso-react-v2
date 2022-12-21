import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const CommentDetail = () => {

    const {id} = useParams();

    const [comentario, setComentario ] = useState([])

    useEffect(() => {
        //console.log('useEffect') 
        const obtenerDatos = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            const users = await data.json()
            //console.log(users)
            setComentario(users)
        }
        obtenerDatos()
    }, [id])

    return (
        <div>
            <h3>{comentario.name}</h3>
            <p>{comentario.email}</p>
            <p>{comentario.body}</p>
        </div>
    )
}

export default CommentDetail