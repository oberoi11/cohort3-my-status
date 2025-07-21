//there are always some background requests happening in the browser othe rthan the url how can we send those requests
//fetch returns a promise 
//javascript is single-threaded but we can get multithreaded feature through promises callbacks async/await
async function fn(){
    const response=await fetch("url")
    const answer=await response.json()    //returns a promise
    console.log(answer)
    document.getElementById("root").innerHTML=answer.body
}
fn()
//now if i want to render this data onto the html page i can do this
<div id="root"></div>