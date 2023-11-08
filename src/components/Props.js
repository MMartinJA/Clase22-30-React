const EjemploProps1 = props =>{
    return(
        <h3>Hola {props.nombre}</h3>
    )
}

const EjemploProps2 = props =>{
    const {elementos} =props;
    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}</li>) }
        </ul>
    )
}

const EjemploProps3 =({titulo,subtitulo,cuerpo}) =>{
    return(
        <div className="caja">
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>
        </div>
    )
}
export {
    EjemploProps1,
    EjemploProps2,
    EjemploProps3
}