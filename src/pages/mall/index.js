import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button , Swiper, SwiperItem,ScrollView } from '@tarojs/components';
import { Tabs , Scroll } from '~/components'
import './index.scss';
import { AtTabs, AtTabsPane } from 'taro-ui'
export default class Index extends Component {

    config = {
    navigationBarTitleText: '美璟商城',
    navigationBarBackgroundColor:"#000",
    navigationBarTextStyle:'white'
    }

    state={
        code:'',
        current:2,
        config:[
            {title:"品类",list:['','']},
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
    render() {
    return (
        <View className="mall-container">
            <View className="search-bar">
                <View className='at-icon at-icon-search'></View>
                <Input placeholder={'搜索商品'} value={code} onInput={this.handleChange.bind(this)} className="search-input"/>
            </View>
            <View className="mall-tabs adviser-tabs">
            <AtTabs
                className="tabs"
                current={this.state.current}
                scroll={this.props.scroll}
                tabList={this.props.config}
                onClick={(e) => this.handleClick(e)}>
                {
                    this.props.children
                }
                </AtTabs>
                <Tabs currentIndex={current} scroll={false} config={config} onTabsChange={this.onTabsChange.bind(this)} > 
                    {this.state.config.map((item,index) => {
                        return <AtTabsPane current={this.state.current} index={index} className="test" key={index}>
                            <View className="item-con">
                                <View className="type-con">
                                    <View className="type-item">全部</View>
                                    <View className="type-item active">全部</View>
                                </View>
                                <Swiper
                                    className='test-h'
                                    vertical
                                    circular>
                                    <SwiperItem>
                                    <ScrollView
                                        className='scrollview'
                                        scrollY
                                        scrollTop='0'
                                        style='height: 100%;'>
                                        <View className='demo-text'>2</View>
                                    </ScrollView>
                                    
                                    </SwiperItem>
                                    <SwiperItem>
                                    <View className='demo-text'>3</View>
                                    </SwiperItem>
                                </Swiper>
                            </View>
                        </AtTabsPane>
                    })}
                </Tabs>
            </View>
            
        </View>
    );
    }
}