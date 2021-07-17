var hr = 0;  // starting value is 0 
var min = 0;  // starting value is 0    
var sec = 0; // starting value is 0
var  count = 0;

var timer = false // thats checking timer are running or not




function start(){
   timer=true;   // means timer are running 
   stopwatch(); // calling stopwatch
}
function stop(){
    timer=false;

}
function reset(){
    timer=false;

// here all variable 0 becouse doing reset function     
    hr = 0;    
    min = 0;
    sec = 0;
    count = 0;
 
 // this using for showing in display for reset functiom   
     document.getElementById("hr").innerHTML = hr;
// if you want reset contain 00 number than pass 00 string this:-
    // document.getElementById("min").innerHTML = "00";
     document.getElementById("min").innerHTML = min;
     document.getElementById("sec").innerHTML = hr;
     document.getElementById("count").innerHTML = hr;


}
function stopwatch(){   // Actual function
    if(timer == true){   // this condition is stop when timer = false 
        count = count+1;  // every 10 second milisecond value change

      // this condition for mili second value under 100 and increase sec per 100mili second
        if(count == 100){   // means if count=100 than increase sec+1
            sec = sec + 1;
            count = 0;    // here if count=0 not than only 1 time change in value (sec)
      }
 
      // this condition for min
       if(sec == 60){          
           min = min + 1;
           sec = 0;
       }
     // this condition for hr
       if(min == 60){
           hr = hr + 1;
           min = 0;  // becouse when 1 hours are complete than min and second both are zero
           sec = 0;
       }

    // here stroning hr value in hrString

     var hrString = hr;  
     var minString = min;
     var secString = sec;
     var countString = count;


    // here converting number(single digit) into a string 

    if(hr<10){
        hrString = "0" + hrString; // its mean when hr value less than 10 than add 0 
    }
    if(min<10){
        minString = "0" + minString; 
    }
    if(sec<10){
        secString = "0" + secString;
    }
    if(count<10){
        countString = "0" + countString; 
    }

    
        document.getElementById("hr").innerHTML = hrString;  // change in innerHTML of hr
        document.getElementById("min").innerHTML = minString;  // change in innerHTML of min
        document.getElementById("sec").innerHTML = secString;  // here selecting sec throw id and change in innerHTML thats contain same value of sec 
        document.getElementById("count").innerHTML = countString; // here selecting count throw id and change in innerHTMl thats contain same value of count  

        setTimeout( "stopwatch()", 10);   // here 10 in mili second 
    }

}