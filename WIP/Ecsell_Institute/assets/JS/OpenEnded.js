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