docReady(function() {
    const customVars = document.querySelectorAll('.custom-variable');
    const pageBreaks = document.querySelectorAll('.page_break');
    var pg4 = document.querySelectorAll('#page_4');
    var pg5 = document.querySelectorAll('#page_5');
    var pg6 = document.querySelectorAll('#page_6');
    var pg7 = document.querySelectorAll('#page_7');
    var pg8 = document.querySelectorAll('#page_8');
    var pg12 = document.querySelectorAll('#page_12');
    var pg13 = document.querySelectorAll('#page_13');
    var pg14 = document.querySelectorAll('#page_14');
    var pg15 = document.querySelectorAll('#page_15');

    const totalDifference = customVars[0].innerHTML;
    const overallDifference = customVars[1].innerHTML;
    const exploreDifference = customVars[2].innerHTML;
    const developDifference = customVars[3].innerHTML;
    const proveDifference = customVars[4].innerHTML;
    const monitorDifference = customVars[5].innerHTML;
    const clpdDifference = customVars[6].innerHTML;
    const plrDifference = customVars[7].innerHTML;
    const flpDifference = customVars[8].innerHTML;
    const iiDifference = customVars[9].innerHTML;

    // Set background image for summary

    if (totalDifference >= 3) {
        pageBreaks[2].children[0].children[0].children[0].src = "https://assets.surveyanyplace.com/survey/9a9e157f-292f-4081-be54-79d5f54317b5/templates/566542a0-c557-43a2-8a46-dbf569c74b2d/sMx4wWlxQz62QMAEbJCw_New_Project__3_.jpg"
    } else if (totalDifference >= -3 && totalDifference < 3) {
        pageBreaks[2].children[0].children[0].children[0].src = "https: //assets.surveyanyplace.com/survey/9a9e157f-292f-4081-be54-79d5f54317b5/templates/566542a0-c557-43a2-8a46-dbf569c74b2d/T5ojKTG3R0SuOhx1Y97Q_Innovation_calculator_report_template_D4.jpg"
    } else {
        pageBreaks[2].children[0].children[0].children[0].src = "https://assets.surveyanyplace.com/survey/9a9e157f-292f-4081-be54-79d5f54317b5/templates/566542a0-c557-43a2-8a46-dbf569c74b2d/eHUWKdsUSoeQ8SJBrvI0_Innovation_calculator_report_template_D4.jpg"
    }

    // Display below-average pages

    if (overallDifference > -3) {
        pg4[0].classList.add('invisible');
        pageBreaks[3].classList.add('invisible');
    }
    if (exploreDifference > -3) {
        pg5[0].classList.add('invisible');
        pageBreaks[4].classList.add('invisible');
    }
    if (developDifference > -3) {
        pg6[0].classList.add('invisible');
        pageBreaks[5].classList.add('invisible');
    }
    if (proveDifference > -3) {
        pg7[0].classList.add('invisible');
        pageBreaks[6].classList.add('invisible');
    }
    if (monitorDifference > -3) {
        pg8[0].classList.add('invisible');
        pageBreaks[7].classList.add('invisible');
    }

    // Display 4 problems

    if (clpdDifference > -3) {
        pg12[0].classList.add('invisible');
        pageBreaks[11].classList.add('invisible');
    }
    if (plrDifference > -3) {
        pg13[0].classList.add('invisible');
        pageBreaks[12].classList.add('invisible');
    }
    if (flpDifference > -3) {
        pg14[0].classList.add('invisible');
        pageBreaks[13].classList.add('invisible');
    }
    if (iiDifference > -3) {
        pg15[0].classList.add('invisible');
        pageBreaks[14].classList.add('invisible');
    }

    // Set Top skipping invisible pages

    const visible = document.querySelectorAll('.page_break:not(.invisible)');
    for (var i = 0; i < visible.length; i++) {
        var number = i * 1122;
        visible[i].style.top = number + 'px';
    }
});

function docReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // call on next available tick
        setTimeout(fn, 1)
    } else {
        document.addEventListener('DOMContentLoaded', fn, false)
        window.addEventListener('load', (event) => {
            console.log('DOM fully loaded and parsed')
        })
    }
}