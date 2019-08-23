var playerw='100%';//电脑端播放器宽度
var playerh='540';//电脑端播放器高度
var mplayerw='100%';//手机端播放器宽度
var mplayerh='100%';//手机端播放器高度
var adsPage="";//视频播放前广告页路径
var adsTime=0;//视频播放前广告时间，单位秒
var jxAname="云播放";
var jxBname="线路①";
var jxCname="线路②";
var jxDname="线路③";
var jxEname="";
var jxAapi="https://parse.xymov.tv/?url=";
var jxBapi="https://jx.99yyw.com/99/?url=";
var jxCapi="https://jx.dy-jx.cn/?url=";
var jxDapi="https://www.myxin.top/jx/api/?url=";
var jxEapi="";
var forcejx="yes";
var unforcejx="yunpan#swf#iframe#url#xigua#ffhd#jjvod#ck#dp#m";
var unforcejxARR = unforcejx.split('#');
var forceck="dp";
var unforceck="zuidam3u8#ckm3u8#zkm3u8#ckplayer";
var unforceckARR = unforceck.split('#');



function contains(arr, obj) {  
    var i = arr.length;  
    while (i--) {  
        if (arr[i] === obj) {  
            return true;  
        }  
    }  
    return false;  
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
 
var flag = IsPC(); //true为PC端，false为手机端
if(flag==false)
{
	playerw=mplayerw;
	playerh=mplayerh;
}