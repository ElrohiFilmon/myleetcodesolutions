// /**
//  * @param {number[]} tickets
//  * @param {number} k
//  * @return {number}
//  */
// var timeRequiredToBuy = function(tickets, k) {
//     // let ticketq =[...tickets];
//     // console.log(ticketq);
    
//     let count = 0
//     let currentPos = k;

//     while(tickets[k]!==0&&currentPos>0){
//         if(tickets.length>k){
//             tickets.push(tickets.shift()-1);
//             console.log(tickets)
//             count++;
//         }
//     }

//     // console.log(count*2);
//     return count;
// };

// /**
//  * @param {number[]} tickets
//  * @param {number} k
//  * @return {number}
//  */
// var timeRequiredToBuy = function(tickets, k) {
//     let count = 0;
//     let start = 0;
//     while(tickets[k]!==0){
//         if(start<=tickets.length-1){
//             tickets[start]-=1
//             count++;
//             start++;
//         }else{
//             start = 0;
//         }
//     }
//     console.log(count);
// };

// /**
//  * @param {number[]} tickets
//  * @param {number} k
//  * @return {number}
//  */

var timeRequiredToBuy = function(tickets, k) {
    let count = 0;
    let start = 0;
    while (tickets[k] !== 0) {
        if (start <= tickets.length - 1 && tickets[start] > 0) {
            tickets[start] -= 1;
            count++;
            start++;
        } else if (tickets[start] === 0) {
            start++;
        } else {
            start = 0;
        }
    }
    console.log(count)
    return count;
};
timeRequiredToBuy([2,3,2],2);
