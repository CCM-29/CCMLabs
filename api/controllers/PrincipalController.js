/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */


class PrincipalController {

  async createStrategicPlan({ request, response }) {
    const result = await StrategicPlan.create(request.body);
    response.status = r200;
    response.body = result.body;
  }

}

module.exports = PrincipalController;
