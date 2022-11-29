import React, { Fragment } from 'react'
import Avatar from './Avatar'

const Comentario = ({author}) => {
    return (
        <Fragment>
            <h2>Comentarios</h2>
            <hr className="bg-light" />
            <div className="media">
                <Avatar urlImagen={author.urlImagen}/>
                <div className="media-body">
                    <h5 className="mt-0">{author.nombre}</h5>
                    {author.texto}
                </div>
            </div>
        </Fragment>
    );
}
 
export default Comentario;