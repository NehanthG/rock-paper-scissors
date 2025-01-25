function pickComputerMove(){
    const randomNumber=Math.random();
    let computerMove='';
    
    if(randomNumber>=0 && randomNumber<1/3){
         computerMove='rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
         computerMove='paper';
    }
    else{
    computerMove='scissors';
    }

    return computerMove;
 }
 let score=JSON.parse(localStorage.getItem('score'))|| {
         losses:0,
         ties:0,
         wins:0
              }; 
 function playGame(playerMove){
    const computerMove=pickComputerMove();
    
    let result='';
    if(playerMove==='rock'){
         if(computerMove === 'rock'){
         result='Tie!';
         }
         else if(computerMove==='paper'){
         result='You Lose!';
         }
         else {
         result='You Win!';
         }
         
    }

    else if(playerMove==='paper'){
    
    if(computerMove === 'rock'){
         result='You Win!';
    }
    else if(computerMove==='scissors'){
         result='You Lose!';
    }
    else {
         result='Tie!';
    }
    
    }

    else{
    
    if(computerMove === 'rock'){
         result='You Lose!';
    }
    else if(computerMove==='scissors'){
         result='Tie!';
    }
    else {
         result='You Win!';
    }
    
    
    }

    if(result==='You Win!'){
         score.wins++;
    }
    else if(result==='You Lose!'){
         score.losses++;
    }
    else{
         score.ties++;
    }
    
    dispScore();
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.js-result').innerText=`${result}`;
    document.querySelector('.js-moves').innerHTML=`You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer
    `;
//           alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}
// Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties},`);
    
}

dispScore(); 
function dispScore(){
  let displayScore=document.querySelector('.js-score');
  displayScore.innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
}
