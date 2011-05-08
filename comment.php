<?php
$link = mysql_connect("localhost", "root");
mysql_select_db("rubenycristina", $link);
$result = mysql_query("SELECT * from comentarios", $link);
$x = 1;
while ($row = mysql_fetch_array($result)) {
	$comments[$x] = array("email" => $row["email"], "description" => $row["description"]);
	$x = $x++;
	echo $row;
}

$response = $_GET["jsoncallback"] . "(" . json_encode($comments) . ")";
echo $response;

?>