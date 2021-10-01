// Survey(s): CFO Survey â€“ 2021
// Description: Have mandatory message only show default messages, instead of include question titles.
// Client(s): JDI - quinten@jdi.be
// @link https://surveyanyplace.atlassian.net/browse/SA-7367
// @link https://app.surveyanyplace.com/survey/8689f7d3-0984-4450-b03f-74cdd8be0f1b/questions

require(['jquery', 'underscore'], function($, _) {
    App.functions.onSurveyLoaded(function() {
        App.Slides.getMandatoryMessageForCurrentSlide = function() {
            var slideModel = this.getCurrentSlideModel();
            var defaultMandatoryMessage = (slideModel.isIntroSlide()) ? App.quiz.getMandatoryIntroFieldMessage() : App.quiz.getDefaultMandatoryQuestionMessage();

            var questionsOnSlide = slideModel.get('questions');
            var mandatoryQuestionList = questionsOnSlide.getMandatoryQuestions();
            var msg = mandatoryQuestionList[0].getMandatoryMessage() || "";

            // when the question has a "custom" mandatory message (e.g. multiple text/image choice)
            if (msg) {
                return msg;
            }

            return defaultMandatoryMessage;
        };
    });
});