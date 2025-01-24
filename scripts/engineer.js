let reverseItNumericalInput = document.getElementById("reverseItNumericalInput");
let EnterBtn = document.getElementById("engineerBtn");
let userInput = "";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/reverseit/reversednum/${userInput}`;
let Result = document.getElementById('result')
let Engineer = document.getElementById('engineer')
let EngineerAudio = document.getElementById('engineerAudio')
const EngineerMusic = document.getElementById("engineerMusic");

EngineerMusic.loop = true

function bgMusic(){
    EngineerMusic.play()
}

onload=bgMusic()

const getEngineer = async () => {
    const response = await fetch(FetchLink);
    const data = await response.text();
    Result.innerText = data
  };

EnterBtn.addEventListener("click", async ()=>{
    userInput = reverseItNumericalInput.value
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/reverseit/reversednum/${userInput}`;
    getEngineer()
})
Engineer.addEventListener("click", async ()=>{
    EngineerAudio.play();
})


