import { fetchAirports, fetchGetDeparmentById, fetchPresidents, fetchRegionById, fetchTouristicAttractions } from "../api/apiservices"

export const getPoliticalPartyStats = async () => {
    try {
        const presidents = (await fetchPresidents()).data;
        
        const partyGroups = presidents.reduce((acc, president) => {
            const party = president.politicalParty.toLowerCase();
            if (!acc[party]) {
                acc[party] = [];
            }
            acc[party].push(president);
            return acc;
        }, {});

        const sortedParties = Object.entries(partyGroups)
            .map(([party, presidents]) => ({
                party,
                count: presidents.length,
                presidents
            }))
            .sort((a, b) => b.count - a.count);

        return sortedParties;
    } catch (error) {
        console.error('Error al obtener estadísticas de partidos políticos:', error);
        throw error;
    }
};

export const getAllPresidents = async () => {
    try {
        return await fetchPresidents();
    } catch (error) {
        console.error('Error al obtener la lista de presidentes:', error);
        throw error;
    }
}

export const getAllAirports = async () => {
    try {
        return await fetchAirports();
    } catch (error) {
        console.error('Error al obtener la lista de aeropuertos:', error);
        throw error;
    }
}

export const getAllTouristicAttractions = async () => {
    try {
        return await fetchTouristicAttractions();
    } catch (error) {
        console.error('Error al obtener la lista de atracciones turísticas:', error);
        throw error;
    }
}

export const groupAttractionsByCityAndDepartment = async () => {
    const attractions = (await getAllTouristicAttractions()).data;
    const groupAttractions = {};

    attractions.forEach(async attraction => {
        const cityId = attraction.city.id;
        const departmentId = attraction.city.departmentId;
        const deparment = await fetchGetDeparmentById(departmentId);

        if (!groupAttractions[departmentId]){
            groupAttractions[departmentId] = {
                department: deparment.name,
                cities: {},
                count: 0
            };
        }
        if (!groupAttractions[departmentId].cities[cityId]) {
            groupAttractions[departmentId].cities[cityId] = {
                cityName: attraction.city.name,
                attractionName : attraction.name
            };
            groupAttractions[departmentId].count++;
        }
    });

    return groupAttractions;
}

export const groupAirportsByCityAndDepartment = async () => {
    const airports = (await getAllAirports()).data;
    const groupAirports = {};

    airports.forEach(async airport => {
        const cityId = airport.city.id;
        const departmentId = airport.city.departmentId;
        const deparment = await fetchGetDeparmentById(departmentId);

        if (!groupAirports[departmentId]){
            groupAirports[departmentId] = {
                department: deparment.name,
                cities: {},
                count: 0
            };
        }
        if (!groupAirports[departmentId].cities[cityId]) {
            groupAirports[departmentId].cities[cityId] = {
                cityName: airport.city.name,
                airportName : airport.name
            };
            groupAirports[departmentId].count++;
        }
    });
    return groupAirports;
}

export const bigGroupAirports = async () => {
    const airports = (await getAllAirports()).data;
    const groupAirports = {
        region: {}
    };

    airports.forEach(async airport => {
        const department = airport.department;
        const region = await fetchRegionById(department.regionId);
        const city = airport.city;

        if (!groupAirports.region[region.name]){
            groupAirports.region[region.name] = {
                departamento: {}
            }
        }

        if (!groupAirports.region[region.name].departamento[department.name]){
            groupAirports.region[region.name].departamento[department.name] = {
                ciudad: {}
            }
        }
        
        if(!groupAirports.region[region.name].departamento[department.name].ciudad[city.name]){
            groupAirports.region[region.name].departamento[department.name].ciudad[city.name] = {
                tipo: {}
            }
        }

        if (!groupAirports.region[region.name].departamento[department.name].ciudad[city.name].tipo[airport.type]){
            groupAirports.region[region.name].departamento[department.name].ciudad[city.name].tipo[airport.type] = 0;
        }

        groupAirports.region[region.name].departamento[department.name].ciudad[city.name].tipo[airport.type]++;

    })
    
    return groupAirports;
}