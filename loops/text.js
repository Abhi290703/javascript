// // take a numbers from 1 to 15 and add sum

// let sum = 0
// for (i = 1; i<=15 ; i++){
//     sum += i
// }
// console.log(sum)

// // using while
// let sum1 = 0
// let j = 1
// while(j<=15){
//     sum1 += j
//     j++
// }
// console.log(sum1)

// let k = 1
// let row = 5
// while(k<=row){
//     let pattern = "";
//     let j = 1;
//     while(j<=k) {
//         pattern+="*";
//         j++;
//     }
//     k++;
//     console.log(pattern);
// }

// 12345 program

let n = 1;
let row2 = 5;
for(n=1; n<=row2; n++){
    let pattern2 = " ";
    for (o=1; o<=n; o++){
        pattern2+=o+" ";
    }
    console.log(pattern2);
}


// triangle program using for loop


let row3 = 5;
let pattern3;
for ( let p=1; p<=row3 ; p++){
     pattern3 = " ";
    for ( let q=1; q<=row3-p; q++){
        pattern3+=" ";
    }
        for ( let r=1; r<=p; r++){
            pattern3+="* ";
        }
    console.log(pattern3);
}
