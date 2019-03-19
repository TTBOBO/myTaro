import Taro , { Component } from '@tarojs/taro';
import { AtInput ,AtTextarea ,AtImagePicker,AtToast  } from 'taro-ui'
import { View, Text , Button , Picker,Checkbox } from '@tarojs/components';
import util from '~/assets/js/util.js'
import Validator from '~/assets/js/Validator.js'
import { CForm ,Toast} from '~/components'
import './index.scss'
export default class Index extends Component {

    config = {
        navigationBarTitleText: '添加地址',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white',
        enablePullDownRefresh:true
    }

    state={
        select:false,
        selector: ['美国', '中国', '巴西', '日本'],
        region: ['广东省', '广州市', '海珠区'],
        formData : {
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
        }],
        rule:{
            userName:{filed:"姓名",type: "string", required: true,validator:{valFun:this.valFun,errMsg:"自定义验证错误"}},
            pwd:{filed:"手机号码",type: "tel", required: true}
        },
        isOpened:false,
        text:""
    }
    valFun(value, param){
        return value.length > 5;
    }
    validator = null;
    componentWillMount () {}
    componentDidMount () {
        this.validator = new Validator(this.state.rule);
    } 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentWillUnmount () {} 
    handleChange(type,e){
        let obj = {};
        obj[type] = e;
        this.setState({
            formData: Object.assign({},this.state.formData,obj)
        })
    }
    onSubmit(){
        this.validator.checkForm(this.state.formData).then((res) =>{
            console.log(res);
        }).catch(err =>{
            this.setState({
                text:err[0].msg,
                isOpened:true
            },() =>{
                setTimeout(() => {
                    this.setState({
                        isOpened:false
                    })
                },3000)
            })
        })
    }
    onGetUserInfo(e){
        console.log(e);
    }
    onChange(type,e){
        let formData = this.state.formData;
        let obj = {};
        obj[type] = e.detail.value;
        this.setState({
            formData: Object.assign({},formData,obj)
        })
    }
    check(){
        this.setState({
            select:!this.state.select
        })
    }
    render() {
        return (
            <CForm
                onSubmit={this.onSubmit.bind(this)}
                loading={false}
                submitText="提交"
                // openType="getUserInfo"
                // onGetUserInfo={this.onGetUserInfo.bind(this)}
            >
            <AtInput
            name='value'
            title=''
            type='text'
            placeholder='姓名'
            value={this.state.formData.userName}
            onChange={this.handleChange.bind(this,'userName')}
            />
            <AtInput
            name='value'
            title=''
            type='text'
            placeholder='手机号码'
            value={this.state.formData.pwd}
            onChange={this.handleChange.bind(this,'pwd')}
            />
            <Picker mode='region' value={this.state.region} onChange={this.onChange.bind(this,'city')}>
                {/* {this.formData.city.join(',')} */}
                <AtInput
                title=''
                type='text'
                placeholder='城市'
                value={this.state.formData.city.join(',')}
                />
            </Picker>
            <AtTextarea
                count={false}
                value={this.state.formData.bz}
                onChange={this.onChange.bind(this,'bz')}
                maxLength={200}
                placeholder='详细地址'
            />
            <View className="label">
                <View className={`select-icon  ${this.state.select ? 'select' : 'select-no'}`} onClick={() => this.check()}></View>
                <Text>设为默认地址</Text>
            </View>
            <AtToast  isOpened={this.state.isOpened} text={this.state.text} ></AtToast>
        </CForm>
        );
    }
}