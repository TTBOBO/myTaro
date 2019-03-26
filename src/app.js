import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import dva from './dva/dva';
import models from './dva/models';
import Index from './pages/index';
import {ajaxGet,ajaxPost} from './server/ajax';
import 'taro-ui/dist/style/index.scss'
import './app.scss';
import '~/assets/css/animate.scss'


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

Taro.$ajaxGet = ajaxGet;
Taro.$ajaxPost = ajaxPost;
Taro.baseUrl = 'http://10.6.52.35:8083';
// Taro.baseUrl = 'http://192.168.31.78:8083';
const dvaApp = dva.creatApp({
    initialState:{},
    models:models
})

const store = dvaApp.getStore();
class App extends Component {

  config = {
    pages: [
        'pages/order/index',
        'pages/cart/index',
        'pages/index/index',
        'pages/index/poster/index',
        'pages/index/search/index',
        'pages/index/furniture/index',
        'pages/index/question/index',
        'pages/index/adviser/index',
        'pages/index/atlas/index',
        'pages/index/report/index',
        'pages/auth/index',
        'pages/order/OrderInfo/index',
        'pages/auth/address/addAddress/index',
        'pages/auth/address/addressList/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
        color: '#b5b5b5',
        selectedColor: '#fff',
        backgroundColor: '#000',
        list: [
          {
            pagePath: "pages/index/index",
            text: "美璟世界",
            iconPath: 'assets/img/guoji.png',
            selectedIconPath: 'assets/img/guoji-s.png'
          },
          {
            pagePath: "pages/auth/index",
            text: "美璟商城",
            iconPath: 'assets/img/shouyefill.png',
            selectedIconPath: 'assets/img/shouye-s.png'
          },
          {
            pagePath: "pages/cart/index",
            text: "购物车",
            iconPath: 'assets/img/cartfill.png',
            selectedIconPath: 'assets/img/cart-s.png'
          },
          {
            pagePath: "pages/auth/index",
            text: "美璟优选",
            iconPath: 'assets/img/dianpufill.png',
            selectedIconPath: 'assets/img/dianpu-s.png'
          },
          {
            pagePath: "pages/auth/index",
            text: "个人中心",
            iconPath: 'assets/img/my_fill_light.png',
            selectedIconPath: 'assets/img/my-s.png'
          }
        ]
      },
  }
  componentWillMount(){
    // Taro.hideTabBar();
    // setTimeout(() => {
    //     Taro.switchTab({
    //         url:"pages/cart/index"
    //     })
    // })
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
        <Provider store={store}>
            <Index />
        </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
