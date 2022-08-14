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
    fetch(`http://www.omdbapi.com/?s=${searchterm.value}&apikey=9accb26`)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("results").innerHTML=''
    console.log(data)
        // console.log(data.Search[0])
        for (let i=0;i<data.Search.length;i++){
            fetch(`http://www.omdbapi.com/?t=${data.Search[i].Title}&apikey=9accb26`)
            .then(theresponse=>theresponse.json())
            .then(thedata=>{
            //   console.log(thedata.Title)  
              document.getElementById("results").innerHTML+=`<div class="oneresult">
              <img src="${data.Search[i].Poster}" id="resultimage"/> 
                <div class="resulttext">${thedata.Title}</div>
              </div>`
            })

        }

        // console.log(newvar)
        // document.getElementById('results').innerHTML=newvar
   



    })

}

