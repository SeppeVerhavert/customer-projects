document.addEventListener('DOMContentLoaded', function() {
    var scores = document.getElementsByClassName('score-result');

    for (var i = 0; i < scores.length; i++) {
        var str = scores[i].innerHTML;
        var number = Math.round(str.slice(0, -1));
        scores[i].innerHTML = number + "%";
    }

    var composedScores = document.getElementsByClassName('composed');

    for (var i = 0; i < composedScores.length; i++) {
        var str = composedScores[i].innerHTML;
        var number = Math.round(str.slice(0, -1));
        scores[i].innerHTML = number + "%";
    }
});