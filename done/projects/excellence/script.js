document.addEventListener('DOMContentLoaded', function() {
    let widget = document.getElementById("widget_16");
    let tr = widget.children[1].children[1].children[0];
    for (let i = 0; i < tr.children.length; i++) {
        let innerText = tr.children[i].innerHTML.split('•');
        let newText = [];
        if (!innerText[0].length > 0) {
            innerText.shift();
        }
        for (let j = 0; j < innerText.length; j++) {
            if (j === 0) {
                let breakText = "• " + innerText[j];
                newText.push(breakText);
            } else {
                let breakText = "<br><br>" + "• " + innerText[j];
                newText.push(breakText);
            }
        }
        tr.children[i].innerHTML = (newText.join(""));
        tr.children[i].style = "vertical-align: top;";
    }
});