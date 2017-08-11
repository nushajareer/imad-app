console.log('Loaded!');
//change text
var element = document.getElementById('main-text');
element.innerHTML ='changed me';

var marginLeft =0;

var img = document.getElementById('madi');
 
 function moveRight(){
     marginLeft = marginLeft+10;
     img.style.marginLeft=marginLeft +'px';
 }
 img.onclick = function(){
    // setInterval(moveRight,50);
    moveRight();
 };
