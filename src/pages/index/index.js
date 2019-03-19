import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Map  ,CoverView } from '@tarojs/components'
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
        setTimeout(() =>{
            wx.showActionSheet({
                itemList: ['A', 'B', 'C'],
                success(res) {
                  console.log(res.tapIndex)
                },
                fail(res) {
                  console.log(res.errMsg)
                }
              })
        },3000)
    }

    componentDidHide () { 
            
    }
    add(state){
        this.props.dispatch({type:state == 'add' ? "user/add" : "user/del"}) 
    }
    state = {
        
    }
    onTap(e){
        console.log(e)
    }

    nav(){
        Taro.navigateTo({
            url: '../auth/index'
        })
    }

  render () {
    return (
      <View className='container'>
        <View className="header-bar"></View>
        <View class="title" style={{marginBottom:'200px'}}>保量低风险</View>
        <Map  />
        <CoverView class="test">1111</CoverView >
        {/* <TabBar /> */}
      </View>
    )
  }
}

export default Index
