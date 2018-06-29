function showHeader(isLogin) {
    document.writeln("<link href=\'../css/public/header.css\'  rel=\"stylesheet\" type=\"text/css\" />");
    document.writeln("<header>");
    document.writeln("  <div class=\"main-w cleart\">");
    document.writeln("      <div class=\"pull-left\">");
    document.writeln("          <span class=\"phone\">400-0018-260</span>");
    document.writeln("          <span class=\"downLoadApp\">下载手机APP</span>");
    document.writeln("      </div>");
    document.writeln("      <div class=\"pull-right\">");
    if (!isLogin) {
        document.writeln("          <span class=\"notice\">消息<em>(0)</em></span>");
        document.writeln("          <a class=\"login\" href=\" \">登录</a>");
        document.writeln("          <span>|</span>");
        document.writeln("          <a class=\"register\" href=\" \">注册</a>");
    }
    document.writeln("          <a href=\" \">关于我们</a>");
    document.writeln("          <span>|</span>");
    document.writeln("          <a href=\" \">帮助中心</a>");
    document.writeln("      </div>");
    document.writeln("  </div>");
    document.writeln("</div>");
}