import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import './index.scss';
import '../adviser/index.scss';
import SearchBar  from '../adviser/searchBar';
import { Tabs , Scroll } from '~/components'
const searchUrl = Taro.baseUrl+"/banner.png";
import { AtTabs, AtTabsPane } from 'taro-ui'
export default  class Index extends Component {

    config = {
        navigationBarTitleText: '美璟·家居指南',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white'
    }

    state={
        current:0,
        config:[
            {title:"建筑设计",list:['','']},
            {title:"室内设计",list:[]},
            {title:"产品设计",list:[]},
        ],
        placeholder:{
            0:"搜索产品格式",
            1:"搜索设计赏析",
            4:"搜索装修宝典"
        }
    }
    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    onGoHome(){

    }
    handleChange(e){
        this.setState({
            code:e.detail.value
        })
    }
    onTabsChange(e){
        this.setState({
            current:e
        })
    }
    render() {
        const {placeholder,current,config} = this.state;
        return (
            <View className="atlas-container">
                <SearchBar btnText={"美璟顾问"} placeholder={placeholder[current] || ''}/>
                <View className="adviser-tabs">
                    <Tabs currentIndex={current} config={config} onTabsChange={this.onTabsChange.bind(this)} > 
                        {
                            config.map((_item,index) => {
                                return (
                                    <Scroll index={index} key={index} current={current}>
                                        <View className="content">
                                           123
                                        </View>
                                    </Scroll>
                                )
                            })
                        }
                    </Tabs>

                    {/* <AtTabs current={this.state.current} tabList={config}>
                        <AtTabsPane current={this.state.current} index={0} >
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.current} index={1}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.current} index={2}>
                        <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
                        </AtTabsPane>
                    </AtTabs> */}
                </View>
            </View>
        );
    }
}