//      -----   CUSTOM JS SCRIPT     -----       //

require(['underscore'], function(_) {

    //      -----   FUNCTIONS ON SURVEYLOAD     -----       //

    App.functions.onSurveyLoaded(function(slidesView) {

        //      -----   CHANGE LOGO TO HYPERLINK SURVEY     -----       //

        slidesView.collection.each(function(slideModel, i) {

            let $newLogo = $('<div class="card-logo"><a href="https://enlightstrategic.com/" target="_blank"><img src="https://d211yo6vt4n0fx.cloudfront.net/survey/4cT4lYsl1X2QGjCw7HofvLv0Q2wmpf0E/images/bJhJTKSLS6e6ylZiX87f_enligh_hi_rez_logos_01.png"></a></div>');

            slideModel.view.$el.find('.card-logo').remove();
            slideModel.view.$el.find('.card-container').prepend($newLogo);
        });

        //      -----   ADD MARKERS TO SLIDERS     -----       //

        slidesView.collection.registerEvent("rsAfterSlideChange", function() {
            let sliders = document.getElementsByClassName('rangeslider');

            for (let j = 0; j < sliders.length; j++) {

                let hasChild = sliders[j].querySelector(".slider-marker") != null;
                if (!hasChild) {
                    let sliderMarkerContainer = document.createElement("div");
                    sliderMarkerContainer.classList.add('slider-marker');

                    let markerFirst = document.createElement("div");
                    markerFirst.classList.add('marker');
                    markerFirst.classList.add('first');

                    sliderMarkerContainer.appendChild(markerFirst);
                    for (let k = 0; k < 4; k++) {
                        let marker = document.createElement("div");
                        marker.classList.add('marker');
                        sliderMarkerContainer.appendChild(marker);
                    }
                    sliders[j].appendChild(sliderMarkerContainer);
                }
            }
        });
    });

    //      -----   FUNCTIONS ON OUTRO     -----       //

    App.ev.once('afterRenderOutro', function() {

        //      -----   CHANGE LOGO TO HYPERLINK RESULTS PAGE     -----       //

        setTimeout(function() {
            let $newLogo = $('<div class="card-logo"><a href="https://enlightstrategic.com/" target="_blank"><img src="https://d211yo6vt4n0fx.cloudfront.net/survey/4cT4lYsl1X2QGjCw7HofvLv0Q2wmpf0E/images/bJhJTKSLS6e6ylZiX87f_enligh_hi_rez_logos_01.png"></a></div>');

            $('.card-logo').remove();
            $('.card-container').prepend($newLogo);
        }, 1000);
    });
});