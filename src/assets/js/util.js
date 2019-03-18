import Validator from './Validator.js'
export default {
    // validateData(formData,rules) {
    //     let rule = rules;
    //     let messages = {};
    //     let ruleList = ['email','tel','date','dateISO','number','digits','idcard','equalTo','contains','minlength','naxlength','rangelength','min','max','range']
    //     for(var item in rule){
    //         messages[item] = {};
    //         if(rule[item].required){
    //             messages[item].required = rule[item].messages || `${rule[item].filed}不能为空`;
    //         }
    //         if(rule[item].type && ruleList.indexOf(rule[item].type) != -1){
    //             rule[item][rule[item].type] = true;
    //             if(rule[item].type == 'array'){

    //             }else{
    //                 messages[rule[item].type] = rule[item].messages || `${rule[item].filed}不能为空`;
    //             }
    //         }
    //         if(rule[item].validator){
    //             rule[item][item] = true;
    //         }
            
    //     }
    //     var validateRuler = new Promise( (resolve, reject) =>  {
    //         var validator = new WxValidate(rule,messages);
    //         for(var item in rule){  //自定义验证
    //             if(rule[item].validator){
    //                 validator.addMethod(item, rule[item].validator.valFun , rule[item].validator.errMsg)
    //             }
    //         }
    //         if(validator.checkForm(formData)){
    //             resolve(validator.checkForm(formData))
    //         }else{
    //             reject(validator.errorList)
    //         }
    //     })
    //     return validateRuler;
    // }
}
