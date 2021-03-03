/* Homework 6
Exercise 4 JavaScript code
*/
console.log("Mihir's output from Homework 6 Exercise 4");
let div = document.getElementById("output");
let table = document.createElement("table");
let body1= document.createElement("body1");
for (i=1; i <= 12; i++) {
    let row = document.createElement ("tr");
    if (i % 4 == 0) {
        row.className = "divBy4";
    }
    let data = document.createElement("td");
    let text = document.createTextNode(i);

    data.appendChild(text);
    row.appendChild(data);
    body1.appendChild(row);
}
table.appendChild(body1);
div.appendChild(table);
table.setAttribute("border", "1");