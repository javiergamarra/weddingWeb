function createPanel(_element) {
	var id = 'imagePanel';
	var panelDiv = document.getElementById(id);
	var parent = document.getElementById("web");
	if (panelDiv != null) {
		parent.removeChild(panelDiv);
	}
	panelDiv = makePanel(id, 'web', _element);
	showPanel(true, id);
}


function makePanel(_panelId, _fatherId, _element) {
	var panelDiv = document.createElement('div');
	panelDiv.setAttribute('id', _panelId);
	panelDiv.className = "panel";
	panelDiv.appendChild(createCloseImage());
	panelDiv.appendChild(createContent(_element));
	document.getElementById(_fatherId).appendChild(panelDiv);
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

function createContent(_element) {
	var largerImage = document.createElement('img');
	largerImage.title = _element.title;
	largerImage.alt = _element.alt;
	largerImage.src = _element.src;
	largerImage.className = "panelImage";
	var contentDiv = document.createElement('div');
	contentDiv.appendChild(largerImage);
	return contentDiv;
}

function showPanel(_show, _panelId) {
	var panelDiv = document.getElementById(_panelId);
	if (!_show) {
		panelDiv.style.visibility = "hidden";
	} else if (panelDiv.style.visibility != "visible") {
		panelDiv.style.visibility = "visible";
	}
};

