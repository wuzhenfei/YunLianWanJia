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
// 打包购买电站和一口价购买电站
var buyStationByYKJ = apiUrl + '/transaction/buyStationByYKJ';

/** 
 * 资产中心
*/
// 我租赁的电站列表
var getUserStationList = apiUrl + '/userAddStation/getUserStationList';
// 我投资的电站列表
var selectPageMyTZList = apiUrl + '/powerStation/selectPageMyTZList';
// 我租赁的电站详情
var getStationInfo = apiUrl + '/userAddStation/getStationInfo';
// 修改电站名称
var updateStationName = apiUrl + '/userInfo/updateStationName';
// 报修电站
var repairStation = apiUrl + '/userInfo/repairStation';
// 电站是否可以转让
var checkSellPowerStation = apiUrl + '/powerStation/checkSellPowerStation';
// 转让电站
var sellPowerStation = apiUrl + '/powerStation/sellPowerStation';
// 用户提交电站
var saveStationInfo = apiUrl + '/userAddStation/saveStationInfo';

/** 
 * 个人中心
 */  
// 用户收支记录
var getUserMoneyRecord = apiUrl + '/userMoneyRecord/getUserMoneyRecord';
// 用户提现2充值1记录列表
var getExtractList = apiUrl + '/userPutforwardRecord/getExtractList';
// 收益记录--获取用户总收益和上一天总收益
var selectSumProfit = apiUrl + '/userProfit/selectSumProfit';
// 收益记录--用户按天查询每个电站收益
var selectProfitByDay = apiUrl + '/userProfit/selectProfitByDay';
// 收益记录--用户全部收益按天汇总
var selectProfitGroupByDay = apiUrl + '/userProfit/selectProfitGroupByDay';
// 竞价列表
var getBidPriceList = apiUrl + '/bidPrice/getBidPriceList';
// 获取修改密码支付密码验证码
var userInfoCode = apiUrl + '/userInfo/getMobileCode'; 
// 修改用户密码和支付密码
var updateUserPassword = apiUrl + '/userInfo/updateUserPassword'; 
// 消息列表
var getMessageList = apiUrl + '/sysMessageUser/getMessageList'; 
// 消息详情
var getMessageDetail = apiUrl + '/sysMessageUser/getMessageDetail'; 
// 是否有未读消息
var isHaveNoRead = apiUrl + '/sysMessageUser/isHaveNoRead'; 
// 消息全部标记为已读
var setAllRead = apiUrl + '/sysMessageUser/setAllRead'; 
// 竞价信息
var getBidPriceInfo = apiUrl + '/bidPrice/getBidPriceInfo'; 
// 修改竞价价格
var updateBidPrice = apiUrl + '/bidPrice/updateBidPrice'; 

