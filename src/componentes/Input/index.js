import React, { useState } from "react";
import './Input.css';

const Input = () => {
    const [buscar, setBuscar] = useState('')
    const aoDigitar = (evento) => {
        buscar = evento.terget.value
    }
    return (

        <div className='input'>
            <input onChange={aoDigitar} placeholder='Buscar Pokemon' />
        </div>

    )
}
export default Input