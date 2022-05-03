$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        var log = document.getElementById('answer-3407041-11173029');
        document.addEventListener('keyup', logKey);

        function logKey(e) {
            const value = log.value;
            var x = value.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            log.value = x1 + x2;
        };
    });
});