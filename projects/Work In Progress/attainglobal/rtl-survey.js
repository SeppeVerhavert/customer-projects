require(["jquery", "underscore"], function ($, _) {
    App.functions.onSurveyLoaded(function () {

        App.Slides.slider.ev.on("rsAfterContentSet", function (event, type, userAction) {

            var nextID = App.Slides.slider.currSlideId + 1;
            console.log(nextID, "Next ID");

            if (App.quiz.attributes.translations.models[1].changed.selected === true) {

                $('.status-message-content .button').text('×‘×¡×“×¨');
                $('.royalSlider').css('direction', 'rtl');
                if (nextID < 17) {
                    $('#content' + nextID + ' .answer-content').addClass('rtl-direction');
                } else {
                    $('#content' + nextID + ' .answer-content').addClass('ltr-direction');
                }

                // $('#question-10 .answer-content').addClass('rtl-direction');
                // $('#question-11 .answer-content').addClass('rtl-direction');
                // $('#question-12 .answer-content').addClass('rtl-direction');
                // $('#question-14 .answer-content').addClass('rtl-direction');
                // $('#question-15 .answer-content').addClass('rtl-direction');
                // $('#question-16 .answer-content').addClass('rtl-direction');

            } else {
                $('#content' + nextID + ' .answer-content').addClass('ltr-direction');
                // $('#question-10 .answer-content').addClass('ltr-direction');
                // $('#question-11 .answer-content').addClass('ltr-direction');
                // $('#question-12 .answer-content').addClass('ltr-direction');
                // $('#question-14 .answer-content').addClass('ltr-direction');
                // $('#question-15 .answer-content').addClass('ltr-direction');
                // $('#question-16 .answer-content').addClass('ltr-direction');
            }

        });


    });
});

function docReady(fn) {
    // see if DOM is already available
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn, false);
    }
}

