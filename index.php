<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Ruben y Cristina</title>
<link href="css/base.css" rel="stylesheet" />
<link href="css/theme1.css" class="theme" rel="stylesheet" />
<link href="css/theme2.css" class="theme" rel="stylesheet" />
<link href="css/theme9.css" class="theme" rel="stylesheet" />
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-20771666-3']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
<body>
<div class="presentation" id="web">
<div class="slides">
<div class="slide vertical" id="down-slide"
	onclick="javascript:slideshow.down()"><section> <header>
<p>Comentarios...</p>
</header>
<p>Para confirmar vuestra asistencia o cualquier duda estamos en
rubencab69@hotmail.com o criscasa81@gmail.com</p>

<div id="comments"></div>
<div id="leaveComment">
<div class="row"><label>Your Name:</label><input type="text"></div>
<div class="row"><label>Comment:</label><textarea cols="10" rows="5"></textarea></div>
<button id="add">Add</button>
</div>
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


?> <script type="text/javascript" src="js/jquery-1.6.js"></script> <script
	type="text/javascript">
			$(function() {
				//retrieve comments to display on page
				$.getJSON("comment.php?jsoncallback=?", function(data) {
					for (var x = 0; x < data.length; x++) {
						$("<hr>").appendTo("#comments");
					}
				});	
				
				//add click handler for button
				$("#add").click(function() {
				
					//define ajax config object
					var ajaxOpts = {
						type: "post",
						url: "addComment.php",
						data: "&email=" + $("#leaveComment").find("input").val() + "&description=" + $("#leaveComment").find("textarea").val(),
						success: function(data) {
							//create a container for the new comment
							var div = $("<div>").addClass("row").appendTo("#comments");
							//add author name and comment to container
							$("<label>").text($("#leaveComment").find("input").val()).appendTo(div);
							$("<div>").addClass("comment").text($("#leaveComment").find("textarea").val()).appendTo(div);
							//empty inputs
							$("#leaveComment").find("input").val("");
							$("#leaveComment").find("textarea").val("");
						}
					};
					
					$.ajax(ajaxOpts);
				
				});		
			});			
		</script> <a onclick="javascript:slideshow.reset(event)" href="">Volver</a>
</section></div>

<div class="slide" id="left-slide" onclick="javascript:slideshow.prev()"><section>
<header>
<p>Comeremos en el Hotel la Vega</p>
</header>
<div class="figure"><img src="images/HotelLaVega.jpg" class="image"
	onclick="javascript:createPanel(this);" style="height: 250px;" /> <span
	class="caption"> Este es el hotel La Vega, la fachada frontal </span></div>
<div class="figure"><img src="images/HotelMapaIglesia.jpg"
	onclick="javascript:createPanel(this);" style="height: 250px;"
	class="image" /><span class="caption"> En este mapa se muestra el
camino para ir de la iglesia al hotel </span></div>

<p style="clear: both">Si padec&eacute;is alguna alergia alimentaria,
avisadnos</p>
<p>El hotel ofrece un precio especial en habitaciones para invitados</p>
<a onclick="javascript:slideshow.reset(event)" href="">Volver</a> </section></div>
<div class="slide" id="landing-slide"
	onclick="javascript:slideshow.reset(event)"><section>
<p class="title">&#161; NOS CASAMOS !</p>

<ul style="list-style-type: none; text-align: left;">
	<li>Seguro que quieres saber... <span id="right-arrow" class="arrows">d&oacute;nde</span></li>
	<li>o en que... <span id="left-arrow" class="arrows">restaurante</span></li>
	<li>o... <span id="up-arrow" class="arrows">c&oacute;mo eramos</span></li>
</ul>
<div id="weddingDate">20 de Agosto de 2011</div>
<img style="margin-top: -20px" src="images/weddingFlowers.jpg" /> </section></div>

<div class="slide" id="right-slide"
	onclick="javascript:slideshow.next()"><section> <header>
<p>Hemos elegido la Iglesia de la Santa Vera Cruz</p>
</header>
<div class="figure"><img src="images/ChurchVeraCruz.jpg" class="image"
	onclick="javascript:createPanel(this);" /> <span class="caption"> Este
es el aspecto del exterior de la iglesia </span></div>
<div class="figure"><img src="images/ChurchVirgenVeraCruz.jpg"
	onclick="javascript:createPanel(this);" class="image" /> <span
	class="caption"> La Virgen de la Vera Cruz </span></div>
<div class="figure"><img src="images/ChurchMapaVeraCruz.jpg"
	class="image" onclick="javascript:createPanel(this);" /> <span
	class="caption"> En este mapa pod&eacute;is ver la situaci&oacute;n de
la iglesia con respecto a las dos entradas desde la Avenida Salamanca </span></div>
<p style="clear: both">La iglesia dispone de un banco de alimentos por
lo que no permite tirar comida: arroz, legumbres...</p>
<a onclick="javascript:slideshow.reset(event)" href="">Volver</a> </section></div>

<div class="slide vertical " onclick="javascript:slideshow.up()"
	id="up-slide"><section><header>
<p>As&iacute; eramos</p>
</header>
<div class="figure"><img src="images/PicYoungCris.jpg" class="image"
	onclick="javascript:createPanel(this);" /> <span class="caption">
Cristina hace 1 d&eacute;cada </span></div>
<div class="figure"><img src="images/PicYoungRuben.jpg" class="image"
	onclick="javascript:createPanel(this);" /> <span class="caption">
Rub&eacute;n hace 1 d&eacute;cada </span></div>
<div class="figure"><img src="images/PicYoungCrisRuben.jpg"
	onclick="javascript:createPanel(this);" class="image" /> <span
	class="caption"> Nuestra primera escapada</span></div>
<div class="figure"><img src="images/PicBothTogether.jpg"
	onclick="javascript:createPanel(this);" class="image" /> <span
	class="caption"> Los dos juntos </span></div>
<div class="figure"><img src="images/PicComunionEnrique.jpg"
	onclick="javascript:createPanel(this);" class="image" /> <span
	class="caption"> De comuni&oacute;n </span></div>
<div><a onclick="javascript:slideshow.reset(event)" href="">Volver</a></div>
</section></div>
<script language="JavaScript" src="js/panel.js"></script> <script
	language="JavaScript" src="js/utilities.js"></script> <script
	language="JavaScript" src="js/slide.js"></script> <script
	language="JavaScript" src="js/presentation.js"></script>

</body>
</html>
