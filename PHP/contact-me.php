<?php
if (isset($_POST['submit'])){
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];
	  
	$mailTo = "elliot221@live.co.uk";
	$headers = "From: ElliotP".$mailfrom;
	$txt = "You have received an e-mail from ".$name.".\n\n".$message;
	
	mail($mailTo, $txt,$headers);
	header("Location: index.php?mailsend");
}
?>