require(['jquery', 'underscore'], function ($, _) {
    var createTableOfContentsInFirstQuestion = function () {
        var questionBlocks = App.quiz.get('questionblocks');
        var firstQuestion = questionBlocks.first().get('questions').first();
        var $tableOfContentContainer = document.getElementById('question-' + firstQuestion.get('order'));
        var $tableOfContentAnswerContainer = $tableOfContentContainer.querySelector('.answers-container');
        $tableOfContentAnswerContainer.classList.add('text-choice');

        $tableOfContentAnswerContainer.innerHTML = '';
        var previousCategory = null;

        questionBlocks.each(function (questionBlock, i) {
            if (i === 0) {
                return;
            }

            var firstQuestion = questionBlock.get('questions').first();
            var currentCategory = firstQuestion.getTranslations('question_tag');

            if (currentCategory && currentCategory.length > 0 && currentCategory !== previousCategory) {
                const categoryElement = document.createElement('h2');
                categoryElement.innerHTML = currentCategory;
                $tableOfContentAnswerContainer.appendChild(categoryElement);

                previousCategory = currentCategory;
            }

            var answerElement = document.createElement('label');
            answerElement.classList.add('answer');
            answerElement.setAttribute('for', 'questionblock-' + questionBlock.get('order'));
            answerElement.setAttribute('order', questionBlock.get('order'));
            answerElement.innerHTML = '<input type="radio" id="questionblock-' + questionBlock.get('order') + '" class="radio" data-order="1"><div class="answer-content">' + questionBlock.getTitle() + '</div>'

            answerElement.addEventListener('click', function () {
                var questionBlockOrder = parseInt(this.getAttribute('order'));
                var selectedQuestionBlock = questionBlocks.find((questionBlock) => questionBlock.get('order') === questionBlockOrder);

                App.Slides.slider.goTo(App.Slides.getSlideBySlideModel(App.Slides.getSlideModelByQuestion(selectedQuestionBlock.get('questions').first())).id);
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
                    var previousButtonTemplate = '<div class="button prev-2"> &lt;&lt; HOME</div>';
                    $questionBlockPreviousButton = $(previousButtonTemplate).prependTo($container);

                    $questionBlockPreviousButton.click(function () {
                        App.Slides.slider.goTo(App.Slides.getSlideBySlideModel(App.Slides.getSlideModelByQuestion(firstQuestion)).id);
                    });
                }
            });
        });
    }

    var addBreadcrumbs = function () {
        var questionBlocks = App.quiz.get('questionblocks');

        questionBlocks.each(function (questionBlock, i) {
            if (i === 0) {
                return;
            }

            questionBlock.get('questions').each(function (question, j) {
                var slideView = App.Slides.getSlideModelByQuestion(question).view;
                var $container = slideView.$el.find('.card-container').first();
                var breadcrumbsElementExists = $container.find('.card-breadcrumbs').length !== 0;

                if (breadcrumbsElementExists === false) {
                    var breadcrumbsElement = document.createElement('ul');
                    breadcrumbsElement.classList.add('card-breadcrumbs');

                    var questionTag = question.getTranslations('question_tag');

                    if (questionTag && questionTag.length > 0) {
                        var categoryElement = document.createElement('li');
                        categoryElement.innerHTML = questionTag;
                        breadcrumbsElement.append(categoryElement);
                    }

                    var questionBlockElement = document.createElement('li');
                    questionBlockElement.innerHTML = questionBlock.getTitle();
                    breadcrumbsElement.append(questionBlockElement);

                    $(breadcrumbsElement).prependTo($container);
                }
            });
        });
    }

    App.functions.onSurveyLoaded(function () {
        createTableOfContentsInFirstQuestion();
        addBackToTableOfContentsButton();
        addBreadcrumbs();
    });
});
