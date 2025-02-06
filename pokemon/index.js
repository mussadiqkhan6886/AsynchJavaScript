let pokemon = async () => {
    try{
        const pokemonName = document.getElementById("input").value.toLowerCase();
        const response = await  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("No Pokemon Found");
        }

        const data = await response.json();
        const pokemonImage = data.sprites.front_default;

        let image = document.getElementById("image");
        
        if(!image){
            image = document.createElement('img');
            image.setAttribute("id", "image");
            image.alt = "No Pokemon Found";
            document.getElementById("screen").append(image);
        }
        
        image.src = pokemonImage;
        image.style.display = 'block';
        
    }catch(error){
        console.log(error);
    }
    
}