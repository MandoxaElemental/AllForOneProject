
let AskingQuestions1Input = document.getElementById("askingQuestions1Input");
let AskingQuestions2Input = document.getElementById("askingQuestions2Input");
let EnterBtn = document.getElementById("medicBtn");
let name = "Herbert";
let time = "1";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/askingquestions/askingquestions/${name}/${time}`
let Result = document.getElementById('result')
let Medic = document.getElementById('medic')
let MedicAudio = document.getElementById('medicAudio')
const MedicMusic = document.getElementById("medicMusic");

MedicMusic.loop = true

function bgMusic(){
    MedicMusic.play()
}

onload=bgMusic()

const getMedic = async () => {
    const response = await fetch(FetchLink);
    const data = await response.text();
    Result.innerText = data
  };

EnterBtn.addEventListener("click", async ()=>{
    name = AskingQuestions1Input.value
    time = AskingQuestions2Input.value
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/askingquestions/askingquestions/${name}/${time}`;
    getMedic()
})

Medic.addEventListener("click", async ()=>{
    MedicAudio.play();
})


