function showNav(isCurrent, isLogin) {
    document.writeln("<link href=\'../css/public/nav.css\'  rel=\"stylesheet\" type=\"text/css\" />");
    document.writeln("<nav>");
    document.writeln("    <div class=\"main-w cleart\">");
    document.writeln("        <div class=\"pull-left\">");
    document.writeln("            <div class=\"logo\">");
    document.writeln("                <img src=\"../images/common/logo.png\">");
    document.writeln("            </div>");
    document.writeln("        </div>");
    document.writeln("        <div class=\"pull-right\">");
    document.writeln("            <ul class=\"nav-list\">");
    if (isLogin) {
        document.writeln("                <li><a href=\"\">进入首页</a></li>");
    } else {
        document.writeln("                <li class='current'><a href=\"\">首页</a></li>");
        document.writeln("                <li><a href=\"\">交易大厅</a></li>");
        document.writeln("                <li><a href=\"\">资产中心</a></li>");
        document.writeln("                <li><a href=\"\">个人中心</a></li>");
    }
    document.writeln("            </ul>");
    document.writeln("        </div>");
    document.writeln("    </div>");
    document.writeln("</nav>");
}