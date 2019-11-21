//const Municipality = require('../models/Municipality');

class MunicipalityController {

    async createMunicipality({ request, response }) {
        const result = await Municipality.create(request.body);
        console.log(result)
        response.status = 200;
        response.body = result.body;
    }
}
module.exports = MunicipalityController;
