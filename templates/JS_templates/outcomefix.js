// Quick fix for issue where "rule" outcomes are selecting the first instead of the last outcome
require(['underscore'], function(_) {
    var Extra = {
        init: function() {
            var self = this;

            App.functions.onSurveyLoaded(function() {
                // set initial amount of occurrences for each outcome
                App.quiz.get('outcomes').getMostSelectedOutcome = function() {
                    var selectedOutcomes = this.where({ selected: true });

                    if (_.isEmpty(selectedOutcomes)) {
                        return;
                    }

                    var max;
                    var outcome = _.max(selectedOutcomes, function(outcome) { return outcome.get('count'); });
                    var lastOutcome;

                    if (outcome) {
                        max = outcome.get('count');
                    }

                    _.each(selectedOutcomes, function(o) {
                        if (o.get('count') === max) {
                            lastOutcome = o;
                        }
                    });

                    return lastOutcome;
                };
            });
        }
    };

    Extra.init();
    return Extra;
});