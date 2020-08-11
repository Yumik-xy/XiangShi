var bizlogic = {
  // 是否是本地
  isLocal: true,
  // 是否是正式
  isFormal: false, // isLocal:false 时才有效
 
  // 本地测试地址 
  localTest: 'http://127.0.0.1/',
 
  // 测试服务器地址 
  serverTest: 'http://pwpwqwq.oicp.net/',
 
  // 正式服务器接口地址
  serverFormal: '',

};
var serverUrl = '';
 
// 判断是否是本地
if (bizlogic.isLocal == true) {
  serverUrl = bizlogic.localTest;
} else {
  serverUrl = bizlogic.isFormal ? bizlogic.serverFormal : bizlogic.serverTest;
};
 
 
module.exports = {
  serverUrl: serverUrl,
};