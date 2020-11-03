//      -----   CUSTOM JS SCRIPT     -----       //

require(['underscore'], function(_) {

    //      -----   FUNCTIONS ON SURVEYLOAD     -----       //

    App.functions.onSurveyLoaded(function(slidesView) {

        //      -----   CHANGE FOOTER TO HYPERLINK     -----       //

        slidesView.collection.each(function() {

            // let $newFooter = $('<div class="footer-item branding"><a href="https://s.surveyanyplace.com/vniercpp" target="_blank"><span>Personal data</span></a></div>');
            // App.applicationView.$el.find('.footer-item').remove();
            // App.applicationView.$el.find('.footer').prepend($newFooter);
        });
    });
})