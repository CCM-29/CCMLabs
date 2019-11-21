import jwt from 'jsonwebtoken';
//import LogService from '../services/LogService';

class LoggerUtil {

  async build(action, urlOrigin, ipOrigin, params, request, response,
    value, workClients, email, role, name, userId, isSuccess) {
    let result = null;
    const log = {
      'action': action,
      'urlOrigin': urlOrigin,
      'ipOrigin': ipOrigin,
      'params': params,
      'request': JSON.stringify(request),
      'response': JSON.stringify(response),
      'value': value,
      'workClients': workClients,
      'email': email,
      'role': role,
      'name': name,
      'userId': userId,
      'isSuccess': isSuccess,
    };

    await this.saveLog(log);
  }


  async saveLog(log) {
    await LogService.create(log);
  }

  async error(action, params, request, response) {
    this.logdetail(action, params, request, response, false);
  }

  async create(action, params, request, response) {
    this.logdetail(action, params, request, response, true);
  }

  async logdetail(action, params, request, response, isSuccess) {
    let userId, ipOrigin, workClients, email, name, role, parameters

    const urlOrigin = request.url;
    try {
      ipOrigin = request.headers['x-forwarded-for'] ? request.headers['x-forwarded-for'] : null;
      parameters = params ? params : null;

      if (request.header.authorization) {
        const token = jwt.decode(request.header.authorization.replace('Bearer ', ''));
        userId = token.user._id;
        workClients = JSON.stringify(token.user.workClients);
        email = token.user.email;
        name = token.user.name;
        role = token.user.role;
      }
      this.build(action, urlOrigin, ipOrigin, JSON.stringify(parameters), request, response, '', workClients, email, role, name, userId, isSuccess);
    } catch (error) {
      //console.log('error', error);
    }
  }

  async logdetailFront(action, value, request, response, isSuccess) {
    let userId, ipOrigin, workClients, email, name, role, parameters

    const urlOrigin = request.url;
    try {
      ipOrigin = request.headers['x-forwarded-for'] ? request.headers['x-forwarded-for'] : null;
      parameters = '';

      if (request.header.authorization) {
        const token = jwt.decode(request.header.authorization.replace('Bearer ', ''));
        userId = token.user._id;
        workClients = JSON.stringify(token.user.workClients);
        email = token.user.email;
        name = token.user.name;
        role = token.user.role;
      }

      this.build(action, urlOrigin, ipOrigin, parameters, request, response, value, workClients, email, role, name, userId, isSuccess);
    } catch (error) {
      //console.log('error', error);
    }
  }
}

module.exports = LoggerUtil;
