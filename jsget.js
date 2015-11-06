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
        cell.setAttribute("class", "no-select")
        cell.innerHTML = txt;
    } else {
        var newcell = tabrow[row-1].insertCell(-1); //insertCell could be (col-1) for exact index instead of last position
        newcell.innerHTML = txt;
        newcell.setAttribute("id", row + "-" + col);
        newcell.setAttribute("class", "no-select")
    }
}

$(document).click(function( event ) {
    if ($(event.target).is('input[value=Enter]')) {
        alert('enter')
    }
    else if ($(event.target).is('input[value=Edit]')) {
        editFunc()
    }
    else if ($(event.target).is('input[value=Delete]')) {
        deleteFunc()
    }
})

editFunc = function () {
    $(document).click(function( event ) {
    var placehold
    if ($(event.target).is('TD') && event.target.className == 'no-select') {
        var placehold = event.target.firstChild.nodeValue
        event.target.innerHTML = '<input type="text" placeholder="'+ placehold + '">'
        event.target.className = 'select'
    }
    else if ($(event.target).is('TD') && event.target.className == 'select') {
        event.target.innerHTML = placehold
        event.target.className = 'no-select'
    }
})
}

deleteFunc = function () { 
    $(document).click(function( event ) {
        if ($(event.target).is('TD')) {
            //console.log(event.target.innerHTML)
            if (event.target.className == "select") {
                event.target.className = "no-select";
            }
            else if (event.target.className == "no-select") {
                event.target.className = "select";
            }
        }
    })
}