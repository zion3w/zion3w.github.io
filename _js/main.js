/* добавить-убрать класс для любого id */
function changeCL(clTOadd, selectorToChangeClass) {
	var body = qs(selectorToChangeClass);
	var regex = new RegExp('\\b' + clTOadd + '\\b');
	if (body.className.search(regex) !== -1) {
		body.className = body.className.replace(new RegExp('(?:^|\\s)' + clTOadd + '(?:\\s|$)'), ' ');
	} else {
		body.className += ' ' + clTOadd;
	}
}
/* добавить-убрать класс для любого id END*/

/* добавить класс для любого id */
function addCL(clTOadd, idToChangeClass) {
	var body = qs(idToChangeClass);
	var regex = new RegExp('\\b' + clTOadd + '\\b');
	if (body.className.search(regex) == -1) {
		body.className += ' ' + clTOadd;
	}
}
/* добавить класс для любого id  END*/

/* убрать класс для любого id */
function removeCL(clTOadd, idToChangeClass) {
	var body = qs(idToChangeClass);
	var regex = new RegExp('\\b' + clTOadd + '\\b');
	if (body.className.search(regex) !== -1) {
		body.className = body.className.replace(new RegExp('(?:^|\\s)' + clTOadd + '(?:\\s|$)'), ' ');
	}
}
/* убрать класс для любого id  END*/
/************************** system-message-container */
if (qs('#system-message-container')) {
	qs('#system-message-container').addEventListener('click', hideClick);
}
function hideClick(){
	this.className = 'dn';
}
/************************** system-message-container /z*/
/**************** To top */
qs('#footer .upleft').addEventListener('click', toTopFunction);
qs('#footer .upbottom').addEventListener('click', toTopFunction);
function toTopFunction(){
	window.scrollTo(0,0);
}
/**************** To top END */

/*!
* headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
* Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
* License: MIT
*/
!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Headroom=b()}(this,function(){"use strict";function a(a){this.callback=a,this.ticking=!1}function b(a){return a&&"undefined"!=typeof window&&(a===window||a.nodeType)}function c(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var d,e,f=a||{};for(e=1;e<arguments.length;e++){var g=arguments[e]||{};for(d in g)"object"!=typeof f[d]||b(f[d])?f[d]=f[d]||g[d]:f[d]=c(f[d],g[d])}return f}function d(a){return a===Object(a)?a:{down:a,up:a}}function e(a,b){b=c(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.tolerance=d(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop,this.onBottom=b.onBottom,this.onNotBottom=b.onNotBottom}var f={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,a.prototype={constructor:a,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){if(e.cutsTheMustard)return this.debouncer=new a(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var a=this.classes;this.initialised=!1;for(var b in a)a.hasOwnProperty(b)&&this.elem.classList.remove(a[b]);this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;!a.contains(b.pinned)&&a.contains(b.unpinned)||(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.bottom)||(a.add(b.bottom),a.remove(b.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notBottom)||(a.add(b.notBottom),a.remove(b.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(a){return Math.max(a.offsetHeight,a.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=a<0,c=a+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),a+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:{up:15,down:0},offset:0,scroller:window,classes:{pinned:"hdr-pinned",unpinned:"hdr-unpinned",top:"hdr-top",notTop:"hdr-not-top",bottom:"hdr-bottom",notBottom:"hdr-not-bottom",initial:"hdr"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,e});
(function () {
  // grab an element
  var myElement = document.querySelector("body");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();
})();
/*********************************** headroom.js END */

/* фикс подсветки родителя алиас-меню */
(function () {
	var hidden_ul = document.getElementsByClassName('hide_ul');
	Loop1:
	for (var i = 0, a=hidden_ul.length; i < a; i++) {
		var child = hidden_ul[i].childNodes;
		var parent = hidden_ul[i].parentNode;
		for (var c = 0, b=child.length; c < b; c++) {
			if ((child[c].className.indexOf('active') !== -1) && (parent.className.indexOf('active') == -1)) {
				parent.className += " active_alias";
				break Loop1;
			}
		}
	}
})();
/* фикс подсветки родителя алиас-меню END*/

/******************************************* Мобильное меню */

function mobileMenu() {
	if(!qs('body.mmo')){
		addCL('mmo', 'body');
		qs('main').addEventListener('click', closeMobileMenu);
	} else{
		closeMobileMenu();
	}
}
function closeMobileMenu() {
	removeCL('mmo', 'body');
	qs('main').removeEventListener('click', closeMobileMenu);
}


/******************************************* Мобильное меню END */


/**************** fullscreenmode */

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
  	if (document.documentElement.requestFullscreen) {
  		document.documentElement.requestFullscreen();
  	} else if (document.documentElement.msRequestFullscreen) {
  		document.documentElement.msRequestFullscreen();
  	} else if (document.documentElement.mozRequestFullScreen) {
  		document.documentElement.mozRequestFullScreen();
  	} else if (document.documentElement.webkitRequestFullscreen) {
  		document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  	}
  	qs('#fullscreen-mode').className = 'i_nofullwith';
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
  	qs('#fullscreen-mode').className = 'i_fullwith';
  }
}
/**************** fullscreenmode END */


/**************** отправка почты форма заказа */

/****** форматирование инпута телефонного номера */
function phoneFormat(){
	var phone_number = this.value;
	var pattern = /(?!^\+{1})\D/g;
	this.value = phone_number.replace(pattern, '');
}
/****** форматирование инпута телефонного номера /zzz*/
/****** форматирование email инпута */
function emailFormat(){
	var phone_number = this.value;
	var pattern = /([`!#$%^&*=+\(\{\[\]\}\)\'\"\:\;\<\>\?\s/\\])/g;
	this.value = phone_number.replace(pattern, '');
}
/****** форматирование email инпута /zzz*/

// Cookies.set('check', 'form_id');
// Cookies.remove('check');
// Cookies.set('check', form_id);
function ajaxModal_Joomla(ajax_file_path, form_id, ajax_container){
	/* загрузка формы в модальное окно + eventListener для валидации и отправки */

	if(!qs('#z3_modal '+form_id)){

		Cookies.set('fid', form_id);

		addCL('z3_modal','body');
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {

			if (this.readyState === 4 && this.status === 200) {
				var mail_response = xhttp.responseText;
				qs('#z3_modal').innerHTML = '<div id="'+ajax_container+'">' + mail_response + '</div>';

				/************************** нахожу куда поставить курсор */
				for (var i = 0, arL=_all(form_id+' input').length; i < arL; i++) {
					if(!_all(form_id+' input')[i].value){
						setTimeout( function() {
							_all(form_id+' input')[i].focus();
						}, 550);
						break;
					}
				}
				/************************** нахожу куда поставить курсор /zzz*/

				/************************** вешаю listener валидацию на инпуты: tel */
				for (var i6 = 0; i6 < _all(form_id+' input').length; i6++) {
					if(_all(form_id+' input')[i6].type==='tel'){
						_all(form_id+' input')[i6].addEventListener('keyup', phoneFormat );
					}
					if(_all(form_id+' input')[i6].type==='email'){
						_all(form_id+' input')[i6].addEventListener('keyup', emailFormat );
					}
				}
				/************************** вешаю listener валидацию на инпуты: tel /zzz*/

				qs('#z3_modal '+form_id).addEventListener('submit', ajaxModal_Joomla_Mail);

				if(typeof XRegExp === 'undefined'){
					loadjscssfile("/_js/xregexp-all.min.js", "js");
				}
				if(qs(form_id+' textarea')){
					autosize(document.getElementsByTagName('textarea'));
				}

			}
		};
		xhttp.open('GET', ajax_file_path, true);
		xhttp.send();
	} else {

		changeCL('z3_modal','body');
		setTimeout( function() {

			for (var i = 0, form_inputs = _all(form_id+' input').length; form_inputs > i; i++ ) {
				if(_all(form_id+' input')[i].value===''){
					_all(form_id+' input')[i].focus();
					break;
				}
			}
		}, 550);
	}
	/* загрузка формы в модальное окно + eventListener для валидации и отправки /zzz*/


	/* валидация, отправка, получение ответа об отправке */
	function ajaxModal_Joomla_Mail(event) {
		event.preventDefault();

    // var name_regex = /^[A-Za-zа-яА-ЯёЁ0-9 _-]{3,25}$/;
    // var ckN = /^[A-Za-zа-яА-ЯёЁ0-9 _-]{3,25}$/;
    var tel_regex = /^[0-9 ()_*+/-]{5,20}$/;
    // var ckTel = /^[0-9 ()_*+/-]{5,20}$/;


    /******* валидация всех инпутов в форме */
    for (var i1 = (_all(form_id+' input').length)-1; i1>=0; i1--) {

    	if(
    		(_all(form_id+' input')[i1].name === 'name') && (!name_xregex.test(_all(form_id+' input')[i1].value))
    		)
    	{
    		_all(form_id+' input')[i1].parentElement.className = 'error';
    	} else if(
    		(_all(form_id+' input')[i1].type === 'text') && (!text_xregex.test(_all(form_id+' input')[i1].value))
    		)
    	{
    		_all(form_id+' input')[i1].parentElement.className = 'error';
    	}  else if(
    		(_all(form_id+' input')[i1].type === 'tel') && (!tel_xregex.test(_all(form_id+' input')[i1].value))
    		)
    	{
        // _all(form_id+' input')[i1].parentElement.className = 'error';
      } else if(
      	((_all(form_id+' input')[i1].type === 'email') && (!email_xregex.test(_all(form_id+' input')[i1].value)))
      	|| ((_all(form_id+' input')[i1].value).length > 50)
      	)
      {
      	_all(form_id+' input')[i1].parentElement.className = 'error';
      } else{
      	_all(form_id+' input')[i1].parentElement.className = '';
      }

    } /******* валидация всех инпутов в форме /zzz*/

    /******* валидация всех textarea в форме */
    if(_all(form_id+' textarea')){
    	for (var i1 = 0, inL = _all(form_id+' textarea').length; inL > i1; i1++ ) {

    		if(
    			((_all(form_id+' textarea')[i1]) && (!_all(form_id+' textarea')[i1].value) && (_all(form_id+' textarea')[i1].value.length > 5000))
    			)
    		{
    			_all(form_id+' textarea')[i1].parentElement.className = 'error';
    		}
    		else if(_all(form_id+' textarea')[i1].value.length < 5){
    			_all(form_id+' textarea')[i1].parentElement.className = 'error';
    		} else {
    			_all(form_id+' textarea')[i1].parentElement.className = '';
    		}

    	}
    }
    /******* валидация всех textarea в форме /zzz*/

    /******* повторная валидация всех инпутов в форме */
    for (var i2 = 0, inL = _all(form_id+' input').length; inL > i2; i2++ ) {
    	if(
    		(_all(form_id+' input')[i2].name === 'name') && (!name_xregex.test(_all(form_id+' input')[i2].value))
    		)
    	{
    		_all(form_id+' input')[i2].focus();
    		return false;
    	}
    	if(
    		(_all(form_id+' input')[i2].type === 'text') && (!text_xregex.test(_all(form_id+' input')[i2].value))
    		)
    	{
    		_all(form_id+' input')[i2].focus();
    		return false;
    	}
    	if(
    		(_all(form_id+' input')[i2].type === 'tel') && (!tel_xregex.test(_all(form_id+' input')[i2].value))
    		)
    	{
        // _all(form_id+' input')[i2].focus();
        // return false;
      }
      if(
      	(_all(form_id+' input')[i2].type === 'email') && (!email_xregex.test(_all(form_id+' input')[i2].value))
      	)
      {
      	_all(form_id+' input')[i2].focus();
      	return false;
      }

    }

    if(_all(form_id+' textarea')){
    	for (var i2 = 0, inL = _all(form_id+' textarea').length; inL > i2; i2++ ) {

    		if(
    			((_all(form_id+' textarea')[i2]) && (!_all(form_id+' textarea')[i2].value) && (_all(form_id+' textarea')[i2].value.length > 5000))
    			)
    		{
    			_all(form_id+' textarea')[i2].focus();
    			return false;
    		}
    		if(_all(form_id+' textarea')[i2].value.length < 5){
    			_all(form_id+' textarea')[i2].focus();
    			return false;
    		}

    	}
    }
    /******* повторная валидация всех инпутов в форме /zzz*/

    /************ сбор и отправка данных */
    var formdata = new FormData();
    formdata.append('header', qs('#mail_container>h3').innerText);
    formdata.append('href', location.href);
    formdata.append('refer', document.referrer);
    formdata.append('user_date', Date());

    for (var i2 = 0, inL = _all(form_id+' input').length; inL > i2; i2++ ) {
    	formdata.append(_all(form_id+' input')[i2].name, _all(form_id+' input')[i2].value);
    	if (_all(form_id+' textarea')[i2]){
    		formdata.append(_all(form_id+' textarea')[i2].name, _all(form_id+' textarea')[i2].value);
    	}
    }

    qs('#mail_container').className = 'mail_sending';
    Cookies.remove('fid');

    var ajax = new XMLHttpRequest();
    ajax.open('POST', '/?tmpl=mail');
    ajax.onreadystatechange = function () {
    	if (ajax.readyState == 4 && ajax.status == 200) {
    		if (ajax.responseText.indexOf('mail') !== -1) {
    			qs('#mail_container').innerHTML = '<h1 class="send_ok green i_check"></h1>';
    			qs('#mail_container').className = 'mail_send';
    			setTimeout( function() {
    				removeCL('z3_modal','body');
    			}, 3000);
    		} else {
    			qs('#mail_container').innerHTML = ajax.responseText;
    		}
    	}
    };

    ajax.send(formdata);
    /************ сбор и отправка данных /zzz*/

  }
  /* валидация, отправка, получение ответа об отправке /zzz*/
} // ajaxModal_Joomla /zzz

/**************** отправка почты и модальное окно #z3_modal END*/
/**************** отправка почты форма заказа END*/
/**************** отправка почты и модальное окно #z3_modal*/


/***************************** ajax modal window with or without callback*/
function loadDoc(url, ajax_container_id, callbackFunc) {

	if(!qs('#z3_modal #'+ajax_container_id+'-id')){

		var xhttp;
		xhttp=new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {

				var ajax_response = xhttp.responseText;
				qs('#z3_modal').innerHTML = '<div id="'+ajax_container_id+'-id">' + ajax_response + '</div>';

				if (callbackFunc) {
					callbackFunc(this);
				}

				addCL('z3_modal','body');
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}  else {
		changeCL('z3_modal','body');
	}
}
// qs('.pogoda i').addEventListener('click', (function(){
//   loadDoc(
//     '/pogoda/kherson.html',
//     'pogoda_container_id',
//     test_func);
//   function test_func () {
//     alert(qs('#day'));
//   }
// }));
/***************************** ajax modal window with or without callback*/

/* The load event is fired when a resource and its dependent resources have finished loading. */
window.addEventListener("load", function(event) {

	qs('#z3_mobmenu').addEventListener('click', mobileMenu);

	if(qs('#fullscreen-mode')){
		qs('#fullscreen-mode').addEventListener('click', toggleFullScreen);
	}

	/**************** замена title на data-tt в подсказках .tt*/
	if(qs('.tt')){
		var ttTitles = _all('.tt');
		for (var i_tt = 0, ttL = ttTitles.length; i_tt < ttL; i_tt++) {
			ttTitles[i_tt].addEventListener('mouseover', ttTooltips);
		}
		function ttTooltips(){
			if (!this.getAttribute('data-tt')){
				var tt_title = this.title;
				this.setAttribute("data-tt", tt_title);
				this.title = '';
				this.removeEventListener("mouseover", ttTooltips);
			}
		}
	}
	/**************** замена title на data-tt в подсказках .tt END*/

	/***************** онклик по #z3_modal только для род.контейнера */
	if(qs('#z3_modal')){
		qs('#z3_modal').addEventListener('click', function(event){
			event = event || window.event;
			var t = event.target || event.srcElement;
			if (t != this) { return true; }
			changeCL('z3_modal','body');
		}, false);
	}
	/***************** онклик по #z3_modal только для род.контейнера END*/

  // ajaxModal_Joomla(ajax_file_path, form_id, ajax_container)
  if(qs('#contact-mail')){
  	qs('#contact-mail').addEventListener('click', (function () {
  		ajaxModal_Joomla(
  			'/?tmpl=contact',
  			'#mail-contact-form',
  			'mail_container'
  			)
  	}));
  }


  /*************** сменить дизайн */
  qs('#change-dsgn').addEventListener("click", changeDesign);
  function changeDesign (){
  	if(!Cookies.get('dsgn')){
  		Cookies.set('dsgn', 'white');
  		document.location.reload(true);
  	} else {
  		Cookies.remove('dsgn');
  		document.location.reload(true);
  	}
  }
  /*************** сменить дизайн /z*/

  /*************** сменить дизайн блога*/
  if(qs('.blg_dsgn')){
  	qs('.blg_dsgn>span').addEventListener("click", changeBlogDesign);
  	function changeBlogDesign (){
  		if(!Cookies.get('blg_dsgn')){
  			Cookies.set('blg_dsgn', 'only_links');
  			document.location.reload(true);
  		} else {
  			Cookies.remove('blg_dsgn');
  			document.location.reload(true);
  		}
  	}
  }
  /*************** сменить дизайн блога /z*/

  /*************** поиск в хедере */
  qs('#hdr-search').addEventListener("click", focusSearch);
  function focusSearch(){
  	setTimeout( function() {
  		qs('#hdr-search .search_input').focus();
  	}, 400);
  }
  /*************** поиск в хедере /z*/

  /******************* кнопка погода и выбор погоды */
  if(qs('#pogoda')){
  	qs('#pogoda').addEventListener('click', (function () {

      // var pogoda_gorod_name = 'Херсон';
      var pogoda_gorod_link;

      if(!Cookies.get('pg_link')){
      	pogoda_gorod_link = 'default';
      } else {
      	pogoda_gorod_link = Cookies.get('pg_link')
      }

      loadDoc(
      	'/pogoda/'+pogoda_gorod_link+'.htm',
      	'pogoda_container');

    }));

  	qs('.pogoda i').addEventListener('click', (function(){

  		loadDoc(
  			'/pogoda/pogoda-mesta.html',
  			'pogoda-mesta',
  			pogodaVyborMesta);

  		function pogodaVyborMesta () {
        // alert(qs('#day'));
        var ul, li, i;
        ul = qs('#pogoda_mesta ul');
        li = ul.getElementsByTagName("li");
        i;

        for (i = 0; i < li.length; i++) {
        	li[i].addEventListener('click', getMestoCookies)
        }

        function getMestoCookies(){
        	var pg_link = this.getAttribute("data-pg-link");
        	var pg_mesto = this.innerText;
        	Cookies.set('pg_link', pg_link);
        	Cookies.set('pg_mesto', pg_mesto);
        	changeCL('z3_modal','body');
        }


        qs('#pg-mesta-search').addEventListener('keyup', function(){
        	var filter = this.value.toUpperCase();

        	for (i = 0; i < li.length; i++) {
        		if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        			li[i].style.display = "";
        		} else {
        			li[i].style.display = "none";
        		}
        	}

        })
      }

    }));

  }
  /******************* кнопка погода и выбор погоды /z*/

});
/* The load event is fired when a resource and its dependent resources have finished loading. /z*/


/* serviceWorker - add to homescreen */
if ( ('serviceWorker' in navigator) && (bowser.blink) && (qs('.header-buttons')) ) {


	/*************************/
	window.addEventListener('beforeinstallprompt', function(e) {
		var deferredPrompt;

		e.preventDefault();
		deferredPrompt = e;

		var btnAdd = document.createElement("BUTTON");
    // var t = document.createTextNode("Добавить как приложение");
    // btnAdd.appendChild(t);
    btnAdd.setAttribute("id", "a2hs");
    btnAdd.setAttribute("class", "i_star");
    qs('.header-buttons').appendChild(btnAdd);


    btnAdd.addEventListener('click', function(e) {
    	deferredPrompt.prompt();

    	deferredPrompt.userChoice.then(function(choiceResult) {
          // if (choiceResult.outcome === 'accepted') {
          //  console.log('User accepted the A2HS prompt');
          // } else {
          //  console.log('User dismissed the A2HS prompt');
          // }
          deferredPrompt = null;
        });
    });

    window.addEventListener('appinstalled', function(evt) {
    	app.logEvent('a2hs', 'installed');
    });

  });

}
/* serviceWorker - add to homescreen /z*/


// sessionStorage - только на время сессии клиента, при переходе между страницами
// // Сохранение данных в sessionStorage
// sessionStorage.setItem('key', 'value');
// sessionStorage.setItem('key', 'value');
// // Получение данных из sessionStorage
// var data = sessionStorage.getItem('key');
// // Удаление данных из sessionStorage
// sessionStorage.removeItem('key');

// alert(sessionStorage.getItem('key'));

