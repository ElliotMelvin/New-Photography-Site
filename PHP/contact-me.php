<?php
if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' ) {

    require '../includes/class.phpmailer.php';

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPSecure = 'tls';
    $mail->Host = "smtp-mail.outlook.com"; // SMTP server example
    $mail->SMTPDebug = 0; // enables SMTP debug information (for testing)
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->Port = 587; // set the SMTP port for the GMAIL server
    $mail->Username = "elliot221@live.co.uk"; // SMTP account username example
    $mail->Password = ""; // SMTP account password example
    

    $to = "elliot221@live.co.uk";
    $name = $_POST[ 'name' ];
    $subject = $_POST[ 'subject' ];
    $email = $_POST[ 'email' ];
    $message = $_POST[ 'message' ];
//    $body = 'From: ' . $name . ' <br> E-Mail: ' . $email . '<br> Subject: ' . $subject . '<br><br> Message: <br>' . $message;
    $body = '<b>Name: </b>' . $name . nl2br() . '<b>Email: </b>' . $email . $subject . $message;
    
    // Recipients
    $mail->setFrom('elliot221@live.co.uk', 'Elliot Photography');
    $mail->addAddress($to, $name);     // Add a recipient
//    $mail->addReplyTo('info@example.com', 'Information');
//    $mail->addCC('cc@example.com');
//    $mail->addBCC('bcc@example.com');

    //Attachments
//    $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $body;
//    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';

    //    echo 'The message is: ' . $message;


    //	$headers = "From: elliot@;
    //	$msg = "You have received an e-mail from {$name} \n\n {$message}";
    //	
    //	mail($to, $subject, $msg);
    //    
    //    header("Location: http://elliotphotography.x10.mx/thank-you.html");
} else {
    echo 'error';
}