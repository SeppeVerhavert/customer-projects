document.addEventListener("click", function (e) {
    if (e.target.classList == "text-download" || e.target.classList == "text-download-link") {

 

       var lcOrigin = document.referrer;

        window.top.postMessage(JSON.stringify({ 'newMessage': document.getElementById("all-results-id").innerHTML }), lcOrigin);

 

    }
});