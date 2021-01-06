document.addEventListener("DOMContentLoaded", function() {
    var pages = document.getElementsByClassName("page-container");

    for (var i = 0; i < pages.length + 1; i++) {
        var page = pages.item(i);
        var pageNr = i + 1;
        var footer = document.createElement("div");
        footer.className = "footer-content";
        console.log(i);
        if (i > 0) {
            footer.innerHTML = "<div>Your Pharmacy Guide - Results</div><div>" + i + "</div>";
            page.insertBefore(footer, page.firstChild);
        }
    }
});