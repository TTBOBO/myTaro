import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button ,ScrollView ,Image } from '@tarojs/components';
import { AtTabs } from 'taro-ui'
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
    
  render() {
    return (
      <View className="order-container">
          <AtTabs
            className="tabs"
            current={this.state.current}
            scroll
            tabList={this.props.config}
            onClick={(e) => this.handleClick(e)}>
            {
                this.props.children
            }
            </AtTabs>
      </View>
    );
  }
}