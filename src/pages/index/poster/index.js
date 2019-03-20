import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button , Image} from '@tarojs/components';
import './index.scss'
import Card from './Card'
// const card = new Card()
// const template = card.do(userInfo)
const customStyle = 'margin-left:40rpx'
export default class Index extends Component {

    config = {
        navigationBarTitleText: '生成海报',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white',
        usingComponents:{
            'painter':'../../../components/painter/painter'
        }
    }

    state={
        imgUrl:"",
        customStyle: customStyle,
        template: null,
        userInfo: {
            avatar: 'http://192.168.31.78:8083/banner.png',
            avatarUrl:""
        }
    }

    componentWillMount () {
        Taro.getUserInfo().then(res =>{
            const card = new Card()
            const template = card.do(Object.assign({},this.state.userInfo,{avatarUrl:res.userInfo.avatarUrl}));
            this.setState({
                template:template
            })
        })
    }
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    onImgOK(e){
        this.setState({
            imgUrl:e.detail.path
        },() => {
            console.log(this.state.imgUrl)
        })
    }
    saveImg(){
        
        Taro.saveImageToPhotosAlbum({
            filePath: this.state.imgUrl,
            success(res) {
                console.log(res);
            }
        })
    }
    changeImg(){
        let template = this.state.template;
        template.views[1].text = 'XXX深圳·九榕台·徐女士的家';
        this.setState({
            template:template
        })
    }
    render() {
        return (
        <View className="poster-container">
            <View className="image-con">
                {<View className="poster-pic">
                    <painter className="poster-pic" onOnImgErr={this.onImgOK} onOnImgOK={this.onImgOK} palette={template}/>
                </View>}
                <View className="image-des">保存至相册分享到朋友圈</View>
                <View className="btn-con">
                    <View className="btn change-btn" onClick={this.changeImg}>换一张</View>
                    <View className="btn save-btn" onClick={this.saveImg}>保存图片</View>
                </View>
            </View>
        </View>
        );
    }
}