var timerId;

let AudioFlag = false;

function debounce (func, delay){

    if(timerId){
        clearTimeout(timerId);
    }

    timerId=setTimeout(() => {
        func();
    }, delay)
}



function main(){
    let name = document.getElementById("inputbox").value;
    console.log('name:', name)

    makeApiRequest(name)

}

async function makeApiRequest(name){
    try{



        let response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=dc037e83e85a37c1b65faa0088cb34f9&hash=01007301e25245ea228aee74a98ca911&ts=1&nameStartsWith=${name}`);

        let data = await response.json();
        console.log('data:', data);

        showData(data);

    }catch(err){
        console.log('err:', err);
    }
}


function showData(data){
    console.log('data:', data);

    var x = document.getElementById("search_reasult");

    x.innerHTML = "";

    // console.log(data.data.results[0].name);

    for(let i=0; i<data.data.results.length; i++){
        console.log(data.data.results[i].name);

        let div = document.createElement("div");
        div.classList.add("each_reasult");

        // div.setAttribute("id", "id_you_like");
        div.setAttribute("id",  data.data.results[i].id);

        div.onclick = function()  {getId(this.id)}
        
        let ptag = document.createElement("p");
        ptag.innerText = data.data.results[i].name;

        div.appendChild(ptag);

        x.appendChild(div);
    }

}

function getId(id){
    console.log(id);

    localStorage.setItem("charId", id);

    window.location.href = "./html/showData.html";
}


// var searchinput = document.getElementById("inputbox");

// searchinput.addEventListener("keyup", function(event){
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("searchicon").click();
//     }
// })


function funAllCharPage(){
    window.location.href = "./html/AllMarvel.html";
}


function toggleAudio(){
    var audio = document.getElementById("myAudio");
    var audioIcon = document.getElementById("audioicon");

    if(AudioFlag == false){
        audio.play();
        AudioFlag=true;
    }else{
        audio.pause();
        AudioFlag=false;
    }
}