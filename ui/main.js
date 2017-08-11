console.log('Loaded!');
//change text
var element = document.getElementById('main-text');
element.innerHTML ='changed me';

var marginLeft =10;

var img = document.getElementById('madi');
 
 img.onclick = function(){
     marginLeft = marginLeft+10;
     img.style.marginLeft=marginLeft +'px';
 };
