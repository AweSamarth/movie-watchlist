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