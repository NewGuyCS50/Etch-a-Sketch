const container = document.querySelector("#container")
const button = document.querySelector("button")



let input = "10";
button.addEventListener("click",()=> {
   input = prompt("Number of squares per each side? must be less than 100:");
  
   if (input > 0 && input < 100){
   GridGen(input)
   }
})
GridGen(input)




//Our function
function GridGen (size){
container.innerHTML = "";
 
let WidthHeight = (800/size);


let num = 1;
while (num <= size*size)
{
   const div = document.createElement("div")
   container.appendChild(div)

  

   div.style.width = `${WidthHeight}px`
   div.style.height = `${WidthHeight}px`

   

   div.addEventListener("mouseenter", ()=> div.style.backgroundColor = "yellow")

   num++
}
}

