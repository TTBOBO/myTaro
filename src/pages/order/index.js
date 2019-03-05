import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button ,ScrollView ,Image } from '@tarojs/components';
import Ordertem from './Ordertem';
import { Tabs , Scroll , Modal,Toast} from '~/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import './index.scss';
import { connect } from '@tarojs/redux'
// import './index.scss';
@connect((modal) => ({...modal}))

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
            {title:"待评价1",list:[]},
        ],
        current:0,
        child:[],
    }
    Refs = {}
    componentWillMount () {
        this.setState({
            current:parseInt(this.$router.params.type) || 0
        })
    }
    
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
    componentDidMount () {
        this.props.dispatch({type:'modal/open',payload:'modal1'}) 
    } 
    setRefs(node,name){
        this.Refs[name] = node
    }
    handleOk(){
        this.props.dispatch({type:'modal/close',payload:'modal1'}) 
    }
  render() {
    return (
        <View>
            <Tabs currentIndex={this.state.current} config={this.state.config}> 
                {
                    this.state.config.map((_item,index) => {
                        return (
                            <Scroll index={index} key={index} current={this.state.current}>
                                <Ordertem item={_item} /> 
                            </Scroll>
                        )
                    })
                }
            </Tabs>
            <Modal 
                title="提示"
                modalName="modal1"
                handleOk={() => this.handleOk()}
            >12</Modal>
            {/* <Toast isOpened={true} text="123" icon={'loading'}  duration={5000} /> */}
        </View>
       
    );
  }
}