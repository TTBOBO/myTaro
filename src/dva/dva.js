import Taro from '@tarojs/taro';
import { create } from 'dva-core';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;

const creatApp = (opt) => {
    app = create(opt);
    app.use(createLoading({}));
    opt.models.forEach(item => {
        app.model(item);
    });
    app.start();
    app.getStore = () => app._store;
    app.getDispatch = () => app._store.dispatch;
    return app;
}



export default {
    creatApp
}