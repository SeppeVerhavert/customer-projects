document.addEventListener('DOMContentLoaded', function() {
    var tableCells = document.getElementsByTagName('TD');

    for (var i = 4; i < tableCells.length; i++) {
        var str = tableCells[i].innerHTML;
        var patt = new RegExp(/\$\d+/, 'i')
        var res = patt.test(str);

        if (res) {
            var number = str.slice(1);
            let newNumber = CommaFormatted(number);
            tableCells[i].innerHTML = '$' + newNumber;
        }
    }
});

function CommaFormatted(amount) {
    var delimiter = ",";
    var a = amount.split('.', 2)
    var d = a[1];
    var i = parseInt(a[0]);
    if (isNaN(i)) { return ''; }
    var minus = '';
    if (i < 0) { minus = '-'; }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while (n.length > 3) {
        var nn = n.substr(n.length - 3);
        a.unshift(nn);
        n = n.substr(0, n.length - 3);
    }
    if (n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    if (d === undefined) { amount = n; } else { amount = n + '.' + d; }
    amount = minus + amount;
    return amount;
}