const AttractionsGroup = ({ groupedAttractions }) => {
    return (
        <div>
            {Object.keys(groupedAttractions).map(departmentId => {
                const department = groupedAttractions[departmentId];
                return (
                    <div key={departmentId}>
                        <p>{department.department} - atracciones turísticas: {department.count}</p>
                        <ul>
                            {Object.keys(department.cities).map(cityId => {
                                const city = department.cities[cityId];
                                return (
                                    <li key={cityId}>
                                        <strong>{city.cityName}:</strong> {city.attractionName}
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

export default AttractionsGroup;