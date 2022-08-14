let newarray=[]
let thisarray=JSON.parse(localStorage.getItem("list"))
if (thisarray.length<1){
document.getElementById("results").innerHTML=`
<div class="initialfinal"><div class="anotheraligner">
<div class="icontext">Your watchlist is looking a little empty...</div>
<a href="./index.html">
<div class="icontext" id="addsome"><i class="fa-solid fa-circle-plus"></i>  Let's add some movies!</div></a>
</div>
</div>
`   
}
else{
    document.getElementById("results").innerHTML=``

for (let i=0;i<thisarray.length;i++){
    newarray.push(thisarray[i])
    fetch(`https://www.omdbapi.com/?t=${thisarray[i]}&apikey=9accb26`)
    .then (response=>response.json())
    .then(data=>{
        console.log(data)
        

        document.getElementById("results").innerHTML+=`              
              <div class="oneresult">
              <img src="${data.Poster}" id="resultimage" />
              <div class="resulttext">
                  <div class="justthehead">
                      <div class="heading" id="title${i}">${data.Title}</div>
                      <div class="rating"><i id="theicon" class="fa-solid fa-star"></i> ${data.imdbRating}</div>
                  </div>
                  <div class="midwala">
                      <div class="watchtime">${data.Runtime}</div>
                      <div class="genre">${data.Genre}</div>
                      <div class="watchlist" onclick="subtracter(${i})"><i class="fa-solid fa-circle-minus"></i> Remove</div>
                  </div>
                  <div class="plot">${data.Plot}
                  </div>

              </div>
              
          </div>
              
              `




    })
    






}
console.log(newarray)

function subtracter(x){
    let myvar=document.getElementById(`title${x}`).textContent
    let theindex=newarray.indexOf(myvar)
    newarray.splice(theindex,1)
    localStorage.setItem("list", JSON.stringify(newarray))
    location.reload()
}}
