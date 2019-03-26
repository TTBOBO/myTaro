import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
const searchUrl = Taro.baseUrl+"/img/icon/search.png";
import './index.scss';
export default class SearchBar extends Component {

    state={
        code:""
    }
    defaultProps={
        btnText:'',
        placeholder:"搜索城市、项目"
    }
    componentWillMount () {}
    componentDidMount () {} 
    onGoHome(){

    }
    handleChange(e){
        this.setState({
            code:e.detail.value
        })
    }
    render() {
        const {placeholder,btnText} = this.props;
        return (
            <View className="header">
                <View className="search-bar" >
                    <Image src={searchUrl}  className="icon"/>
                    {/* onTabsChange={this.onTabsChange.bind(this)} */}
                    <Input placeholder={placeholder} value={code} onInput={this.handleChange.bind(this)} className="search-input"/>
                </View>
                <View className="home" onClick={this.onGoHome.bind(this)}>{btnText}</View>
            </View>
        );
    }
}