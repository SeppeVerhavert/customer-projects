// La Lorraine (survey: panos bakboek)
// Show questionblock based on oldest filled in questionblock
// add next questionblock questions based on selected answer(s) of last question
// added "<<" button to go to first question of questionblock

// require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    // fetch category (questionblock) information
    var fetchQuestionBlockId = function(callback) {
        // question & answer arguments are from the category question
        var question = App.quiz.getQuestionByOrder(1);
        var answer = question.get('answers').getSelectedAnswers()[0];

        $.get(App.get('apiBase') + "/custom/lorraine/category", {
            surveyId: App.quiz.get('id'),
            questionId: question.get('id'), // store question id
            answerId: answer.get('id') // selected answer id of store question
        }).done(function(response) {
            callback(parseInt(response['question_block_id']));
        });
    };

    var questionBlocksCollection, lastQuestion, totalQuestionblocks;
    var updateQuestionBlocks = function() {
        questionBlocksCollection = App.quiz.get('questionblocks');
        lastQuestion = questionBlocksCollection.last().get('questions').last();
        totalQuestionblocks = questionBlocksCollection.length;

        var lastOrder = totalQuestionblocks;
        var clonedQuestionBlockList = [];

        // define how to uniquely identify a questionblock model in the questionblocks collection
        // overwriting of modelId() is needed as questionblocks are "cloned" with the same id
        questionBlocksCollection.modelId = function(attrs) {
            return attrs.order;
        };

        questionBlocksCollection.each(function(questionblock, index) {
            // skip the first 2 questionblocks
            // and the questionblock containing the last question
            if (index >= 2 && index < (totalQuestionblocks - 1)) {
                var clonedQuestionBlock = _.deepClone(questionblock.toJSON({ nested: true }));
                clonedQuestionBlock.order = ++lastOrder;
                clonedQuestionBlockList.push(clonedQuestionBlock);
            }
        });

        questionBlocksCollection.add(clonedQuestionBlockList, { silent: true, parse: true });
    };

    var addChangeEventListenerLastQuestion = function() {
        // replace lastQuestion with an up to date model
        // this is needed, because the model will have been replaced during the loadQuestions() action
        // which is done to update a question from its default model to its actual question model
        lastQuestion = App.quiz.getQuestionByOrder(lastQuestion.get('order'));

        // add "change" event listener to the last question to ...
        // when selecting answers on the last question
        lastQuestion.on('change', function(question, options) {
            var answer = options._changedAnswer || question.get('answers').findWhere({ lastSelected: true });

            // stop when there isn't a changed answer model
            if (!_.isBackboneModel(answer)) {
                return;
            }

            // get the questionblock that corresponds with the (de)selected changed answer
            var questionblock = questionBlocksCollection.findWhere({ order: totalQuestionblocks + answer.get('order') });

            // hide or show all questions on the questionblock based on the selection state
            // selected/answered = show questions
            // NOT selected/answered = hide questions
            questionblock.get('questions').each(function(question, index) {
                question.setHidden(answer.get('answered'));
            });
        });
    };

    var addChangeEventListenerReviewTypeQuestion = function() {
        App.quiz.getQuestionByOrder(2).on('change', function(question, options) {
            var answer = options._changedAnswer || question.get('answers').findWhere({ lastSelected: true });

            // when no answer or the first answer is selected
            if (!_.isBackboneModel(answer) || answer.get('order') === 1) {
                // make sure the questions on the original questionblocks are all visible
                questionBlocksCollection.every(function(questionblock) {
                    // loop until we reach the questionblock with the last question from where the cloned questionblocks start
                    if (questionblock.get('order') >= totalQuestionblocks) {
                        return false;
                    }

                    // skip the first 2 questionblocks
                    if (questionblock.get('order') <= 2) {
                        return true;
                    }

                    questionblock.get('questions').each(function(question) {
                        // only show question when it is hidden (= not already shown)
                        if (question.isHidden()) {
                            question.setHidden(true);
                        }
                    });

                    return true;
                });

                // show all the answers on the last question, in case another answer should be hidden after a new "category" request
                lastQuestion.hideAnswers("1,2,3,4", true, { noRuleCheck: true });

                return;
            }

            // get the questionblock id from the server
            fetchQuestionBlockId(function(questionBlockId) {
                // get the questionblock model for the returned questionblock id
                var fetchedQuestionBlock = questionBlocksCollection.findWhere({ id: questionBlockId });

                // hide all questions for the original questionblocks except for the questionblock with the fetched questionblock id
                questionBlocksCollection.every(function(questionblock) {
                    // loop until we reach the questionblock with the last question from where the cloned questionblocks start
                    if (questionblock.get('order') >= totalQuestionblocks) {
                        return false;
                    }

                    // skip the first 2 questionblocks
                    if (questionblock.get('order') > 2) {
                        questionblock.get('questions').each(function(question) {
                            if (questionblock.get('order') === fetchedQuestionBlock.get('order')) {
                                // only show question when it is hidden (= not already shown)
                                if (question.isHidden()) {
                                    question.setHidden(true);
                                }

                                return;
                            }

                            // only hide question when it is not already hidden
                            if (!question.isHidden()) {
                                question.setHidden(false);
                            }
                        });
                    }

                    return true;
                });

                // hide the answer that corresponds with the found questionblock model
                lastQuestion.hideAnswers(fetchedQuestionBlock.get('order') - 2, false, { noRuleCheck: true });
            });
        });
    };

    // assuming there is an intro screen & there are no group on screen questionblocks,
    // then question index should equal slide index
    var getSlideModelByIndex = function(question) {
        var questionList = App.quiz.getAllQuestions(true);
        var questionIndex = questionList.indexOf(question);
        var slideModel = App.Slides.at(questionIndex);

        return slideModel;
    };

    var addGoToFirstQuestionOfQuestionBlockNavigation = function(questionblock, question) {
        var slideView = getSlideModelByIndex(question).view;
        var $container = slideView.$el.find('.card-actions .card-actions-item').last();
        var $questionBlockPreviousButton = $container.find('.prev-2');

        if (!$questionBlockPreviousButton.length) {
            var previousButtonTemplate = '<div class="button prev-2"> &lt;&lt; </div>';
            $questionBlockPreviousButton = $(previousButtonTemplate).prependTo($container);
        }

        // action to do when clicking "<<" button
        $questionBlockPreviousButton.click(function() {
            // goto first question of the questionblock
            App.Slides.slider.goTo(App.Slides.getSlideBySlideModel(getSlideModelByIndex(questionblock.get('questions').first())).id);
        });
    };

    updateQuestionBlocks();

    // after survey has fully loaded
    App.functions.onSurveyLoaded(function() {
        addChangeEventListenerLastQuestion();
        addChangeEventListenerReviewTypeQuestion();

        questionBlocksCollection.each(function(questionblock) {
            // skip the first 2 questionblocks
            if (questionblock.get('order') <= 2) {
                return;
            }

            questionblock.get('questions').each(function(question, index) {
                // hide all questions from the cloned questionblocks
                if (questionblock.get('order') > totalQuestionblocks) {
                    question.setHidden(false);
                }

                // skip the first 2 questions
                // only start adding the button from the 3rd question on the questionblock and onward
                if (index <= 1) {
                    return;
                }

                addGoToFirstQuestionOfQuestionBlockNavigation(questionblock, question);
            });
        });
    });
});