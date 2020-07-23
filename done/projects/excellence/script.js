// document.addEventListener('DOMContentLoaded', function() {
let widget = document.getElementById("widget_16");
let table = widget.children[1].children[1];

for (let i = table.children.length - 1; i > 0; i--) {
    if (table.children[i].innerHTML === "<td></td> <td></td>") {
        table.deleteRow(i);
    }
}

for (let i = 0; i < table.children.length; i++) {
    let tr = table.children[i];
    for (let j = 0; j < tr.children.length; j++) {
        const re = /\r?\n/
        let innerText = tr.children[j].innerHTML.split(re);
        let newText = [];
        for (let j = 0; j < innerText.length; j++) {
            if (innerText[j], /\W/.test(innerText[j][0])) {
                innerText[j].replace(/\W/g, '');
                console.log(innerText[j]);
            }
            let breakText = innerText[j] + "<br><br>";
            newText.push(breakText);
        }
        tr.children[j].innerHTML = (newText.join(""));
        tr.children[j].style = "vertical-align: top;";
    };
}
// });