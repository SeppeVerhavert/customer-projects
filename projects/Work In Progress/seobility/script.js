$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6229be7466ca7cf9";
        document.head.appendChild(script);
    });
});