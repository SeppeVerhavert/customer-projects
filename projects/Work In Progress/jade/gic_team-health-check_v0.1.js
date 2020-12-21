// Team Health Check
// Version: 0.1

document.addEventListener("DOMContentLoaded", function() {
    // Range Chart settings
    // - Set font-family to sans-serif
    // - Dynamic label color

    // Select all widgets containing the Range Chart.
    // Code line below works if the report is only using one type of Datylon chart (SA-4).
    // If there are other Datylon charts present, find another solution to select the Range Charts.
    const rangeCharts = document.getElementsByClassName("datylon");
    let i, j;

    for (i = 0; i < rangeCharts.length; i++ ) {
        const rangeChart = rangeCharts[i];
        // select all text elements of the chart
        const chartTextElements = rangeChart.getElementsByTagName("text");

        for (j = 0; j < chartTextElements.length; j++) {
            const chartTextElement = chartTextElements[j];
            // set font-family for all text elements
            chartTextElement.style.fontFamily = "sans-serif";
        }

        /*for (j = 0; j < yAxisLabelTexts.length; j++) {
            const labelText = yAxisLabelTexts[j];
            const labelTextValue = Number(labelText.textContent);
            const labelRectangle = yAxisLabelRectangles[j];
            labelText.setAttribute('x', '0.6');

            if (labelTextValue < 1.6) {
                // change label color to red
                labelRectangle.style.fill = "#DF1919";
            } else if (labelTextValue >= 1.6 && labelTextValue <= 2.1) {
                // change label color to orange
                labelRectangle.style.fill = "#E87628";
            }
        }*/
    }
});