document.addEventListener('DOMContentLoaded', function() {
    var pages = document.getElementsByClassName('page');
    var headers = document.getElementsByClassName('footer-container');
    for (var i = 0; i < pages.length; i++) {
        var page = pages.item(i);
        var header = headers[0];
        var pageNr = i + 2;
        var pageNumberElement = document.createElement('div');
        pageNumberElement.className = "bottom-page-number";

        pageNumberElement.innerHTML = pageNr;
        header.appendChild(pageNumberElement);
        console.log("page " + i);
    }
})