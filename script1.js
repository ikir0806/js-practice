function createChessTable() {
    var table = document.createElement('table');
    for (var i = 0; i < 9; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 9; j++) {
            var td = document.createElement('td');
            if ((i % 2 == j % 2) && (i != 0) && (j != 0)) {
                td.style.backgroundColor = 'black';
                td.style.height = '50px';
                td.style.width = '50px';
            } else if ((i == 0) && (j != 0)) {
                numerationRow(j, td);
            } else if ((i != 0) && (j == 0)) {
                numerationColumn(i, td);
            }
            else if ((i % 2 != j % 2) && (i != 0) && (j != 0)) {
                td.style.backgroundColor = 'white';
                td.style.height = '50px';
                td.style.width = '50px';
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function numerationColumn(i, td) {
    switch (i) {
        case 1:
            td.innerText = "1";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 2:
            td.innerHTML = "2";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 3:
            td.innerHTML = "3";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 4:
            td.innerHTML = "4";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 5:
            td.innerHTML = "5";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 6:
            td.innerHTML = "6";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 7:
            td.innerHTML = "7";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 8:
            td.innerHTML = "8";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 9:
            td.innerHTML = "9";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
    }
    return td;
}

function numerationRow(j, td) {
    switch (j) {
        case 1:
            td.innerText = "A";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 2:
            td.innerHTML = "B";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 3:
            td.innerHTML = "C";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 4:
            td.innerHTML = "D";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 5:
            td.innerHTML = "E";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 6:
            td.innerHTML = "F";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 7:
            td.innerHTML = "G";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 8:
            td.innerHTML = "H";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
        case 9:
            td.innerHTML = "I";
            td.style.height = '50px';
            td.style.width = '50px';
            td.style.textAlign = 'center';
            break;
    }
    return td;
}

createChessTable();