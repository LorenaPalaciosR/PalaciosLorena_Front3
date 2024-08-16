import React from 'react'
import '../Card.css';

const Card = ({nombre, apellido, correo}) => {
    return (
        <div className='estiloCard'>
            <h2>Gracias, {nombre} {apellido}!</h2>
            <h4>Te enviamos tu e-book al siguiente correo</h4>
            <p className='botonCard'>{correo}</p>
        </div>
    )
}

export default Card