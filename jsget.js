var table = $('table')
var tabrow = document.getElementsByTagName('tr');
var url = "https://spreadsheets.google.com/feeds/cells/1sYkU_8raV14Bqm33dWcaksC3iMm73DH9OMsooxSMItM/od6/public/values?alt=json";
var rowmax = 0;
var colmax = 0;

// $.getJSON(url, function(data) {  //need actual model format
//     $variable = data
//     forElements();
// })

var test = {1:{1:'num', 2:'2', 3:'3', 5:'4'}, 2:{1:'alpha', 2:'a', 3:'b'}, 4:{1:'hello', 2:'goodbye', 3:'adios'}}

// forElements = function() {
//     for (var i = 0; i < $variable.feed.entry.length; i++){
//         var row = $variable.feed.entry[i].gs$cell.row;
//         var col = $variable.feed.entry[i].gs$cell.col;
//         var txt = $variable.feed.entry[i].gs$cell.$t;
//         createCell(row, col, txt)
//     }
// }

getMax = function() {
    for (var i = 0;i < Object.keys(test).length; i++){
        if(Object.keys(test)[i] > colmax) {
            colmax = Object.keys(test)[i]
        }
    }
    for (var key in test){
        var values = test[key]
        for (var j = 0; j < Object.keys(values).length; j++) {
            if(Object.keys(values)[j] > rowmax) {
                rowmax = Object.keys(values)[j]
            }
        }
    }
}

getMax()

createTable = function() {
    // table = {};
    for (var r = 1; r <= rowmax; r++) {
        var tr = table[0].insertRow(-1);
        for (var c = 1; c <= colmax; c++) {
            var cell = tr.insertCell(-1);
            cell.setAttribute("id", r + ',' + c);
            if (test[c] && test[c][r]) {
                cell.innerHTML = test[c][r];
            }
            else {
                cell.innerHTML = '!';
            }
        }
    }
}

createTable()

addNewRow = function() {
    var tr = table[0].insertRow(rowmax);
    for (var c = 1; c <= colmax; c++) {
        var cell = tr.insertCell(-1);
        cell.setAttribute("id", (c));
        cell.innerHTML = '<input type="text">'
    }
}

$(document).click(function( event ) {
    if ($(event.target).is('input[value=Enter]')) {
        addNewRow()
    }
})
//     else if ($(event.target).is('input[value=Edit]')) {
//         editFunc()
//     }
//     else if ($(event.target).is('input[value=Delete]')) {
//         deleteFunc()
//     }
// })


// console.log(Object.keys(test).length);
//console.log((Object.values(test)))

// createCell = function(row, col, txt) {
//     //todo: implement actual model method and refactor to allow for gaps in columns/rows
//     if (!tabrow[row-1]) {
//         var createrow = table[0].insertRow(-1); //insertRow could be (row-1) for exact index instead of last position
//         var cell = createrow.insertCell(-1);
//         cell.setAttribute("id", row + "-" + col);
//         cell.setAttribute("class", "no-select")
//         cell.innerHTML = txt;
//     } else {
//         var newcell = tabrow[row-1].insertCell(-1); //insertCell could be (col-1) for exact index instead of last position
//         newcell.innerHTML = txt;
//         newcell.setAttribute("id", row + "-" + col);
//         newcell.setAttribute("class", "no-select")
//     }
// }

// $(document).click(function( event ) {
//     if ($(event.target).is('input[value=Enter]')) {
//         alert('enter')
//     }
//     else if ($(event.target).is('input[value=Edit]')) {
//         editFunc()
//     }
//     else if ($(event.target).is('input[value=Delete]')) {
//         deleteFunc()
//     }
// })

// editFunc = function () {
//     var placehold
//     $(document).click(function( event ) {
//     if ($(event.target).is('TD') && event.target.className == 'no-select') {
//         placehold = event.target.firstChild.nodeValue
//         event.target.innerHTML = '<input type="text" placeholder="'+ placehold + '">'
//         event.target.className = 'select'
//     }
//     else if ($(event.target).is('TD') && event.target.className == 'select') {
//         event.target.innerHTML = placehold //todo: fix or remove placeholder edit
//         event.target.className = 'no-select'
//     }
//     })
// }

// deleteFunc = function () { 
//     $(document).click(function( event ) {
//         if ($(event.target).is('TD')) {
//             //console.log(event.target.innerHTML)
//             if (event.target.className == "select") {
//                 event.target.className = "no-select";
//             }
//             else if (event.target.className == "no-select") {
//                 event.target.className = "select";
//             }
//         }
//     })
// }