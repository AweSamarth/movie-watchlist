document.getElementById("thebutton").addEventListener("click", func)
document.getElementById("thesearchterm").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        document.getElementById("thebutton").click();

    }
})
function func(){
    const searchterm= document.getElementById("thesearchterm")
    const search=document.getElementById("")
    fetch(`http://www.omdbapi.com/?s=${searchterm.value}&apikey=9accb26`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        // console.log(data.Search[0])
        let mything=data.Search.map(result=>{
            // console.log(result.Title)
            const {Title:title, Poster:poster, Plot:plot}=result
            // console.log(result.poster)
            return (`
                
                <div class="oneresult">
                <img src="${poster}" id="resultimage" />
                ${title}</div> `)

        }).join('')
        // console.log(mything)
        document.getElementById("results").innerHTML= `${mything}`


    })
}
