$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {
        let prevSlideId = 0;
        App.Slides.slider.ev.on("rsAfterSlideChange", function(event) {
            if (this.currSlideId === prevSlideId) {
                // do nothing, we did not move
                return;
            }

            prevSlideId = this.currSlideId;
            // do stuff, because we changed slides
            console.log('slidechange');
        });
    });
});