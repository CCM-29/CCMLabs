import Router from 'koa-router';


const router = new Router({ prefix: '/v1' });
const { PrincipalController } = cano.app.controllers;
const { MunicipalityController } = cano.app.controllers;

router.post('/municipality', MunicipalityController.createMunicipality);
router.post('/strategicPlan', PrincipalController.createStrategicPlan);


module.exports = router;