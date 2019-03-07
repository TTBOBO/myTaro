import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import './index.scss'
export default class Index extends Component {

    config = {
        navigationBarTitleText: ''
    }

    state={
        list:[
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
        ],
        curren:0
    }

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentWillUnmount () {} 
    componentDidShow () {} 
    componentDidHide () {} 
    componentDidCatchError () {} 
    componentDidNotFound () {} 
    handle(item,index){
        this.setState({
            curren:index 
        })
        wx.switchTab({
            url: `../../${item.pagePath}`
        })
    }
    render() {
        return (
        <View className="tab-bar">
            {
                this.state.list.map((item,index) => {
                    return (
                        <View className="bar-item" onClick={() => this.handle(item,index)} key={index}>
                            {/* <View className="bage"></View> */}
                            <View className="bage-num"></View>
                            <Image className="icon" src={`../../${curren == index ? item.iconPath : item.selectedIconPath}`}/>
                            <Text className="text">{item.text}</Text>
                        </View>
                    )
                })
            }
        </View>
        );
    }
}