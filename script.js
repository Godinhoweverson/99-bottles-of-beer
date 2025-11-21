let ul = document.querySelector("ul");

let bottles = 99;

while(bottles >= 0){
    let li = document.createElement("li");

    if(bottles < 1){
        li.textContent = "No more bottles of beer on the wall, no more bottles of beer Go to the store and buy some more, 99 bottles of beer on the wall"
    }else if(bottles === 1){
        li.textContent = `${bottles} bottle of beer on the wall, ${bottles} bottle of beer.
                            Take one down and pass it around, no more bottles of beer on the wall`
    }else{
        li.textContent = `${bottles} bottle${bottles > 1 ? "s" : " "} of beer on the wall, ${bottles} bottle${bottles > 1 ? "s" : " "} of beer.
                            Take one down and pass it around, ${bottles - 1} bottle${(bottles - 1) > 1 ? "s" : " "} of beer on the wall`
    }
  
    ul.appendChild(li);
    bottles--;
}