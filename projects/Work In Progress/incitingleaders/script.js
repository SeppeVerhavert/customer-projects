docReady(function() {
    var group_labels = document.querySelectorAll('#Group_Percentage_Labels .data-group .category-labels #gtext tspan');
    var value_labels = document.querySelectorAll('#Values_Labels .data-group .category-labels #gtext tspan');

    for (var i = 0; i < group_labels.length; i++) {
        var score = group_labels[i].innerHTML.slice(0, (group_labels[i].innerHTML.length - 1));
        group_labels[i].innerHTML = (Math.round((score / 20) * 10) / 10);
    }
    for (var j = 0; j < value_labels.length; j++) {
        var score = value_labels[j].innerHTML
        value_labels[j].innerHTML = (Math.round((score / 20) * 10) / 10);
    }
});


function docReady(fn) {
    // see if DOM is already available
    console.log("pretimeout");

    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);

    } else {
        document.addEventListener("DOMContentLoaded", fn, false);

        window.addEventListener('load', (event) => {
            console.log('DOM fully loaded and parsed');
        });
    }
}
è