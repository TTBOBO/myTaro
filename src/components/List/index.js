import Taro, { Component } from '@tarojs/taro'
import { AtList, AtListItem } from "taro-ui"
import { View } from '@tarojs/components';
import './index.scss';
class Index extends Component {
    componentWillReceiveProps (nextProps) {
        // console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    async componentDidMount () {
        const data = await Taro.$ajaxGet('test');
    }

    componentDidHide () { 
            
    }
    state = {}

    handleClick(item){
        let navigateType = {
            1:"switchTab",
            2:"reLaunch",
            3:"redirectTo",
            4:"navigateTo",
            5:"navigateBack"
        }
        Taro[navigateType[item.navigateType || 4]]({
            url:item.url
        })
    }

    handleChange(e){
        console.log(e.detail.value);
    }

    render () {
        const { list = [] } = this.props;
        
        return (
            <View className="list-con">
                <AtList>
                    {list.map((item,index) => {
                        return (
                            !item.isSwitch ? 
                            <AtListItem 
                                title={item.title} 
                                key={index} 
                                onClick={() => this.handleClick(item)}
                                arrow={item.url ? 'right' : ''}
                                thumb={item.thumb || ""}
                                note={item.note || ""}

                            />
                            :
                            <AtListItem 
                                title={item.title} 
                                key={index} 
                                thumb={item.thumb || ""}
                                note={item.note || ""}
                                isSwitch
                                switchColor={item.color}
                                onSwitchChange={(e) => this.handleChange(e)}

                            />
                        )
                    })}
                </AtList>
            </View>
        )
    }
}

export default Index


