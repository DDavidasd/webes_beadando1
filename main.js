var tomb = new Array("kavics.png", "wcpapir.png","metszo.png");

var tombmasodik = new Array("ko", "papir", "ollo");

var win = 0;
var lose = 0;
var equal = 0;


function kepek(kep){
    var random = Math.floor(Math.random() * tomb.length);
    document.getElementById("randomkep").src = tomb[random];
    
    var randomkep = tombmasodik[random];
    
    
    if(randomkep == kep.id){
        document.getElementById("eredmeny").innerHTML="Döntetlen!";
        equal++;
         document.getElementById("equal").innerHTML="Döntetlen(" + equal + ")";
    }
    else if(kep.id == "ko"){
        if(randomkep == "papir"){
            document.getElementById("eredmeny").innerHTML="Vesztettél!";
            lose++;
            document.getElementById("lose").innerHTML="Vesztett(" + lose + ")";
        }
        else{
            document.getElementById("eredmeny").innerHTML="Nyertél!";
            win++;
            document.getElementById("win").innerHTML="Nyert(" + win + ")";
        }
    }
    else if(kep.id == "papir"){
        if(randomkep == "ko"){
            document.getElementById("eredmeny").innerHTML="Nyertél!";
            win++;
            document.getElementById("win").innerHTML="Nyert(" + win + ")";
        }
        else{
            document.getElementById("eredmeny").innerHTML="Vesztettél!";
            lose++;
            document.getElementById("lose").innerHTML="Vesztett(" + lose + ")";
        }
    }
    else if(kep.id == "ollo"){
        if(randomkep == "papir"){
            document.getElementById("eredmeny").innerHTML="Nyertél!";
            win++;
            document.getElementById("win").innerHTML="Nyert(" + win + ")";
        }
        else{
            document.getElementById("eredmeny").innerHTML="Vesztettél!";
            lose++;
            document.getElementById("lose").innerHTML="Vesztett(" + lose + ")";
        }
    }
    
}



function reload()
{
    document.getElementById("eredmeny").innerHTML = "";
    document.getElementById("randomkep").src = "200iq.png";
}
