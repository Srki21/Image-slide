var info = [
                ['GARTON 1', 'There is a number of Garton Pilot watches with cases of varying diameters: either 42mm, 44mm or 47mm. For me, one of the most appealing features is the face: classic and very legible.'],
                ['PARNIS 2', 'To this I can add that the movement is likely a DG2813, judging from the circle crown logo. So you have reasonable quality and accuracy here, with hacking and hand winding too.'],
                ['CASIO 3', 'The steel case feels quite heavy - so much so that a light-weight strap will let it shift on your wrist (this happens to me with the RAF-style Bond in the picture below). Unfortunately I do not have the exact weight of the watch.'],
                ['ROYAL 4', 'The lug width is 21mm which is not very common. This is the lug width of the IWC Spitfire, and I think this Garton is an homage to it.'],
                ['SEIKO 5', 'The face is very clear and legible. In particular, I like the long seconds hand. About the lume: surprise, it is blue!'],
                ];
            
            function goTo(x){
                var image = document.getElementById('img');
                image.src = "img/img" + x + ".jpg";
                circleFunc(x);
            }
            
            var imagecounter = 1;
            var total = 5;
            
            function slide(x){
                if (x == undefined) {
                    x = 1;
                }
                var image = document.getElementById('img');
                imagecounter = imagecounter+x;
                if (imagecounter > total) {
                    imagecounter = 1;
                }else if (imagecounter < 1) {
                    imagecounter = total;
                }
                image.src = "img/img" + imagecounter + ".jpg";
                circleFunc(imagecounter);
            }
            timerid = setInterval(slide, 2000);
            
             function circleFunc(imagecounter){
			    var buttons = document.getElementById('buttons');
                buttons.innerHTML = "";
                document.getElementById('h4').innerHTML = info[imagecounter - 1][0];
                document.getElementById('p').innerHTML = info[imagecounter - 1][1];
                for(i=1; i<=total; i++){
					var elem = document.createElement("img");
					elem.setAttribute("onclick", "goTo(" + i + ")");
                    if (i == imagecounter) {
                        elem.setAttribute("src", "img/circle1.png");
                    }else{
                        elem.setAttribute("src", "img/circle0.png");  
                    }
					buttons.appendChild(elem);
                }
				  var arrowL = document.getElementById('left');
            var arrowR = document.getElementById('right');
            var p = document.getElementById('p');
            var text = document.getElementById('text');
            
            arrowL.style.visibility="hidden";
            arrowR.style.visibility="hidden";
            
            arrowL.addEventListener('mouseover', function(){
            arrowL.src = "img/arrow_left_h.png";
            });
            
            arrowL.addEventListener('mouseout', function(){
            arrowL.src = "img/arrow_left.png";
            })
            
            arrowR.addEventListener('mouseover', function(){
            arrowR.src = "img/arrow_right_h.png";
            });
            
            arrowR.addEventListener('mouseout', function(){
            arrowR.src = "img/arrow_right.png";
            })
            
            var wrap = document.getElementById("wrap");
            text.addEventListener('mouseover', function(){
                p.style.display="block";
                text.style.height = "auto";
                text.style.width = "auto";
                });
            text.addEventListener('mouseout', function(){
                p.style.display="none";
                text.style.height = "50px";
                text.style.width = "auto";
                });
            
            wrap.addEventListener('mouseover', function(){
                arrowL.style.visibility="";
                arrowR.style.visibility="";
                clearInterval(timerid);
                })
            wrap.addEventListener('mouseout', function(){
                arrowL.style.visibility="hidden";
                arrowR.style.visibility="hidden";
                timerid = setInterval(slide, 2000);
                })
             }