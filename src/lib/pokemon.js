import client from "./http-client"
const endpoint = 'pokemon';
export default {
    getDataPokemon(params, cb, err) {
        client.get(endpoint, { params }).then(res => {
            if(cb) cb(res);
        }).catch(e => {
            if (err) err(e);
        });
    },
}