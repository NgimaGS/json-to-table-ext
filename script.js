document
  .getElementById("changeTableButton")
  .addEventListener("click", changeToTable);

function changeToTable() {
  var data = document.getElementById("input-data").value;
  try {
    var jsonData = JSON.parse(data);

    var cols = [];

    for (var i = 0; i < jsonData.length; i++) {
      for (var k in jsonData[i]) {
        if (cols.indexOf(k) === -1) {
          cols.push(k);
        }
      }
    }

    var table = document.createElement("table");
    var tr = table.insertRow(-1);

    for (var i = 0; i < cols.length; i++) {
      var theader = document.createElement("th");
      theader.innerHTML = cols[i];
      tr.appendChild(theader);
    }

    for (var i = 0; i < jsonData.length; i++) {
      trow = table.insertRow(-1);
      for (var j = 0; j < cols.length; j++) {
        var cell = trow.insertCell(-1);
        cell.innerHTML = jsonData[i][cols[j]] ? jsonData[i][cols[j]] : "-";
      }
    }

    var el = document.getElementById("table");
    el.innerHTML = "";
    el.appendChild(table);
  } catch (e) {
    window.alert("Please provide JSON Data");
  }
}
