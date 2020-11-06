$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = "var _ss = _ss || [];_ss.push(['_setDomain','https://koi-3QN9E23N12.marketingautomation.services/net']);_ss.push(['_setAccount', 'KOI-4AFOHJUX7M']);_ss.push(['_trackPageView']);(function() {var ss=document.createElement('script');ss.type = 'text/javascript';ss.async=true;ss.src=('https:'==document.location.protocol?'https://':'http://')+'koi-3QN9E23N12.marketingautomation.services/client/ss.js?ver=2.4.0';var scr=document.getElementsByTagName('script')[0];scr.parentNode.insertBefore(ss, scr);})();";
        document.head.appendChild(script);
    });
});