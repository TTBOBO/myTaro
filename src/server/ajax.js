import fly from './fly';
import * as constants from './constants';
const api = constants.api;

async function ajaxGet(url,params = {}){
    return await fly.get(api[url],params);
}

async function ajaxPost(url,params = {}){
    return await fly.post(api[url],params);
}

export {
    ajaxGet,
    ajaxPost
}

