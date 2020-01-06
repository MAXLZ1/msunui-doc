/**
 * Created by hasee on 2019/1/31
 */
// tab页
var tab = new Tab({
    elem:$("#tab"),
    selected:"welcome",
    loadType:'more',
    data:[
        {id:"welcome",title:"欢迎页",url:"welcome.html",close:false}
    ]
});
// 点击伸缩
$(".rightContent .header .flexIcon").on("click",function(){
    var $icon = $(this).children(".iconfont"),
        $leftMenu = $(".leftMenu"),
        $rightContent = $(".rightContent"),
        marginLeft = 0,
        left = 0,
        isShrink = $icon.hasClass("icon-zuoshensuo"); // 是否收缩
    if(isShrink){ // 收缩
        marginLeft = -220;
        left = 0
        $icon.removeClass("icon-zuoshensuo").addClass("icon-youshensuo");
    }else{ // 伸长
        marginLeft = 0;
        left = 220;
        $icon.removeClass("icon-youshensuo").addClass("icon-zuoshensuo");
    }
    $leftMenu.stop().animate({
        "margin-left":marginLeft,
    },200,function(){
        tab.resize();
    });
    $rightContent.stop().animate({
        left:left
    },200,function(){
        tab.resize();
    });
});
// 退出
$(".header .right .icon-tuichu").on("click",function(){
    var layer = new Layer();
    layer.confirm({
       content:"是否要退出系统！"
    },function(data){
        if(data){
            // 退出系统操作
            window.location = "";
        }
    });
});
// 修改密码
$(".modifyPwd").on("click",function(){
    var layer = new Layer();
    layer.open({
        title:"修改密码",
        url:"./a.html"
    });
});
// 菜单导航
var nav = new Navigation({
    elem:'#menu'
});
nav.on("click",function(obj){
    var url = $(obj).attr("data-url"),
        id = $(obj).attr("data-id"),
        title = $(obj).children("span").length > 0 ? $(obj).children("span").text():$(obj).text();
    if(url && id) {
        tab.addItem({id:id,title:title,url:url});
    }
});