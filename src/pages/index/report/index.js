import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Image} from '@tarojs/components';
import './index.scss';
import '../adviser/index.scss';
import SearchBar  from '../adviser/searchBar';
import { Tabs , Scroll } from '~/components'
const bannerUrl = Taro.baseUrl+"/banner.png";
export default  class Index extends Component {

    config = {
        navigationBarTitleText: '现场报道',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white'
    }

    state={
        current:0,
        config:[
            {title:"全部",list:['','']},
            {title:"民宿",list:[]},
            {title:"酒店",list:[]},
            {title:"住宅",list:[]},
            {title:"商业",list:[]},
            {title:"办公",list:[]},
            {title:"公建",list:[]}
        ],
        placeholder:{
            0:"搜索报道",
            1:"搜索报道",
            2:"搜索酒店报道",
            3:"搜索住宅报道",
            4:"搜索商业报道",
            5:"搜索办公报道",
            5:"搜索报道"
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
            <View className="report-container">
                <SearchBar btnText={"项目合作"} placeholder={placeholder[current] || ''}/>
                <View className="adviser-tabs report-tabs">
                    <Tabs currentIndex={current} scroll={true} config={config} onTabsChange={this.onTabsChange.bind(this)} > 
                        {
                            config.map((_item,index) => {
                                return (
                                    <Scroll index={index} key={index} current={current}>
                                        <View className="content">
                                           <View className="report-item">
                                                <View className="report-pic">
                                                    <Image className="" src={bannerUrl}/>
                                                </View>
                                                <View className="report-info">
                                                    <View className="report-top">
                                                        <View className="report-name">杭州·悦居·赵先生的家</View>
                                                        <View className="report-target">145㎡·轻奢·公寓</View>
                                                    </View>
                                                    <View className="report-des">
                                                        <Text className="report-time">时长：30′15″</Text>
                                                        <Text className="report-date">2018.10.20</Text>
                                                    </View>
                                                </View>
                                           </View>
                                           <View className="report-item">
                                                <View className="report-pic">
                                                    <Image className="" src={bannerUrl}/>
                                                </View>
                                                <View className="report-info">
                                                    <View className="report-top">
                                                        <View className="report-name">杭州·悦居·赵先生的家</View>
                                                        <View className="report-target">145㎡·轻奢·公寓</View>
                                                    </View>
                                                    <View className="report-des">
                                                        <Text className="report-time">时长：30′15″</Text>
                                                        <Text className="report-date">2018.10.20</Text>
                                                    </View>
                                                </View>
                                           </View>
                                           <View className="report-item">
                                                <View className="report-pic">
                                                    <Image className="" src={bannerUrl}/>
                                                </View>
                                                <View className="report-info">
                                                    <View className="report-top">
                                                        <View className="report-name">杭州·悦居·赵先生的家</View>
                                                        <View className="report-target">145㎡·轻奢·公寓</View>
                                                    </View>
                                                    <View className="report-des">
                                                        <Text className="report-time">时长：30′15″</Text>
                                                        <Text className="report-date">2018.10.20</Text>
                                                    </View>
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