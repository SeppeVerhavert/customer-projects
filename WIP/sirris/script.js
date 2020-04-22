require(['underscore'], function(_) {
    // place this code once the survey is loaded
    App.functions.onSurveyLoaded(function() {
        // only to run the code after session has been successfully saved
        // this will indicate that the final screen is about to be rendered
        App.ev.on('sessionSaved', function(session, success) {
            if (success && !session.get('partial')) {
                // store original function, which we will still be using
                // & restoring once our custom functionality is applied
                var placeLogoOnSlide = App.applicationView.slidesView.placeLogoOnSlide;
                App.applicationView.slidesView.placeLogoOnSlide = function(view) {
                    placeLogoOnSlide.call(this, view);

                    // retrieve the logo on the "slide" view & add the additional images
                    var $cardLogo = view.$el.find('.card-logo');

                    var logo1 = document.createElement("img");
                    logo1.src = "https://surveyanyplace.s3.amazonaws.com/custom/sirris/logo_economie.jpg";
                    $cardLogo.append(logo1);

                    if (!document.body.classList.contains('lang-13')) {
                        var logo2 = document.createElement("img");
                        logo2.src = "https://surveyanyplace.s3.amazonaws.com/custom/sirris/IP+Octrooicel.jpg";
                        $cardLogo.append(logo2);
                    } else {
                        var logo3 = document.createElement("img");
                        logo3.src = "https://surveyanyplace.s3.amazonaws.com/custom/sirris/IP+Cellule+Brevets.jpg";
                        $cardLogo.append(logo3);
                    }

                    // revert the function to its original state
                    // to prevent this from adding the additional image(s) too many times
                    App.applicationView.slidesView.placeLogoOnSlide = placeLogoOnSlide;
                };
            }
        });
    });
});