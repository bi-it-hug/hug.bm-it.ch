<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $senderEmail = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $receiverEmail = "lorenzo.hug@icloud.com";
    $headers = "From: $senderEmail";

    mail($receiverEmail, $subject, $message, $headers);
    echo "Your E-Mail has been sent successfully!";

} else {
    echo "Error: ";
}