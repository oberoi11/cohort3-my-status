//there are always some background requests happening in the browser othe rthan the url how can we send those requests
//fetch returns a promise 
//javascript is single-threaded but we can get multithreaded feature through promises callbacks async/await
async function fn(){
    const response=await fetch("url",{
        method:GET // if not speicified it is get by default
    })
    const answer=await response.json()    //returns a promise
    console.log(answer)
    document.getElementById("root").innerHTML=answer.body
}
fn()

//fetch is native library present in browser and it is a client side libarary and not server libarary as it fetches the things from the browser
//axios is external library but it is also same as fetch

//now with axios i dont have to convert it to json just render where i want to render it 
await axios.get("url")



//now if i want to render this data onto the html page i can do this
<div id="root"></div>