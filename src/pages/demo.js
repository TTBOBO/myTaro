import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
// import './index.scss';
export default class Index extends Component {

   config = {
    navigationBarTitleText: '购物车',
    navigationBarBackgroundColor:"#000",
    navigationBarTextStyle:'white'
  }

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentDidShow () {} 
  render() {
    return (
      <View>
        1231
      </View>
    );
  }
}