
let x = localStorage.getItem("charId");
console.log('x:', x)

async function makeApiRequest(id){
    try{



        let response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=dc037e83e85a37c1b65faa0088cb34f9&hash=01007301e25245ea228aee74a98ca911&ts=1`);

        let data = await response.json();
        console.log('data:', data);

        showData2(data);

    }catch(err){
        console.log('err:', err);
    }
}

makeApiRequest(x);

function showData2(data){

    // console.log("check", data.data.results[0].name);

    document.getElementById("nameofchar").innerText = data.data.results[0].name;

    document.getElementById("descriptiondiv").innerText = data.data.results[0].description
}



function goback() {
    window.location.href = "../index.html";
}