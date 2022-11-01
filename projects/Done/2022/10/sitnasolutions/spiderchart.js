// docReady(function() {
//     let fResults = document.querySelectorAll(".fresult");
//     let spiderScores = document.querySelectorAll(".template-widget.spiderchart .highcharts-series-0.highcharts-column-series.highcharts-dense-data.highcharts-tracker path");
//     console.log(fResults, spiderScores);
// });

// function docReady(fn) {
//     // see if DOM is already available
//     console.log("pretimeout");

//     if (document.readyState === "interactive") {
//         // call on next available tick
//         setTimeout(fn, 1);

//     } else {
//         document.addEventListener("DOMContentLoaded", fn, false);

//         window.addEventListener('load', (event) => {
//             console.log('DOM fully loaded and parsed');
//         });
//     }
// }

window.addEventListener("load", function() {
    setTimeout(function() {
        let fResults = document.querySelectorAll(".fresult");
        let spiderScores = document.querySelectorAll(".template-widget.spiderchart .highcharts-series-0.highcharts-column-series.highcharts-dense-data.highcharts-tracker path");
        for (var i = 0; i < fResults.length; i++) {
            changeColor(Number(fResults[i].innerHTML), spiderScores[i]);
        }
        console.log(fResults, spiderScores);

        function changeColor(X, Y) {
            if (1.99 < X && X < 4) {
                Y.style.fill = "#DDDF0D";
            } else if (3.99 < X) {
                Y.style.fill = "#55BF3B";
            }
        }
    }, 1000);
});