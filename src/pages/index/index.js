import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Map  ,CoverView ,Swiper ,SwiperItem ,Image  } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { List  ,CardItem,TabBar} from '~/components'
import Taget from './Taget'
import Collecte from './Collecte'
import './index.scss'
@connect((user) => ({...user}))
class Index extends Component {

    config = {
        navigationBarTitleText: '美璟世界',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white'
    }

    componentWillReceiveProps (nextProps) {
        // console.log(this.props, nextProps)
    }

    componentWillUnmount () { 
        
    }

    async componentDidMount () {
        console.log()
        Taro.getExtConfig().then(res =>{
            console.log(res)
        })
        // const data = await Taro.$ajaxGet('test');
        // setInterval(() =>{
        //     this.setState({
        //         showGrid:!this.state.showGrid
        //     })
        // },6000)
    }

    componentDidHide () { 
            
    }
    add(state){
        this.props.dispatch({type:state == 'add' ? "user/add" : "user/del"}) 
    }
    state = {
        imgUrls: [{checked:false},{},{},{},{}],
        toolList:[{},{},{},{},{},{},{},{},{}],
        current:0,
        pageYStart:null,
        showGrid:false,
        showColl:false
    }
    onTap(e){
        console.log(e)
    }

    nav(){
        Taro.navigateTo({
            url: '../auth/index'
        })
    }
    touchStart(item,index,e){
        this.setState({
            pageYStart:e.touches[0].pageY
        })
    }
    touchEnd(item,index,e){
        if((this.state.pageYStart - e.changedTouches[0].pageY) > 10){
            // console.log('向上滑动10px')
            this.changeGrid();
        }
    }
    showTool(_index){
        this.setState({
            imgUrls:this.state.imgUrls.map((item,index) =>{
                if(_index != undefined && index == _index){
                    item.checked = !item.checked;
                }else{
                    item.checked = false;
                }
                return item;
            })
        })
    }
    changeGrid(){
        this.setState({
            showGrid:!this.state.showGrid
        })
    }
    changeCurrentIndex(e){
        // console
        this.setState({current:e.detail.current})
        this.showTool();
    }
    onHandeClick(e,index){
        console.log(e,index)
        switch (e) {
            case 2:
                this.hadleCollected(index)
                break;
            case 1:
                Taro.navigateTo({
                    url: './poster/index'
                })
                break;
            default:
                break;
        }
    }

    hadleCollected(index){
        if(!this.state.imgUrls[index].collected){
            this.setState({
                imgUrls:this.state.imgUrls.map((item,cindex) =>{
                    if(cindex == index){
                        item.collected  = true;
                    }
                    return item;
                })
            })
            return false;
        }
        this.setState({
            showColl:true
        })
        //打开收藏项目
    }
  render () {
    return (
      <View className='container'>
        <View className='upadte-text'>已更新项目120</View>
        <Swiper 
            className='swiper'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            current={this.state.current}
            previousMargin="40px"
            nextMargin="40px"
            onChange={(e) => this.changeCurrentIndex(e)}
        >
            {this.state.imgUrls.map((item,index) => {
                return (<SwiperItem className="swiper-item" key={index}>
                    <View className={`slide-image ${this.state.current == index ? 'active' : ''}`}>
                        <Image onTouchStart={this.touchStart.bind(this,item,index)} onTouchEnd={this.touchEnd.bind(this,item,index)} src={`http://192.168.31.78:8083/banner.png`} className={`slide-image ${this.state.current == index ? 'active' : ''}`}/>
                        <View className="slide-tool">
                            <View onClick={() => this.showTool(index)} className={`select-icon ${item.select ? 'select-no' : 'select-no'}`}></View>
                            <Text className={` ${this.state.current == index ? 'animated jello fast' : ''}`}>杭州·西溪天堂悦居·赵先生的家</Text>
                        </View>
                        {
                            <Taget checked={item.checked} onHandeClick={this.onHandeClick} itemIndex={index}  tagetList={['转发好友','生成海报',item.collected ? '我的收藏' : '收藏项目','又问必答']}/>
                        }
                    </View>
                </SwiperItem>)
            })}
        </Swiper>
        {
            <View className={`grid-con  animated faster ${showGrid ? 'show-grid-con fadeInUp' : 'hidden-grid-con fadeOutDown'}`} >
                <View className="grid animated rubberBand fast" >
                    {this.state.toolList.map((item,index) => {
                        return (<View className="grid-item" key={index}>
                        <Image className="image" src="http://192.168.31.78:8083/banner.png"/>
                        <Text className="grid-item-title">微信公众号</Text>
                    </View>)
                    })}
                </View>
                <View className="grid-close animated fadeInUp faster" onClick={() => this.changeGrid()}>
                    <Image className="image"  src="http://192.168.31.78:8083/banner.png"/>
                </View>
            </View>
        }
        {this.state.showColl && <Collecte
            onGoHome={() => {this.setState({showColl:false})}}
            onScrollToLower={() =>{console.log(122223)}}
            onScrollToUpper={() =>{console.log(33333)}}
        ></Collecte>}
        {/* <Map />
        <CoverView class="test">
        <Button size='mini' type='primary' open-type="getUserInfo">按钮</Button>
        </CoverView> */}
      </View>
    )
  }
}

export default Index
