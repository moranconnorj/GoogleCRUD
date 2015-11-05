var table = document.getElementById("myTable");
var tbody = document.getElementsByTagName("tr");
$variable = [];
// var table = document.createElement("table");
var url = "https://spreadsheets.google.com/feeds/cells/1sYkU_8raV14Bqm33dWcaksC3iMm73DH9OMsooxSMItM/od6/public/values?alt=json";
$.getJSON( url, function( data ) {
    assignVariable(data);
})

function assignVariable(data){
    $variable = data
    declareVars();
}

var declareVars = function() {
    //console.log($variable);
    for (var i = 0; i < $variable.feed.entry.length; i++){
        var row = $variable.feed.entry[i].gs$cell.row;
        var col = $variable.feed.entry[i].gs$cell.col;
        var txt = $variable.feed.entry[i].gs$cell.$t;
        //console.log(row, col, txt);
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = txt;
    }
}

//console.log(table.childNodes)
console.log($variable)


