let colorInput = document.getElementById("colorInput");
let pluralNoun1Input = document.getElementById("pluralNoun1Input");
let placeInput = document.getElementById("placeInput");
let verb1Input = document.getElementById("verb1Input");
let verb2Input = document.getElementById("verb2Input");
let noun1Input = document.getElementById("noun1Input");
let adjective1Input = document.getElementById("adjective1Input");
let pluralObjectInput = document.getElementById("pluralObjectInput");
let noun2Input = document.getElementById("noun2Input");
let verb3Input = document.getElementById("verb3Input");
let pluralNoun2Input = document.getElementById("pluralNoun2Input");
let adjective2Input = document.getElementById("adjective2Input");
let pluralNoun3Input = document.getElementById("pluralNoun3Input");
let adverb1Input = document.getElementById("adverb1Input");
let verb4Input = document.getElementById("verb4Input");
let adverb2Input = document.getElementById("adverb2Input");
let EnterBtn = document.getElementById("madlibBtn");
let color = "";
let pluralNoun1 = "";
let place = "";
let verb1 = "";
let verb2 = "";
let noun1 = "";
let adjective1 = "";
let pluralObject = "";
let noun2 = "";
let verb3 = "";
let pluralNoun2 = "";
let adjective2 = "";
let pluralNoun3 = "";
let adverb1 = "";
let verb4 = "";
let adverb2 = "";
let FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/madlib/madlib/${color}/${pluralNoun1}/${place}/${verb1}/${verb2}/${noun1}/${adjective1}/${pluralObject}/${noun2}/${verb3}/${pluralNoun2}/${adjective2}/${pluralNoun3}/${adverb1}/${verb4}/${adverb2}`;
let Result = document.getElementById("result");
// let MadlibAudio = document.getElementById("madlibAudio");
// const MadlibMusic = document.getElementById("madlibMusic");

// //MadlibMusic.loop = true;

// function bgMusic() {
//   MadlibMusic.play();
// }

// onload = bgMusic();

const getMadlib = async () => {
  const response = await fetch(FetchLink);
  const data = await response.text();
  Result.innerHTML = data
};

EnterBtn.addEventListener("click", async () => {
    let color = colorInput.value
    let pluralNoun1 = pluralNoun1Input.value
    let place = placeInput.value
    let verb1 = verb1Input.value
    let verb2 = verb2Input.value
    let noun1 = noun1Input.value
    let adjective1 = adjective1Input.value
    let pluralObject = pluralObjectInput.value
    let noun2 = noun2Input.value
    let verb3 = verb3Input.value
    let pluralNoun2 = pluralNoun2Input.value
    let adjective2 = adjective2Input.value
    let pluralNoun3 = pluralNoun3Input.value
    let adverb1 = adverb1Input.value
    let verb4 = verb4Input.value
    let adverb2 = adverb2Input.value
  FetchLink = `https://greinaresallforoneapi-h4gzeacegyfeajcf.westus-01.azurewebsites.net/madlib/madlib/${color}/${pluralNoun1}/${place}/${verb1}/${verb2}/${noun1}/${adjective1}/${pluralObject}/${noun2}/${verb3}/${pluralNoun2}/${adjective2}/${pluralNoun3}/${adverb1}/${verb4}/${adverb2}`;
  getMadlib();
});

//Madlib.addEventListener("click", async ()=>{
//  MadlibAudio.play();
//})
