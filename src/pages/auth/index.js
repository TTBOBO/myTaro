import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon } from 'taro-ui'
import { List } from '~/components'

import './index.scss'

@connect((user) => ({...user}))
class Index extends Component {
    config = {
        navigationBarTitleText: '个人中心',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white'
    }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { 

  }



  render () {
        const hederList = [{title:"我的订单",url:"/pages/index/index",navigateType:1,isSwitch:false}]
        const data = [{icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待付款"}]
        return (
        <View className='auth-container'>
            <View className="header">
                <View className="auth-con">
                    <View className="auth-con-top">
                        <View className="auth-pic"></View>
                        <View className="auth-info">
                            <View className="auth-top">
                                <View className="left">
                                    <View className="name">Ricardo.M.Lu</View>
                                    <View className="auth-l"></View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="auth-bottom">
                        <Text className="auth-money">账户余额：50020.50 元</Text>
                        <AtIcon className='at-icon at-icon-chevron-right'></AtIcon>
                    </View>
                </View>
            </View>
            <List list={hederList}></List>
            <Order list={data}></Order>
        </View>
        )
    }
}

function Order (list = []){
    console.log(list)
    return (
        // list.map((item,index) => {
        //     <View className="order-item" key={index}>
        //         <Image src={item.icon} className="order-item-img"></Image>
        //         <Text className="order-item-title">{item.title}</Text>
        //     </View>
        // })
    )
}

export default Index
