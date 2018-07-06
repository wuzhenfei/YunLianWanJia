function personalLeft(isCurrent) {
    /**
     * uesrInfo 用户信息
     * revenueRecordUrl 收益记录链接
     * bidStationUrl 竞价电站链接
     * systemMessageUrl 系统消息链接
     * contactUsUrl 联系客服链接
     * accountSetUrl 账户设置链接
     */
    var uesrInfo, revenueRecordUrl, bidStationUrl, systemMessageUrl, contactUsUrl, accountSetUrl, isRevenueRecord, isBidStation, isSystemMessage, isContactUs, isAccountSet;
    uesrInfo = localStorage.getItem('userInfo');
    uesrInfo = JSON.parse(uesrInfo);
    revenueRecordUrl = '../login/login.html';
    bidStationUrl = '../login/login.html';
    systemMessageUrl = '../login/login.html';
    contactUsUrl = '../login/login.html';
    accountSetUrl = '../login/login.html';
    isRevenueRecord = '';
    isBidStation = '';
    isSystemMessage = '';
    isContactUs = '';
    isAccountSet = '';
    if (uesrInfo && uesrInfo.userId) {
        revenueRecordUrl = 'revenueRecord.html';
        bidStationUrl = 'bidStation.html';
        systemMessageUrl = 'systemMessage.html';
        contactUsUrl = 'contactUs.html';
        accountSetUrl = 'accountSet.html';
        $.post('http://shareworld.cn/front/sysMessageUser/isHaveNoRead', {
            token: uesrInfo.token,
            userId: uesrInfo.userId
        },function(res){
            var data = JSON.parse(res);
            if(data.result.newMessageCount > 0) {
                document.getElementById('messageMenu').classList.add('hasMessage');
            }
        })
    };
    switch (isCurrent) {
        case 1:
            isRevenueRecord = 'current';
            break;
        case 2:
            isBidStation = 'current';
            break;
        case 3:
            isSystemMessage = 'current';
            break;
        case 4:
            isContactUs = 'current';
            break;
        case 5:
            isAccountSet = 'current';
            break;
        default:
            break;
    };
    document.writeln('<div class="left-menu">');
    document.writeln('  <ul>');
    document.writeln('      <li class=' + isRevenueRecord +'><a href=' + revenueRecordUrl + '>收益记录</a></li>');
    document.writeln('      <li class=' + isBidStation +'><a href=' + bidStationUrl + '>竞价电站</a></li>');
    document.writeln('      <li class=' + isSystemMessage + ' '+'id="messageMenu"><a href=' + systemMessageUrl + '>系统消息</a></li>');
    document.writeln('      <li class=' + isContactUs +'><a href=' + contactUsUrl + '>联系客服</a></li>');
    document.writeln('      <li class=' + isAccountSet +'><a href=' + accountSetUrl + '>账户设置</a></li>');
    document.writeln('   </ul>');
    document.writeln('</div>');
}