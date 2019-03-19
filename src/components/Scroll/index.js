import Taro , { Component } from '@tarojs/taro';
import { View,ScrollView } from '@tarojs/components';
import {    AtTabsPane } from 'taro-ui'
import '../Tabs/index.scss';
export default class Index extends Component {
    state={}
    static defaultProps = {
        tabScroll:true
    }
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    onScrollToLower(e){
        console.log(e)
        this.props.onScrollToLower && this.props.onScrollToLower();
    }
    render() {
        return (
            <AtTabsPane current={this.prop.current} index={this.props.index} className="test">
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
                    {this.props.children}
                </View>
                </ScrollView>
            </AtTabsPane>
        );
    }
}