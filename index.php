<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Ruben y Cristina</title>
<link href="css/base.css" rel="stylesheet" />
<link href="css/themeAzul.css" class="theme" rel="stylesheet" />
<link href="css/themeRojo.css" class="theme" rel="stylesheet" />
<link href="css/themeMorado.css" class="theme" rel="stylesheet" />
<script type="text/javascript">

document.createElement('header');
document.createElement('hgroup');
document.createElement('nav');
document.createElement('menu');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('footer');

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
<p>Deseos...</p>
</header>
<p>Para confirmar vuestra asistencia o cualquier duda estamos en
rubencab69@hotmail.com o criscasa81@gmail.com</p>

<div id="comments"></div>
<div id="leaveComment">
<div class="row"><label>Tu nombre:</label><input type="text"></div>
<div class="row"><label>Tu email:</label><input type="text"></div>
<div class="row"><label>Tu deseo:</label><textarea cols="10" rows="5"></textarea></div>
<button id="add">Incluir deseo</button>
</div>
<script type="text/javascript" src="js/jquery-1.6.js"></script> <script
	src="js/wishes.js" type="text/javascript">
					
		</script> </script> <a onclick="javascript:slideshow.reset(event)"
	href="">Volver</a> </section></div>

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
<div class="slide current" id="landing-slide"
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
