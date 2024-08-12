class President{
    constructor({ id, image, name, lastName, startPeriodDate, endPeriodDate, politicalParty, description, cityId, city }) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.lastName = lastName;
        this.startPeriodDate = new Date(startPeriodDate);
        this.endPeriodDate = new Date(endPeriodDate);
        this.politicalParty = politicalParty;
        this.description = description;
        this.cityId = cityId;
        this.city = city;
    }
}

export default President;