const APILINK = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=56e8e76cff6e5457bba60aece3e23557&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=56e8e76cff6e5457bba60aece3e23557&query=";

const main = document.querySelector(".main");
const form = document.getElementById("form");
const search = document.getElementById("input");


async function returnMovie(url){
    try{
        let response = await fetch(url);
        let data = await response.json()
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement("div");
            div_card.setAttribute("class", "card");
            const div_column = document.createElement("div");
            div_column.setAttribute("class", "column");
            const div_row = document.createElement("div");
            div_row.setAttribute("class", "row");

            const img = document.createElement("img");
            img.setAttribute("id", "img");
            
            const title = document.createElement("h3");

            img.src = IMG_PATH + element.poster_path;
            title.innerHTML = `${element.title}`;

            div_card.appendChild(img);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.append(div_row)
        });
    }catch(error){
        console.log(error);
    }
    
} 
returnMovie(APILINK);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    main.innerHTML = '';

    const searchItem = search.value;

    if(searchItem){
        returnMovie(SEARCHAPI + searchItem);
        search.value = '';
    }

});

document.getElementById("heading").addEventListener("click", () => {
    window.location.reload();  
})