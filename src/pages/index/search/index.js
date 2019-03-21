import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button ,Input} from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import { ScrollCom} from '~/components'
import './index.scss'
import '../Collecte/index.scss'
const searchUrl = Taro.baseUrl+'/img/icon/search.png'
export default class Index extends Component {

    config = {
        navigationBarTitleText: '搜索',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white'
    }

    state={
        code:"",
        first:false,
        noThing:false,
        list:['','','','']
    }
    handleChange(e){
        this.setState({
            code:e.detail.value
        })
    }

    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    cancel(){
        Taro.navigateBack({delta:1})
    }
    onScrollToLower(e){
        console.log(e);
    }
    render() {
        const { code ,first ,noThing ,list} = this.state;
        const bannerUrl = Taro.baseUrl+"/banner.png";
        return (
            <View className="search-container">
                <View className="search-bar"> 
                    <View className={`search-con  ${code ? '' : 'no-code'}`}>
                        <Image src={searchUrl}  className="icon"/>
                        <Input placeholder="搜索城市、项目" value={code} onInput={this.handleChange.bind(this)} className="search-input"/>
                        <AtIcon value='close' size='22' color='#eee' className={`animated fast ${!code ? "fadeOut" : "fadeIn"} `}></AtIcon>
                    </View>
                    {<View onClick={this.cancel.bind(this)} className={`cancel animated ${code ? 'fadeOutRight' : 'fadeInRight'} fast`}>取消</View>}
                </View>
                {noThing && <View className="no-thing">搜索结果无内容</View>}
                {
                    first && <View className="history-con">
                        <View className="history-header">热门搜索</View>
                        <View className="history-list">
                            <View className="history-item">北京</View>
                            <View className="history-item">北京</View>
                            <View className="history-item">北京</View>
                            <View className="history-item">北京</View>
                            <View className="history-item">北京</View>
                            <View className="history-item">北京</View>
                            <View className="history-item">北京</View>
                        </View>
                    </View>
                }
                <View className="collecte-list">
                    {list.length && <ScrollCom 
                        onScrollToLower={this.onScrollToLower.bind(this)}
                        scrollY={true}
                    >
                        {
                            list.map((item,index) => {
                                return (
                                    <View className="collecte-item" key={index}>
                                        <Image className="pic" src={bannerUrl} />
                                        <View className="right-con">
                                            <View className="name">安藤忠雄纽约首作，看混凝土诗人怎么重新定义豪宅！</View>
                                            <View className="auth-info">
                                                <View className="auth color">ella的家</View>
                                                <View className="auth-label color">388m²·现代·公寓</View>
                                                <View className="auth-address-info">
                                                    <View className="address color">布里斯班·阿瑞那</View>
                                                    <View className="time color">第 21 期</View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }) 
                        }
                    </ScrollCom>}
                </View>
            </View>
        );
    }
}