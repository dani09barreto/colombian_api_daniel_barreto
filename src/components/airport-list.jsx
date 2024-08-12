import "./airport-list.css";

const AirportList = ({ airports, responseTime }) => {

    return(
        <div className="airport-list">
            {
                airports.map((airport, index) => (
                    <div key={index} className="airport-item">
                        <div className="airport-info">
                            <h2>{`${airport.name}`}</h2>
                            <p><strong>iataCode:</strong> {airport.iataCode}</p>
                            <p><strong>oaciCode:</strong> {airport.oaciCode}</p>
                            <p><strong>Type:</strong> {airport.type}</p>
                            <p><strong>City:</strong> {airport.city.name}</p>
                            <p><strong>Department:</strong> {airport.department.name}</p>
                            <p><strong>Latitude:</strong> {airport.latitude}</p>
                            <p><strong>Longitude:</strong> {airport.longitude}</p>
                        </div>
                    </div>
                ))}
                <p> Total de registros: {airports.length}</p>
                <p>Tiempo de respuesta: {responseTime ? `${responseTime.toFixed(2)} ms` : 'Cargando...'}</p>
        </div>
    );
}

export default AirportList;