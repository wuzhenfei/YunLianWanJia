var apiUrl = 'http://shareworld.cn/front';

/** 
 * 登录注册
 */ 
// 获取手机验证码登陆验证码
var loginMobileCode = apiUrl + '/login/getMobileCode';
// 密码登录
var loginApi = apiUrl + '/app/login';
// 验证码登录
var codeLogin = apiUrl + '/app/codeLogin';
// 获取手机号注册验证码
var registerMobileCode = apiUrl + '/register/getMobileCode';
// 手机号注册
var register = apiUrl + '/app/register';
// 获取找回密码验证码
var getPasswordCode = apiUrl + '/resPassword/getMobileCode'; 
// 找回密码
var setPassword = apiUrl + '/app/setPassword'; 

// 电站详情
var getStationInfo = apiUrl + '/powerStation/getStationInfo';
// 首页推荐列表
var getSellListByNum = apiUrl + '/powerStation/getSellListByNum';

// 交易大厅-- 全部新品
var getOnSaleAssetPackageList = apiUrl + '/powerStation/getOnSaleAssetPackageList';
// 交易大厅-- 资产包详情
var getOnSaleStationListByPackageId = apiUrl + '/powerStation/getOnSaleStationListByPackageId';

/** 
 * 个人中心
 */  
// 用户收支记录
var getUserMoneyRecord = apiUrl + '/userMoneyRecord/getUserMoneyRecord';
// 收益记录--获取用户总收益和上一天总收益
var selectSumProfit = apiUrl + '/userProfit/selectSumProfit';
// 收益记录--用户按天查询每个电站收益
var selectProfitByDay = apiUrl + '/userProfit/selectProfitByDay';
// 收益记录--用户全部收益按天汇总
var selectProfitGroupByDay = apiUrl + '/userProfit/selectProfitGroupByDay';
