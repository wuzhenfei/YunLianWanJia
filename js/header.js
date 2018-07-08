function showHeader(isLogin) {
    var noticeCount = 0;
    var userInfo = localStorage.getItem('userInfo');
    if(userInfo && userInfo != null && !isLogin) {
        userInfo = JSON.parse(userInfo);
        if(userInfo.userId) {
            $.post('http://shareworld.cn/front/sysMessageUser/isHaveNoRead', {
                token: userInfo.token,
                userId: userInfo.userId
            },function(res){
                var data = JSON.parse(res);
                if(data.result.newMessageCount > 0) {
                    noticeCount = data.result.newMessageCount;
                    document.getElementById('noticeCount').innerHTML = noticeCount;
                }
            });
        };
    }
    document.writeln('<link href="../css/public/header.css"  rel="stylesheet" type="text/css" />');
    document.writeln('<header>');
    document.writeln('  <div class="main-w cleart">');
    document.writeln('      <div class="pull-left">');
    document.writeln('          <span class="phone">400-0018-260</span>');
    document.writeln('          <span class="downLoadApp">下载手机APP</span>');
    document.writeln('      </div>');
    document.writeln('      <div class="pull-right">');
    if (!isLogin) {
        document.writeln('          <span><a class="notice" href="../personal/systemMessage.html">消息(<em id="noticeCount">'+ noticeCount +'</em>)</a></span>');
        if(userInfo && userInfo.userId) {
            document.writeln('          <span><a href="../personal/revenueRecord.html">' + userInfo.name + '</a></span>');
            document.writeln('          <a class="loginOut" id="loginOut">退出</a>');
            document.getElementById('loginOut').onclick = function() {
                localStorage.clear();
                location.reload();
            }
        } else {
            document.writeln('          <a class="loginbtn" href="../login/login.html ">登录</a>');
        }
        document.writeln('          <span>|</span>');
        document.writeln('          <a class="registerbtn" href="../login/register.html ">注册</a>');
    }
    document.writeln('          <a href=" ">关于我们</a>');
    document.writeln('          <span>|</span>');
    document.writeln('          <a href=" ">帮助中心</a>');
    document.writeln('      </div>');
    document.writeln('  </div>');
    document.writeln('</div>');
}