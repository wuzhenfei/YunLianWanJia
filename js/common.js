// 手机号验证
function isPhoneNo(phone) {
    var pattern = /^1[345678]\d{9}$/;
    return pattern.test(phone);
};
// 解析url地址参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
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
    var str, div
    if(data) {
        str = '<p class="info">' + data + '</p>';
        if (isSuccess) {
            str = '<p class="info success">' + data + '</p>';
        }
        div = document.createElement("div");
        div.id = "tipsInfo";
        div.innerHTML = str;
        window.document.body.appendChild(div);
        setTimeout(() => {
            window.document.body.removeChild(div);
        }, 2000);
    }
}

// 解析时间格式
function formatTime(secondNum) {
    var day = Math.floor(secondNum / (60 * 60 * 24)),  // 倒计时天数
    hour =  Math.floor(secondNum / (60 * 60)) - (day * 24), //倒计时小时
    minute = Math.floor(secondNum / 60) - (day * 24 * 60) - (hour * 60),	//倒计时分钟
    second = Math.floor(secondNum) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);	//倒计时秒钟
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    return hour + ":" + minute + ":" + second
}