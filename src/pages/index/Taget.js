import Taro , { Component } from '@tarojs/taro';
import { View} from '@tarojs/components';
import './index.scss'

export default class Index extends Component {

    config = {
        navigationBarTitleText: ''
    }
    defaultProps={
        tagetList:[],
        checked:false,
        onHandeClick:() => {},
        itemIndex:{}
    }

    state={}

    componentDidMount () {} 
    render() {
        const { tagetList,checked,onHandeClick ,itemIndex} = this.props;
        return (
            <View className={`slide-tool-box ${checked ? ' show' : ' hidden-tool'}`} >
                {tagetList.map((item,index) => {
                    return (<View className="item" key={index} onClick={onHandeClick.bind(this,index,itemIndex)}>{item}</View>)
                })}
            </View>
        );
    }
}