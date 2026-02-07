// Run this code once the page has fully loaded
$(document).ready(function () {

    // When the user clicks the Calculate button
    $("#calcBtn").on("click", function () {

        // Hide any previous validation error message
        $("#hoursError").hide();

        // Get the number of hours entered by the user
        const hoursRaw = $("#hoursInput").val();
        const hours = parseFloat(hoursRaw);

        // Validate that the input is a positive number
        if (isNaN(hours) || hours <= 0) {
            $("#totalOutput").val("");
            $("#hoursError").show();
            return;
        }

        // Calculate the total tutoring cost
        const total = hours * hourlyRate;

        // Display the total cost formatted as currency
        $("#totalOutput").val(`$${total.toFixed(2)}`);
    });

});
