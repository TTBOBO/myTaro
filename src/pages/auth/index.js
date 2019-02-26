import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'

@connect((user) => ({...user}))
class Index extends Component {
    config = {
        navigationBarTitleText: '登录'
    }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { 
        
  }

  render () {
    return (
      <View className='index'>
        {/* <Button className='add_btn' onClick={() => this.add('add')}>+</Button>
        <Button className='dec_btn'onClick={ () => this.add('del')}>async</Button>
        <View><Text>{this.props.user.num}</Text></View> */}
        <View><Text>Hello, World111</Text></View>
      </View>
    )
  }
}

export default Index
