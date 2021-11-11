import { FETCH_SERVICES_REQUEST, FETCH_SERVICES_FAILURE, FETCH_SERVICES_SUCCESS, ADD_SERVICE_REQUEST, ADD_SERVICE_FAILURE, ADD_SERVICE_SUCCESS, CHANGE_SERVICE_FIELD, REMOVE_SERVICE } from './actionTypes';

export const fetchServicesRequest = () => ({
    type: FETCH_SERVICES_REQUEST
})
export const fetchServicesFailure = () => ({
    type: FETCH_SERVICES_FAILURE
})
export const fetchServicesSuccess = () => ({
    type: FETCH_SERVICES_SUCCESS
})
export const addServicesRequest = () => ({
    type: ADD_SERVICE_REQUEST
})
export const addServicesFailure = () => ({
    type: ADD_SERVICE_FAILURE
})
export const addServicesSuccess = () => ({
    type: ADD_SERVICE_SUCCESS
})
export const changeServiceField = (name, value) => ({
    type: CHANGE_SERVICE_FIELD, payload: {name, value},
})
export const removeService = (id) => ({
    type: REMOVE_SERVICE, payload: {id},
})

export const fetchServices = async dispatch => {
    dispatch(fetchServicesRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        dispatch(fetchServicesSuccess(data));
    } catch (e) {
        dispatch(fetchServicesFailure(e.message));
    }
}

export const addService = async (dispatch, name, price) => {
    dispatch(addServicesRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, price}),
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        dispatch(addServicesSuccess());
    } catch (e) {
        dispatch(addServicesFailure(e.message));
    }
    fetchServices(dispatch);
}