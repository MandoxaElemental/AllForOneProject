let OddOrEvenInput = document.getElementById("oddOrEvenInput");
let EnterBtn = document.getElementById("sniperBtn");
let num = "";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/oddoreven/oddoreven/${num}`;
let Result = document.getElementById('result')
let Sniper = document.getElementById('sniper')
let SniperAudio = document.getElementById('sniperAudio')
const SniperMusic = document.getElementById("sniperMusic");

SniperMusic.loop = true

function bgMusic(){
    SniperMusic.play()
}

onload=bgMusic()

const getSniper = async () => {
    const response = await fetch(FetchLink);
    const data = await response.text();
    Result.innerText = data
  };

EnterBtn.addEventListener("click", async ()=>{
    num = OddOrEvenInput.value
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/oddoreven/oddoreven/${num}`;
    getSniper()
})
Sniper.addEventListener("click", async ()=>{
    SniperAudio.play();
})


