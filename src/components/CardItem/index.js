import { View, Text } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import './index.scss';
export default class Index extends Component {

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
      const { list = [] } = this.props;
    return (
        list.map((item,index) => {
            <View className="order-item" key={index}>
                <Image src={item.icon} className="order-item-img"></Image>
                <Text className="order-item-title">{item.title}</Text>
            </View>
        })
    );
  }
}