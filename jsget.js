var table = $('table')
var tabrow = document.getElementsByTagName('tr');
var url = "https://spreadsheets.google.com/feeds/cells/1sYkU_8raV14Bqm33dWcaksC3iMm73DH9OMsooxSMItM/od6/public/values?alt=json";

$.getJSON(url, function(data) {
    $variable = data
    forElements();
})

forElements = function() {
    for (var i = 0; i < $variable.feed.entry.length; i++){
        var row = $variable.feed.entry[i].gs$cell.row;
        var col = $variable.feed.entry[i].gs$cell.col;
        var txt = $variable.feed.entry[i].gs$cell.$t;
        createCell(row, col, txt)
    }
}

createCell = function(row, col, txt) {
    if (!tabrow[row-1]) {
        var createrow = table[0].insertRow(-1); //insertRow could be (row-1) for exact index instead of last position
        var cell = createrow.insertCell(-1);
        cell.setAttribute("id", row + "-" + col);
        cell.innerHTML = txt;
    } else {
        var newcell = tabrow[row-1].insertCell(-1); //insertCell could be (col-1) for exact index instead of last position
        newcell.innerHTML = txt;
        newcell.setAttribute("id", row + "-" + col);
    }
}