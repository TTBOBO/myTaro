import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import dva from './dva/dva'
import models from './dva/models'
import Index from './pages/index'
import {ajaxGet,ajaxPost} from './server/ajax';

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

Taro.$ajaxGet = ajaxGet;
Taro.$ajaxPost = ajaxPost;
const dvaApp = dva.creatApp({
    initialState:{},
    models:models
})

const store = dvaApp.getStore();
class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/auth/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
        color: '#574F5F',
        selectedColor: '#333333',
        backgroundColor: '#fff',
        list: [
          {
            pagePath: "pages/index/index",
            text: "首页",
            iconPath: 'assets/img/home.png',
            selectedIconPath: 'assets/img/home-s.png'
          },
          {
            pagePath: "pages/auth/index",
            text: "我的",
            iconPath: 'assets/img/my.png',
            selectedIconPath: 'assets/img/my-s.png'
          }
        ]
      },
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
