$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        var list = document.querySelectorAll('.input.form-item-answer');

        list.forEach(element => {
            element.addEventListener("input", () => { changevalue(element); }, false);
        });

        function changevalue(element) {
            element = element || window.event;
            var who = element.target || element.srcElement;
            var v1 = element.value
            if (v1) element.value = commify(v1, element);
        }

        function commify(value, parent) {
            var val = parseFloat(value).toLocaleString()
            parent.parentNode.setAttribute("comma-value", val)
            return value;
        }
    });
});