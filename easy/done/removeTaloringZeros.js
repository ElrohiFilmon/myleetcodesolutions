var num = "52130100"

// var arry = Array.from(num);
var arry = []
for(x of num){
    arry.push(x)
}
console.log(num)
var end = arry.length - 1;
while(arry[end]==0){
    if(arry[end]==0){
        arry.pop()
        
    }
    end--;
}
    
num = arry.join("");


console.log(num);


for(x in arry){
    var end = arry.length - 1;
    if(arry[end]==0){
        arry.pop()
    }
}

