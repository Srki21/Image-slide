
var imgcounter = 1;
var total = 5;
function slide(x){
    if(x==undefined){
        x=1;
    }
    var image = document.getElementById('img');
    imgcounter = imgcounter+x;
    if(imgcounter>total){
        imgcounter=1;
    }else if(imgcounter<1){
        imgcounter = total;
    }
    img.src = "img/img"+imgcounter+".jpg";
    circleFunc(imgcounter);
}
timeid = setInterval(slide,2000);

function circleFunc(imgcounter){
    var buttons = document.getElementById("buttons");
    buttons.innerHTML="";
    
    for(var i = 1;i<=total;i++){
        var elem = document.createElement('img');
        elem.setAttribute("onclick","goTo("+i+")");
        if(imgcounter==i){
            elem.src="img/circle1.png";
        }else{
            elem.src = "img/circle0.png";
        }
        buttons.appendChild(elem);
    }
}
var wrap = document.getElementById("wrap");
    
function goTo(x){
    var image = document.getElementById("img");
    image.src="img/img"+ x +".jpg";
    circleFunc(x);
  
}

