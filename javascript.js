var checkBox = document.getElementById("checky");

document.getElementById("run").onclick = function(){
  if (checkBox.checked == true){ //if checkbox is true solve for hypotenuse function
    findH()
    }else if(checkBox.checked == false){ //if checkbox is true for solve unknown value function
      findA()
      
    
      }

    }



  
     

function findH(){ // solve for hypotenuse function
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    if(a<1 || b<1){
      alert("Please only use positive values!");
      }else{
        document.getElementById("av").innerHTML = a * a;
        document.getElementById("bv").innerHTML = b * b;
        document.getElementById("result").innerHTML = Math.round((Math.sqrt((a * a) + (b *   b)) * 100)) / 100; //formula itself
      }
  }


function findA(){ // solve for unknown value function
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    if(a<1 || b<1){
      alert("Please only use positive values!");
      }
    if(a<b){
        document.getElementById("av").innerHTML = a * a;
        document.getElementById("bv").innerHTML = b * b;
        document.getElementById("result").innerHTML = Math.round((Math.sqrt((b * b) - (a * a)) * 100)) / 100;
    } //formula for unknown value 1
    if(b<a){
        document.getElementById("av").innerHTML = a * a;
        document.getElementById("bv").innerHTML = b * b;
        document.getElementById("result").innerHTML = Math.round((Math.sqrt((a * a) - (b * b)) * 100)) / 100;
    } //formula for unknown value 2
}