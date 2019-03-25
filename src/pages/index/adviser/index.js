import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import './index.scss';
import SearchBar  from './searchBar';
import { Tabs , Scroll } from '~/components'
const searchUrl = Taro.baseUrl+"/banner.png";
export default  class Index extends Component {

    config = {
        navigationBarTitleText: '美璟·家居指南',
        navigationBarBackgroundColor:"#000",
        navigationBarTextStyle:'white'
    }

    state={
        current:0,
        config:[
            {title:"产品故事",list:['','']},
            {title:"产品欣赏",list:[]},
            {title:"家居毫无",list:[]},
            {title:"设计赏析",list:[]},
            {title:"装修宝典",list:[]}
        ],
        placeholder:{
            0:"搜索产品格式",
            1:"搜索设计赏析",
            4:"搜索装修宝典"
        }
    }
    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    onGoHome(){

    }
    handleChange(e){
        this.setState({
            code:e.detail.value
        })
    }
    onTabsChange(e){
        this.setState({
            current:e
        })
    }
    render() {
        const {placeholder,current,config} = this.state;
        return (
            <View className="adviser-container">
                <SearchBar btnText={"美璟顾问"} placeholder={placeholder[current] || ''}/>
                <View className="adviser-tabs">
                    <Tabs currentIndex={current} config={config} onTabsChange={this.onTabsChange.bind(this)} > 
                        {
                            config.map((_item,index) => {
                                return (
                                    <Scroll index={index} key={index} current={current}>
                                        <View className="content">
                                            {_item.list.map((advisets,_index) => {
                                                return (<View className="adviser-item" key={'advisets'+index}>
                                                <Image  src={searchUrl} className="bg-pic"/>
                                                <View className='at-icon at-icon-chevron-right right-icon'></View>
                                            </View>)
                                            })}
                                        </View>
                                    </Scroll>
                                )
                            })
                        }
                    </Tabs>
                </View>
            </View>
        );
    }
}