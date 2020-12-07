function randomStart(){
    document.getElementById("inputMessage").value = getRandomInt(1,1000000000); 
}

function getRandomInt(min,max) { /* getting a random between given max and min values */
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random()*(max-min))+min;
}

function getGCD(a,b) { /* getting the greatest common divisor */
    var tmp;
    while (b !== 0) {
        tmp = b;
        b = a%b;
        a = tmp;
    }
    return a;
}

function getPower(a,b,p) { /* getting the a^b mod p */
    if (b == 1)
     return a%p;
    else {
     x = getPower(a,Math.floor(b/2),p);
     if (b%2 == 0) 
      return (x*x)%p;
     else return (((x*x)%p)*a)%p;
    }
}

function fermatTesting() { //Checking Num by using Fermat's theorem
    let Num = document.getElementById("inputMessage").value;
    let i=0;
    let res = false;
    while(i<30){
        var a = getRandomInt(2,Num-1);
        if (getGCD(a,Num) > 1) {
            res = true;
            break;
        }
        else {
            if (getPower(a,Num-1,Num) !== 1) {
                res = true;
                break;
            }else{
                i++;
            }
        }
    }

    if(res){
        document.getElementById("result").innerHTML = "Liczba jest złożona.";
    }
    else{
        document.getElementById("result").innerHTML = "Liczba jest pierwsza."; 
    }
}