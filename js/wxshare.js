var yundaoWx={};
yundaoWx.projectid="33333333";
yundaoWx.scope="";
var myuserOpenid="";
//微信jssdk接口校验
yundaoWx.Signature=function(){
    $.ajax({
        url : 'http://h5.sjzzimu.com/zimuWx/wxAction/wxSignature.action',
        data : {url : location.href},
        type : 'POST',
        success : function(data) {
            wx.config({
                debug : false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId : 'wx61c6b796cc8c608d', // 必填，公众号的唯一标识
                timestamp : data.timestamp, // 必填，生成签名的时间戳
                nonceStr : data.nonceStr, // 必填，生成签名的随机串
                signature : data.signature,// 必填，签名，见附录1
                jsApiList : [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage', 'onMenuShareQQ',
                    'onMenuShareWeibo', 'onMenuShareQZone',
                    'startRecord', 'stopRecord', 'onVoiceRecordEnd',
                    'playVoice', 'pauseVoice', 'stopVoice',
                    'onVoicePlayEnd', 'uploadVoice', 'downloadVoice',
                    'chooseImage', 'previewImage', 'uploadImage',
                    'downloadImage', 'translateVoice',
                    'getNetworkType', 'openLocation', 'getLocation',
                    'hideOptionMenu', 'showOptionMenu',
                    'hideMenuItems', 'showMenuItems',
                    'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem',
                    'closeWindow', 'scanQRCode', 'chooseWXPay',
                    'openProductSpecificView', 'addCard', 'chooseCard',
                    'openCard'
                ]
            });
        }
    });
}

yundaoWx.share_title="";
yundaoWx.share_desc="";
yundaoWx.share_link="";
yundaoWx.share_imgUrl="";
//添加访问量统计
yundaoWx.share=function(){
  // 全局变量
    var share_title = yundaoWx.share_title;
    var share_desc = yundaoWx.share_desc;
    var share_link = yundaoWx.share_link;
    var share_imgUrl = yundaoWx.share_imgUrl;
    yundaoWx.Signature();
    wx.ready(function() {
        yundaoWx.ready();
        wx.onMenuShareTimeline({
            title: share_title,
            link: share_link,
            imgUrl: share_imgUrl,
            success: function() {},
            cancel: function() {
            }
        });

        wx.onMenuShareAppMessage({
            title: share_title, // 分享标题
            desc: share_desc, // 分享描述
            link: share_link,
            imgUrl: share_imgUrl,
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {},
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareQQ({
            title: share_title, // 分享标题
            desc: share_desc, // 分享描述
            link: share_link,
            imgUrl: share_imgUrl,// 分享图标
            success: function() {},
            cancel: function () {
               // 用户取消分享后执行的回调函数
            }
        });

        wx.onMenuShareWeibo({
            title: share_title, // 分享标题
            desc: share_desc, // 分享描述
            link: share_link,
            imgUrl: share_imgUrl, // 分享图标
            success: function() {},
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

        wx.onMenuShareQZone({
            title: share_title, // 分享标题
            desc: share_desc, // 分享描述
            link: share_link,
            imgUrl: share_imgUrl, // 分享图标
            success: function() {},
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    });
}

yundaoWx.shareCallBack=function(){}
yundaoWx.ready=function(){}
