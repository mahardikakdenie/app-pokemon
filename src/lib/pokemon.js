import client from "./http-client"
const endpoint = 'pokemon';
const endpointFavorite = 'pokemon/favorite'
export default {
    getDataPokemon(params, cb, err) {
        client.get(endpoint, { params }).then(res => {
            if(cb) cb(res);
        }).catch(e => {
            if (err) err(e);
        });
    },
    getDetailPokemon(id, cb, err) {
        client.get(`${endpoint}/${id}`).then(res => {
            if(cb) cb(res);
        }).catch(e => {
            if (err) err(e);
        });
    },
    getDataFavoritePokemon(params, cb, err) {
        client.get(`${endpointFavorite}`, { params })
        .then(res => {
            if(cb) cb(res);
        }).catch(e => {
            if (err) err(e);
        });
    },
}