import "./president-list.css";

const PresidentList = ({ presidents, responseTime}) => {
    return (
        <div className="president-list">
            {
                presidents.map((president, index) => (
                    <div key={index} className="president-item">
                        <img src={president.image} alt={`${president.name} ${president.lastName}`} className="president-image" />
                        <div className="president-info">
                            <h2>{`${president.name} ${president.lastName}`}</h2>
                            <p>{president.description}</p>
                            <p><strong>Term:</strong> {`${president.startPeriodDate.getFullYear()} - ${president.endPeriodDate.getFullYear()}`}</p>
                            <p><strong>Party:</strong> {president.politicalParty}</p>
                            <p><strong>City:</strong> {president.city}</p>
                        </div>
                    </div>
                ))}
            <p> Total de registros: {presidents.length}</p>
            <p>Tiempo de respuesta: {responseTime ? `${responseTime.toFixed(2)} ms` : 'Cargando...'}</p>
        </div>
    );
}

export default PresidentList;