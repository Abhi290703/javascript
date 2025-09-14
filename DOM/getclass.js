// function countfruits(){     // countfruits is defined at button on onclick function
//     let items = document.getElementsByClassName("fruits");  // we have declare fruits has a classname
//     let total = items.length;   // here we are totaling the items
//     document.getElementById("result").innerText = "Total fruits :" + total;
//     }



function changecolor(){
    let item = document.getElementsByClassName("highlight");
    for (let i = 0; i < item.length; i++){
        item[i].style.backgroundColor = "pink";
        item[i].style.color = "gold";
    }
}