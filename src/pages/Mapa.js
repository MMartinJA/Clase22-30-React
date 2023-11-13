import '../css/mapa.css'

const Mapa = (props) => {
    return (
        <div className="mapa">
            <h2>Ejemplo Mapa</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.54839618914!2d-59.138191424887275!3d-37.329523706517286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f96556d5f3f%3A0xada6694d7dee96b1!2sMunicipalidad%20de%20Tandil!5e0!3m2!1ses-419!2sar!4v1699877315646!5m2!1ses-419!2sar" 
            style={{ width:600, height:450, border:0 }}></iframe>
        </div>
    )
}

export default Mapa;