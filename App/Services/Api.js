import apisauce from 'apisauce';

const create = (baseURL = 'http://localhost:3000') => {
    const api = apisauce.create({
        baseURL,
    });

    const postAppointment = (types, other, num) => api.post('/appointment', { types: types, other: other, num: num});
    const getAppointment = (num) => api.get(`/appointment?num=${num}`);
    const deleteAppointment = (num) => api.delete('/appointment', { num: num });

    const postOffer = (num) => api.post('/offer', { num: num});
    const getOffers = (num) => api.get(`/offer?num=${num}`);
    const deleteOffer = (num) => api.delete('/offer', { num: num });

    return {
        postAppointment,
        getAppointment,
        deleteAppointment,

        postOffer,
        getOffers,
        deleteOffer,
    };
}

export default {
    create
};
