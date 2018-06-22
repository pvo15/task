import Fetch from './fetch';
import _ from 'lodash';


export default class CreateActionCreator {

    static read = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.get(options), type);

    static create = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.post(options), `${type}_CREATE`);

    static update = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.put(options), `${type}_UPDATE`);

    static delete = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.delete(options), `${type}_DELETE`, options.id);

    static withoutCall = ({ type, ...options }) => CreateActionCreator.dispatch(Fetch.withoutCall(options), `${type}_UPDATE`);


    static dispatch = (promise, type, id) => dispatch => {
        promise
            .then(response => dispatch({
                type,
                payload: _.isEmpty(response) ? {id} : response,
            }))
            .catch(error => dispatch({
                type: `${type}_FAILURE`,
                payload: error,
            }));

        return promise;
    };

};
