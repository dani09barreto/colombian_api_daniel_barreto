import "./touristic-list.css";

const TouristicList = ({ touristics, responseTime }) => {
    return(
        <div className="touristic-list">
            {
                touristics.map((touristic, index) => (
                    <div key={index} className="touristic-item">
                        <div className="touristic-info">
                            <h2>{`${touristic.name}`}</h2>
                            <p>{touristic.description}</p>
                            <p><strong>City:</strong> {touristic.city.name}</p>
                            <p><strong>Latitude:</strong> {touristic.latitude}</p>
                            <p><strong>Longitude:</strong> {touristic.longitude}</p>
                            <div className="image-gallery">
                                {touristic.images.map((image, index) => (
                                    <img key={index} src={image} className="gallery-image"/>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <p> Total de registros: {touristics.length}</p>
                <p>Tiempo de respuesta: {responseTime ? `${responseTime.toFixed(2)} ms` : 'Cargando...'}</p>
                <hr/>
        </div>

    );

}

export default TouristicList;