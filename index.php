<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Ruben y Cristina</title>
<link href="css/baseTheme.css" rel="stylesheet" />
<link href="css/blueTheme.css" class="theme" rel="stylesheet" />
<link href="css/redTheme.css" class="theme" rel="stylesheet" />
<link href="css/coolTheme.css" class="theme" rel="stylesheet" />
<script src="js/analytics.js"></script>
<script src="js/iexplore.js"></script>
</head>
<body>
<div class="presentation" id="web">
<div class="slides">

<div class="slide down-arrow" id="down-slide"><section> <header>
<p>Deseos...</p>
</header>
<p>Para confirmar vuestra asistencia o cualquier duda estamos en
rubencab69@hotmail.com o criscasa81@gmail.com</p>
<div id="comments"></div>
<div id="leaveComment">
<div class="row"><label>Tu nombre:</label><input type="text"></div>
<div class="row"><label>Tu email:</label><input id="email" type="text"></div>
<div class="row"><label>Tu deseo:</label><textarea cols="10" rows="5"></textarea></div>
<button id="add">Incluir deseo</button>
</div>
<a href="">Volver</a> </section></div>

<div class="slide left-arrow" id="left-slide"><section> <header>
<p>Comeremos en el Hotel la Vega</p>
</header>
<div class="figure"><img src="images/HotelLaVega.jpg" alt="Hotel La Vega en Valladolid"/> <span> Este es
el hotel La Vega, la fachada frontal </span></div>
<div class="figure"><img src="images/HotelMapaIglesia.jpg" class="maps" alt="Ruta de la Iglesia de la Vera Cruz al Hotel La Vega"/><span>
En este mapa se muestra el camino para ir de la iglesia al hotel </span></div>
<input id="hotelAddress" value="desde Valladolid..."> <input
	type="button" value="Buscar!" onclick="calculateRouteToHotel()">
<p style="clear: both">Si padec&eacute;is alguna alergia alimentaria,
avisadnos</p>
<p>El hotel ofrece un precio especial en habitaciones para invitados.
Est&aacute; en la Carretera Salamanca, KM 131</p>
<a href="">Volver</a> </section></div>

<div class="slide current" id="landing-slide"><section>
<p class="title">&#161; NOS CASAMOS !</p>
<ul style="list-style-type: none; text-align: left; margin-top: -30px">
	<li>Seguro que quieres saber... <span class="arrows right-arrow">d&oacute;nde</span></li>
	<li>o en que... <span class="arrows left-arrow">restaurante</span></li>
	<li>o... <span class="arrows up-arrow">c&oacute;mo eramos</span></li>
	<li>e... <span class="arrows down-arrow">incluir un deseo</span></li>
</ul>
<div id="weddingDate">20 de Agosto de 2011</div>
<img style="margin-top: -20px" src="images/weddingFlowers.jpg" alt="Imagen de la boda de Ruben y Cristina"/> </section></div>

<div class="slide right-arrow" id="right-slide"><section> <header>
<p>Hemos elegido la Iglesia de la Santa Vera Cruz</p>
</header>
<div class="figure"><img src="images/ChurchVeraCruz.jpg" alt="Fachada de la Iglesia de la Vera Cruz"/> <span> Este
es el aspecto del exterior de la iglesia </span></div>
<div class="figure"><img src="images/ChurchVirgenVeraCruz.jpg" alt="Interior de la Iglesia"/> <span>
La Virgen de la Vera Cruz </span></div>
<div class="figure"><img src="images/ChurchMapaVeraCruz.jpg" alt="Mapa de la Avenida Salamanca a la Iglesia"
	class="maps" /> <span> En este mapa pod&eacute;is ver la
situaci&oacute;n de la iglesia con respecto a las dos entradas desde la
Avenida Salamanca </span></div>
<p style="clear: both">La iglesia dispone de un banco de alimentos por
lo que no permite tirar comida: arroz, legumbres...</p>
<p>Est&aacute; en la calle Plater&iacute;as, Valladolid. <input
	id="churchAddress" value="Villadangos del P&aacute;ramo">
<input type="button" value="Buscar!" onclick="calculateRouteToChurch()"></p>

<a href="">Volver</a> </section></div>

<div class="slide up-arrow" id="up-slide"><section><header>
<p>As&iacute; eramos</p>
</header>
<div class="figure"><img src="images/PicYoungCrisRuben.jpg" alt="Nuestra primera escapada"/> <span>
Nuestra primera escapada</span></div>
<div class="figure"><img src="images/PicYoungCris.jpg" alt="Cristina"/> <span>
Cristina hace 1 d&eacute;cada </span></div>
<div class="figure"><img src="images/PicBothTogether.jpg" alt="Juntos"/> <span> Los
dos juntos </span></div>
<div class="figure"><img src="images/PicYoungRuben.jpg" alt="Ruben"/> <span>
Rub&eacute;n hace 1 d&eacute;cada </span></div>
<div class="figure"><img src="images/PicComunionEnrique.jpg" alt="Ruben"/> <span>
De comuni&oacute;n </span></div>
<div class="figure"><img src="images/PicRubenGreyCar.jpg" alt="Ruben"/> <span>
Rub&eacute;n arreglando... </span></div>
<div><a href="">Volver</a></div>
</section></div>

</div>
</div>
<script src="js/jquery-1.6.js"></script>
<script src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script src="js/map.js"></script>
<script src="js/panel.js"></script>
<script src="js/utilities.js"></script>
<script src="js/slide.js"></script>
<script src="js/wishes.js"></script>
<script src="js/presentation.js"></script>

</body>
</html>
