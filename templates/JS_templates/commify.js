$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        let prevSlideId = 0;
        App.Slides.slider.ev.on("rsAfterSlideChange", function(event) {
            if (this.currSlideId === prevSlideId) {
                // do nothing, we did not move
                return;
            }

            prevSlideId = this.currSlideId;
            // do stuff, because we changed slides

            console.log('slidechange');
            var list = document.querySelectorAll('.question-form .input.form-item-answer[type="number"]');
            var customValues = document.querySelectorAll('.comma-value');

            for (var i = 0; i < customValues.length; i++) {
                customParent = customValues[i].parentNode;
                customValues[i].innerText = commifyText(customValues[i].innerText, customValues[i]);
            }

            list.forEach(element => {
                element.addEventListener("input", () => { changevalue(element); }, false);
            });

        });

        function changevalue(element) {
            element = element || window.event;
            var who = element.target || element.srcElement;
            var v1 = element.value
            if (v1) element.value = commify(v1, element);
        }

        function commify(value, element) {
            var val = parseFloat(value).toLocaleString()
            element.parentNode.setAttribute("comma-value", val)
            return value;
        }

        function commifyText(value, element) {
            var val = parseFloat(value).toLocaleString()
            element.parentNode.setAttribute("comma-value", val)
            return val;
        }
    });
});