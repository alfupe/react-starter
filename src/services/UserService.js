import BaseService from './BaseService';

export default class UserService extends BaseService {
    findUsers() {
        const endpoint = `users`;

        return fetch(`${this.API_URL}${endpoint}`, {method: 'GET'})
            .then(response => response.json())
            .then(response => response);
    }

    findUser(idUser) {
        const endpoint = `users/${idUser}`;

        return fetch(`${this.API_URL}${endpoint}`, {method: 'GET'})
            .then(response => response.json())
            .then(response => response);
    }
}