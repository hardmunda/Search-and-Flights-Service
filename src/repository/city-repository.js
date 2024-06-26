const { city, sequelize } = require("../models/index")
const { Op } = require('sequelize');

class CityRepository {
    async createCity({ name }) {
        try {
            const City = await city.create({ name });
            return City;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await city.destroy({
                where: {
                    id: cityId
                }
            });
            return true;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    async updateCity(cityId, data) {
        try {
            // This method also do the updation but it's not returning object with updated value
            // const City = await city.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            const City = await city.findByPk(cityId);
            City.name = data.name;
            await City.save();
            return City;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };

        }
    }
    async getCity(cityId) {
        try {
            const City = await city.findByPk(cityId);

            return City;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };

        }
    }
    async getAllCities(filter) {
        try {
            if(filter.name){
            const City = await city.findAll({
                where: {
                  name: { 
                    [Op.startsWith]: filter.name
                  }
                }
            });
            return City;
        }
        const cities = await city.findAll();
        return cities;

        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };

        }
    }
}

module.exports = CityRepository;