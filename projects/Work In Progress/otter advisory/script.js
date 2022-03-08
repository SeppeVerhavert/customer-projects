docReady(function() {

    var charts = document.querySelectorAll('.chart-wrapper');
    var chartContainers = document.querySelectorAll('.chart');

    var datylon = document.querySelectorAll('.datylon-container');
    var datylonContainers = document.querySelectorAll('.datylon');

    var q1chart = charts[0].parentNode.removeChild(charts[0]);
    var q2chart = charts[1].parentNode.removeChild(charts[1]);
    var q3chart = charts[2].parentNode.removeChild(charts[2]);
    var generalchart = charts[3].parentNode.removeChild(charts[3]);
    var quadrantchart = datylon[0].parentNode.removeChild(datylon[0]);

    chartContainers[0].append(q1chart);
    chartContainers[1].append(q2chart);
    chartContainers[2].append(q3chart);
    chartContainers[3].append(generalchart);
    datylonContainers[0].append(quadrantchart);

});

function docReady(fn) {

    console.log("pretimeout");

    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);

    } else {
        document.addEventListener("DOMContentLoaded", fn, false);
        /////////////////////////////////////////////////////////////////
        //********************* **********************//
        window.addEventListener('load', (event) => {
            console.log('DOM fully loaded and parsed');
        });
    }
}