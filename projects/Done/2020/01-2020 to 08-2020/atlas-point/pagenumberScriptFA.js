document.addEventListener('DOMContentLoaded', function() {
    var pages = document.getElementsByClassName('page');
    var headers = document.getElementsByClassName('page-heading-container');
    for (var i = 0; i < pages.length; i++) {
        var page = pages.item(i);
        var header = headers[i];
        var pageNr = i + 2;
        var pageNumberElement = document.createElement('div');
        pageNumberElement.className = "header-page-number";

        pageNumberElement.innerHTML = pageNr;
        header.appendChild(pageNumberElement);
        console.log("page " + i);
    }
})