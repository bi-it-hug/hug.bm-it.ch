<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $userInput = htmlspecialchars($_POST["userInput"]);
    $password = "4#&tGp7£r2%Q!8";

    if ($userInput == $password) {
        echo "Salatex";

    } else {
        echo "Password is incorrect";
    }

}