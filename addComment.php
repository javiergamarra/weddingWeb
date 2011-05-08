<?php

$link = mysql_connect("localhost", "root");
mysql_select_db("rubenycristina", $link);

$email = mysql_real_escape_string($_POST["email"]);
$description = mysql_real_escape_string($_POST["description"]);

mysql_query("INSERT INTO comentarios VALUES(null,' $description ',' $email ', 01/01/2010 )");

?>