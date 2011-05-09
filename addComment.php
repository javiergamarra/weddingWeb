<?php

$server = mysql_connect("localhost", "dscgfqdw_ruben", "I1l4f8a");
$connection = mysql_select_db("dscgfqdw_rubenycristina", $server);

$name = mysql_real_escape_string($_POST["name"]);
$comment = mysql_real_escape_string($_POST["description"]);
$email = mysql_real_escape_string($_POST["email"]);

$timestampInSeconds = $_SERVER['REQUEST_TIME'];
$mySqlDateTime= date("Y-m-d H:i:s", $timestampInSeconds);

//add new comment to database
mysql_query("INSERT INTO comentarios VALUES(' $comment ',' $name ', ' $mySqlDateTime ', null,' $email ' )");

?>