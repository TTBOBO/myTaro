import Taro , { Component } from '@tarojs/taro';
import { AtInput ,AtTextarea ,AtImagePicker } from 'taro-ui'
import { View, Text , Button , Picker} from '@tarojs/components';
import { CForm } from '~/components'
import './index.scss'
export default class Index extends Component {

    config = {
            navigationBarTitleText: '添加地址',
            navigationBarBackgroundColor:"#000",
            navigationBarTextStyle:'white',
            enablePullDownRefresh:true
    }

    state={
        selector: ['美国', '中国', '巴西', '日本'],
        region: ['广东省', '广州市', '海珠区'],
        logininfo: {
            userName:"",
            pwd:"",
            bz:"",
            city:[]
        },
        files: [{
            url: 'http://localhost:8070/static/index/imgs/logo-top-next.png?v=0.02',
          },
          {
            url: 'http://localhost:8070/static/index/imgs/logo-top-next.png?v=0.02',
          },
          {
            url: 'http://localhost:8070/static/index/imgs/logo-top-next.png?v=0.02',
          }]
    }
    

  componentWillMount () {}
  componentDidMount () {
  } 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  handleChange(type,e){
    this.logininfo[type] = e;
    // console.log(this.logininfo)
  }
  onSubmit(){
    Taro.getUserInfo({
        success(res) {
          const userInfo = res.userInfo
          const nickName = userInfo.nickName
          const avatarUrl = userInfo.avatarUrl
          const gender = userInfo.gender // 性别 0：未知、1：男、2：女
          const province = userInfo.province
          const city = userInfo.city
          const country = userInfo.country
        }
      })
  }
  onChange(type,e){
    let logininfo = this.state.logininfo;
    let obj = {};
    obj[type] = e.detail.value;
    this.setState({
        logininfo: Object.assign({},logininfo,obj)
    })
  }
  onChangeimg(e){
      console.log(e);
  }
  render() {
    return (
        <CForm
            onSubmit={() => this.onSubmit()}
            loading={false}
            submitText="提交"
        >
        <AtInput
          name='value'
          title=''
          type='text'
          placeholder='姓名'
          value={this.state.logininfo.userName}
          onChange={this.handleChange.bind(this,'userName')}
        />
        <AtInput
          name='value'
          title=''
          type='text'
          placeholder='手机号码'
          value={this.state.logininfo.pwd}
          onChange={this.handleChange.bind(this,'pwd')}
        />
        <Picker mode='region'   value={this.state.region} onChange={this.onChange.bind(this,'city')}>
            <AtInput
            title=''
            type='text'
            placeholder='城市'
            value={this.state.logininfo.city.join(',')}
            />
        </Picker>
        <AtTextarea
            count={false}
            value={this.state.logininfo.bz}
            onChange={this.onChange.bind(this,'bz')}
            maxLength={200}
            placeholder='详细地址'
        />
         <AtImagePicker
            files={this.state.files}
            onChange={this.onChangeimg.bind(this)}
        />
         <Button className='btn-max-w' open-type={'getUserInfo'} plain type='primary'>按钮</Button>
      </CForm>
    );
  }
}