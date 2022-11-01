$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://play.vidyard.com/embed/v4.js";
        document.head.appendChild(script);
    });
});