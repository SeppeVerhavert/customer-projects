require(['jquery', 'underscore'], function($, _) {
    App.functions.onSurveyLoaded(function() {
        App.Slides.slider.eventHandler.removeEventListenerFrom(App.Slides.slider.slider, App.Slides.slider.eventNames['down']);
        console.log('loaded')
    });
});

SAembed.ev.on('surveyCompleted', function() {
    var data = { 'message': 'survey completed', 'height': xxx, 'width': xxx };
    parent.postMessage(data, 'https://www.seobility.net');
    console.log(data);
});