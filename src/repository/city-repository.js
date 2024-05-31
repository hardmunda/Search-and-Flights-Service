const { city } = require("../models/index")

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
            const City = await city.update(data, {
                where: {
                    id: cityId
                }
            });
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
}

module.exports = CityRepository;