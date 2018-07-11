function personalTop() {
    /**
     * uesrInfo 用户信息
     * imgUrl 用户头像
     * name 用户姓名
     * userMoney  用户可用余额
     * colorBlue colorGreen 用户存在时候类名
     * editProfileUrl 编辑资料链接
     * incomeRecordUrl 收支记录链接
     * rechargeUrl 充值链接
     * putForwardUrl 提现链接
     */
    var uesrInfo, imgUrl, name, userMoney,colorBlue, colorGreen, editProfileUrl, incomeRecordUrl, rechargeUrl, putForwardUrl;
    uesrInfo = localStorage.getItem('userInfo');
    uesrInfo = JSON.parse(uesrInfo);
    imgUrl = '../images/common/default-personal.png';
    name = '您好，请<a href="../login/login.html">登录</a>';
    userMoney = localStorage.getItem('userMoney');
    if(!userMoney||userMoney ==''){
        userMoney = '0.00';
    }
    colorBlue = '';
    colorGreen = '';
    editProfileUrl = '../login/login.html';
    incomeRecordUrl = '../login/login.html';
    rechargeUrl = '../login/login.html';
    putForwardUrl = '../login/login.html';
    if(uesrInfo && uesrInfo.userId) {
        imgUrl = uesrInfo.imgUrl;
        name = uesrInfo.name + ', 您好';
        colorBlue = 'color-blue';
        colorGreen = 'color-green';
        editProfileUrl = 'myInformation.html';
        incomeRecordUrl = 'incomeRecord.html';
        rechargeUrl = 'recharge.html';
        putForwardUrl = 'putForward.html';
    }
    document.writeln('<div class="personal-top">');
    document.writeln('  <div class="main-w cleart">');
    document.writeln('      <div class="personal-info pull-left">');
    document.writeln('          <div class="personal-img">');
    document.writeln('              <img src='+ imgUrl +'>');
    document.writeln('          </div>');
    document.writeln('          <h3 class="name">'+ name +'</h3>');
    document.writeln('          <p class="editInfo '+ colorBlue +'"><a href='+ editProfileUrl +'>个人资料</a></p>');
    document.writeln('      </div>');
    document.writeln('      <div class="balance pull-left">');
    document.writeln('          <h4><img class="dib" src="../images/common/balance-icon.png"/>可用余额</h4>');
    document.writeln('          <p class="price"><span class="'+ colorGreen +'">'+ userMoney +' 元</span><a class="btn record" href='+ incomeRecordUrl +'>收支记录</a></p>');
    document.writeln('      </div>');
    document.writeln('      <div class="recharge pull-right">');
    document.writeln('          <div class="btn-groups">');
    document.writeln('              <a class="btn charge-btn" href='+ rechargeUrl +'><span>充值</span></a>');
    document.writeln('              <a class="btn put-btn" href='+ putForwardUrl +'><span>提现</span></a>');
    document.writeln('          </div>');
    document.writeln('      </div>');
    document.writeln('  </div>');
    document.writeln('</div>');
}