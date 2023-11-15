import { useEffect, useState } from 'react';
import '../css/api.css'
const Api = props => {

    const [cargando, setCargando] = useState(false);
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            setCargando(true);
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false);
        }
        cargarDatos()
    }, [])

    //fetch < para traer los datos nativos de js. tambien se puede utilizar axios(instalar dependencia) 

    return (
        <>
            <h2>Dato Api</h2>
            {cargando ? <p>Cargando datos....</p> : (
                <div className="personajes">
                    {personajes.map(personaje => (
                        <div className="personaje" key={personaje.id}>
                            <h4>{personaje.name}</h4>
                            <div className="ficha">
                                <div className="foto">
                                    <img src={personaje.image} alt={personaje.name} />
                                </div>
                                <div className="datos">
                                    <h6>Especie: {personaje.species === 'Human' ? 'Humano' : personaje.species}</h6>
                                    <h6>Vivo: {personaje.status === 'Alive' ? 'Si' : 'no'}</h6>
                                </div>
                            </div>
                        </div>
                    ))} {/*cierra la linea 25 del map */}
                </div>
            )} {/*termina el operador ternario de la linea 23 */}
        </>
    )
}
export default Api;