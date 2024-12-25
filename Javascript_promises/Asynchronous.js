async function PromiseObj{
    try{
        const response = await fetch("https//api.coinbase/assets");

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}