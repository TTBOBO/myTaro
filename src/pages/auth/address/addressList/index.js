import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import './index.scss'
export default class Index extends Component {

    config = {
        navigationBarTitleText: '地址列表',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white',
        enablePullDownRefresh:true
    }

    state={
        list:[{select:false},{select:false},{select:false},{select:false}]
    }

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    check(index){
        this.setState({
            cart:this.state.list.map((item,_index) => {
                item.select = index == _index ? true : false;
                return item;
            })
        })
    }
    render() {
        return (
        <View className="container">
            {this.state.list.map((item,index) => {
                return (<View className="address-item" key={index}>
                    <View className="item-con">
                        <View className="item-info">
                            <Text className="name some">张达玮</Text>
                            <Text className="phone">15110330868</Text>
                        </View>
                        <View className="item-info">
                            {item.select && <Text className="mr mr-icon">默认</Text>}
                            {!item.select && <Text className="mr"></Text>}
                            <Text className="some">浙江省杭州市西湖区留下西汇峰国际3楼</Text>
                        </View>
                    </View>
                    <View className="item-bottom">
                        <View className="label">
                            <View className={`select-icon icon  ${item.select ? 'select' : 'select-no'}`} onClick={() => this.check(index)}></View>
                            <Text>设为默认地址</Text>
                        </View>
                        <View className="icon-con">
                            <View className='delete-icon'></View>
                            <Text className='delete-icon'></Text>
                        </View>
                    </View>
                </View>)
            })}

            <View className="address-tool">
                <View className="btn import-btn">导入微信地址</View>
                <View className="btn add-btn">新增地址</View>
            </View>
        </View>
        );
    }
}