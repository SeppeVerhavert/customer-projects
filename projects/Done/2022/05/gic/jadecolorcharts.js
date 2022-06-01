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
                if (legendValue < 1.74) {
                    barStyle['fill'] = '#de6565';
                } else if (1.74 <= legendValue && legendValue < 2.49) {
                    barStyle['fill'] = '#e79439';
                }    else if (2.49 <= legendValue && legendValue < 3.24) {
                        barStyle['fill'] = '#d0b323';
                } else if (3.24 <= legendValue) {
                    barStyle['fill'] = '#397b21';
                }
                if (legend.classList.contains('highcharts-legend')) {
                    let legendStyle = legend.children[1].children[0].children[0].children[1].style
                    if (legendValue < 1.74) {
                        legendStyle['fill'] = '#de6565';
                    } else if (1.74 <= legendValue && legendValue < 2.49) {
                        legendStyle['fill'] = '#e79439';
                    } else if (2.49 <= legendValue && legendValue < 3.24) {
                        legendStyle['fill'] = '#d0b323';
                    } else if (3.24 <= legendValue) {
                        legendStyle['fill'] = '#397b21';
                    }
                }
            }
        }
        // GAUGECHARTS COLOR CHANGE
        for (i = 0; i < gaugecharts.length; i++) {
            let dataLabel = gaugecharts[i].children[1].children[0].children[0].children[1].children[0].children[0].innerText;
            let gaugeStyle = gaugecharts[i].children[1].children[0].children[0].children[0].children[9].children[0].children[0].style;
            if (dataLabel < 1.74) {
                gaugeStyle['fill'] = '#de6565';
            } else if (1.74 <= dataLabel && dataLabel < 2.49) {
                gaugeStyle['fill'] = '#e79439';
            } else if (2.49 <= dataLabel && dataLabel < 3.24) {
                gaugeStyle['fill'] = '#d0b323';
            } else if (3.24 <= dataLabel) {
                gaugeStyle['fill'] = '#397b21';
            }
        }
        // AVG TABLE COLOR CHANGE
        for (i = 0; i < avgtable.length; i++) {
            let cellValue = avgtable[i].innerText;
            console.log(cellValue);
            let cellStyle = avgtable[i].style;
            if (cellValue < 1.74) {
                cellStyle['background-color'] = '#de6565';
            } else if (1.74 <= cellValue && cellValue < 2.49) {
                cellStyle['background-color'] = '#e79439';
            } else if (2.49 <= cellValue && cellValue < 3.24) {
                cellStyle['background-color'] = '#d0b323';   
            } else if (3.24 <= cellValue) {
                cellStyle['background-color'] = '#397b21';
            }
        }
    }, 1000);
});