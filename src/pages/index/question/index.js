import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Input} from '@tarojs/components';
import { Tabs , Scroll } from '~/components'
import { AtIcon } from 'taro-ui'
import './index.scss'
export default class Index extends Component {

    config = {
            navigationBarTitleText: '有问必答',
            navigationBarBackgroundColor:"#000",
            navigationBarTextStyle:'white'
    }

    state={
        code:"",
        current:0,
        config:[
            {title:"常见问题",list:[]},
            {title:"家居",list:[]},
            {title:"产品",list:[]},
            {title:"会员",list:[]},
        ],
    }

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    onGoHome(){

    }
    handleChange(e){
        console.log(e);
        this.setState({
            code:e.detail.value
        })
    }
    onTabsChange(e){
        console.log(e);
    }
    render() {
        const searchUrl = Taro.baseUrl+"/img/icon/search.png";
        const {code} = this.state;
        return (
            <View className="question-container">
                <View className="header">
                    <View className="search-bar" >
                        <Image src={searchUrl}  className="icon"/>
                        {/* onTabsChange={this.onTabsChange.bind(this)} */}
                        <Input placeholder="搜索城市、项目" value={code} onInput={this.handleChange.bind(this)} className="search-input"/>
                    </View>
                    <View className="home" onClick={this.onGoHome.bind(this)}>有问必答</View>
                </View>
                <View className="tabs-con">
                    <Tabs currentIndex={this.state.current} config={this.state.config} > 
                    {
                        this.state.config.map((_item,index) => {
                            return (
                                
                                    <Scroll index={index} key={index} current={this.state.current}>
                                        <View className="content">
                                            <View className="content-item">
                                                <View className="content-header">
                                                    <View className="content-title">如何退换货 ？</View>
                                                    <AtIcon value='chevron-right' size='20' color='#000'></AtIcon>
                                                </View>
                                                <View className="content-des">
                                                    本店大部分产品为现货，少量为预售，现货产品的选项中会标注［现货］，预售产品会写明到货时间，如［9月30日到货］，选项中未标请…咨询客服。可以按照您要求的时间发货。本店大部分产品为现货，少量为预售，现货产品的选项中会标注［现货］，预售产品会写明到货时间，如［9月30日到货］，选项中未标注的请咨询客服。可以按照您要求的时间发货。
                                                </View>
                                            </View>
                                        </View>
                                    </Scroll>
                                
                                
                            )
                        })
                    }
                </Tabs>
                </View>
            </View>
        );
    }
}