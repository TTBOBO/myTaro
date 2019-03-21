import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import './index.scss'
export default class Index extends Component {

    config = {
            navigationBarTitleText: '有问必答',
            navigationBarBackgroundColor:"#000",
            navigationBarTextStyle:'white'
    }

    state={}

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    render() {
        return (
        <View className="question-container">
            
        </View>
        );
    }
}