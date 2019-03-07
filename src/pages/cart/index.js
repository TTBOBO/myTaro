import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Image} from '@tarojs/components';
import {  Modal,Toast,TabBar} from '~/components'
import './index.scss';
import { connect } from '@tarojs/redux'
@connect((modal) => ({...modal}))
export default class Index extends Component {

    config = {
        navigationBarTitleText: '购物车',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white',
        enablePullDownRefresh:true
    }

    state={
            selectAll:false, 
            checkIndex:null,
            isOpened:false,
            sum:0,
            cart:[{
                select:false,
                image:"http://10.6.52.35:8081/img/user/group10.png",
                name:"无际沙发",
                des:"灰布/三人",
                price:594,
                old_price:660,
                num:2
            },{
                select:false,
                image:"http://10.6.52.35:8081/img/user/group10.png",
                name:"无际沙发1",
                des:"灰布/三人",
                price:594,
                old_price:660,
                num:1
            }]
    }

    componentWillMount () {}
    componentDidMount () {
        Taro.startPullDownRefresh();
        setTimeout(() => {
            wx.stopPullDownRefresh()
        },1000)
        this.getSum();
    } 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentDidShow () {} 
    onPullDownRefresh(){
        
    }
    async check(index){
        await this.setState({
            cart:this.state.cart.map((item,_index) => {
                if(index == _index){
                    item.select = item.select ? false : true;
                }
                return item;
            })
            
        })
        this.setState({
            selectAll:this.state.cart.filter (item => item.select).length == this.state.cart.length
        })
        this.getSum();
    }
    checkAll(){
        this.setState({
            cart:this.state.cart.map(item => {
                item.select = this.state.selectAll ? false : true;
                return item;
            }),
            selectAll:!this.state.selectAll
        })
        this.getSum();
    }
    getSum(){
        this.setState({
            sum:this.state.cart.reduce((item,cur) => {
                return cur.select ? (item + cur.price * cur.num) : item;
            },0)
        })
    }
    setNum(index,type){
        if(this.state.cart[index].num <= 1 && type == 'del'){
            return false;
        }
        this.setState({
            cart:this.state.cart.map((item,_index) => {
                if(_index == index){
                    item.num = type == 'del' ? --item.num : ++item.num;
                }
                return item;
            })
        })
        this.getSum();
    }
    async delItem(index){
        this.setState({
            isOpened:true,
            checkIndex:index
        })
    }

    async handleOk(){
        this.setState({
            cart:this.state.cart.filter((item,_index) => {
                return _index != this.state.checkIndex;
            }),
            isOpened:false
        },() => this.getSum())
    }
    
    render() {
        return (
        <View className="cart_container">
            {
                this.state.cart.length
                    ? 
                    <View>
                       {
                            this.state.cart.map((item,index) => {
                                return (
                                    <View className="cart_item" key={index}>
                                        <View className={`select-icon ${item.select ? 'select' : 'select-no'}`} onClick={() => this.check(index)}></View>
                                        <View className="cart-info">
                                            <Image className='goods-image' src={item.image} />
                                            <View>
                                                <Text className="goods-name">{item.name}</Text>
                                                <Text className="goods-des">{item.des}</Text>
                                                <View className="price-con">
                                                    <Text className="goods-price">￥{item.price}</Text>
                                                    <Text className="goods-old-price">￥{item.old_price}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View className="cart-right">
                                            <View className="delete-icon" onClick={() => this.delItem(index)}></View>
                                            <View className="cart-num">
                                            <View className="reduce" onClick={() => this.setNum(index,'del')}>-</View>
                                            <View className="num">{item.num}</View>
                                            <View className="add"  onClick={() => this.setNum(index,'add')}>+</View>
                                        </View>
                                        </View>
                                    </View>
                                )
                            })
                       }
                       <View className="settlement fixed">
                            <View className="select-all" onClick={this.checkAll}>
                                <View className={`select-icon ${this.state.selectAll ? 'select' : 'select-no'}`}></View>
                                全选
                            </View>
                            <View className="submit-info">
                                <View><Text className='cur-pri-icon'>￥</Text><Text className="cur-pri">{sum}</Text></View>
                                <View className="des">（含运费￥50.00）</View>
                            </View>
                            <View className="submit">结算(0)</View>
                        </View>
                        
                    </View>
                :

                <View className="no-goods">
                    <View className="des">购物车还是空的哦！</View>
                    <View className="go-buy">去逛逛</View>
                </View>
            }
            
            <Modal 
                title=""
                isOpened={this.state.isOpened}
                // renderFirmBtn = {<Button onClick={() => this.handleOk()}>确定</Button>}
                onHandleOk = {() => this.handleOk()}
                onHandleCancel = {() => {this.setState({isOpened:false})}}
            >
                确认删除？
            </Modal>
            <TabBar />
        </View>
        );
    }
}