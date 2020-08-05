App.functions.onSurveyLoaded(function() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = "fbq('track','ViewContent');";
    document.head.appendChild(script);
});