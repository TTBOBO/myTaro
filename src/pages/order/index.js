import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button ,ScrollView ,Image } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss';
export default class Index extends Component {

    config = {
        navigationBarTitleText: '我的订单',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white'
    }

    state={
        config:[
            {title:"全部订单",list:[{},{},{},{}]},
            {title:"待付款",list:[]},
            {title:"已付款",list:[]},
            {title:"待发货",list:[]},
            {title:"待收货",list:[]},
            {title:"待评价",list:[]},
        ],
        current:0
    }

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentDidShow () {} 
    handleClick(e){
        console.log(e)
        this.setState({
            current:e
        })
    }
    onScrollToLower(e){
        console.log(e)
    }
  render() {
    return (
      <View className="order-container">
          <AtTabs
            className="tabs"
            current={this.state.current}
            scroll
            tabList={this.state.config}
            onClick={(e) => this.handleClick(e)}>
                {
                    this.state.config.map((item,index) => {
                        return (
                            <AtTabsPane current={this.state.current} index={0} className="scroll-con">
                                <ScrollView 
                                    className="scroll-con"
                                    scrollY
                                    scrollWithAnimation
                                    scrollTop='0'
                                    lowerThreshold='20'
                                    upperThreshold='20'
                                    onScrollToLower={this.onScrollToLower}
                                >
                                <View className="tab-order-list">
                                    {
                                        item.list.map((_item,index) => {
                                            return (
                                                item.list.length > 0 ?  <View className="tab-order-item">
                                                    <View className='header'>
                                                        <Text className="time">2018-07-06</Text>
                                                        <Text className="pay-status">交易成功</Text>
                                                    </View>
                                                    <View className="good-info">
                                                        <View className="good-img">
                                                            <Image style={{width:'100%',height:'100%'}}  src="http://10.6.52.35:8081/img/user/group10.png" />
                                                        </View>
                                                        <View className="good-center">
                                                            <View className="good-name">CU梳妆凳</View>
                                                            <View className="good-des">白象木 / 现货</View>
                                                        </View>
                                                        <View className="good-pay-info">
                                                            <View className="good-name">￥660</View>
                                                            <View className="good-des">x 1</View>
                                                            <View className="see-good-wl">查看物流</View>
                                                        </View>
                                                    </View>
                                                    <View className='footer'>
                                                        <View className="info">
                                                            <Text>共 2 件商品 实付款：<Text style={{fontWeight:600}}>¥ 2220 </Text>（含运费¥ 0.00）</Text>
                                                        </View>
                                                        <View className="btn-tool">
                                                            <View className="see-good-wl">查看物流</View>
                                                            <View className="see-good-wl red-btn">再次购买</View>
                                                        </View>
                                                    </View>
                                                </View>
                                                : '123'
                                            )
                                        })
                                    }
                                    
                                </View>
                                </ScrollView>
                            </AtTabsPane>
                        )
                    })
                }
            </AtTabs>
      </View>
    );
  }
}