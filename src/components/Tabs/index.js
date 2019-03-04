import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button ,ScrollView ,Image } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui'
import orderItem from '~/pages/order/order-item'
import './index.scss';
export default class Index extends Component {

    static defaultProps = {
        // config:[
        //     {title:"全部订单",list:[{},{},{},{}]},
        //     {title:"待付款",list:[]},
        //     {title:"已付款",list:[]},
        //     {title:"待发货",list:[]},
        //     {title:"待收货",list:[]},
        //     {title:"待评价",list:[]},
        // ],
        // currentIndex:0
    }

    // state={
    //     config:[
    //         {title:"全部订单",list:[{},{},{},{}]},
    //         {title:"待付款",list:[]},
    //         {title:"已付款",list:[]},
    //         {title:"待发货",list:[]},
    //         {title:"待收货",list:[]},
    //         {title:"待评价",list:[]},
    //     ],
    //     current:0
    // }

    componentWillMount () {
        this.setState({
            current:parseInt(this.$router.params.type) || (this.props.currentIndex || 0)
        })
    }
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentDidShow () {} 
    handleClick(e){
        this.setState({
            current:e
        })
    }
    onScrollToLower(e){
        console.log(e)
    }
  render() {
      console.log(this.props,1111)
    return (
      <View className="order-container">
          <AtTabs
            className="tabs"
            current={this.state.current}
            scroll
            tabList={this.props.config}
            onClick={(e) => this.handleClick(e)}>
                {
                    this.props.config.map((item,_index) => {
                        return (
                            <AtTabsPane current={this.state.current} index={_index} className="scroll-con" key={_index}>
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
                                    <orderItem item={item} />
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