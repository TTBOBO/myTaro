import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtToast } from "taro-ui"
export default class Index extends Component {
    state={}
    static defaultProps = {}
    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentDidShow () {} 
    render() {
        const {isOpened,text,icon,image ,duration ,status} = this.props
        return (
            <AtToast isOpened={isOpened} text={text} image={image} status={status}  icon={icon} duration={duration} hasMask={true}></AtToast>
        );
    }
}