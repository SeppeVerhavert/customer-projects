require(['jquery', 'underscore'], function ($, _) {
    // Split the question blocks in different categories.
    // Key is the order of the question block the category needs to start from.
    var categories = {
        1: 'Category 1',
        3: 'Category 2',
        5: 'Category 3',
    };

    var createTableOfContentsInFirstQuestion = function () {
        var questionBlocks = App.quiz.get('questionblocks');
        var firstQuestion = questionBlocks.first().get('questions').first();
        var $tableOfContentContainer = document.getElementById('question-' + firstQuestion.get('order'));
        var $tableOfContentAnswerContainer = $tableOfContentContainer.querySelector('.answers-container');
        $tableOfContentAnswerContainer.classList.add('text-choice');

        $tableOfContentAnswerContainer.innerHTML = '';

        questionBlocks.each(function (questionBlock, i) {
            if (i === 0) {
                return;
            }

            if (categories.hasOwnProperty(i)) {
                const categoryElement = document.createElement('h2');
                categoryElement.innerHTML = categories[i];

                $tableOfContentAnswerContainer.appendChild(categoryElement);
            }

            const answerElement = document.createElement('label');
            answerElement.classList.add('answer');
            answerElement.setAttribute('for', 'questionblock-' + questionBlock.get('order'));
            answerElement.setAttribute('order', questionBlock.get('order'));
            answerElement.innerHTML = '<input type="radio" id="questionblock-' + questionBlock.get('order') + '" class="radio" data-order="1"><div class="answer-content">' + questionBlock.getTitle() + '</div>'

            answerElement.addEventListener('click', function () {
                var questionBlockOrder = parseInt(this.getAttribute('order'));
                var selectedQuestionBlock = questionBlocks.find((questionBlock) => questionBlock.get('order') === questionBlockOrder);

                App.Slides.slider.goTo(App.Slides.getSlideModelByQuestion(selectedQuestionBlock.get('questions').first()).id);
            });

            $tableOfContentAnswerContainer.appendChild(answerElement);
        })
    };

    var addBackToTableOfContentsButton = function () {
        var questionBlocks = App.quiz.get('questionblocks');
        var firstQuestion = questionBlocks.first().get('questions').first();

        questionBlocks.each(function (questionBlock, i) {
            if (i === 0) {
                return;
            }

            questionBlock.get('questions').each(function (question, j) {
                var slideView = App.Slides.getSlideModelByQuestion(question).view;
                var $container = slideView.$el.find('.card-actions .card-actions-item').last();
                var $questionBlockPreviousButton = $container.find('.prev-2');

                if ($questionBlockPreviousButton.length === 0) {
                    var previousButtonTemplate = '<div class="button prev-2"> Table of Contents </div>';
                    $questionBlockPreviousButton = $(previousButtonTemplate).prependTo($container);

                    $questionBlockPreviousButton.click(function () {
                        App.Slides.slider.goTo(App.Slides.getSlideModelByQuestion(firstQuestion).id);
                    });
                }
            });
        });
    }

    App.functions.onSurveyLoaded(function () {
        createTableOfContentsInFirstQuestion();
        addBackToTableOfContentsButton();
    });
});