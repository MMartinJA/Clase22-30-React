const EjemploProps1 = props => {
    return (
        <h3>Hola {props.nombre}</h3>
    )
}

const EjemploProps2 = props => {
    const { elementos } = props;
    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
        </ul>
    )
}

const EjemploProps3 = ({ titulo, subtitulo, cuerpo }) => {
    return (
        <div className="caja">
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>
        </div>
    )
}

const EjemploProps4 = props => {
    //cuando se produzca el evento onChange en el input
    //ejecuto la funcion anonima que llama a la funcion
    //que enviamos en el props cambiar valor

    return (
        <label>ver en consola <input type="text" onChange={(e) => props.cambiarValor(e.target.value)} /></label>
    )
}

const EjemploProps5 = props => {
    //defino la funcion que va a manejar el evento del click
    const handleClick = e => {
        //valido que este la props que necesito
        //si se da la condicion o la pasaron > va a mostrar me cliqueame
        //si no nada o no se va a romper
        //porque en este caso el control esta dentro de la funcion

        if (props.eventoClick) {
            props.eventoClick('Me cliqueaste')
        }
    }
    return (
        <p><button onClick={handleClick}>Cliqueame!</button></p>
    )
}


export {
    EjemploProps1,
    EjemploProps2,
    EjemploProps3,
    EjemploProps4,
    EjemploProps5
}