import { useState } from "react";
import '../css/estado.css'

function EjemploEstado(props) {

    const [counter, setCounter] = useState(0);
    return (
        <div className="contenedor">
            <h3>{`Contador ${counter}`}</h3>

            <div className='buttonGroup'>
                <button className="success" onClick={() => setCounter(counter + 1)}>+</button>
                <button className="error" onClick={() => setCounter(counter - 1)}>-</button>

            </div>
        </div>
    )
}

export {
    EjemploEstado
}