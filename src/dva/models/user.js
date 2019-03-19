import modelExtend from 'dva-model-extend';
import base from './base';
import {globalService} from './service'

export default modelExtend(base,{
    namespace: 'user',
    state:{
        userinfo:{},
        loginStatus:false,
        num:0
    },
    effects:{
        *add({payload},{put,call,select}){
            const res = yield select(state => state.user);
            yield put({type:"save",payload:{num:res.num+1}})
        },
        *del({},{put,call,select}){
            const res = yield select(state => state.user);
            yield put({type:"save",payload:{num:res.num-1}})
        },
        *login({payload},{put,cal}){
            const data = yield call(globalService,{name:111});
            yield put({type:"save",payload:{
                userinfo:data
            }})
        }
    }
})