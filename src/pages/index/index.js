import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Fly from '../../server/fly.js'

import './index.scss'
console.log(Fly)
@connect((user) => ({...user}))
class Index extends Component {

    config = {
        navigationBarTitleText: '首页',
        navigationStyle:"custom",
        navigationBarBackgroundColor:"#ff0000"
    }

    componentWillReceiveProps (nextProps) {
        // console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    async componentDidMount () {
        console.log(1111);
        const data = await Taro.$ajaxGet('test');
        console.log(data);
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
      </View>
    )
  }
}

export default Index
