import { View, Text,Image } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import { AtBadge } from 'taro-ui'
import './index.scss';
class Index extends Component {

    static defaultProps = {
        list:[],
        num:5
    }
    state={}

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentDidShow () {} 
    componentDidHide () {} 
    render() {
        const { list,num} = this.props;
        return (
            <View className="order-list">
            {
                list.map((item,index) => {
                    return (
                        <View key={index} className={`order-item ${num == 5 ? 'item-5' : 'item-4'}`}>
                            <View className="bage-con">
                                {item.bage && <Text className="bage">{item.bage >= 99 ? '99+' : item.bage }</Text>}
                                <Image src={item.icon} className="order-item-img"  />
                            </View>
                            <Text className="order-item-title">{item.title}</Text>
                            
                        </View>
                       
                    )
                })
            }
            </View>
        );
    }
}
export default Index;