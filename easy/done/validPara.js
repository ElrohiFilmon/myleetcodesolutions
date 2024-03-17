
var s = "(){}[]";
var sArray = [];
var pStack = [];

for (x of s) {
    sArray.push(x);
}

const mapping = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
]);

for (let char of sArray) {
    if(mapping.has(char)) {
        pStack.push(char);
        console.log(pStack);
    }else{
        if (pStack.length === 0 || mapping.get(pStack.pop()) !== char) {
            console.log("Invalid");
            return;
        }
    }
}

if (pStack.length === 0) {
    console.log("Valid");
} else {
    console.log("Invalid");
}

