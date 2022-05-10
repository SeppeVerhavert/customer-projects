$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        var n1 = document.getElementById('answer-3494206-11229845'),
            n2 = document.getElementById('answer-3494206-11229846');
        n1.value = n2.value = '';

        n1.onkeyup = n1.onchange = n2.onkeyup = n2.onchange = function(e) {
            e = e || window.event;
            var who = e.target || e.srcElement,
                temp;
            temp = who.value;

            var temp = n1.value,
                temp2 = n2.value;
            if (temp) n1.value = addCommas(temp);
            if (temp2) n2.value = addCommas(temp2);
        }

        // insert commas as thousands separators 
        function addCommas(n) {
            return parseFloat(n).toLocaleString();
        }
    });
});