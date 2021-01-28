import * as vscode from 'vscode';
const fs = require('fs')
const path = require("path");

var http=require("http");
var $url =require('url');
var dirPath='';
const deleteFolderRecursive=(url:string) => {
    var files = [];
    if (fs.existsSync(url)) {
        files = fs.readdirSync(url);
        files.forEach(function (file:any) {
            var curPath = path.join(url, file);
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);

            } else {
                fs.unlinkSync(curPath);
            }
        });
    }
}
const  editFilePath= () => {


    let path = '';
    let document = vscode.window.activeTextEditor?.document;
  
    if(vscode.workspace.workspaceFolders && document) {
      let workspaceFold = vscode.workspace.workspaceFolders.find(x=> document?.uri.path.startsWith(x.uri.path));
      path = workspaceFold?.uri.path||'';
    }
    path+='/src';
    var files = fs.readdirSync(path);
  let has= files.indexOf('api') !=-1;
path+='/api'
if(has) { // 第一版暂时清空
    console.log('已经存在');
 try {
    deleteFolderRecursive(path)
 }
 catch (err){
     console.log(err);
     
 }

} 
dirPath= path;
fs.mkdir(path, (err:any) => {
console.log(err);
});

}

const downloadFile= (url:string) => {
var outstream=fs.createWriteStream(dirPath+'/root.json');
var result= $url.parse(url)
if(!result.host) return;
var options={
    hostname: result.hostname,
        port: result.port,
        path: '/v2/api-docs',
      method:'GET',
};
vscode.window.showInformationMessage('开始获取文件内容');

var req=http.request(options,function(resp:any){
    resp.setEncoding('utf8');
    resp.on('data',function(chunk:any){
        outstream.write(chunk,'utf8');
    });
    resp.on('end', () => {
        vscode.window.showInformationMessage('获取完成');

       setTimeout( require('./reg')(dirPath),1000)
      });
});

req.setTimeout(5000,function(){
    req.abort();
});
req.on('error',function(err: any){
    if(err.code=="ECONNRESET"){
        console.log('socket端口连接超时。');
    }else{
        console.log(err);
    }
});

// 请求结束
req.end();
}
module.exports = function(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('jxxx.initApi', () => {
       
        vscode.window.showInformationMessage("操作将覆盖src/api文件夹,是否继续",'嗯呐','否')
        .then(function(select){
           if(select=='嗯呐') {
            editFilePath ()
            vscode.window.showInputBox(
                { // 这个对象中所有参数都是可选参数
                    ignoreFocusOut:true, // 默认false，设置为true时鼠标点击别的地方输入框不会消失
                    placeHolder:'swagger地址', 
                    prompt:'牛转乾坤呀 ψ(｀∇´)ψ->', 
                }).then((msg:string) => {
                    downloadFile(msg)
            });
           }
        });
      
    }));
}; 