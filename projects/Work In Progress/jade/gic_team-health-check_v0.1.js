window.addEventListener("load", function() {
    setTimeout(function() {
        const barcharts = document.getElementsByClassName("template-widget bar");
        const gaugecharts = document.getElementsByClassName("template-widget gauge_widget");
        const avgtable = document.querySelectorAll(".column-left table tr:not(:first-child) td:last-child");
        let i, j;
        // BARCHARTS COLOR CHANGE
        for (i = 0; i < barcharts.length; i++) {
            let dataLabelSeries = barcharts[i].children[1].children[0].children[0].children[0].children[14].children;
            let legend = barcharts[i].children[1].children[0].children[0].children[0].children[15];
            let barSeries = barcharts[i].children[1].children[0].children[0].children[0].children[10].children[0].children;
            for (j = 0; j < dataLabelSeries.length; j++) {
                let legendValue = dataLabelSeries[j].children[0].children[1].innerHTML;
                let barStyle = barSeries[j].style;
                if (legendValue < 1.60) {
                    barStyle['fill'] = '#c00000';
                } else if (1.60 <= legendValue && legendValue < 2.40) {
                    barStyle['fill'] = '#f79646';
                } else if (2.40 <= legendValue) {
                    barStyle['fill'] = '#9bbb59';
                }
                if (legend.classList.contains('highcharts-legend')) {
                    let legendStyle = legend.children[1].children[0].children[0].children[1].style
                    if (legendValue < 1.60) {
                        legendStyle['fill'] = '#c00000';
                    } else if (1.60 <= legendValue && legendValue < 2.40) {
                        legendStyle['fill'] = '#f79646';
                    } else if (2.40 <= legendValue) {
                        legendStyle['fill'] = '#9bbb59';
                    }
                }
            }
        }
        // GAUGECHARTS COLOR CHANGE
        for (i = 0; i < gaugecharts.length; i++) {
            let dataLabel = gaugecharts[i].children[1].children[0].children[0].children[1].children[0].children[0].innerText;
            let gaugeStyle = gaugecharts[i].children[1].children[0].children[0].children[0].children[9].children[0].children[0].style;
            if (dataLabel < 1.60) {
                gaugeStyle['fill'] = '#c00000';
            } else if (1.60 <= dataLabel && dataLabel < 2.40) {
                gaugeStyle['fill'] = '#f79646';
            } else if (2.40 <= dataLabel) {
                gaugeStyle['fill'] = '#9bbb59';
            }
        }
        // AVG TABLE COLOR CHANGE
        for (i = 0; i < avgtable.length; i++) {
            let cellValue = parseInt(avgtable[i].innerText);
            let cellStyle = avgtable[i].style;
            if (cellValue < 1.60) {
                cellStyle['background-color'] = '#c00000';
            } else if (1.60 <= cellValue && cellValue < 2.40) {
                cellStyle['background-color'] = '#f79646';
            } else if (2.40 <= cellValue) {
                cellStyle['background-color'] = '#9bbb59';
            }
        }
    }, 1000);
});