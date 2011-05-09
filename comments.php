<?php

$server = mysql_connect("localhost", "root");
$connection = mysql_select_db("rubenycristina", $server);
$query = mysql_query("SELECT * FROM comentarios order by date desc");

for ($x = 0, $numrows = mysql_num_rows($query); $x < $numrows; $x++) {
	$row = mysql_fetch_assoc($query);
	$comments[$x] = array("name" => $row["name"], "description" => $row["description"], "email" => $row["email"]);
}

$response = $_GET["jsoncallback"] . "(" . json_encode($comments) . ")";
echo $response;

?>