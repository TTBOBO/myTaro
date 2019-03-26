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
        itemIndex:{},
        customClassName:"show"
    }

    state={}

    componentDidMount () {} 
    componentWillReceiveProps(nextProps){
        if(nextProps.checked){

        }
        console.log(nextProps)
    }
    render() {
        const { tagetList,checked,onHandeClick ,itemIndex,customClassName} = this.props;
        return (
            // fadeInUp  fadeOutDown
            <View className={`slide-tool-box ${customClassName}`} >
                <View className={`con animated  ${checked ? ' show ' : ' hidden-tool '}`}>
                    {tagetList.map((item,index) => {
                        return (<View className="item" key={index} onClick={onHandeClick.bind(this,index,itemIndex)}>{item}</View>)
                    })}
                </View>
            </View>
        );
    }
}