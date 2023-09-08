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
    insertToFavoritePokemon(params, cb, err) {
        client.post(endpointFavorite, params)
        .then(res => {
            if(cb) cb(res);
        }).catch(e => {
            if (err) err(e);
        });
    },
    removeFavorite(id, cb, err) {
        client.delete(`${endpointFavorite}/${id}`)
        .then(res => {
            if(cb) cb(res);
        }).catch(e => {
            if (err) err(e);
        });
    },
}