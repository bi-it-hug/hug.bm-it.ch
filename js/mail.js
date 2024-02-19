$(document).ready(function() {
    $("#mailForm").submit(function(event) {

        event.preventDefault()
        var formData = $(this).serialize()

        $.ajax({
            url: "mail.php",
            type: "POST",
            data: formData,
            success: function(response) {
                $("#mailMessage").html(response)
                fillPopup(3)
            },
            error: function(xhr, status, error) {
                $("#mailMessage").html(response + error)
            }
        });
    });
});