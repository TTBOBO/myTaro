import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { TabBar} from '~/components'
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
        const data = await Taro.$ajaxGet('test');
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
        <View class="title">保量低风险</View>
        <TabBar />
      </View>
    )
  }
}

export default Index
