document.addEventListener('DOMContentLoaded', function() {
    var list = ['widget_75', 'widget_76', 'widget_77', 'widget_78', 'widget_89', 'widget_90', 'widget_91', 'widget_92', ];
    for (var i = 0; i < list.length; i++) {
        var tableheaders = document.getElementById(list[i]).children[1].children[0].children[0];
        tableheaders.children[2].remove();
        tableheaders.children[1].colSpan = 2;
    }
})