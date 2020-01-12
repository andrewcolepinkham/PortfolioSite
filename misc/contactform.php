<?php

if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $skills = $_POST['subject'];
  $mailFrom = $_POST['email'];
  $message = $_POST['message'];

  $MAILTO = "a_pinkham@coloradocollege.edu";
  $headers = "From: ".$mailFrom;
  $txt = "You have recieved an e-mail from ".$name.".\n\n".$message;

  mail($MAILTO, $subject, $txt, $headers);
  header("Location: index.php?mailsend");
}
