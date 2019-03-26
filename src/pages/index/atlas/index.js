import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Image} from '@tarojs/components';
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
        const bannerUrl = Taro.baseUrl+"/banner.png";
        return (
            <View className="atlas-container">
                <SearchBar btnText={"美璟顾问"} placeholder={placeholder[current] || ''}/>
                <View className="adviser-tabs">
                    <Tabs currentIndex={current} scroll={false} config={config} onTabsChange={this.onTabsChange.bind(this)} > 
                        {
                            config.map((_item,index) => {
                                return (
                                    <Scroll index={index} key={index} current={current}>
                                        <View className="content">
                                           {(index == 0 || index == 1) && (<View className="jz-contaniner">
                                                <View className="jz-pic">
                                                    <Image className="" src={bannerUrl}/>
                                                </View>
                                                <View className="jz-info-con">
                                                    <View className="jz-info">
                                                        <Text>Carl-Auböck</Text>
                                                        <Text>英国知名建筑师</Text>
                                                    </View>
                                                    <View className="works-list">
                                                        <View className="works-item">
                                                            <View>杭州·白鹭郡东</View>
                                                            <View className='at-icon at-icon-chevron-right'></View>
                                                        </View>
                                                        <View className="works-item">
                                                            <View>杭州·九树公寓</View>
                                                            <View className='at-icon at-icon-chevron-right'></View>
                                                        </View>
                                                        <View className="works-item more-item">
                                                            <View className="more">查看更多</View>
                                                            <View className='at-icon at-icon-chevron-down'></View>
                                                        </View>
                                                        
                                                    </View>
                                                </View>
                                           </View>)}
                                           {index == 2 && <View className="indoor">
                                           <View className="jz-pic">
                                                    <Image className="" src={bannerUrl}/>
                                                </View>
                                                <View className="jz-info-con">
                                                    <View className="jz-info">
                                                        <Text className="indoorer-name">Carl-Auböck</Text>
                                                        <Text>英国知名建筑师</Text>
                                                    </View>
                                                    <View className="works-list">
                                                        <View className="indoor-pro">
                                                            <Image className="" src={bannerUrl}/>
                                                            <Image className="" src={bannerUrl}/>
                                                        </View>
                                                        <View className="works-item">
                                                            <View className="more">查看更多</View>
                                                            <View className='at-icon at-icon-chevron-down'></View>
                                                        </View>
                                                        
                                                    </View>
                                                </View>
                                           </View>}
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