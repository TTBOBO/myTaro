import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Map  ,CoverView ,Swiper ,SwiperItem ,Image  } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { List  ,CardItem,TabBar} from '~/components'
import { AtActionSheet, AtActionSheetItem } from "taro-ui"
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

    componentWillUnmount () { }

    async componentDidMount () {
        // const data = await Taro.$ajaxGet('test');
    }

    componentDidHide () { 
            
    }
    add(state){
        this.props.dispatch({type:state == 'add' ? "user/add" : "user/del"}) 
    }
    state = {
        imgUrls: [
            'http://image.wufazhuce.com/FnLVOKa7hPmA4wd1rSIDgEFgFwFS',
            'http://image.wufazhuce.com/Fjp6hwvSOZbIjVrXw0SsSV1LN-rJ',
            'http://image.wufazhuce.com/FoCDKbpGIOedXx26owKQzHlMyO5y',
            'http://image.wufazhuce.com/FlAg5B17YIhVv8hUX8b6CwJkl4O6',
            'http://image.wufazhuce.com/FtcXHjeXKrShdeFa9zGb9TDqEsef'
        ],
        current:2,
        pageYStart:null
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
            console.log('向上滑动10px')
        }
    }

  render () {
    return (
      <View className='container'>
        {/* <View className="header-bar"></View> */}
        <View className='upadte-text'>已更新项目120</View>
        <Swiper 
            className='swiper'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            // indicatorDots
            current={this.state.current}
            previousMargin="50px"
            nextMargin="50px"
            onChange={(e) => {this.setState({current:e.detail.current})}}
        >
            {this.state.imgUrls.map((item,index) => {
                return (<SwiperItem className="swiper-item">
                        <Image onTouchStart={this.touchStart.bind(this,item,index)} onTouchEnd={this.touchEnd.bind(this,item,index)} src={`http://10.6.52.35:8083/banner.png`} className={`slide-image ${this.state.current == index ? 'active' : ''}`}/>
                </SwiperItem>)
            })}
        </Swiper>
      </View>
    )
  }
}

export default Index
