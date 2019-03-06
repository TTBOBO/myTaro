import Taro, { login } from '@tarojs/taro';
export default {
    async login(params){
        console.log(params);
        const data = await Taro.$ajaxGet('test');
        Taro.setStorageSync('userinfo',data);
        return data
    }
}