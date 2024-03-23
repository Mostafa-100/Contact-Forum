<?php

$name = filter_input(INPUT_POST, "name");
$email = filter_input(INPUT_POST, "email");
$phone = filter_input(INPUT_POST, "phone");
$website = filter_input(INPUT_POST, "website");
$message = filter_input(INPUT_POST, "message");

if(empty($email) || empty($message)) {
    echo "Email and message field is required!";
} else if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Enter validate email";
} else {
    $receiver = "goman1800@gmail.com";
    $subject = "From: $name <$email>";
    $body = $message;

    if(@mail($receiver, $subject, $body)) {
        echo "Your message has been sent";
    } else {
        echo "Sorry, failed to send your message";
    }
}