import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { ScrollCom} from '~/components'
import { AtSwipeAction } from "taro-ui"
import './index.scss'

export default class Index extends Component {

   

    state={
        selectIndex:3,
        sortList:[
            {select:false,sortType:'down',title:"时间"},
            {select:false,sortType:'down',title:"风格"},
            {select:false,sortType:'down',title:"类型"},
            {select:true,sortType:'down',title:"收藏"}],
        otherList:['全部','现代','全部','现代','全部','现代',],
        collecteList:['','',1,2]
    }
    defaultProps={
        onGoHome:() => {},
        onScrollToUpper:() => {},
        onScrollToLower:() => {}
    }

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    handleClick(_index){
        this.setState({
            sortList:this.state.sortList.map((item,index) =>{
               if(index == _index){
                    item.select = true;
                    if(_index == 0){
                        item.sortType = item.sortType == 'down' ? 'up' : 'down'
                    }
               }else{
                   item.select = false;
               }
               return item;
            }),
            selectIndex:_index
        })
        //告诉父组件获取新的数据
    }
    handleOther(_item,_index){
        this.setState({
            sortList:this.state.sortList.map((item,index) =>{
               if(index == this.state.selectIndex){
                    item.title = _item;
               }
               return item;
            })
        })
        //告诉父组件获取新的数据
    }


    render() {
        const {selectIndex,collecteList} = this.state;
        const {onGoHome ,onScrollToUpper ,onScrollToLower} = this.props;
        return (
            <View className="collecte-con">
                <View className="header">
                    <View className="search-bar">搜索城市、项目</View>
                    <View className="home" onClick={onGoHome.bind(this)}></View>
                </View>
                <View className="collecte-sort">
                    {this.state.sortList.map((item,index) => {
                        return (
                            <View className="sort-item" onClick={this.handleClick.bind(this,index)} key={index}>
                                <Text className={`${item.select ? 'select-text' : ''}`}>{item.title}</Text>
                                <View className="right-icon">
                                    {index == 0 && <View className={`icon ${item.select && item.sortType == 'up' ? 'up-s' : 'up'}`}></View>}
                                    <View className={`icon ${item.select && item.sortType == 'down' ? 'down-s' : 'down'}`}></View>
                                </View>
                            </View>
                        )
                    })}
                    <View className="other-list">
                        {(selectIndex == 1 || selectIndex == 2) && this.otherList.map((item,index) => {
                            return (<View class="text" onClick={this.handleOther.bind(this,item,index)} key={index}>{item}</View>)
                        })}
                    </View>
                </View>
                <View className="collecte-list">
                    {collecteList.length && <ScrollCom 
                        onScrollToUpper={onScrollToUpper.bind(this)}
                        onScrollToLower={onScrollToLower.bind(this)}
                        // height={200}
                        scrollY={true}
                    >
                        {
                            collecteList.map((item,index) => {
                                return (
                                    <View className="collecte-item" key={index}>
                                        <Image className="pic" src="http://10.6.52.35:8083/banner.png" />
                                        <View className="right-con">
                                            <View className="name">安藤忠雄纽约首作，看混凝土诗人怎么重新定义豪宅！</View>
                                            <View className="auth-info">
                                                <View className="auth color">ella的家</View>
                                                <View className="auth-label color">388m²·现代·公寓</View>
                                                <View className="auth-address-info">
                                                    <View className="address color">布里斯班·阿瑞那</View>
                                                    <View className="time color">第 21 期</View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }) 
                        }
                        
                    </ScrollCom>}
                    {
                        !collecteList.length && <View className="no-more">您还没有收藏的项目</View>
                    }
                </View>
            </View>
        );
    }
}