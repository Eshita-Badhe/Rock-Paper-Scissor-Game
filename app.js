let comp="rock";
let userScore=0,compScore=0,fuserScore=0,fcompScore=0;

function genComputerChoice() 
{
    const choice=["rock","paper","scissor"];
    let i=Math.floor(Math.random()*3);
    return choice[i];
}

function select(user)
{
    comp=genComputerChoice();
    if(user==comp)
    {
        alert("TIE");
        userScore=1;
        compScore=1;
        fuserScore++;
        fcompScore++;
    }
    else if(user=="rock" && comp=="paper")
    {
        alert("Paper beats rock!");
        userScore=0;
        compScore=1;
        fcompScore++;
    }
    else if(user=="rock" && comp=="scissor")
    {
        alert("Rock beats scissor!");
        userScore=1;
        compScore=0;
        fuserScore++;
    }
    else if(user=="paper" && comp=="rock")
    {
        alert("Paper beats rock!");
        userScore=1;
        compScore=0;
        fuserScore++;
    }
    else if(user=="paper" && comp=="scissor")
    {
        alert("Scissor beats paper!");
        userScore=0;
        compScore=1;
        fcompScore++;
    }
    else if(user=="scissor" && comp=="rock")
    {
        alert("Rock beats scissor!");
        userScore=0;
        compScore=1;
        fcompScore++;
    }
    else if(user=="scissor" && comp=="paper")
    {
        alert("Scissor beats paper!");
        userScore=1;
        compScore=0;
        fuserScore++;
    }
    else
    {
        alert("Play...");
        userScore=0;
        compScore=0;
    }
    score();
}

function score()
{
    let score=document.getElementById("score");
    let tr=document.createElement("tr");
    let tdUser=document.createElement("td");
    let tdComp=document.createElement("td");
    score.appendChild(tr);
    tdUser.innerText=userScore;
    tdComp.innerText=compScore;
    tr.appendChild(tdUser);
    tr.appendChild(tdComp);
}

function finish()
{
    userScore="FINAL";
    compScore="FINAL";
    score();
    userScore=fuserScore;
    compScore=fcompScore;
    score();
    setTimeout(()=>{
    if(fuserScore>fcompScore)
    {
        alert("Congratulations! You Won..!");
        location.href="index.html";
    }
    else
    {
        alert("You Lose..! Better luck Next Time!");
        location.href="index.html";
    }
},1000);
}