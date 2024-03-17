
function palindrome(x){
    
    var origionalNumber = x;

    while(x !== 0){
        reversedNumber = reversedNumber * 10;
        reversedNumber =  reversedNumber+(x%10);
        x = x/10;

           
    }
    console.log(origionalNumber);
    console.log(reversedNumber);

    if(origionalNumber == reversedNumber){
        console.log("Palindrome");

    }else{
        console.log("Not Palindrome");
    }
}



