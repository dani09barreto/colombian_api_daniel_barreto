import City from './City';

class TouristicAttraction{
    constructor({id, name, description, images, longitude, latitude, city}){
        this.id = id;
        this.name = name;
        this.description = description;
        this.images = images;
        this.longitude = longitude;
        this.latitude = latitude;
        this.city = city ? new City(city) : null;
    }
}

export default TouristicAttraction;