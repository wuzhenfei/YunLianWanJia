// 手机号验证
function isPhoneNo(phone) {
    var pattern = /^1[345678]\d{9}$/;
    return pattern.test(phone);
};
// 解析url地址参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

// 本地存储数据获取
function userInfoFun() {
    var userInfo = localStorage.getItem("userInfo");
    if(userInfo && userInfo!= '') {
        return JSON.parse(userInfo);
    }
    return false
}

// 提示信息
function messageShow(data, isSuccess) {
    if(data) {
        var str = '<p class="info">' + data + '</p>';
        if (isSuccess) {
            str = '<p class="info success">' + data + '</p>';
        }
        var div = document.createElement("div");
        div.id = "tipsInfo";
        div.innerHTML = str;
        window.document.body.appendChild(div);
        setTimeout(() => {
            window.document.body.removeChild(div);
        }, 2000);
    }
}