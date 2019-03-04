import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import './index.scss';
export default class Index extends Component {
    state={}
    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentDidShow () {} 
    render() {
        return (
            <View>
                {
                    this.props.item.list.length > 0 ?  <View>
                        {
                            this.props.item.list.map((_item,index) => {
                                return (
                                    <View className="tab-order-item" key={index}>
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
                                )
                            })
                        }
                    </View>
                    :
                    <View className="no-goods">
                        还没有任何订单哦 !
                    </View>
                }
            </View>
        );
    }
}