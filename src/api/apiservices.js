import President from "../model/President";
import Airport from "../model/Airport";
import TouristicAttraction from "../model/TouristicAtrtaction";
import Department from "../model/Department";
import Region from "../model/Region";


 

export const fetchPresidents = async () => {
    const startTime = performance.now();
    try {
        const response = await fetch('https://api-colombia.com/api/v1/President');
        const data = await response.json();
        const endTime = performance.now();

        const timeTaken = endTime - startTime;

        return {
            data: data.map(president => new President(president)),
            responseTime: timeTaken
        };

    } catch (error) {
        console.error('Error al consumir el servicio:', error);
        throw error;
    }
};

export const fetchAirports = async () => {
    const startTime = performance.now();
    try {
        const response = await fetch('https://api-colombia.com/api/v1/Airport');
        const data = await response.json();
        const endTime = performance.now();

        const timeTaken = endTime - startTime;

        return {
            data: data.map(airport => new Airport(airport)),
            responseTime: timeTaken
        };
        
    } catch (error) {
        console.error('Error al consumir el servicio:', error);
        throw error;
    }
}

export const fetchTouristicAttractions = async () => {
    const startTime = performance.now();
    try {
        const response = await fetch('https://api-colombia.com/api/v1/TouristicAttraction');
        const data = await response.json();
        const endTime = performance.now();

        const timeTaken = endTime - startTime;

        return {
            data: data.map(touristicAttraction => new TouristicAttraction(touristicAttraction)),
            responseTime: timeTaken
        };

    } catch (error) {
        console.error('Error al consumir el servicio:', error);
        throw error;
    }
}

export const fetchGetDeparmentById = async (id) => {
    try {
        const response = await fetch(`https://api-colombia.com/api/v1/Department/${id}`);
        const data = await response.json();
        return new Department(data);
        
    } catch (error) {
        console.error('Error al consumir el servicio:', error);
        throw error;
    }
}

export const fetchRegionById = async (id) => {
    try {
        const response = await fetch(`https://api-colombia.com/api/v1/Region/${id}`);
        const data = await response.json();
        return new Region(data);
        
    } catch (error) {
        console.error('Error al consumir el servicio:', error);
        throw error;
    }
}
