$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = "_linkedin_partner_id = '31634604';window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(){var s = document.getElementsByTagName('script')[0];var b = document.createElement('script');b.type = 'text/javascript';b.async = true;b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';s.parentNode.insertBefore(b, s);})();";
    });
});