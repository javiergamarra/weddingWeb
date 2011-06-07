function createPanel(id, element) {
	var panelDiv = document.getElementById(id);
	var parent = document.getElementById("web");
	if (panelDiv != null) {
		parent.removeChild(panelDiv);
	}
	makePanel(id, 'web', element);
	showPanel(true, id);
}

function makePanel(panelId, fatherId, element) {
	//FIXME all this code makes me cry
	var panelDiv = document.createElement('div');
	panelDiv.setAttribute('id', panelId);
	panelDiv.appendChild(createCloseImage());
	if (panelId != "map") {
		panelDiv.className = "panel " + element.className;
		panelDiv.appendChild(createContent(element));
	} else {
		var panelDiv2 = document.createElement('div');
		panelDiv2.setAttribute('id', "map_canvas");
		panelDiv2.style.width = "700px";
		panelDiv2.style.height = "600px";
		panelDiv.appendChild(panelDiv2);
		panelDiv.className = "panel";
	}
	document.getElementById(fatherId).appendChild(panelDiv);
};

function createCloseImage() {
	var closeImage = document.createElement('img');
	closeImage.title = "Cerrar panel";
	closeImage.alt = "Cerrar panel";
	closeImage.src = "./images/close.png";
	closeImage.onclick = closePanel;
	var closeDiv = document.createElement('div');
	closeDiv.className = "textAlign";
	closeDiv.appendChild(closeImage);
	return closeDiv;
}

function closePanel() {
	showPanel(false, this.parentNode.parentNode.id);
}

function createContent(element) {
	var largerImage = document.createElement('img');
	largerImage.title = element.title;
	largerImage.alt = element.alt;
	largerImage.src = element.src;
	largerImage.className = "panelImage";
	var contentDiv = document.createElement('div');
	contentDiv.appendChild(largerImage);
	return contentDiv;
}

function showPanel(show, panelId) {
	var panelDiv = document.getElementById(panelId);
	if (!show) {
		panelDiv.style.visibility = "hidden";
	} else if (panelDiv.style.visibility != "visible") {
		panelDiv.style.visibility = "visible";
	}
};

