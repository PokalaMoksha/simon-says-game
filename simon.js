let userSeq=[];
let gameSeq=[];
let btns=["red","green","yellow","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function()
{
    if(started==false)
        {
            started=true;
            levelUP();
        }
});
function gameFlash(btn)
{
    btn.classList.add("white");
    setTimeout(function()
{
    btn.classList.remove("white");
},450);
}
function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function()
{
    btn.classList.remove("userFlash");
},450);
}
function levelUP()
{
    userSeq=[];
    level=level+1;
    h2.innerText=`Level ${level}`;
    let rdmIdx=Math.floor(Math.random()*3);
    let rdmColor=btns[rdmIdx];
    let rdmbtn=document.querySelector(`.${rdmColor}`);
    gameSeq.push(rdmColor);
    gameFlash(rdmbtn);

}
function checkans(idx)
{
    if(userSeq[idx]==gameSeq[idx])
        {
            if(userSeq.length==gameSeq.length)
                {
                    setTimeout(levelUP,450);
                }
        }
        else{
            h2.innerHTML=`Game Over .<b>Your score is ${level}</b>.Press any key to start the game`;
            let body=document.querySelector("body");
            body.style.backgroundColor="red";
            setTimeout(function()
        {
            body.style.backgroundColor="white"
        },500);
            reset();
        }
}
function btnPress()
{
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkans(userSeq.length-1);

    
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
    {
        btn.addEventListener("click",btnPress);
    }
    function reset()
    {
        started=false;
        level=0;
        userSeq=[];
        gameSeq=[];
    }
