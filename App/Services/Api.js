import apisauce from 'apisauce';

const create = (baseURL = 'http://localhost:3000') => {
    const api = apisauce.create({
        baseURL,
    });

    // const login = (email, password) => api.post('/session', { email: email, password: password });
    // const scan = (code) => api.put(`/ticket/${code}`);

    return {
        // login,
        // scan,
    };
}

export default {
    create
};
