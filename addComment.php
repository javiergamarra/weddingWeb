<?php

$server = mysql_connect("localhost", "root", "");
$connection = mysql_select_db("rubenycristina", $server);

$name = mysql_real_escape_string($_POST["name"]);
$comment = mysql_real_escape_string($_POST["description"]);
$email = mysql_real_escape_string($_POST["email"]);

//add new comment to database
mysql_query("INSERT INTO comentarios VALUES(null,' $comment ', 01/01/2010, ' $name ',' $email ' )");

?>