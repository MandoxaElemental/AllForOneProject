let FrenchBtn = document.getElementById('french')
let BurgerBtn = document.getElementById('burger')
let TacoBtn = document.getElementById('taco')
let ChickenBtn = document.getElementById('chicken')
let PizzaBtn = document.getElementById('pizza')
let OtherBtn = document.getElementById('other')
let yourChoice = "";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/{yourChoice}`;
let Result = document.getElementById('result')
let Spy = document.getElementById('spy')
let SpyAudio = document.getElementById('spyAudio')
const SpyMusic = document.getElementById("spyMusic");

SpyMusic.loop = true

function bgMusic(){
    SpyMusic.play()
}

onload=bgMusic()

const getSpy = async () => {
    const response = await fetch(FetchLink);
    const data = await response.text();
    Result.innerText = data
  };

FrenchBtn.addEventListener("click", async ()=>{
    yourChoice = "french";
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/${yourChoice}`;
    getSpy()
})
BurgerBtn.addEventListener("click", async ()=>{
    yourChoice = "burger";
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/${yourChoice}`;
    getSpy()
})
TacoBtn.addEventListener("click", async ()=>{
    yourChoice = "tacos";
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/${yourChoice}`;
    getSpy()
})
ChickenBtn.addEventListener("click", async ()=>{
    yourChoice = "chicken";
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/${yourChoice}`;
    getSpy()
})
PizzaBtn.addEventListener("click", async ()=>{
    yourChoice = "pizza";
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/${yourChoice}`;
    getSpy()
})
OtherBtn.addEventListener("click", async ()=>{
    yourChoice = "other";
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/${yourChoice}`;
    getSpy()
})
// Spy.addEventListener("click", async ()=>{
//     SpyAudio.play();
// })


