$(document).ready(function () {

    $("#calcBtn").on("click", function () {
        $("#hoursError").hide();

        const hoursRaw = $("#hoursInput").val();
        const hours = parseFloat(hoursRaw);

        if (isNaN(hours) || hours <= 0) {
            $("#totalOutput").val("");
            $("#hoursError").show();
            return;
        }

        const total = hours * hourlyRate;
        $("#totalOutput").val(`$${total.toFixed(2)}`);
    });

});
