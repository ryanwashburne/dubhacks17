import apisauce from 'apisauce';

const create = (baseURL = 'http://localhost:3000') => {
    const api = apisauce.create({
        baseURL,
    });

    const postAppointment = (types, other, num) => api.post('/appointment', { types: types, other: other, num: num});
    const getAppointment = (num) => api.get(`/appointment?num=${num}`);
    const deleteAppointment = (num) => api.delete('/appointment', { num: num });

    return {
        postAppointment,
        getAppointment,
        deleteAppointment,
    };
}

export default {
    create
};
