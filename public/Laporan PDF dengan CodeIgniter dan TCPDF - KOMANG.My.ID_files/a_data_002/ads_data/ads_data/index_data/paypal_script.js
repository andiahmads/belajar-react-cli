var frame1_text = "Its easier to get paid";
var frame2_text = "Create your free<br>personalized paypal.me link";
var frame3_text = "Share your link and receive payments<br>faster and more securely";
var cta_text = "Get your link for free";

// Preloader
function preload(){function e(){n===t-1?r[t]():n++}var n=0,a=new Array,t=preload.arguments.length-1,r=preload.arguments;for(i=0;i<t;i++)a[i]=new Image,a[i].src=preload.arguments[i],addEvent(a[i],"load",e)}function addEvent(e,n,a){e.addEventListener?e.addEventListener(n,a,!1):e.attachEvent&&e.attachEvent("on"+n,a)}	
preload('bg.jpg','logo.png',init);

// Presets
function slideFromLeft(elements, stagger) {
	return new TimelineMax()
	.staggerFrom(elements, .5, {x: 800, ease:Back.easeOut.config(1)}, stagger)
}
function slideFromRight(elements, stagger) {
	return new TimelineMax()
	.staggerFrom(elements, .7, {x: -300, ease:Back.easeOut.config(1)}, stagger)
}

function slideToLeft(elements, stagger) {
	return new TimelineMax()
	.staggerTo(elements, 1, {x: 0, ease:Back.easeOut.config(1)}, stagger)
}

function slideBack(elements) {
	return new TimelineMax()
	.to(elements, .5, {x: -50, ease:Power2.easeOut})
	.to(elements, .5, {x: 0, ease:Back.easeOut.config(1)})
}

function textIn (elements, stagger) {
	return new TimelineMax()
	.staggerFrom(elements, .5, {x: -700, ease:Back.easeOut.config(1.3)}, stagger)
}

function setSlides(){
	return new TimelineMax()
	.set('.slide3', {x:1680})
	.set('.slide2', {x:1680})
}

//TrimObject
function insertObj(t) {
  var _el = document.createElement("DIV");
  _el.innerHTML = t;
  return _el;
}

function TrimObject(id) {
  var _el = document.getElementById(id);
  var _str = _el.getAttribute('dymcText');
  var _newStr = _str.split("<br>");
  _el.innerHTML = "";

  for (var i=0; i < _newStr.length;) {
    var newDymcTxt = new insertObj(_newStr[i])
    _el.appendChild(newDymcTxt)
    i++;
  };
} 

function setValueTo(id,attr,value) {
  return document.getElementById(id).setAttribute(attr, value);
}

// Initial
function init() {
  window.onload = function(){
    setValueTo('HeaderDymcTxt1','dymcText',frame1_text);
    setValueTo('HeaderDymcTxt2','dymcText',frame2_text);
    setValueTo('HeaderDymcTxt3','dymcText',frame3_text);
    document.getElementById('CtaDymcTxt').innerHTML = cta_text;

    startAnim();
  }
}

function startAnim(){
  TrimObject('HeaderDymcTxt1');
  TrimObject('HeaderDymcTxt2');
  TrimObject('HeaderDymcTxt3');

  var f1 = document.querySelectorAll('#HeaderDymcTxt1>div'),
      f2 = document.querySelectorAll('#HeaderDymcTxt2>div'),
      f3 = document.querySelectorAll('#HeaderDymcTxt3>div, .cta');

  var timeline = new TimelineMax()
  .set('main', {display:'block'})
  .set('.colors', {skewX:-10})
  .set('#frame1', {transformOrigin:'0% 100%', force3D:false})

  // Frame1 In
  .add(slideFromLeft(['.slide4', '.slide3','.slide2'], 0.2))
  .add(slideFromRight('.slide1', 0.2), '-=.6')
  .from('.logo', .5, {x:300, ease:Back.easeOut.config(.5)}, '-=.3')
  .from('#frame1', .7, {scale:1.05, ease:Power2.easeOut}, '-=.65')
  .add(textIn(f1, 0.1),'-=.4')

	// Frame1 Out
  .add(setSlides, '+=1')
  .set('.slide3', {backgroundColor:'#009CDE'},'+=1')
  .add(slideToLeft(['.slide3', '.slide2'],.15), 'frame2')
  .add(slideBack('.slide1'), 'frame2')
  .to('#frame1', .1,{opacity:0}, 'frame2+=.01')

  // Frame2 In
  .add(textIn(f2, 0.1),'frame2+=.8')

	// Frame2 Out
  .add(setSlides, 'f2Out+=.5')
  .set('.slide3', {backgroundColor:'#b6489f'},'+=1')
  .add(slideToLeft(['.slide3', '.slide2'],.15), 'frame3')
  .add(slideBack('.slide1'), 'frame3')
  .to('#frame2', .1,{opacity:0}, 'frame3+=.01')

  // Frame3 In
  .add(textIn(f3, 0.1),'frame3+=.8')
}