<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "lorenzo.hug@icloud.com";
    $messageBody = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    mail($to, $subject, $messageBody, $headers);

    header("Location: /index.html");
    exit();
}

?>