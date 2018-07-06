function showNav(notShowMenu, isCurrent) {
    var isHome, isTradingHall, isAssetCenter, isPersonalCenter;
    isHome = '';
    isTradingHall = '';
    isAssetCenter = '';
    isPersonalCenter = '';
    switch (isCurrent) {
        case 1:
            isHome = 'current';
            break;
        case 2:
            isTradingHall = 'current';
            break;
        case 3:
            isAssetCenter = 'current';
            break;
        case 4:
            isPersonalCenter = 'current';
            break;
        default:
            break;
    };
    document.writeln('<link href="../css/public/nav.css"  rel="stylesheet" type="text/css" />');
    document.writeln('<nav>');
    document.writeln('    <div class="main-w cleart">');
    document.writeln('        <div class="pull-left">');
    document.writeln('            <div class="logo">');
    document.writeln('                <img src="../images/common/logo.png">');
    document.writeln('            </div>');
    document.writeln('        </div>');
    document.writeln('        <div class="pull-right">');
    document.writeln('            <ul class="nav-list">');
    if (!notShowMenu) {
        document.writeln('                <li><a href="../home/index.html">进入首页</a></li>');
    } else {
        document.writeln('                <li class='+ isHome +'><a href="../home/index.html">首页</a></li>');
        document.writeln('                <li class='+ isTradingHall +'><a href="../tradeHall/newProducts.html">交易大厅</a></li>');
        document.writeln('                <li class='+ isAssetCenter +'><a href="../assetCenter/rentStation.html">资产中心</a></li>');
        document.writeln('                <li class='+ isPersonalCenter +'><a href="../personal/revenueRecord.html">个人中心</a></li>');
    }
    document.writeln('            </ul>');
    document.writeln('        </div>');
    document.writeln('    </div>');
    document.writeln('</nav>');
}