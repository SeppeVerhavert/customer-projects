$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        App.Slides.slider.eventHandler.removeEventListenerFrom(App.Slides.slider.slider, App.Slides.slider.eventNames['down']);
    });
});