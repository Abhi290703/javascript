let  a = 15;
for (let i=0;i<=15; i++){
    console.log(i)
}

let b  = 0;
while(b<=15){
    console.log(b);
    b++;
}

//right angle triangle pattern using for loop

let row = 5;
for (let i = 1; i <= row; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}


let c = 5;
let row2 = 1;
while(c>=row2){
    let pattern2 = " ";
    let d = 1;
    while(d<=c){
        pattern2+="* ";
        d++;
    }
    console.log(pattern2);
    c--;
}

let row3 = 4;
for (let i=0 ; i<=row3 ; i++){
    pattern = " "
    for(let j=0; j<=row3-i; j++){
        pattern+="* ";
    }
    console.log(pattern);
}

// triangle

let row4 = 5;
for (let i=0; i<=row4; i++){
    pattern = " "
    for(let j=0; j<=row4-i; j++){
        pattern+=" "
    }
    for (let k=0; k<=i; k++){
        pattern+="*  "
    }
    console.log(pattern);
}

// triangle program using for loop


// let row3 = 5;
// let pattern3;
// for ( let p=1; p<=row3 ; p++){
//      pattern3 = " ";
//     for ( let q=1; q<=row3-p; q++){
//         pattern3+=" ";
//     }
//         for ( let r=1; r<=p; r++){
//             pattern3+="* ";
//         }
//     console.log(pattern3);
// }
