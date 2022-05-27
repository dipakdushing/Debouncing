async function searchMovie(){
    try{
        let movie = document.querySelector("#query").value;
        let res = await fetch(`https://www.omdbapi.com/?apikey=cdc90ff8&s=${movie}`);
        let data = await res.json();
        return data.Search
    }catch(err){
        console.log(err);
    }
}

async function main(){
    let data = await searchMovie();
    console.log(data);

    if(data === undefined){
        return false;
    }
    appendData(data);
}

function appendData(user){
    document.querySelector("#movies").innerHTML="";
    user.map(function(el){

        var div = document.createElement("div");
        div.setAttribute("id","set");

        let p = document.createElement("div");
        p.textContent=el.Title;
        p.style.marginLeft="30px"
        let img = document.createElement("img");
        img.src=el.Poster;
        img.style.height="65px"
        img.style.width="58px";
       

        let div2 = document.createElement("div");
        div2.setAttribute("id","fix");
        div2.append(img,p);
        div.append(div2);


        document.querySelector("#movies").append(div);


    });
}

let timeId;

function debounce(func,delay){

    if(timeId){
        clearTimeout(timeId);
    }

   timeId = setTimeout(function(){
        func();
    },delay)
}

document.querySelector("#main").addEventListener("click",function(){
    var bag = document.querySelector("#movies");
    var inv = document.querySelector("#query");
    bag.style.display="none";
    inv.textContent=null;
})
// height: 200px;
// width: 306px;
// overflow: scroll;
// overflow-y: scroll;
// margin-left: 40%;
// overflow-x: hidden;
// position: absolute;

document.querySelector("#query").addEventListener("click",function(){
    var bag = document.querySelector("#movies");
    
    bag.style.display="block";
   
    
})