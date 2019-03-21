import Taro , { Component } from '@tarojs/taro';
import { View, Text , WebView } from '@tarojs/components';
import './index.scss'
export default class Index extends Component {

    config = {
        navigationBarTitleText: '详情',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white',
    }

    state={}

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentWillUnmount () {} 
    render() {
        return (
        <View className="furniture-containe">
            <WebView  src="https://www.720yuntu.com/tour/fd2f19412c1b8107?from=timeline&isappinstalled=0" className="web-view"></WebView >
            <View className="test">123</View>
        </View>
        );
    }
}