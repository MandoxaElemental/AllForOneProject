let AddTwoInputOne = document.getElementById("addTwo1Input");
let AddTwoInputTwo = document.getElementById("addTwo2Input");
let EnterBtn = document.getElementById("soldierBtn");
let numberOne = "0";
let numberTwo = "0";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/addtwonumbers/addtwonumbers/${numberOne}/${numberTwo}`;
let Result = document.getElementById('result')
let Soldier = document.getElementById('soldier')
let SoldierAudio = document.getElementById('soldierAudio')
const SoldierMusic = document.getElementById("soldierMusic");

SoldierMusic.loop = true

function bgMusic(){
    SoldierMusic.play()
}

onload=bgMusic()

const getSoldier = async () => {
    const response = await fetch(FetchLink);
    const data = await response.text();
    Result.innerText = data
  };

EnterBtn.addEventListener("click", async ()=>{
    numberOne = AddTwoInputOne.value
    numberTwo = AddTwoInputTwo.value
    FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/addtwonumbers/addtwonumbers/${numberOne}/${numberTwo}`;
    getSoldier()
})

Soldier.addEventListener("click", async ()=>{
    SoldierAudio.play();
})


