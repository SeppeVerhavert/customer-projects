// Survey(s): avcmrhrz
// Description: JS enhancements for Cesar survey
// Client(s): Sirris
// Version: 3.1
// @link https://surveyanyplace.atlassian.net/browse/SA-6043
require(['underscore'], function(_) {
    //A. BACKGROUND FIX FOR IE
    //Use of image instead of encoded SVG
    if (document.documentElement.classList.contains('ie')) {
        body.style.backgroundImage = "url(https://assets.surveyanyplace.com/survey/8ItYCGIUZPZHqNS6bXoOv7K1QFhseFKe/images/6VRaY5VYQGeHlIk9vcvE_serris_background_full.png);";
    }

    let placeLogoOnSlide = App.applicationView.slidesView.placeLogoOnSlide;
    App.applicationView.slidesView.placeLogoOnSlide = function(slideView) {
        placeLogoOnSlide.call(this, slideView);

        // B. RETRIEVE LOGO ON SLIDE VIEW AND ADD ADDITIONAL IMAGES
        let $cardLogo = slideView.$el.find('.card-logo');
        let logo1 = document.createElement("img");
        logo1.src = "https://assets.surveyanyplace.com/custom/sirris/agoria_logo.jpg";
        //Using multiple arguments for classList.add is not supported by IE, so add class names separately
        logo1.classList.add("desktop-additional-logo");
        logo1.classList.add("desktop-agoria");
        $cardLogo.append(logo1);

        let logo2 = document.createElement("img");
        logo2.src = "https://assets.surveyanyplace.com/custom/sirris/ovam_logo_ENG.jpg";
        //Using multiple arguments for classList.add is not supported by IE, so add class names separately
        logo2.classList.add("desktop-additional-logo");
        logo2.classList.add("desktop-ovam");
        $cardLogo.append(logo2);

        let logo3 = document.createElement("img");
        logo3.src = "https://assets.surveyanyplace.com/custom/sirris/Logo_AFVAL_DEF.jpg";
        //Using multiple arguments for classList.add is not supported by IE, so add class names separately
        logo3.classList.add("desktop-additional-logo");
        logo3.classList.add("desktop-afval");
        logo3.classList.add("not-visible");
        $cardLogo.append(logo3);

        if (slideView.model.get('type') === "intro" || slideView.model.get('type') === "final") {
            logo3.classList.toggle("not-visible");
        }
    };
    App.functions.onSurveyLoaded(function() {
        //C. OPT-IN INFORMATION ON INTRO SCREEN
        let introCardAnswerContainer = document.getElementsByClassName("answer-container")[0];
        let informationButton = document.createElement("div");
        informationButton.id = "opt-in-information-button";
        informationButton.classList.add("button");
        informationButton.textContent = "Read Privacy Statement";

        let informationContainer = document.createElement("div");
        //Using multiple arguments for classList.add is not supported by IE, so add class names separately
        informationContainer.classList.add("opt-in-information");
        informationContainer.classList.add("not-visible");

        let informationHeading = document.createElement("strong");
        informationHeading.textContent = "Why do you need to provide an e-mail address?";

        let informationText = document.createElement("p");
        informationText.className = "font-small";
        informationText.textContent = "Sirris processes personal data in accordance with the provisions of privacy protection law and with this privacy statement and accordance with the GDPR. Your mail address is required to send you the pfd report with the outcome of this tool. Your e-mail address and the data entered can be used for commercial purpose only to inform you about commercial offerings focused on initiatives supporting circular business activities. The aggregated data (anonymized) can be shared with OVAM. For more info about our Sirris privacy policy we refer to https://www.sirris.be/nl/disclaimer.";

        informationContainer.appendChild(informationHeading);
        informationContainer.appendChild(informationText);
        introCardAnswerContainer.appendChild(informationButton);
        introCardAnswerContainer.appendChild(informationContainer);

        informationButton.onclick = function() {
            informationContainer.classList.toggle("not-visible");
        };

        //D. ADD AFVALORISATIE LOGO (MOBILE)
        let bodyElement = document.getElementById("body");
        let mobileLogo = document.createElement("img");
        mobileLogo.id = "mobile-logo";
        //Using multiple arguments for classList.add is not supported by IE, so add class names separately
        mobileLogo.classList.add("mobile-additional-logo");
        mobileLogo.classList.add("mobile-afval");
        mobileLogo.src = "https://assets.surveyanyplace.com/custom/sirris/Logo_AFVAL_DEF.jpg";
        bodyElement.appendChild(mobileLogo);

        let setMobileLogo = function() {
            let activeSlide = document.getElementsByClassName("rsActiveSlide")[0];
            let activeMobileLogo = activeSlide.getElementsByClassName("desktop-afval")[0];

            if (activeMobileLogo.classList.contains("not-visible")) {
                mobileLogo.classList.add("not-visible");
            } else {
                mobileLogo.classList.remove("not-visible");
            }
            App.ev.off('slideChanged', setMobileLogo);
        }
        App.ev.on('slideChanged', setMobileLogo);
        window.addEventListener('resize', setMobileLogo);

        let setMobileLogoOnFinalScreen = function() {
            mobileLogo.classList.remove("not-visible");;
            App.ev.off('beforeRenderOutro', setMobileLogoOnFinalScreen);
        }
        App.ev.on('beforeRenderOutro', setMobileLogoOnFinalScreen);

    });
});