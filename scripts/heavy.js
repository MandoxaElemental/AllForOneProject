let GreaterThanInput1 = document.getElementById("greaterThanInput1");
let GreaterThanInput2 = document.getElementById("greaterThanInput2");
let EnterBtn = document.getElementById("heavyBtn");
let firstNum = "0";
let secondNum = "0";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/greaterthan/greaterthan/${firstNum}/${secondNum}`
let Result = document.getElementById('result')
let Heavy = document.getElementById('heavy')
let HeavyAudio = document.getElementById('heavyAudio')
const HeavyMusic = document.getElementById("heavyMusic");

HeavyMusic.loop = true

function bgMusic(){
    HeavyMusic.play()
}

onload=bgMusic()

const getHeavy = async () => {
    const response = await fetch(FetchLink);
    const data = await response.text();
    Result.innerText = data
  };

EnterBtn.addEventListener("click", async ()=>{
    firstNum = GreaterThanInput1.value
    secondNum = GreaterThanInput2.value
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/greaterthan/greaterthan/${firstNum}/${secondNum}`;
    getHeavy()
})

//Heavy.addEventListener("click", async ()=>{
  //  HeavyAudio.play();
//})


