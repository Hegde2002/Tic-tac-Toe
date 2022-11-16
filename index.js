let n = 0, s1, s2,player=0;



function play() {
   if(player==1){
    location.assign("index2.html")
   }
   else{
    document.querySelector(".alert").innerHTML="Please choose the symbols first";
   }
}
function get(symbol) {
    document.querySelector(".alert").innerHTML="";
    n = n + 1;
    if (n == 1) {
        s1 = symbol;
        sessionStorage.setItem("s1",s1);
        document.querySelector(".num").innerHTML=" 2";
    }
    else if (n == 2) {
        if (symbol === s1) {
         document.querySelector(".alert").innerHTML="Choose a different symbol please";
         n=1;
        }
        else {
            s2 = symbol;
            sessionStorage.setItem("s2",s2);//storing variable tempararily to pass to the other js page
            player=1;
        }

    }
}

