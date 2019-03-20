import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button , Image} from '@tarojs/components';
import './index.scss'
import Card from './Card'
const card = new Card()
const userInfo = {
    avatar: 'http://10.6.52.35:8083/banner.png'
}
const template = card.do(userInfo)
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
        template: template
    }

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    onImgOK(e){
        console.log(e.detail.path)
        // Taro.saveImageToPhotosAlbum({
        //     filePath: e.detail.path,
        //     success(res) {
        //         console.log(res);
        //     }
        // })
    }
    render() {
        return (
        <View className="poster-container">
            <View className="image-con">
                {!this.state.imgUrl && <View className="poster-pic">
                    <painter className="poster-pic" onOnImgErr={this.onImgOK} onOnImgOK={this.onImgOK} palette={template}/>
                </View>}
                {this.state.imgUrl && <Image src='http://10.6.52.35:8083/banner.png' className="poster-pic"/>}
                
                <View className="image-des">保存至相册分享到朋友圈</View>
                <View className="btn-con">
                    <View className="btn change-btn">换一张</View>
                    <View className="btn save-btn">保存图片</View>
                </View>
            </View>
        </View>
        );
    }
}