require(['underscore'], function(_) {

    App.functions.onSurveyLoaded(function() {
        let body = document.getElementById('body');
        body.classList.add('alt-background');

        let frontpageBtn = document.getElementsByClassName('button glow next')[0];
        frontpageBtn.addEventListener('click', removeBg);

        function removeBg() {
            body.classList.remove('alt-background');
        }
    });
});