import { Strategy } from 'passport-http-bearer';

/**
 * @class BearerStrategy
 * @description This class represents an auth strategy and is responsible of
 * verify the accessTokens sended by the users
 * @author Antonio Mejias
 */
class BearerStrategy extends Strategy {

    constructor() {
        super(BearerStrategy.verify);
    }

    /**
   * @method verify
   * @description This method is the responsible of verify the tokens of the
   * users
   * @param {string} accessToken is a bearer access token
   * @author Antonio Mejias
   */
    static async verify(accessToken, done) {
        // console.log(accessToken);
        const Token = require('../models/Token');
        Token.find({ accessToken }, (err, ids) => {
            if (err) {
                cano.log.error(err);
                return done(err);
            }
            if (ids.length === 0) {
                return done(new Error('Invalid Token'));
            }
            done(null, accessToken);
        });
    }
}

module.exports = BearerStrategy;
