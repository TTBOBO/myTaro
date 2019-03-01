import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtIcon } from 'taro-ui'
import { List  ,CardItem} from '~/components'

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
        const hederList = [{title:"我的订单",url:"/pages/index/index",navigateType:1}]
        const data = [{icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待付款",bage:5},
        {icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待发货"},
        {icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待收货"},
        {icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待评价"},
        {icon:"http://10.6.52.35:8081/img/user/group10.png",title:"退货售后"}];
        let data1 = [{icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待付款",bage:5},
        {icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待发货"},
        {icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待收货"},
        {icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待评价"}]
        const servrListItem = [data1,data1,data1,[{icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待付款",bage:5},
        {icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待发货"},
        {icon:"http://10.6.52.35:8081/img/user/group10.png",title:"待收货"}]]
        const servrList = [{title:"我的服务",navigateType:1}]
        console.log(servrListItem)
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
            <View className="order-con">
                <CardItem list={data}></CardItem>
            </View>
            <List list={servrList}></List>
            <View className="order-con">
                {servrListItem.map((item,index) => {
                    return (
                        <CardItem list={item} num = {4} key={index}></CardItem>
                    )
                })}
                
            </View>
        </View>
        )
    }
}
export default Index
