import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtButton } from 'taro-ui'
import './index.scss'
export default class Index extends Component {


    state={}
    static defaultProps = {
        onSubmit: () => {},
        loading:false,
        submitText:"确认"
    }

    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    render() {
        const {onSubmit, loading, submitText} = this.prop;
        return (
            <View className="container">
                <View className="content">
                    {this.props.children}
                </View>
                <View className="submit">
                    <AtButton onClick={() => onSubmit} loading={loading}>{submitText}</AtButton>
                </View>
            </View>
        );
    }
}