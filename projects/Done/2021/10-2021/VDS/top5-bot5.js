docReady(function() {

    // Declare variables
    const tableElementsT = document.querySelectorAll('#widget_14 tbody tr');
    const tableElementsB = document.querySelectorAll('#widget_16 tbody tr');
    var Array = [];
    var i = 0;
    var j = 0;

    // Create Top 5 and Bottom 5 Arrays
    while (i < 48) {
        var value = tableElementsT[i].children[2].innerText;
        Array.push(parseFloat(value.replace(/,/g, ".")).toFixed(1));
        i++;
    }

    var numArray = Array.sort(function(a, b) { return a - b; });
    var b5 = numArray.slice(0, 5);
    var t5 = numArray.slice(43);

    // Make all rows invisible
    while (j < 48) {
        tableElementsT[j].classList.add('invisible');
        tableElementsB[j].classList.add('invisible');
        j++;
    }

    // Make t5 & b5 rows visible
    for (var k = 0; k < 5; k++) {
        for (var l = 0; l < 47; l++) {
            if (t5[k] === tableElementsT[l].children[2].innerText && tableElementsT[l].classList.contains('invisible')) {
                tableElementsT[l].classList.remove('invisible');
                l = 48;
            }
        }
        for (var m = 0; m < 47; m++) {
            if (b5[k] === tableElementsB[m].children[2].innerText && tableElementsB[m].classList.contains('invisible')) {
                tableElementsB[m].classList.remove('invisible');
                m = 48;
            }
        }
    }
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