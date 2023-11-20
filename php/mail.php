<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Empfänger-Email-Adresse
    $receiver = "lorenzo.hug@icloud.com";

    // Betreff der E-Mail
    $subject = "Neue Kontaktanfrage von " . $_POST["name"];

    // Nachricht
    $message = " name: " . $_POST["name"] . "\n";
    $message .= "e-mail: " . $_POST["email"] . "\n";
    $message .= "message: " . $_POST["message"];

    // E-Mail versenden
    mail($receiver, $subject, $message);

    header("Location: index.html");
    exit();
}
?>