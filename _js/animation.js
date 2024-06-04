window.addEventListener("load", allAnimation);
/************************************************ ВЫЗОВ СКРИПТОВ АНИМАЦИЙ allAnimation() */
function allAnimation() {

/*!
Waypoints Inview Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
function z3TextTipping(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}if(document.querySelector(t)){var r=e,a=new(function(){function t(e){n(this,t),this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}return t.prototype.setText=function(t){var e=this,n=this.el.innerText,r=Math.max(n.length,t.length),a=new Promise(function(t){return e.resolve=t});this.queue=[];for(var i=0;i<r;i++){var h=n[i]||"",s=t[i]||"",o=Math.floor(40*Math.random()),u=o+Math.floor(40*Math.random());this.queue.push({from:h,to:s,start:o,end:u})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),a},t.prototype.update=function(){for(var t="",e=0,n=0,r=this.queue.length;n<r;n++){var a=this.queue[n],i=a.from,h=a.to,s=a.start,o=a.end,u=a.char;this.frame>=o?(e++,t+=h):this.frame>=s?((!u||Math.random()<.28)&&(u=this.randomChar(),this.queue[n].char=u),t+='<span class="dud">'+u+"</span>"):t+=i}this.el.innerHTML=t,e===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)},t.prototype.randomChar=function(){return this.chars[Math.floor(Math.random()*this.chars.length)]},t}())(document.querySelector(t)),i=0;!function t(){a.setText(r[i]).then(function(){setTimeout(t,1500)}),i=(i+1)%r.length}()}}
z3TextTipping(
	'.ru-ru .z3scramble.wecan',
	[
	'# # # # # # #',
	'<span class="zfont">Zion3W</span>',
	'разработка и создание веб-сайтов',
	'обслуживание и тех.поддержка',
	'реклама и продвижение',
	'индивидуальное обучение',
	'оптимизация и доработка',
	'продажа шаблонов к CMS',
	'WordPress, Joomla, OpenCart',
	'HTML, CSS, JavaScript, PHP, MySQL'
	]);
z3TextTipping(
	'.en-gb .z3scramble.wecan',
	[
	'# # # # # # #',
	'<span class="zfont">Zion3W</span>',
	'web development and creation of websites',
	'maintenance and technical support',
	'advertising and promotion',
	'individual training',
	'optimization and refinement',
	'sale of templates to CMS',
	'WordPress, Joomla, OpenCart',
	'HTML, CSS, JavaScript, PHP, MySQL'
	]);
// ——————————————————————————————————————————————————
// TextScramble
// —————————————————————————————————————————————————— END

/*!
*
*   typed.js - A JavaScript Typing Animation Library
*   Author: Matt Boldt <me@mattboldt.com>
*   Version: v2.0.4
*   Url: https://github.com/mattboldt/typed.js
*   License(s): MIT
*
*/
(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Typed=e():t.Typed=e()})(this,function(){return function(t){function e(n){if(s[n])return s[n].exports;var i=s[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),r=s(1),o=s(3),a=function(){function t(e,s){n(this,t),r.initializer.load(this,s,e),this.begin()}return i(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;return this.pause.status===!0?void this.setPauseStatus(t,e,!0):void(this.timeout=setTimeout(function(){e=o.htmlParser.typeHtmlChars(t,e,s);var n=0,r=t.substr(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var a=1;r=/\d+/.exec(r)[0],a+=r.length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+a),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+i),c=t.substring(e+i+1);t=u+l+c,i--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e===t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},n)},n))}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var s=this;if(this.pause.status===!0)return void this.setPauseStatus(t,e,!0);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=o.htmlParser.backSpaceHtmlChars(t,e,s);var n=t.substr(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];i&&n===i.substr(0,e)?s.stopNum=e:s.stopNum=0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){if(this.cursor&&!this.pause.status&&this.cursorBlinking!==t){this.cursorBlinking=t;var e=t?"infinite":0;this.cursor.style.animationIterationCount=e}}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},o=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),a=s(2),u=n(a),l=function(){function t(){i(this,t)}return o(t,[{key:"load",value:function(t,e,s){if("string"==typeof s?t.el=document.querySelector(s):t.el=s,t.options=r({},u["default"],e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),i=!0,o=!1,a=void 0;try{for(var l,c=n[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var p=l.value;t.strings.push(p.innerHTML.trim())}}catch(h){o=!0,a=h}finally{try{!i&&c["return"]&&c["return"]()}finally{if(o)throw a}}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var f in t.strings)t.sequence[f]=f;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var e="";return e=t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&t.showCursor&&t.fadeOut){var e=document.createElement("style");e.type="text/css";var s="";t.showCursor&&(s+="\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(s+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=s,document.head.appendChild(e))}}}]),t}();e["default"]=l;var c=new l;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e["default"]=s,t.exports=e["default"]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),i=function(){function t(){s(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var i="";for(i="<"===n?">":";";t.substr(e+1).charAt(0)!==i&&(e++,!(e+1>t.length)););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var i="";for(i=">"===n?"<":"&";t.substr(e-1).charAt(0)!==i&&(e--,!(e<0)););e--}return e}}]),t}();e["default"]=i;var r=new i;e.htmlParser=r}])});
//# sourceMappingURL=typed.min.js.map
if(qs('.tipjs')){
	var load_text = navigator.platform + ' ' + navigator.language + '`<br>`';
	load_text += '`Loading...<br>`^1000 ███████████████ `[100%]<br>`^2000 `data initialization...<br>`^2000';
	load_text += Date();
	var typed = new Typed('.tipjs', {
		strings: [load_text],
		startDelay: 3000,
		typeSpeed: 0,
		showCursor: false,
	});
}
if(qs('.tiptext')){
	var typed = new Typed('.tiptext', {
		stringsElement: '.orig',
		startDelay: 15000,
		typeSpeed: 75,
		backSpeed: 10,
		autoInsertCss: false
	});
}
/*! *  *   typed.js ****************************** END*/


/***************** Canvas Starfield */
function canvasSpace(canvasId) {
	var canvas = document.getElementById( canvasId ),
	ctx = canvas.getContext( '2d' ),
	fl = 300,
	count = 500,
	points = [],
	startSpeed = 0,
	tick = 0,
	width,
	height,
	bounds,
	vp,
	mouse,
	canvasOffset;

	function rand( min, max ) {
		return Math.random() * ( max - min ) + min;
	}

	function norm( val, min, max ) {
		return ( val - min ) / ( max - min );
	}

	function resetPoint( p, init ) {
		p.z = init ? rand( 0, bounds.z.max ) : bounds.z.max;
		p.x = rand( bounds.x.min, bounds.x.max ) / ( fl / ( fl + p.z ) );
		p.y = rand( bounds.y.min, bounds.y.max ) / ( fl / ( fl + p.z ) );
		p.ox = p.x;
		p.oy = p.y;
		p.oz = p.z;
		p.vx = 0;
		p.vy = 0;
		p.vz = rand( -1, -10 ) + startSpeed;
		p.ax = 0;
		p.ay = 0;
		p.az = 0;
		p.s = 0;
		p.sx = 0;
		p.sy = 0;
		p.os = p.s;
		p.osx = p.sx;
		p.osy = p.sy;
		p.hue = rand( 120, 200 );
		p.lightness = rand( 70, 100 );
		p.alpha = 0;
		return p;
	}

	function create() {
		vp = {
			x: width / 2,
			y: height / 2
		};
		mouse = {
			x: vp.x,
			y: vp.y,
			down: false
		};
		bounds = {
			x: { min: -vp.x, max: width - vp.x },
			y: { min: -vp.y, max: height - vp.y },
			z: { min: -fl, max: 1000 }
		};
	}

	function update() {
		if( mouse.down ) {
			if( startSpeed > -30 ) {
				startSpeed -= 0.1;
			} else {
				startSpeed = -30;
			}
		} else {
			if( startSpeed < 0 ) {
				startSpeed += 1;
			} else {
				startSpeed = 0;
			}
		}

		vp.x += ( ( width / 2 - ( mouse.x - width / 2 ) ) - vp.x ) * 0.025;
		vp.y += ( ( height / 2 - ( mouse.y - height / 2 ) ) - vp.y ) * 0.025;
		bounds = {
			x: { min: -vp.x, max: width - vp.x },
			y: { min: -vp.y, max: height - vp.y },
			z: { min: -fl, max: 1000 }
		};

		if( points.length < count ) {
			points.push( resetPoint( {} ) );
		}
		var i = points.length;
		while( i-- ) {
			var p = points[ i ];
			p.vx += p.ax;
			p.vy += p.ay;
			p.vz += p.az;
			p.x += p.vx;
			p.y += p.vy;
			p.z += p.vz;
			if( mouse.down ) {
				p.az = -0.5;
			}
			if(
				p.sx - p.sr > bounds.x.max ||
				p.sy - p.sr > bounds.y.max ||
				p.z > bounds.z.max ||
				p.sx + p.sr < bounds.x.min ||
				p.sy + p.sr < bounds.y.min ||
				p.z < bounds.z.min
				) {
				resetPoint( p );
		}
		p.ox = p.x;
		p.oy = p.y;
		p.oz = p.z;
		p.os = p.s;
		p.osx = p.sx;
		p.osy = p.sy;
	}
}

function render() {
	ctx.save();
	ctx.translate( vp.x, vp.y );
	ctx.clearRect( -vp.x, -vp.y, width, height );
	var i = points.length;
	while( i-- ) {
		var p = points[ i ];
		p.s = fl / ( fl + p.z );
		p.sx = p.x * p.s;
		p.sy = p.y * p.s;
		p.alpha = ( bounds.z.max - p.z ) / ( bounds.z.max / 2 );
		ctx.beginPath();
		ctx.moveTo( p.sx, p.sy );
		ctx.lineTo( p.osx, p.osy );
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'hsla(' + p.hue + ', 100%, ' + p.lightness + '%, ' + p.alpha + ')';
		ctx.stroke();
	}
	ctx.restore();
}

function resize() {
	width = canvas.width = canvas.parentNode.clientWidth;
	height = canvas.height = canvas.parentNode.clientHeight;
	canvasOffset = { x: canvas.offsetLeft, y: canvas.offsetTop };
}

function mousemove( e ) {
	mouse.x = e.pageX - canvasOffset.x;
	mouse.y = e.pageY - canvasOffset.y;
}

function mousedown() {
	mouse.down = true;
}

function mouseup() {
	mouse.down = false;
}

function loop() {
	requestAnimationFrame( loop );
	update();
	render();
	tick++;
}

window.addEventListener( 'resize', resize );
canvas.parentNode.addEventListener( 'mousemove', mousemove );
canvas.addEventListener( 'mousedown', mousedown );
canvas.addEventListener( 'mouseup', mouseup );
resize();
create();
loop();
};

if(qs('#space')){
	canvasSpace('space');
}
/*************************************************** Canvas Starfield END*/
/*************************************************** Canvas Starfield END*/


/*************************************************** Canvas rainbow-grid */
/*************************************************** Canvas rainbow-grid */
function canvasGrid(canvasId1) {

	var canvas,
	ctx,
	width,
	height,
	size,
	lines,
	tick;

	function line() {
		this.path = [];
		this.speed = rand( 10, 20 );
		this.count = randInt( 10, 30 );
		this.x = width / 2, + 1;
		this.y = height / 2 + 1;
		this.target = { x: width / 2, y: height / 2 };
		this.dist = 0;
		this.angle = 0;
		this.hue = tick / 5;
		this.life = 1;
		this.updateAngle();
		this.updateDist();
	}

	line.prototype.step = function( i ) {
		this.x += Math.cos( this.angle ) * this.speed;
		this.y += Math.sin( this.angle ) * this.speed;

		this.updateDist();

		if( this.dist < this.speed ) {
			this.x = this.target.x;
			this.y = this.target.y;
			this.changeTarget();
		}

		this.path.push( { x: this.x, y: this.y } );
		if( this.path.length > this.count ) {
			this.path.shift();
		}

		this.life -= 0.001;

		if( this.life <= 0 ) {
			this.path = null;
			lines.splice( i, 1 );
		}
	};

	line.prototype.updateDist = function() {
		var dx = this.target.x - this.x,
		dy = this.target.y - this.y;
		this.dist = Math.sqrt( dx * dx + dy * dy );
	}

	line.prototype.updateAngle = function() {
		var dx = this.target.x - this.x,
		dy = this.target.y - this.y;
		this.angle = Math.atan2( dy, dx );
	}

	line.prototype.changeTarget = function() {
		var randStart = randInt( 0, 3 );
		switch( randStart ) {
		case 0: // up
		this.target.y = this.y - size;
		break;
		case 1: // right
		this.target.x = this.x + size;
		break;
		case 2: // down
		this.target.y = this.y + size;
		break;
		case 3: // left
		this.target.x = this.x - size;
	}
	this.updateAngle();
};

line.prototype.draw = function( i ) {
	ctx.beginPath();
	var rando = rand( 0, 10 );
	for( var j = 0, length = this.path.length; j < length; j++ ) {
		ctx[ ( j === 0 ) ? 'moveTo' : 'lineTo' ]( this.path[ j ].x + rand( -rando, rando ), this.path[ j ].y + rand( -rando, rando ) );
	}
	ctx.strokeStyle = 'hsla(' + rand( this.hue, this.hue + 30 ) + ', 80%, 55%, ' + ( this.life / 3 ) + ')';
	ctx.lineWidth = rand( 0.1, 2 );
	ctx.stroke();
};

function rand( min, max ) {
	return Math.random() * ( max - min ) + min;
}

function randInt( min, max ) {
	return Math.floor( min + Math.random() * ( max - min + 1 ) );
};

function init() {
	canvas = document.getElementById( canvasId1 );
	ctx = canvas.getContext( '2d' );
	size = 30;
	lines = [];
	reset();
	loop();
}

function reset() {
	width = Math.ceil( canvas.parentNode.clientWidth / 2 ) * 2;
	height = Math.ceil( canvas.parentNode.clientHeight / 2 ) * 2;
	tick = 0;

	lines.length = 0;
	canvas.width = width;
	canvas.height = height;
}

function create() {
	if( tick % 10 === 0 ) {
		lines.push( new line());
	}
}

function step() {
	var i = lines.length;
	while( i-- ) {
		lines[ i ].step( i );
	}
}

function clear() {
	ctx.globalCompositeOperation = 'destination-out';
	ctx.fillStyle = 'hsla(0, 0%, 0%, 0.1';
	ctx.fillRect( 0, 0, width, height );
	ctx.globalCompositeOperation = 'lighter';
}

function draw() {
	ctx.save();
	ctx.translate( width / 2, height / 2 );
	ctx.rotate( tick * 0.001 );
	var scale = 0.8 + Math.cos( tick * 0.02 ) * 0.2;
	ctx.scale( scale, scale );
	ctx.translate( -width / 2, -height / 2 );
	var i = lines.length;
	while( i-- ) {
		lines[ i ].draw( i );
	}
	ctx.restore();
}

function loop() {
	requestAnimationFrame( loop );
	create();
	step();
	clear();
	draw();
	tick++;
}

function onresize() {
	reset();
}

window.addEventListener( 'resize', onresize );

init();

};

if(qs('#grid')){
	canvasGrid('grid');
}
/*************************************************** Canvas rainbow-grid END*/
/*************************************************** Canvas rainbow-grid END*/


/*************************************************** Canvas код элемента */
/*************************************************** Canvas код элемента */
function canvasElementCode(canvasId, elementToCode) {
  // you can adjust your screen width
  // and height until you see it all :D

  // and yes, this is the only js running

  var c = document.getElementById( canvasId ),
  s,
  w = c.width = c.parentNode.clientWidth,
  h = c.height = c.parentNode.clientHeight,
  ctx = c.getContext( '2d' ),
  opts = {

  	hueSpeed: .1,
  	interval: 10,
  	waitsOnLine: 5,
  	repaintAlpha: .04,
  	font: '10px monospace',  //шрифт
  	lineFont: '7px monospace',
      lineHeight: 10, //px
      lineWidth: (window.innerWidth)/4

    },

    tick = 0, wait = 0,
    linesInHeight = h / opts.lineHeight,
    rainbows = [];

    function Rainbow(){

    	this.y = 0;
    	this.wait = 0;
    	this.hue = ( tick * opts.hueSpeed ) % 360;
    }
    Rainbow.prototype.step = function() {

    	++this.wait

    	if( this.wait >= opts.waitsOnLine ){

    		++this.y;
    		this.wait = 0;
    	}

    	ctx.fillStyle = 'hsl(hue,80%,50%)'
    	.replace( 'hue', this.hue );

    	var x = ( ( this.y / linesInHeight ) |0 )
    	* opts.lineWidth,
    	y = ( this.y % linesInHeight )
    	* opts.lineHeight,
    	l = ctx.measureText( this.y ).width;

    	ctx.font = opts.font;
    	ctx.fillText( s[ this.y ], 14 + x, y );

    	ctx.font = opts.lineFont;
    	ctx.fillText( this.y, 9 + x - l, y )

    	if( this.y >= s.length - 1 )
    		this.dead = true;
    }

    function init() {

    	s = document.querySelector(elementToCode)
    	.innerHTML.split( '\n' );
    	ctx.font = opts.font;

    	loop();
    }
    function loop() {

    	window.requestAnimationFrame( loop );

    	++tick;
    	++wait;

    	ctx.fillStyle = 'rgba(0,0,0,alp)'
    	.replace( 'alp', opts.repaintAlpha );
    	ctx.fillRect( 0, 0, w, h );

    	if( wait >= opts.interval ){

    		wait = 0;
    		rainbows.push( new Rainbow );
    	}

    	for( var i = 0; i < rainbows.length; ++i ){

    		rainbows[ i ].step();

    		if( rainbows[ i ].dead ){

    			rainbows.splice( i, 1 );
    			--i;
    		}
    	}
    }

    init();
    window.addEventListener( 'resize', function() {

    	w = c.width = c.parentNode.clientWidth;
    	h = c.height = c.parentNode.clientHeight;

    	linesInHeight = h / opts.lineHeight;

    	ctx.fillStyle = 'black';
    	ctx.fillRect( 0, 0, w, h );
    	ctx.font = opts.font;
    });
    c.addEventListener( 'click', function(){

    	ctx.fillStyle = 'black';
    	ctx.fillRect( 0, 0, w, h );

    	s.reverse();
    	for( var i = 0; i < s.length; ++i )
    		s[ i ] = s[ i ].split('').reverse().join('');
    })
// #rainbowTextWeekend by @towc
}
/*************************************************** Canvas код элемента END*/
if(qs('#page-code')){
	// canvasElementCode('page-code', 'html')
}
/*************************************************** Canvas код элемента END*/


/*************************************************** Canvas sphere-in-sphere*/
/*************************************************** Canvas sphere-in-sphere*/
function canvasSphere(canvasId) {

	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext("2d");
	var cw = (canvas.width = canvas.parentNode.clientWidth),
	cx = cw / 2;
	var ch = (canvas.height = canvas.parentNode.clientHeight),
	cy = ch / 2;

	var m = { x: 0, y: 0 };
	var target = { x: 0, y: 0 };
	var speed = 0.0005;
	var easing = 0.90;

	var frames = 0;

	var balls = [];
var vp = { x: cx, y: cy }; //vanishing point
var fl = 200; // focal length

function Ball(R) {

	this.R = R;
	this.r = .04*this.R;

// 3D position
this.pos = spherePointPicking(this.R)

// 2D position
this.x = this.pos.x + cx;
this.y = this.pos.y + cy;
this.a = { x: 0, y: 0 };
this.scale = { x: 1, y: 1 };
this.c =  oGrd(this.r/2, 210);

this.rotateX = function(angle) {
	var cos = Math.cos(angle);
	var sin = Math.sin(angle);
	var y1 = this.pos.y * cos - this.pos.z * sin;
	var z1 = this.pos.z * cos + this.pos.y * sin;

	this.pos.y = y1;
	this.pos.z = z1;
};

this.rotateY = function(angle) {
	var cos = Math.cos(angle);
	var sin = Math.sin(angle);
	var x1 = this.pos.x * cos - this.pos.z * sin;
	var z1 = this.pos.z * cos + this.pos.x * sin;

	this.pos.x = x1;
	this.pos.z = z1;
};

this.draw3D = function() {
	if (this.pos.z > -fl) {
		var scale = fl / (fl - this.pos.z);

		this.scale = { x: scale, y: scale };
		this.x = vp.x + this.pos.x * scale;
		this.y = vp.y + this.pos.y * scale;
		this.visible = true;
	} else {
		this.visible = false;
	}
};

this.draw2D = function() {

	ctx.save();
	ctx.translate(this.x, this.y);
	ctx.scale(this.scale.x, this.scale.y);
	ctx.beginPath();
	ctx.fillStyle = this.c;
	ctx.fillRect(0, 0, this.r, this.r);
	ctx.restore();
};
}

for (var i = 0; i < 1000; i++) {
	balls.push(new Ball(240));
	balls.push(new Ball(205));
	balls.push(new Ball(150));
	balls.push(new Ball(75));
	balls.push(new Ball(50));
}

function Draw() {
	t = new Date().getTime() / 127;

	ctx.clearRect(0, 0, cw, ch);

	frames+=.1;
//t = new Date().getTime() / 127;
m.x = cx + Math.cos(t / 43 + Math.cos(t / 47 + frames)) * 8;
m.y = cy + Math.sin(t / 31 + Math.cos(t / 37 + frames)) * 8;

target.x = (m.y - vp.y) * speed;
target.y = (m.x - vp.x) * speed;



balls.map(function(b) {
	b.draw3D();
});
balls.sort(function(a, b) {
	return a.pos.z - b.pos.z;
});

target.x *= easing;
target.y *= easing;



balls.map(function(b) {
	b.rotateX(target.x);
	b.rotateY(target.y);
	if (b.visible) {
		b.draw2D();
	}
});

requestId = window.requestAnimationFrame(Draw);
}
Draw();



function oGrd(r, h) {
	grd = ctx.createRadialGradient(r,r,0,r,r,r);

	grd.addColorStop(0, "hsla(" + h + ",95%,95%, 1)");
	grd.addColorStop(0.4, "hsla(" + h + ",95%,45%,.5)");
	grd.addColorStop(1, "hsla(" + h + ", 95%, 45%, 0)");

	return grd;
}


function spherePointPicking(R){
//How to generate random points on a sphere:
//https://math.stackexchange.com/questions/1585975/how-to-generate-random-points-on-a-sphere#1586185
var u1 = Math.random();
var u2 = Math.random();
var s = Math.acos(2*u1 - 1) - Math.PI/2;
var t = 2*Math.PI*u2;

return {x : R * Math.cos(s) * Math.cos(t),
	y : R * Math.cos(s) * Math.sin(t),
	z : R * Math.sin(s)
}
}
}
/*************************************************** Canvas sphere-in-sphere END*/
if(qs('#sphere')){
	canvasSphere('sphere')
}
/*************************************************** Canvas sphere-in-sphere END*/


/*************************************************** Matrix animation */
if(qs('#matrix-canva')){

	var c = document.getElementById("matrix-canva");
	var ctx = c.getContext("2d");

	//making the canvas full screen
	c.height = window.innerHeight;
	c.width = window.innerWidth;

	//chinese characters - taken from the unicode charset
	var chinese = "➂⛓✆↭✇↳✈℞✉♛℡⚶⬛⍶☁️♻甾✎X⛯⍯᎗⌱⍙⚵᧽⛟⚛✓᎒✗⌖⚙࿏✦⚖⇌⚕༶畄™✧༖⅍߶↗⚠⬍❮⌆®⇅❯↨❨©↻❩";
	//converting the string into an array of single characters
	chinese = chinese.split("");

	var font_size = 16;
	var columns = c.width/font_size; //number of columns for the rain
	//an array of drops - one per column
	var drops = [];
	//x below is the x coordinate
	//1 = y co-ordinate of the drop(same for every drop initially)
	for(var x = 0; x < columns; x++)
		drops[x] = 1;

	//drawing the characters
	function draw()
	{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);

	ctx.fillStyle = "#090"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random chinese character to print
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;

		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 50);

}
/*************************************************** Matrix animation /z*/




}
/************************************************ СКРИПТЫ АНИМАЦИЙ allAnimation()  END*/