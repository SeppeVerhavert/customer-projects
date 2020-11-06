document.addEventListener('DOMContentLoaded', function() {
    var scores = document.getElementsByClassName('score-result');

    for (var i = 0; i < scores.length; i++) {
        var str = scores[i].innerHTML;
        var number = Math.round(str.slice(0, -1));
        scores[i].innerHTML = number + "%";
    }
});