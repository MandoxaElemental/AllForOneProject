let SayHelloInput = document.getElementById("sayHelloInput");
let EnterBtn = document.getElementById("scoutBtn");
let name = "Jeremy";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/sayhello/helloworld/${name}`;
let Result = document.getElementById('result')
let Scout = document.getElementById('scout')
let ScoutAudio = document.getElementById('scoutAudio')
const ScoutMusic = document.getElementById("scoutMusic");

ScoutMusic.loop = true

function bgMusic(){
    ScoutMusic.play()
}

onload=bgMusic()

const getScout = async () => {
    const response = await fetch(FetchLink);
    const data = await response.text();
    Result.innerText = data
  };

EnterBtn.addEventListener("click", async ()=>{
    if(SayHelloInput.value == "")
    {
        name = "Jeremy"
    } else{
        name = SayHelloInput.value
    }
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/sayhello/helloworld/${name}`;
    getScout()
})
Scout.addEventListener("click", async ()=>{
    ScoutAudio.play();
})


