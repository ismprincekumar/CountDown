alert("𝗖𝗼𝘂𝗻𝘁𝗗𝗼𝘄𝗻 𝗕𝗲𝗴𝗶𝗻𝘀 𝗙𝗼𝗿 𝗠𝘆 𝘈𝘯𝘨𝘳𝘺 𝘉𝘪𝘳𝘥'𝘴 𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆 💕")
var x= setInterval(function(){
    var today= new Date()
    var bday= new Date("Aug 22, "+today.getFullYear())
    var date_today= new Date().setHours(0,0,0,0)
    if(date_today==bday.getTime()){
        clearInterval(x)
        document.getElementById("timer").innerText =`Happy Birthday Namisha!!!`
    }
    else{
        if(today>bday){
            bday= new Date("Aug 22, "+(today.getFullYear()+1))
        }
        today= today.getTime()
        bday= bday.getTime()
        var between= bday-today
        var days = Math.floor(between / (1000 * 60 * 60 * 24));
        var hours = Math.floor((between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((between % (1000 * 60)) / 1000);
        document.getElementById("timer").innerText=`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left for 𝓝𝓪𝓶𝓲𝓼𝓱𝓪'𝓼 ❤️ 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂`
    }
},1000)
deg=0
active=0
function activate(){
    if(active==4){
        active=0
    }
    else if(active==-1){
        active=3
    }
    document.querySelectorAll("#indicator div").forEach((self)=>{
        self.classList.remove("active")
    })
    document.querySelectorAll("#indicator div")[active].classList.add("active")
}
function next(){
    deg+=90
    active++
    document.getElementsByClassName("cube")[0].style.transform="rotateX("+deg+"deg)"
    activate()
}
function prev(){
    deg-=90
    active--
    document.getElementsByClassName("cube")[0].style.transform="rotateX("+deg+"deg)"
    activate()
}


window.addEventListener('click', () => {
    
    document.getElementById("song").play();
    
});