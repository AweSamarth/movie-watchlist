document.getElementById("thebutton").addEventListener("click", func)
document.getElementById("thesearchterm").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        document.getElementById("thebutton").click();

    }
})
let newarr=[]
function func(){
    const searchterm= document.getElementById("thesearchterm")
    const search=document.getElementById("")
    fetch(`https://www.omdbapi.com/?s=${searchterm.value}&apikey=9accb26`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)

        document.getElementById("results").innerHTML=''
    // console.log(data)
    if (data.Response=="True"){
        // console.log(data.Search[0])
        for (let i=0;i<data.Search.length;i++){
            fetch(`https://www.omdbapi.com/?t=${data.Search[i].Title}&apikey=9accb26`)
            .then(theresponse=>theresponse.json())
            .then(thedata=>{
               console.log(thedata.Title)  
                
              document.getElementById("results").innerHTML+=`              
              <div class="oneresult">
              <img src="${data.Search[i].Poster}" id="resultimage" />
              <div class="resulttext">
                  <div class="justthehead">
                      <div class="heading" id="title${i}">${thedata.Title}</div>
                      <div class="rating"><i id="theicon" class="fa-solid fa-star"></i> ${thedata.imdbRating}</div>
                  </div>
                  <div class="midwala">
                      <div class="watchtime">${thedata.Runtime}</div>
                      <div class="genre">${thedata.Genre}</div>
                      <div class="watchlist" onclick="adder(${i})"><i class="fa-solid fa-circle-plus"></i>  Watchlist</div>
                  </div>
                  <div class="plot">${thedata.Plot}
                  </div>

              </div>
              
          </div>
              
              `
            

            })

        }}

        else{
            document.getElementById("results").innerHTML=`
            <div class="initialfinal"><div class="anotheraligner">
           
            <div class="icontext">Could not find what you were looking for. Please try searching for something else</div>
        </div>
        </div>
            `
            
        }

        // console.log(newvar)
        // document.getElementById('results').innerHTML=newvar
   



    })

}

function adder(c){
    let myvar=document.getElementById(`title${c}`).textContent
    if ( newarr.includes(myvar)===false){
        console.log(myvar)
        console.log(newarr)
    newarr.push(document.getElementById(`title${c}`).textContent)
    localStorage.setItem("list", JSON.stringify(newarr))
    }
    else{
        console.log("ok then")
    }
}
