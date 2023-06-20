document.addEventListener("DOMContentLoaded", function() {
    // Array to store the records
    var records = [];

    // Function to add a record
    function addRecord(name, age, grade) {
        var record = {
            name: name,
            age: age,
            grade: grade
        };
        records.push(record);
        displayRecords();
    }

    // Function to delete a record
    function deleteRecord(index) {
        records.splice(index, 1);
        displayRecords();
    }

    // Function to update a record field
    function updateRecordField(index, field, value) {
        var record = records[index];
        record[field] = value;
        displayRecords();
    }

    // Function to display the records in the table
    function displayRecords() {
        var tableBody = document.querySelector("#recordsTable tbody");
        tableBody.innerHTML = "";
        for (var i = 0; i < records.length; i++) {
            var record = records[i];
            var row = "<tr><td>" + record.name + "</td><td>" + record.age + "</td><td>" + record.grade + "</td><td class='actions'><button class='btn btn-primary btn-sm updateBtn' data-index='" + i + "'>Update</button> <button class='btn btn-danger btn-sm deleteBtn' data-index='" + i + "'>Delete</button></td></tr>";
            tableBody.innerHTML += row;
        }
    }

    // Form submission event
    var registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var grade = document.getElementById("grade").value;
        addRecord(name, age, grade);
        this.reset();
    });

    // Delete button click event
    document.addEventListener("click", function(event) {
        var target = event.target;
        if (target.classList.contains("deleteBtn")) {
            var index = target.getAttribute("data-index");
            deleteRecord(index);
        }
    });
});