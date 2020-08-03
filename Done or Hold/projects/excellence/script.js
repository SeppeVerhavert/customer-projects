document.addEventListener('DOMContentLoaded', function() {
    let listofwidgets = [
        "widget_31",
        "widget_38",
        "widget_45",
        "widget_56",
        "widget_63",
        "widget_70",
        "widget_77",
        "widget_84",
        "widget_95",
        "widget_102",
        "widget_113",
        "widget_120"
    ];

    for (let h = 0; h < listofwidgets.length; h++) {
        let widget = document.getElementById(listofwidgets[h]);
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
                for (let k = 0; k < innerText.length; k++) {
                    if (innerText[k], /\W/.test(innerText[k][0])) {
                        innerText[k] = innerText[k].slice(1) + "<br><br>";
                        let breakText = innerText[k];
                        newText.push(breakText);
                    } else if (innerText[k] === "") {
                        let breakText = innerText[k];
                        newText.push(breakText);
                    } else {
                        let breakText = innerText[k] + "<br><br>";
                        newText.push(breakText);
                    }
                }
                tr.children[j].innerHTML = (newText.join(""));
                tr.children[j].style = "vertical-align: top; line-height: 1.5; font-size: 14px !important; width: 50%;";
            };
        }
    }
});