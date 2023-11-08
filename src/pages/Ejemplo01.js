import { EjemploProps1, EjemploProps2, EjemploProps3 } from "../components/Props";
const nombre2 = 'Jonathan';
const frutas =['manzanas', 'bananas', 'paltas', 'sandia']
const verduras =['papa', 'zanahorias', 'acelga']
const Ejemplo01 = (props) => {
    return (
        <div>
            <h2>Ejemplos de Props</h2>
            {/*propiedad simple y reutilizable*/}
            <EjemploProps1 nombre='Martin' />
            <EjemploProps1 nombre={nombre2} />
            <EjemploProps1 /> {/*solo Muestra un hola */}
            {/*listado de elementos - 11 pdf */}
            <EjemploProps2 elementos={frutas} />
            <EjemploProps2 elementos={verduras} />
            <EjemploProps3 titulo="Futbol Messi" subtitulo="Messi gano otra copa" cuerpo="ammos yhffhg qokerq qwkm  as ohfafa" />
        </div>
    )
}

export default Ejemplo01;