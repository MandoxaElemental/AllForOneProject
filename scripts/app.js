let ScoutBtn = document.getElementById("scoutBtn");
let SoldierBtn = document.getElementById("soldierBtn");
let PyroBtn = document.getElementById("pyroBtn");
let DemomanBtn = document.getElementById("demomanBtn");
let HeavyBtn = document.getElementById("heavyBtn");
let EngineerBtn = document.getElementById("engineerBtn");
let MedicBtn = document.getElementById("medicBtn");
let SniperBtn = document.getElementById("sniperBtn");
let SpyBtn = document.getElementById("spyBtn");
let MissionBtn = document.getElementById("briefingBtn");

const MenuMusic = document.getElementById("menuMusic");

MenuMusic.loop = true

function bgMusic(){
    MenuMusic.play()
}

onload=bgMusic()

ScoutBtn.addEventListener("mouseover", function(){
    document.getElementById("mercIcon").src = "../assets/charIcons/Scout_Icon.jpg"
    document.getElementById('job').innerText = "Rapid Recovery"
    document.getElementById('activity').innerText = "Say Hello"
})
SoldierBtn.addEventListener("mouseover", function(){
    document.getElementById("mercIcon").src = "../assets/charIcons/Soldier_Icon.jpg"
    document.getElementById('job').innerText = "Shock & Awe"
    document.getElementById('activity').innerText = "Add Two Numbers"
})
PyroBtn.addEventListener("mouseover", function(){
    document.getElementById("mercIcon").src = "../assets/charIcons/Pyro_Icon.jpg"
    document.getElementById('job').innerText = "Pyrotechnics"
    document.getElementById('activity').innerText = "Magic 8 Ball"
})
DemomanBtn.addEventListener("mouseover", function(){
    document.getElementById("mercIcon").src = "../assets/charIcons/Demoman_Icon.jpg"
    document.getElementById('job').innerText = "House Cleaning"
    document.getElementById('activity').innerText = "Reverse It (Alphanumerical)"
})
HeavyBtn.addEventListener("mouseover", function(){
    document.getElementById("mercIcon").src = "../assets/charIcons/Heavy_Icon.jpg"
    document.getElementById('job').innerText = "Mow Down"
    document.getElementById('activity').innerText = "Greater Than or Less Than"
})
EngineerBtn.addEventListener("mouseover", function(){
    document.getElementById("mercIcon").src = "../assets/charIcons/Engineer_Icon.jpg"
    document.getElementById('job').innerText = "Area Denial"
    document.getElementById('activity').innerText = `Reverse It (Numerical-Only)`
})
MedicBtn.addEventListener("mouseover", function(){
    document.getElementById("mercIcon").src = "../assets/charIcons/Medic_Icon.jpg"
    document.getElementById('job').innerText = "Doctor Assisted Homicide"
    document.getElementById('activity').innerText = "Asking Questions"
})
SniperBtn.addEventListener("mouseover", function(){
    document.getElementById("mercIcon").src = "../assets/charIcons/Sniper_Icon.jpg"
    document.getElementById('job').innerText = "Precision Elimination"
    document.getElementById('activity').innerText = "Odd or Even"
})
SpyBtn.addEventListener("mouseover", function(){
    document.getElementById("mercIcon").src = "../assets/charIcons/Spy_Icon.jpg"
    document.getElementById('job').innerText = "Uncloak & Dagger"
    document.getElementById('activity').innerText = "Restaruant Picker"
})
MissionBtn.addEventListener("mouseover", function(){
    document.getElementById("mercIcon").src = "../assets/Team_Fortress_2_style_logo.png"
    document.getElementById('job').innerText = "Reliable Excavation Demolition"
    document.getElementById('activity').innerText = "MadLib"
})