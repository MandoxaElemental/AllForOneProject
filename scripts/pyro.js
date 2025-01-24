let Magic8BallInput = document.getElementById("magic8BallInput");
let EnterBtn = document.getElementById("pyroBtn");
let userInput = "";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/magic8ball/magic8ball/${userInput}`;
let Result = document.getElementById('result')
let Pyro = document.getElementById('pyro')
let PyroAudio = document.getElementById('pyroAudio')
const PyroMusic = document.getElementById("pyroMusic");

PyroMusic.loop = true

function bgMusic(){
    PyroMusic.play()
}

onload=bgMusic()

const getPyro = async () => {
    const response = await fetch(FetchLink);
    const data = await response.text();
    Result.innerText = data
  };

EnterBtn.addEventListener("click", async ()=>{
    userInput = Magic8BallInput.value
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/magic8ball/magic8ball/${userInput}`;
    getPyro()
})
Pyro.addEventListener("click", async ()=>{
    PyroAudio.play();
})


