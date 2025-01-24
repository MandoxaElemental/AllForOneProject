let ReverseItAlphaInput = document.getElementById("reverseItAlphaInput");
let EnterBtn = document.getElementById("demomanBtn");
let userInput = "";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/reverseit/reversedword/${userInput}`;
let Result = document.getElementById('result')
let Demoman = document.getElementById('demoman')
let DemomanAudio = document.getElementById('demomanAudio')
const DemomanMusic = document.getElementById("demomanMusic");

DemomanMusic.loop = true

function bgMusic(){
    DemomanMusic.play()
}

onload=bgMusic()

const getDemoman = async () => {
    const response = await fetch(FetchLink);
    const data = await response.text();
    Result.innerText = data
  };

EnterBtn.addEventListener("click", async ()=>{
    userInput = ReverseItAlphaInput.value
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/reverseit/reversedword/${userInput}`;
    getDemoman()
})
Demoman.addEventListener("click", async ()=>{
    DemomanAudio.play();
})


