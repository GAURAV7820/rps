let newScore=0;
let cmpNewScore=0;
let winner=(userWin,compChoice)=>{
    if(userWin===true){
        msg.innerText="YOU WIN🥳🥳🥳";
        newScore++;
        userScore.innerText=newScore;
    }
    else  if(userWin===false){
        msg.innerText=`Gaurav Win😎😎😎 he choose ${compChoice}`;
        cmpNewScore++;
        compScore.innerText=cmpNewScore;
    }
};
//computer-choice
let cmpChoice=()=>
{
    let choices=["rock","paper","scissors"];
    let random=Math.floor(Math.random()*3);
    return choices[random];
};
//user-choice
let userChoice
let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id");
        console.log(userChoice);
        startGame();
    });
});
let startGame=()=>{
    let compChoice=cmpChoice();
    let userWin=true;
    if(userChoice===compChoice){
        console.log("drawwwwwwwww");
        msg.innerText="SAME SAME🫡🫡🫡";
        userWin="0";
    }
    else if(userChoice==="rock"){
       userWin=compChoice==="paper" ? false : true;
       console.log(`computer choice is${compChoice}`);
    }
    else if(userChoice==="scissors")
    {
        userWin=compChoice==="rock"?false:true;
        console.log(`computer choice is${compChoice}`);
    }
    else
    {
        userWin=compChoice==="scissors" ? false : true;
        console.log(`computer choice is${compChoice}`);
    }
     winner(userWin,compChoice);
};





