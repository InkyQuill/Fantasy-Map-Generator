$(document).ready(function(){
    var content = $("div.content-wrapper");
    var sidebar = $("div.main-sidebar");
    var map = $("div#map-container");
    var header = $("header");
    var pagetitle = $("section.content-header");
    var footer = $("footer");
    var fix = function(){
        content.width($(window).width() - sidebar.width);
        map.height($(window).height() - (header.height()+pagetitle.height()+footer.height()));
    };

    setInterval(fix, 1000);

});