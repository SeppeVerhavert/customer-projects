docReady(function() {
    let date = document.getElementById("response-date");
    let newDate = date.innerHTML.slice(0, -9);
    console.log(date, newDate);
    date.innerHTML = newDate;
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