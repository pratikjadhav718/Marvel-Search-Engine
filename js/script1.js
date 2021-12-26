async function makeApiRequest(){
    try{

        let response = await fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=dc037e83e85a37c1b65faa0088cb34f9&hash=01007301e25245ea228aee74a98ca911&ts=1&nameStartsWith=sp");

        let data = await response.json();
        console.log('data:', data);

    }catch(err){
        console.log('err:', err);
    }
}