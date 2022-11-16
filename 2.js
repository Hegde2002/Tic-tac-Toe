var s1 = sessionStorage.getItem("s1");
var s2 = sessionStorage.getItem("s2");
let n = 0, k = 0, p,w=0;


function winner(s,k,l,m) {
for(i=1;i<=9;i++){
    if(i==k || i==l ||i==m){
       console.log("blur");
    }
    else{
        document.querySelector("."+"btn"+i).classList.add("blur");
    }
}
    document.querySelector(".winner").innerHTML=`The winner is Player-${s}`; 
    
    return 1;
}
function check(k) {
    
    p1 = document.querySelector(".btn1").innerHTML; 
    p2 = document.querySelector(".btn2").innerHTML;
    p3= document.querySelector(".btn3").innerHTML;
    p4 = document.querySelector(".btn4").innerHTML;
    p5 = document.querySelector(".btn5").innerHTML;
    p6 = document.querySelector(".btn6").innerHTML;
    p7=document.querySelector(".btn7").innerHTML;
    p8 = document.querySelector(".btn8").innerHTML;
    p9 = document.querySelector(".btn9").innerHTML;
    if(p1===p2 && p2===p3 ){
        
      if(p3===s1 ){
         winner(1,1,2,3);
         return 10;
      }
      else if(p3===s2){
        winner(2,1,2,3);
        return 10;
      }
    }
    if(p1===p4 && p4===p7 ){
        
        if(p7===s1 ){
           winner(1,1,4,7);
           return 10;
        }
        else if(p7===s2){
          winner(2,1,4,7);
          return 10;
        }
      }
      if(p7===p8 && p8===p9 ){
        
        if(p8===s1 ){
           winner(1,7,8,9);
           return 10;
        }
        else if(p8===s2){
          winner(2,7,8,9);
          return 10;
        }
      }
      if(p9===p6 && p6===p3 ){
        
        if(p3===s1 ){
           winner(1,6,9,3);
           return 10;
        }
        else if(p3===s2){
          winner(2,3,6,9);
          return 10;
        }
      }
      if(p1===p5 &&p5===p9 ){
        
        if(p1===s1 ){
           winner(1,1,5,9);
           return 10;
        }
        else if(p1===s2){
          winner(2,1,5,9);
          return 10;
        }
      }
      if(p3===p5 && p5===p7 ){
        
        if(p3===s1 ){
           winner(1,3,5,7);
           return 10;
        }
        else if(p3===s2){
          winner(2,3,5,7);
          return 10;
        }
      }
      if(p4===p5 && p5===p6 ){
        
        if(p4===s1 ){
           winner(1,4,5,6);
           return 10;
        }
        else if(p4===s2){
          winner(2,4,5,6);
          return 10;
        }
      }
      if(p2===p8 && p8===p5 ){
        
        if(p8===s1 ){
           winner(1,2,8,5);
           return 10;
        }
        else if(p8===s2){
          winner(2,5,2,8);
          return 10;
        }
      }
      if(k==9 && w==0){
        document.querySelector(".winner").innerHTML="Draw";
      }
      return k;
    
}

function enter(v) {
    if (k < 9) {
        n = n + 1;

        k = k + 1;

        if (n == 1) {
            switch (v) {
                case 1:
                    p = document.querySelector(".btn1").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn1").innerHTML = s1;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 2:
                    p = document.querySelector(".btn2").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn2").innerHTML = s1;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 3:
                    var p = document.querySelector(".btn3").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn3").innerHTML = s1;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 4:
                    var p = document.querySelector(".btn4").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn4").innerHTML = s1;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 5:
                    var p = document.querySelector(".btn5").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn5").innerHTML = s1;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 6:
                    var p = document.querySelector(".btn6").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn6").innerHTML = s1;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 7:
                    var p = document.querySelector(".btn7").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn7").innerHTML = s1;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 8:
                    var p = document.querySelector(".btn8").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn8").innerHTML = s1;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 9:
                    var p = document.querySelector(".btn9").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn9").innerHTML = s1;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;

                default:
                    break;
            }
        }
        else if (n == 2) {
            n = 0;
            switch (v) {
                case 1:
                    p = document.querySelector(".btn1").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn1").innerHTML = s2;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 2:
                    p = document.querySelector(".btn2").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn2").innerHTML = s2;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 3:
                    var p = document.querySelector(".btn3").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn3").innerHTML = s2;
                        check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 4:
                    var p = document.querySelector(".btn4").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn4").innerHTML = s2;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 5:
                    var p = document.querySelector(".btn5").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn5").innerHTML = s2;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 6:
                    var p = document.querySelector(".btn6").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn6").innerHTML = s2;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 7:
                    var p = document.querySelector(".btn7").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn7").innerHTML = s2;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 8:
                    var p = document.querySelector(".btn8").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn8").innerHTML = s2;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;
                case 9:
                    var p = document.querySelector(".btn9").innerHTML;
                    if (p === "") {
                        document.querySelector(".btn9").innerHTML = s2;
                        k=check(k);
                    }
                    else {
                        n = 1;
                        k = k - 1;
                    }
                    break;

                default:
                    break;
            }
        }

    }
    if(k==9 && w==0){
       
        document.querySelector(".winner").innerHTML="The game ended in draw"; 
        
       

    }
  

}