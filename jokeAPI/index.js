let fetchData = async () => {
    try{
        let jokeFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            headers: {
                Accept: 'application/json'
            }
        });
        let data = await jokeFetch.json();
        document.getElementById("joke").innerHTML = data.value;
        console.log(data)
    }catch(error){
        console.log(error);
    }
};

document.getElementById("button").addEventListener("click", fetchData);