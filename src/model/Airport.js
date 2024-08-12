import Department from './Department';
import City from './City';

class Airport{
    constructor({id, name, iataCode, oaciCode, type, department, city, latitude, longitude}){
        this.id = id;
        this.name = name;
        this.iataCode = iataCode;
        this.oaciCode = oaciCode;
        this.type = type;
        this.department = department ? new Department(department) : null;
        this.city = city ? new City(city) : null;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export default Airport;
