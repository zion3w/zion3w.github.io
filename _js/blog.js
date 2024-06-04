(function () {

	/* hide reapeated image in article*/
	if(qs('.article_image img')){
		var full_img_link = qs('.article_image img').getAttribute("src");
		var art_body_images = _all('#articlebody img');
		for (var i = 0; i < art_body_images.length; i++) {
			if(art_body_images[i].getAttribute("src")===full_img_link){
				art_body_images[i].className = 'dn';
			}
		}
	}
	/* hide reapeated image in article /z*/

	/* set https on http iframes */
	if(qs('#articlebody iframe')){
		var iframes = _all('#articlebody iframe');
		// var iframe_link = qs('iframe').getAttribute('src');
		var iframe_src;
		for (var i0 = 0; i0 < iframes.length; i0++) {
			iframe_src = iframes[i0].getAttribute("src");
			iframes[i0].setAttribute('allowfullscreen', '');
			if(iframe_src.substring(0,5)!=='https'){
				iframe_src = iframe_src.replace('http','https');
			}
			if(iframe_src.indexOf('?') !== -1){
				iframes[i0].setAttribute('src', iframe_src + '&rel=0');
			} else {
				iframes[i0].setAttribute('src', iframe_src + '?rel=0');
			}
		}

	}
	/* set https on http iframes /z*/


	/**************** fullscreenmode */
	function toggleElemFullScreen() {
		if ( !document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
			if (this.requestFullscreen) {
				this.requestFullscreen();
			} else if (this.msRequestFullscreen) {
				this.msRequestFullscreen();
			} else if (this.mozRequestFullScreen) {
				this.mozRequestFullScreen();
			} else if (this.webkitRequestFullscreen) {
				this.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
		}
	}
	/**************** fullscreenmode END */
	if(qs('.full_article img')){
		var article_images = _all('.full_article img');
		for (var i1 = 0, b1=article_images.length; i1 < b1; i1++) {
			article_images[i1].addEventListener('click', toggleElemFullScreen);
		}
	}

}());

/*ajax native joomla voting*/
var vote_star = _all('.vote_star');

for (var i = 0, b=vote_star.length; i < b; i++) {
	vote_star[i].addEventListener('click', articleVoteing);
}

function articleVoteing(event) {
	event.preventDefault();

	var vote_num = this.getAttribute("data-vote");

	var formdata = new FormData();
	formdata.append('user_rating', vote_num);

	var form_id ='.content_vote';

	for (var i2 = 0, inL = _all(form_id+' input[type="hidden"]').length; inL > i2; i2++ ) {
		formdata.append(_all(form_id+' input[type="hidden"]')[i2].name, _all(form_id+' input[type="hidden"]')[i2].value);
	}

	var ajax = new XMLHttpRequest();
	var article_url = qs(form_id+' [name="url"]').value;
	ajax.open('POST', article_url);

	ajax.onreadystatechange = function () {

		if (ajax.readyState == 4 && ajax.status == 200) {

			var htmlString = ajax.responseText,
			parser = new DOMParser(),
			doc = parser.parseFromString(htmlString, "text/html");
			addCL('has_vote', '#art-vote');
			qs('#response-vote').innerHTML = doc.querySelector("#art-vote .voting_stars").innerHTML;
			qs('#response-text').innerHTML = doc.querySelector("#system-message-container .sys_message").innerText;

		}else {
			qs('#response-vote').innerHTML = 'Ошибка';
		}
	}

	ajax.send(formdata);

}

/*ajax native joomla voting*/

