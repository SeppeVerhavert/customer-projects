docReady(function() {

    //Customer
    const bwCust = parseFloat(document.getElementById('bw-cust').innerText);
    const bwCustBench = parseFloat(document.getElementById('bw-cust-bench').innerText);
    const q4 = parseFloat(document.getElementById('q4-score').innerText);
    const q4Bench = parseFloat(document.getElementById('q4-bench').innerText);
    const q5 = parseFloat(document.getElementById('q5-score').innerText);
    const q5Bench = parseFloat(document.getElementById('q5-bench').innerText);
    const q6 = parseFloat(document.getElementById('q6-score').innerText);
    const q6Bench = parseFloat(document.getElementById('q6-bench').innerText);

    //Operational
    const bwOper = parseFloat(document.getElementById('bw-oper').innerText);
    const bwOperBench = parseFloat(document.getElementById('bw-oper-bench').innerText);
    const q10 = parseFloat(document.getElementById('q10-score').innerText);
    const q10Bench = parseFloat(document.getElementById('q10-bench').innerText);
    const q11 = parseFloat(document.getElementById('q11-score').innerText);
    const q11Bench = parseFloat(document.getElementById('q11-bench').innerText);
    const q12 = parseFloat(document.getElementById('q12-score').innerText);
    const q12Bench = parseFloat(document.getElementById('q12-bench').innerText);

    //Markets
    const bwMark = parseFloat(document.getElementById('bw-mark').innerText);
    const bwMarkBench = parseFloat(document.getElementById('bw-mark-bench').innerText);
    const q16 = parseFloat(document.getElementById('q16-score').innerText);
    const q16Bench = parseFloat(document.getElementById('q16-bench').innerText);
    const q17 = parseFloat(document.getElementById('q17-score').innerText);
    const q17Bench = parseFloat(document.getElementById('q17-bench').innerText);
    const q18 = parseFloat(document.getElementById('q18-score').innerText);
    const q18Bench = parseFloat(document.getElementById('q18-bench').innerText);

    console.log(bwMark)
    var categories = [{
            name: 'Customers',
            focus: {
                main: [bwCust, bwCustBench], // score, avg
                ci: [q4, q4Bench],
                ra: [q5, q5Bench],
                jo: [q6, q6Bench]
            },
            fix: {
                main: 59,
                action: 0,
                vision: 11,
                structure: 15,
                leadership: 33,
                knowledge: 59,
                culture: 92,
                incentivises: 100,
                skills: 100
            }
        },
        {
            name: 'Operations',
            focus: {
                main: [bwOper, bwOperBench], // score, avg
                ci: [q10, q10Bench],
                ra: [q11, q11Bench],
                jo: [q12, q12Bench]
            },
            fix: {
                main: 59,
                action: 0,
                vision: 11,
                structure: 15,
                leadership: 33,
                knowledge: 59,
                culture: 92,
                incentivises: 100,
                skills: 100
            }
        },
        {
            name: 'Markets',
            focus: {
                main: [bwMark, bwMarkBench], // score, avg
                ci: [q16, q16Bench],
                ra: [q17, q17Bench],
                jo: [q18, q18Bench]
            },
            fix: {
                main: 59,
                action: 0,
                vision: 11,
                structure: 15,
                leadership: 33,
                knowledge: 59,
                culture: 92,
                incentivises: 100,
                skills: 100
            }
        }
    ];

    var datylonChart = document.querySelector('.datylon-container');
    var datylonChartEl = datylonChart.parentNode.removeChild(datylonChart);

    document.querySelector('.col-two .right').append(datylonChartEl.cloneNode(true));
    // document.querySelector('.focus-fix .item.focus .right').append(datylonChartEl.cloneNode(true));
    // document.querySelector('.focus-fix .item.fix .right').append(datylonChartEl.cloneNode(true));
    document.querySelectorAll('.custom-header').forEach(header => {
        header.append(datylonChartEl.cloneNode(true));
    });

    var categoryPages = document.querySelectorAll('.custom-page.with-header');

    categoryPages.forEach((page, i) => {
        var slider = page.querySelector('.slider');

        var scorePercentage = 25 * categories[i].focus.main[0] - 25;
        var avgPercentage = 25 * categories[i].focus.main[1] - 25;

        slider.querySelector('.score').style.left = 'calc(' + scorePercentage + '% - 15px)';
        slider.querySelector('.score').textContent = categories[i].focus.main[0].toPrecision(2);
        slider.querySelector('.avg').style.left = 'calc(' + avgPercentage + '% - 10px)';

        var subcatSliders = page.querySelectorAll('.subcat-sliders .slider');

        subcatSliders[0].querySelector('.score').style.left = 'calc(' + (25 * categories[i].focus.ci[0] - 25) + '% - 12px)';
        subcatSliders[0].querySelector('.score').textContent = categories[i].focus.ci[0].toPrecision(2);
        subcatSliders[0].querySelector('.avg').style.left = 'calc(' + (25 * categories[i].focus.ci[1] - 25) + '% - 8px)';

        subcatSliders[1].querySelector('.score').style.left = 'calc(' + (25 * categories[i].focus.ra[0] - 25) + '% - 12px)';
        subcatSliders[1].querySelector('.score').textContent = categories[i].focus.ra[0].toPrecision(2);
        subcatSliders[1].querySelector('.avg').style.left = 'calc(' + (25 * categories[i].focus.ra[1] - 25) + '% - 8px)';

        subcatSliders[2].querySelector('.score').style.left = 'calc(' + (25 * categories[i].focus.jo[0] - 25) + '% - 12px)';
        subcatSliders[2].querySelector('.score').textContent = categories[i].focus.jo[0].toPrecision(2);
        subcatSliders[2].querySelector('.avg').style.left = 'calc(' + (25 * categories[i].focus.jo[1] - 25) + '% - 8px)';
    });


    // var waitForCharts = setInterval(function () {
    // 	if (Highcharts.charts[0].hasRendered) {

    // 		clearInterval(waitForCharts)
    // 	}
    // }, 100);

    // Color tables on right column of pages 4 - 6

    var prioList = document.querySelectorAll('.score-list .item');

    for (var i = 0; i < prioList.length; i++) {
        let score = parseInt(prioList[i].children[1].innerHTML.slice(0, -1));

        if (score < 12.5) {
            prioList[i].children[1].classList.add('color-1');
        } else if (12.5 <= score && score < 25) {
            prioList[i].children[1].classList.add('color-2');
        } else if (25 <= score && score < 37.5) {
            prioList[i].children[1].classList.add('color-3');
        } else if (37.5 <= score && score < 50) {
            prioList[i].children[1].classList.add('color-4');
        } else if (50 <= score && score < 62.5) {
            prioList[i].children[1].classList.add('color-5');
        } else if (62.5 <= score && score < 75) {
            prioList[i].children[1].classList.add('color-6');
        } else if (75 <= score && score < 87.5) {
            prioList[i].children[1].classList.add('color-7');
        } else if (87.5 <= score) {
            prioList[i].children[1].classList.add('color-8');
        }
    }

    for (var j = 0; j < prioList.length; j += 8) {
        var prioArray = [{ score: parseInt(prioList[j].children[1].innerHTML.slice(0, -1)), div: prioList[j], },
            { score: parseInt(prioList[j + 1].children[1].innerHTML.slice(0, -1)), div: prioList[j + 1] },
            { score: parseInt(prioList[j + 2].children[1].innerHTML.slice(0, -1)), div: prioList[j + 2] },
            { score: parseInt(prioList[j + 3].children[1].innerHTML.slice(0, -1)), div: prioList[j + 3] },
            { score: parseInt(prioList[j + 4].children[1].innerHTML.slice(0, -1)), div: prioList[j + 4] },
            { score: parseInt(prioList[j + 5].children[1].innerHTML.slice(0, -1)), div: prioList[j + 5] },
            { score: parseInt(prioList[j + 6].children[1].innerHTML.slice(0, -1)), div: prioList[j + 6] },
            { score: parseInt(prioList[j + 7].children[1].innerHTML.slice(0, -1)), div: prioList[j + 7] },
        ]

        prioArray = prioArray.sort((a, b) => a.score - b.score);

        for (var k = 0; k < 8; k++) {
            var parent = prioArray[0].div.parentElement
            parent.appendChild(prioArray[k].div);
            prioArray[k].div.children[0].innerHTML = (k + 1)
        }
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