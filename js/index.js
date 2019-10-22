/**
 * Created by hasee on 2019/2/22
 */
// 右侧菜单
var nav = new Navigation({
    elem:'#menu'
});
nav.on("click",function(obj){
    var url = $(obj).attr("data-url"),
        id = $(obj).attr("data-id"),
        title = $(obj).children("span").length > 0 ? $(obj).children("span").text():$(obj).text();
    if(url && id) tab.addItem({id:id,title:title,url:url});
});
// 标签页
var tab = new Tab({
    elem:$("#myTab"),
    selected:"welcome",
    data:[
        {id:"welcome",title:"首页",url:"welcome.html",close:false}
    ]
});