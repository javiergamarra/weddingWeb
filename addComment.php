<?php

include("config.php");

$server = mysql_connect(SERVER, USER,PASSWORD);
$connection = mysql_select_db(DATABASE, $server);
$name = mysql_real_escape_string($_POST["name"]);
$comment = mysql_real_escape_string($_POST["description"]);
$email = mysql_real_escape_string($_POST["email"]);

$timestampInSeconds = $_SERVER['REQUEST_TIME'];
$mySqlDateTime= date("Y-m-d H:i:s", $timestampInSeconds);

//add new comment to database
mysql_query("INSERT INTO comentarios VALUES(' $comment ',' $name ', ' $mySqlDateTime ', null,' $email ' )");

?>