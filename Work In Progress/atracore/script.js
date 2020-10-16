require(['underscore'], function(_) {
    App.functions.onSurveyLoaded(function(slidesView) {
        slidesView.collection.each(function(slideModel, i) {
            if (slideModel.attributes.type == 'intro') {
                slideModel.view.$el.find('.form-item input').slice(9).val(App.session.attributes.signature);
            }
        });
    });
});