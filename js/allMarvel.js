async function makeApiRequest(){

    try{

        let response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=dc037e83e85a37c1b65faa0088cb34f9&hash=01007301e25245ea228aee74a98ca911&ts=1`);

        let data = await response.json();
        // console.log('data:', data);

        displyData(data);

    }catch(err){
        console.log('err:', err);
    }
}
makeApiRequest();
function displyData(data){
    // console.log('data:', data)

    var container = document.getElementById("contallchar");

    for(let i=0; i<data.data.results.length; i++){

        // console.log(data.data.results[i].name);

        let carddiv = document.createElement("div");
        carddiv.classList.add("card");

        // div.setAttribute("id", "id_you_like");
        carddiv.setAttribute("id",  data.data.results[i].id);

        let namediv = document.createElement("div");
        let nametag = document.createElement('h3');
        nametag.innerText = data.data.results[i].name

        namediv.appendChild(nametag);
        carddiv.appendChild(namediv);

        let imgdiv =document.createElement("div");
        let imgtag = document.createElement('img');
        imgtag.src = data.data.results[i].thumbnail.path + "." +data.data.results[0].thumbnail.extension;
        
        imgdiv.appendChild(imgtag);
        carddiv.appendChild(imgdiv);

        let descriptiondiv = document.createElement('div');
        let ptag = document.createElement("p");
        ptag.innerText = data.data.results[i].description;
        
        descriptiondiv.appendChild(ptag);
        carddiv.appendChild(descriptiondiv);

        let btndiv = document.createElement('div');
        let btn = document.createElement('button');
        btn.innerText = "More Info"
        btn.onclick = function(){
            getId(this.id);
        }

        btndiv.appendChild(btn);
        carddiv.appendChild(btndiv);

        container.appendChild(carddiv);
        
        // div.onclick = function()  {getId(this.id)}
        
    }

}

function getId(id){
    console.log(id);

    // localStorage.setItem("charId", id);

    // window.location.href = "./html/showData.html";
}