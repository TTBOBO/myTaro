import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import { connect } from '@tarojs/redux'
// import './index.scss';
@connect((modal) => ({...modal}))
export default class Index extends Component {


    state={
        // isOpenedStatus:false
    }
    defaultProps = {
        isOpened:false,
        title:'',
        content:'',
        closeOnClickOverlay:true
    }
    
    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentDidShow () {} 
    handleColse(){
        this.props.handleColse && this.props.handleColse();
    }
    handleCancel(){
        this.props.handleCancel ? this.props.handleCancel() : this.props.dispatch({type:'modal/close',payload:this.props.modalName}) ;
    }
    handleConfirm(){
        this.props.handleConfirm()
    }
    setOpenStatus(status){
        this.setState({
            isOpenedStatus:status
        })
    }
    render() {
        const { modalName, closeOnClickOverlay ,title , content , cancelText , onText ,hcancelBtn , hconfirmBtn} = this.props;
        return (
            <AtModal 
                isOpened = {this.props.modal.modalsName[modalName]} 
                closeOnClickOverlay = {closeOnClickOverlay}
                >
                {title && <AtModalHeader>{title}</AtModalHeader>}
                <AtModalContent>
                    {content || this.props.children}
                </AtModalContent>
                <AtModalAction> 
                    {!hcancelBtn && <Button onClick={() => this.handleCancel()}>{cancelText || "取消"}</Button> }
                    {!hconfirmBtn &&<Button onClick={() => this.props.handleOk()}>{onText || "确定"}</Button>}
                </AtModalAction>
            </AtModal>
        );
    }
}