import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button , Swiper, SwiperItem,ScrollView } from '@tarojs/components';
import { Tabs , Scroll } from '~/components'
import './index.scss';
import { AtTabs, AtTabsPane,AtDivider,AtIcon  } from 'taro-ui'
const bannerUrl = Taro.baseUrl+"/banner.png";
export default class Index extends Component {

    config = {
    navigationBarTitleText: '美璟商城',
    navigationBarBackgroundColor:"#000",
    navigationBarTextStyle:'white'
    }

    state={
        code:'',
        current:0,
        selectIndex:0,
        config:[
            {title:"品类",list:[{title:"家居",dataList:[{typename:"民用家居",data:['','','','','','','']},{typename:"民用家居1",data:['','','','','','','']}]},{title:"软装"},{title:"硬装"},{title:"服务"},{title:"家居"},{title:"家电"},{title:"更多"}]},
            {title:"品牌",list:[]},
            {title:"视频",list:[]},
        ],
    }

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentDidShow () {} 
    handleChange(e){
        this.setState({
            code:e.detail.value
        })
    }
    onTabsChange(e){
        console.log(e);
    }
    changeSwiperIndex(e){
        this.setState({
            selectIndex:e.detail ? e.detail.current : e
        })
    }
    render() {
    return (
        <View className="mall-container">
            <View className="search-bar">
                <View className='at-icon at-icon-search'></View>
                <Input placeholder={'搜索商品'} value={code} onInput={this.handleChange.bind(this)} className="search-input"/>
            </View>
            <View className="mall-tabs adviser-tabs">
            <Tabs currentIndex={current} scroll={false} config={config} onTabsChange={this.onTabsChange.bind(this)} > 
                    {this.state.config.map((item,index) => { //className="test"
                        return (
                            <Scroll index={index} key={index} current={this.state.current}>
                                {
                                    index == 0 && <View className="item-con">
                                        <View className="type-con">
                                            {item.list.map((typeItem,typeIndex) => {
                                                return (
                                                    <View key={typeIndex} onClick={this.changeSwiperIndex.bind(this,typeIndex)} className={`type-item ${this.state.selectIndex == typeIndex ? 'active' : ''}`}>{typeItem.title}</View>
                                                )
                                            })}
                                        </View>
                                        <Swiper
                                            className='swiper'
                                            vertical
                                            current={this.state.selectIndex}
                                            circular
                                            onChange={this.changeSwiperIndex}
                                            >
                                                {
                                                    item.list.map((typeItem,typeIndex) => {
                                                        return (
                                                            <SwiperItem key={typeIndex}>
                                                                <ScrollView
                                                                    className='scrollview'
                                                                    scrollY
                                                                    scrollTop='0'
                                                                    style='height: 100%;'>
                                                                    {
                                                                        item.list[0].dataList ? item.list[0].dataList.map((listItem,listIndex) => {
                                                                            return (<View className='home-con' key={listIndex}>
                                                                                <View className="type-name">
                                                                                    <AtDivider content={listItem.typename} fontColor='#000' lineColor='#777' />
                                                                                </View>
                                                                                <View className="home-con-type">
                                                                                    {
                                                                                        listItem.data.map((item,index) => {
                                                                                            return (<View key={index} className="item-con">
                                                                                                <Image src={bannerUrl} />
                                                                                                <View>民用家具</View>
                                                                                            </View>)
                                                                                        })
                                                                                    }
                                                                                </View>
                                                                            </View>)
                                                                        }) : <View>{typeIndex}</View>
                                                                    }
                                                                </ScrollView>
                                                            </SwiperItem>
                                                        )
                                                    })
                                                }
                                        </Swiper>
                                    </View>
                                }
                                {
                                ( index == 1 ||  index == 2) &&  <View className="brand">
                                        <View className="brand-item">
                                            <View className="brand-left-con">
                                                <Image src={bannerUrl} className="brand-image" />
                                                <Text className="brand-des">高品质家具产品</Text>
                                            </View>
                                            <AtIcon className="brand-icon" value='chevron-right' size='30' color='#C7C7CC'></AtIcon>
                                        </View>
                                    </View>
                                }
                            </Scroll>
                        )
                    })}
                </Tabs>
            </View>
            
        </View>
    );
    }
}