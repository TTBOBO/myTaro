import modelExtend from 'dva-model-extend';
import base from './base';

export default modelExtend(base,{
    namespace: 'modal',
    state:{
        modalsName:{
            // modal1:false
        }
    },
    effects:{
        *close({payload},{put,call,select}){
            const res = yield select(state => state.modal);
            res.modalsName[payload] =false;
            yield put({type:"save",payload:res})
        },
        *open({payload},{put,call,select}){
            const res = yield select(state => state.modal);
            res.modalsName[payload] =true;
            yield put({type:"save",payload:res})
        }
    }
})