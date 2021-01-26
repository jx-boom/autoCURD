import * as vscode from 'vscode';
const fs = require('fs');
var {camel}=require('naming-style');

module.exports = (dirPath: string) => {
    fs.readFile(dirPath+'/root.json','utf-8',function(err,data){
        if(err){
            console.log("error");
        }else{
            let rawdata =data;
    let json = JSON.parse(rawdata);
    let keyword= ['update','getPageList','getTodayList'];
    let moduleName= '', currentModuleName='', methodName= '',url='',moduleList= {};
    let content = ``;
    for(let str in json['paths']) {
        
       let arr= str.match(/(?<={)([\s\S]*?)(?=})/g);
       url= str;
       if(arr){
          url= str.slice(0, str.match(/{(\S*)}/)['index']-1)
       }
       let urlArr= url.split('/');
    moduleName=urlArr[urlArr.length-2];
    methodName= urlArr[urlArr.length-1];

    if(keyword.indexOf (moduleName)!=-1){
        methodName= moduleName +methodName;
        moduleName=urlArr[urlArr.length-3];
    }
    currentModuleName= currentModuleName ||moduleName;
    if(!moduleList[moduleName]&& currentModuleName!=moduleName) {
        content+=`}`;
        try {
        fs.writeFileSync(dirPath+'/'+currentModuleName+'.js', content);
        currentModuleName= moduleName;
      content='';
    } catch (err) {
      console.error(err)
    }
    }
    if(!moduleList[moduleName]) {
        content += `import request from '@/utils/request';
        export default {`;
        moduleList[moduleName]=1;
    }
    if( moduleList[moduleName]===1) {
        content +=`
        "${camel(methodName)}": async (req) => {
            /**
             * ${json['paths'][str][Object.keys(json['paths'][str])[0]]['description']}
             */
             let insertUrl=${arr==null?null:JSON.stringify(arr)},
             url='${url}';
             if(insertUrl !=null) {
                for(let key of insertUrl||[]) {
                    url+= '/'+ req[key];
                }
            }
            let data= await request({
                url: url,
                method: '${Object.keys(json['paths'][str])[0]}',
                params: ${Object.keys(json['paths'][str])[0]=='get'?'req':'null'},
                data: ${Object.keys(json['paths'][str])[0]=='post'?'req':'null'}
              })
              return data
        },
        `
    }
    }
    vscode.window.showInformationMessage('生成完成');

}
}
)
}