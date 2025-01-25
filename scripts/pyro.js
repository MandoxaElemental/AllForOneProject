let Magic8BallInput = document.getElementById("magic8BallInput");
let EnterBtn = document.getElementById("pyroBtn");
let userInput = "";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/magic8ball/magic8ball/${userInput}`;
let Result = document.getElementById('result')
let Pyro = document.getElementById('pyro')
let PyroAudio = document.getElementById('pyroAudio')
let PyrovisionBool = true;
let Pyrovision = document.getElementById('goggles')
let PyroBody = document.getElementById('pyroBody')
const PyroMusic = document.getElementById("pyroMusic");
const PyrovisionMusic = document.getElementById("pyrovisionMusic");

PyroMusic.loop = true
PyrovisionMusic.loop = true

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
Pyrovision.addEventListener("click", async ()=>{
    if(PyrovisionBool === true){
        PyroMusic.pause();
        PyroMusic.currentTime = 0;
        PyrovisionMusic.play();
        PyrovisionBool = false;
        PyroBody.className = "pyroLand"
     } else if (PyrovisionBool === false){
        PyrovisionMusic.pause();
        PyrovisionMusic.currentTime = 0;
        PyroMusic.play();
        PyrovisionBool = true;
        PyroBody.className = "pyroDefault"
    }

})


