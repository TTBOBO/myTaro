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
        handeClick:() => {}
    }

    state={}

    componentDidMount () {} 
    render() {
        const { tagetList,checked,handeClick } = this.props;
        return (
            // animated faster fadeInUp  fadeOutDown
            <View className={`slide-tool-box ${checked ? ' show' : ' hidden-tool'}`} >
                {tagetList.map((item,index) => {
                    return (<View className="item" key={index} onclick={handeClick}>{item}</View>)
                })}
            </View>
        );
    }
}