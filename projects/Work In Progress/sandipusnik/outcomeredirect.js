// client: craig.bonnyman@centralheatingsales.co.uk - survey(s): cwlsefei & jhiagxym
// Redirect on the top window instead of inside the iframe for an embedded survey

// require(['underscore'], function(_) {
require(['underscore'], function(_) {
    var app = App;

    // after survey has fully loaded
    app.functions.onSurveyLoaded(function() {
        app.applicationView.restart = function() {
            // show loading spinner & remove loading timeout
            app.spinner.reloadSpinner();
            app.spinner.toggleTimeout(true);

            // do any action before the current page is closed
            app.ev.trigger('surveyEnd', this);

            // todo: still needed? Only used with custom code for ministryofbetter
            if (this.noRedirect) {
                return;
            }

            var outcome = app.quiz.get('outcomes').getSelectedOutcome();

            // todo: add getRedirectUrl() to settings collection/model
            var backFunction = (outcome) ? outcome.get('redirect_url') : app.quiz.get('settings').get('redirect_url');

            // update respondent unique identifier in url when back function is not a string or is empty
            if (!_.isString(backFunction) || _.isEmpty(backFunction)) {
                window.location.href = app.campaign.getUrlWithRespondentID();
                return;
            }

            if (backFunction === 'window.close') {
                window.close();
                open(window.location, '_self').close();
            } else {
                backFunction = app.quiz.applyPiping(backFunction, function(res) {
                    if (!_.isString(res)) {
                        try {
                            res = JSON.stringify(res);
                        } catch (err) {
                            res = res + "";
                        }
                    }

                    return encodeURIComponent(res);
                });

                // needed to prevent code injection
                if (!_.isUrlLike(backFunction)) {
                    app.spinner.removeSpinner();
                    app.functions.showStatusMessage("Invalid URL: " + _.escape(backFunction));
                    return;
                }

                var finalRedirectUrl = ((backFunction.indexOf('//') === -1) ? "//" : "") + backFunction;

                try {
                    window.top.location.href = finalRedirectUrl;
                } catch (err) {
                    window.location.assign(finalRedirectUrl);
                }
            }
        };
    });

    return this;
});