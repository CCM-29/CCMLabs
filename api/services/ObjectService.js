/* eslint-disable no-underscore-dangle */
import queryString from 'query-string';

const baseUrl = process.env.OBJECT_SERVICE_URL;
const headers = {
  apikey: process.env.OBJECT_APIKEY,
};

class ObjectService {
  async create(client, object, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.post(`/clients/${client}/objects/${object}`, body, { headers });
    return response;
  }

  async createMassive(body) {
    const request = RequestService.create(baseUrl);
    let arr = body;
    for (let i = 0; i < arr.length; i++) {
      let client = arr[i];
      let arrBody = client.body;
      for (let i = 0; i < arrBody.length; i++) {
        let object = arrBody[i];
        await request.post(`/clients/${client.id}/objects/${client.object}`, object, { headers });
      }
    }
  }

  async getUrlSignature(data) {
    const request = RequestService.create(baseUrl);
    const response = await request.post('/url-signature', data, { headers });
    return response;
  }

  async get(client, query, userid) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${client}/objects/user/${userid}/?${queryString.stringify(query)}`, { headers });
    return response;
  }

  async getLastUploads(client, query) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${client}/objects?${queryString.stringify(query)}`, { headers });
    return response;
  }

  async getById(client, object, query, user) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${client}/objects/${object}/user/${user}?${queryString.stringify(query)}`, { headers });
    return response;
  }

  async getByIdExplore(client, object, query, user) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${client}/folders/${user}/folderid/${object}?${queryString.stringify(query)}`, { headers });
    return response;
  }

  async getWorkspace(client, user) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${client}/workspaces/${user}`, { headers });
    return response;
  }

  async getWorkspacesByClient(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${id}/workspaces`, { headers });
    return response;
  }

  async getWorkspacesByUser(id) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/users/${id}/workspaces`, { headers });
    return response;
  }

  async update(client, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/clients/${client}/objects`, body, { headers });
    return response;
  }

  async updateById(client, object, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/clients/${client}/objects/${object}`, body, { headers });
    return response;
  }

  async deleteById(client, object) {
    const request = RequestService.create(baseUrl);
    const response = await request.delete(`/clients/${client}/objects/${object}`, {}, { headers });
    return response;
  }

  // Shared

  async getShared(user, client) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/users/${user}/clients/${client}/shared`, { headers });
    return response;
  }

  // Recent

  async getRecent(user, client) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/users/${user}/clients/${client}/recent`, { headers });
    return response;
  }

  // Favorites

  async getFavorites(user, client) {
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/users/${user}/clients/${client}/favorites`, { headers });
    return response;
  }

  async addObjectToFavorites(user, client, object, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.post(`/users/${user}/clients/${client}/favorites/${object}`, body, { headers });
    return response;
  }

  async updateWorkspaceToFavorites(user, client, object, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.put(`/users/${user}/clients/${client}/favorites/${object}`, body, { headers });
    return response;
  }

  async deleteObjectToFavorites(user, client, object, body) {
    const request = RequestService.create(baseUrl);
    const response = await request.delete(`/users/${user}/clients/${client}/favorites/${object}`, body, { headers });
    return response;
  }

  updateWorkClient(user, client, data) {
    cano.log.debug('updateWorkClient -> user', user, 'client ->', client, 'data ->', data);
    const request = RequestService.create(baseUrl);
    return request.put(`/clients/${client}/workspaces`, { ...data, user }, { headers });
  }

  async getBreadCrumbByClient(id, userid) {
    const { RequestService } = cano.app.services;
    const request = RequestService.create(baseUrl);
    const response = await request.get(`/clients/${id}/folders/${userid}`, { headers });
    return response;
  }

}

module.exports = ObjectService;
