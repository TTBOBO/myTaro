import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button ,ScrollView ,Image } from '@tarojs/components';
import Ordertem from './Ordertem';
import { Tabs , Scroll , Modal,Toast} from '~/components'
import './index.scss';
import { connect } from '@tarojs/redux'
@connect((modal) => ({...modal}))

export default class Index extends Component {

    config = {
        navigationBarTitleText: '我的订单',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white'
    }

    state={
        config:[
            {title:"全部订单",list:[{status:1},{status:2},{status:3},{status:4},{status:5}]},
            {title:"待付款",list:[]},
            {title:"已付款",list:[]},
            {title:"待发货",list:[]},
            {title:"待收货",list:[]},
            {title:"待评价",list:[]},
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
        // this.props.dispatch({type:'modal/open',payload:'modal1'}) 
    } 
    handleOk(){
        // this.props.dispatch({type:'modal/close',payload:'modal1'}) 
    }
    handleBtn(item,type){
        console.log(item,type)
    }
  render() {
    return (
        <View>
            <Tabs currentIndex={this.state.current} config={this.state.config}> 
                {
                    this.state.config.map((_item,index) => {
                        return (
                            <Scroll index={index} key={index} current={this.state.current}>
                                <Ordertem item={_item} onHandleBtn={this.handleBtn.bind(this)} /> 
                            </Scroll>
                        )
                    })
                }
            </Tabs>
            <Modal 
                title="提示"
                modalName="modal1"
                renderFirmBtn = {<Button onClick={() => this.handleOk()}>确定</Button>}
            >12</Modal>
            {/* <Toast isOpened={true} text="123" icon={'loading'}  duration={5000} /> */}
        </View>
       
    );
  }
}