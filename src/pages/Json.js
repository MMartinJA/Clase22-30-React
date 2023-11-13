import alumnos from '../data/alumnos.json'

const Json = (props) => {
    return (
        <>
            <h2>Ejemplo carga datos Json</h2>
            <ul>
                {alumnos.map(alumno => (
                    <li>{alumno.nombre} {alumno.apellido} - Edad: ({alumno.edad})</li>
                ))}
            </ul>
        </>
    )
}

export default Json;