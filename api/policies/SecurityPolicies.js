/* eslint-disable no-undef */
class SecurityPolicies {

    async validateAuthPublicToken({ request }, next) {
        const { body } = request;
        const result = await SecurityService.ValidateValueFromTime(body);
        if (result.body) {
            await next();
        } else {
            throw new AuthorizationError('InvalidAccessToken', 'Time Token not valid');
        }
    }
}
module.exports = SecurityPolicies;