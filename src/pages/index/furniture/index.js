import Taro , { Component } from '@tarojs/taro';
import { View, Text , WebView } from '@tarojs/components';
import './index.scss';
import Taget from '../Taget'
export default class Index extends Component {

    config = {
        navigationBarTitleText: '详情',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white',
    }

    state={
        select:false,
        checked:false,
        toolbarFirst:true,
        toolbarTwo:false,
    }

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentWillUnmount () {} 
    showTool(){

    }
    onHandeClick(index){
        console.log(index)
    }
    changeCheck(){
        this.setState({
            checked:!this.state.checked,
            select:!this.state.checked
        })
    }
    changeToolbarTwo(){
        this.setState({
            toolbarTwo:!this.state.toolbarTwo,
            checked:this.state.toolbarFirst ? false : true
        })
    }
    changeToolbarFirst(){
        console.log(this.state.toolbarFirst)
        this.setState({
            toolbarFirst:!this.state.toolbarFirst
        },() =>{
            this.setState({
                checked:!this.state.toolbarFirst
            })
        })
    }
    render() {
        const {select,toolbarFirst,toolbarTwo,checked} = this.state;
        const bannerUrl = Taro.baseUrl+"/banner.png";
        const iconUrl = Taro.baseUrl+'/img/cart/select_no.png'
        return (
        <View className="furniture-container">
            {/* <WebView  src="https://www.720yuntu.com/tour/fd2f19412c1b8107?from=timeline&isappinstalled=0" className="web-view"></WebView > */}
            <View className="furniture-header">
                <Text>美璟</Text>
                <View onClick={this.changeCheck.bind(this)} className={`select-icon at-icon  at-icon-heart-2`} style={{color:select ? 'red' : '#fff'}}></View>
            </View>
            <Image className="bg-image"  src={bannerUrl} />
            <Taget  customClassName="show-taget" checked={checked} onHandeClick={this.onHandeClick}  tagetList={['项目视频','项目介绍', '配置清单','在地旅行']}/>
            <View className="footer-tool">
                {toolbarFirst && <View className="footer-con animated fadeIn">
                    <View className="icon-box">
                        <View className="icon at-icon at-icon-prev"></View>
                        <View className="icon at-icon at-icon-chevron-left"></View>
                    </View>
                    <View className="icon-box">
                        <View className="icon at-icon at-icon-chevron-right"></View>
                        <View className="icon at-icon at-icon-next"></View>
                    </View>
                </View>}
                {
                    <View className={`black-view animated ${!toolbarFirst ?'show-view' : 'hide-view'}`}>
                        {toolbarTwo ? <View className="footer-img-con">
                            <View className="icon at-icon at-icon-prev"></View>
                            <View className="image-list">
                                <View className="image-list-con animated fadeInUp faster">
                                    <Image className="image-item" src={bannerUrl}/>
                                    <Image className="image-item" src={bannerUrl}/>
                                    <Image className="image-item" src={bannerUrl}/>
                                    <Image className="image-item" src={bannerUrl}/>
                                    <Image className="image-item" src={bannerUrl}/>
                                </View>
                            </View>
                        
                            <View  className=" icon at-icon at-icon-next"></View>
                        </View> : <View className="footer-text-con animated fadeInUp faster">
                            <View className="text-box">
                                <Text className="text">会员服务</Text>
                                <Text className="text">设计服务</Text>
                            </View>
                            <View className="text-box">
                                <Text className="text">现场报道</Text>
                                <Text className="text">家居指南</Text>
                            </View>
                        </View>
                    }  
                    </View>
                }
                <View className="center-tool">
                    {!toolbarFirst ? <View className={`center-icon at-icon at-icon-chevron-${!toolbarTwo?'up':"down"} animated fadeInUp fast`} src={iconUrl} onClick={this.changeToolbarTwo.bind(this)}></View> : <View></View>}
                    {!toolbarTwo &&<View className="center-icon at-icon at-icon-menu" src={iconUrl} onClick={this.changeToolbarFirst.bind(this)}></View>}
                </View>
            </View>
        </View>
        );
    }
}