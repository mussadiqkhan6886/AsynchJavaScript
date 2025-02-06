const  BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';

let dropDown = document.querySelectorAll('select');
let toCurr = document.querySelector(".to select");
let fromCurr = document.querySelector(".from select");
let btn = document.getElementById("button");

for(let select of dropDown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === 'from' && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === 'to' && currCode === "PKR"){
            newOption.selected = "selected";
        }
        select.appendChild(newOption);
    }
    select.addEventListener("change", (e) => {
        updateFlag(e.target)
    })
};

function updateFlag(element){
    let currCode = element.value;
    let Code = countryList[currCode]
    let img = element.parentElement.querySelector('img');
    let newSrc = `https://flagsapi.com/${Code}/flat/64.png`;
    img.src = newSrc;
}

btn.addEventListener("click", async () => {
    let amountValue = document.getElementById("input");
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();

    console.log(data);

    // API Not working properly Sorry

})