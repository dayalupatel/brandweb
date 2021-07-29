<?php
//get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$from = 'dayalupatel10@gmail.com';
$to = "dayalupatel98@gmail.com";

$subject = "New Mail from Brandweb";

$email_body = "Name : $name.\n". 
                "Email = $email.\n".
                   "Message = $message.\n";

$headers = "From: $from \r\n";
$headers .= "Reply-to: $email \r\n";

mail($to,$subject,$email_body,$headers); or die("Error!");
echo "Thank You!";

?>
