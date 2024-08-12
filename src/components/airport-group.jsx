const AirportGroup = ({ airports }) => {

    return (
        <div>
            {Object.keys(airports).map(departmentId => {
                const department = airports[departmentId];
                return (
                    <div key={departmentId}>
                        <p>{department.department} - Aeropuetos: {department.count}</p>
                        <ul>
                            {Object.keys(department.cities).map(cityId => {
                                const city = department.cities[cityId];
                                return (
                                    <li key={cityId}>
                                        <strong>{city.cityName}:</strong> {city.airportName}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );

}

export default AirportGroup;

