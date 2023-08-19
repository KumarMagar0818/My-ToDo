
function addRow(tableID)
{
    // Get a reference to the table
    let tableRef = document.getElementById("my-table");

    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);

    // Insert a cell in the row at index 0
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);

    // enter value in cell 
    let newText = document.getElementById("myToDo").value;
    newCell1.innerHTML = newRow.rowIndex;
    newCell2.innerHTML = newText;
    newCell2.setAttribute("colspan", "2");
    let btn = document.createElement("BUTTON")
    btn.textContent = "pending"
    // Append a btn node to the cell
    newCell3.appendChild(btn);
    //add style to btn
    newCell3.setAttribute("text-align", "center")
    btn.setAttribute("class", "btn btn-primary")
    btn.addEventListener('click', btnFun = () =>
    {
        {
            if (confirm("are your sure work is done?")) {
                btn.setAttribute("class", "btn-success")
                btn.textContent = "Done"
            } else {
                btn.setAttribute("class", "btn-danger")
                btn.textContent = "pending"


            }

        }
    })
}
