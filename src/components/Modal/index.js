import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
// import './index.scss';
export default class Index extends Component {


    state={
        // isOpenedStatus:false
    }
    defaultProps = {
        isOpened:false,
        title:'',
        content:'',
        closeOnClickOverlay:true,
        cancelBtn:true,
        confirmBtn:true
    }
    
    componentWillMount () {}
    componentDidMount () {} 
    componentWillReceiveProps (nextProps,nextContext) {} 
    componentDidShow () {} 
    handleColse(){
        this.props.handleColse && this.props.handleColse();
    }
    handleCancel(){
        this.props.handleCancel && this.props.handleCancel();
    }
    handleConfirm(){
        // this.props.handleConfirm && this.props.handleConfirm();
        this.props.handleConfirm()
    }
    setOpenStatus(status){
        this.setState({
            isOpenedStatus:status
        })
    }
    render() {
        const { isOpened, closeOnClickOverlay ,title , content , cancelText , onText ,cancelBtn , confirmBtn ,isOpenedStatus2} = this.props;
        let status = isOpened;
        console.log(isOpened,1111,status)
        return (
            <AtModal
                isOpened = {status} 
                title={title}
                cancelText='取消'
                confirmText='确认'
                onCancel={ () => this.handleCancel()}
                onConfirm={ () => this.props.handleOk() }
                content={content}
            />
        )
        // return (
        //     <AtModal 
        //         isOpened = {status} 
        //         closeOnClickOverlay = {closeOnClickOverlay}
        //         >
        //         {title && <AtModalHeader>title</AtModalHeader>}
        //         <AtModalContent>
        //             {content || this.props.children}
        //         </AtModalContent>
        //         <AtModalAction> 
        //             {/* { cancelBtn && <Button onClick={() => this.handleCancel()}>{cancelText || "取消"}</Button> } */}
        //             <Button onClick={() => this.props.handleOk()}>{onText || "确定"}</Button>
        //         </AtModalAction>
        //     </AtModal>
        // );
    }
}