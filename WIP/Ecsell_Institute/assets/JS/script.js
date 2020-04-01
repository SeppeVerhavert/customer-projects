document.addEventListener('DOMContentLoaded', function() {
    var scores = document.getElementsByClassName('score-result');

    for (var i = 0; i < scores.length; i++) {
        var str = scores[i].innerHTML;
        var number = Math.round(str.slice(0, -1));
        scores[i].innerHTML = number + "%";
    }

    var results = document.getElementsByClassName('open-question result');

    for (var i = 0; i < results.length; i++) {
        var array = results[i].children[0].innerText.split(" | ");
        results[i].children[0].innerHTML = "";

        array.forEach(element => {
            var newLi = document.createElement('li');
            newLi.innerText = element;
            results[i].children[0].appendChild(newLi);
        });
    }
});