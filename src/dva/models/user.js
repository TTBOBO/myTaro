import modelExtend from 'dva-model-extend';
import base from './base';

export default modelExtend(base,{
    namespace: 'user',
    state:{
        avatar:"123",
        num:0
    },
    effects:{
        *add({payload},{put,call,select}){
            const res = yield select(state => state.user);
            console.log(1111)
            yield put({type:"save",payload:{num:res.num+1}})
        },
        *del({},{put,call,select}){
            const res = yield select(state => state.user);
            yield put({type:"save",payload:{num:res.num-1}})
        }
    }
})