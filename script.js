function getComputerChoice()
        {
            //randomly return either ‘Rock’, ‘Paper’ or ‘Scissor’
            let choices = ['rock', 'paper', 'scissor'];
            let randomNumber = Math.floor(Math.random() * choices.length);
            return (choices[randomNumber]);
        }
        function playRound(playerSelection, computerSelection)
        {
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();
            if (playerSelection === "rock")
            {
                switch(computerSelection) {
                    case "rock": 
                        return ("tie");
                        break;
                    case "paper": 
                        return ("lose");
                        break;
                    case "scissor": 
                        return ("win");
                        break;
                }
            }
            else if (playerSelection === "paper")
            {
                switch(computerSelection) {
                    case "paper": 
                        return ("tie");
                        break;
                    case "scissor": 
                        return ("lose");
                        break;
                    case "rock": 
                        return ("win");
                        break;
                } 
            }
            else {
                switch(computerSelection) {
                    case "scissor": 
                        return ("tie");
                        break;
                    case "rock": 
                        return ("lose");
                        break;
                    case "paper": 
                        return ("win");
                        break;
                }
            }

        }
        function checkResult(){
            
        }
        let playScore = 0;
        let compScore = 0;
        function playGame() {
            const rock = document.getElementById('rock');
            const paper = document.getElementById('paper');
            const scissor = document.getElementById('scissor');
            const text = document.querySelector('p');
            const playerScore = document.getElementById('playerScore');
            const computerScore = document.getElementById('computerScore');
            const finalResult = document.getElementById('finalResult');
            rock.addEventListener('click', () => {
                const computerSelection = getComputerChoice();
                const playerSelection = 'rock';
                let result = playRound(playerSelection, computerSelection);
                if (playScore < 5 || compScore < 5){
                    if (result === 'win'){
                        text.textContent = 'you won!!';
                        playScore += 1;
                    }
                    else if (result === 'lose'){
                        text.textContent = 'you lose!!';
                        compScore += 1;
                    }
                    else text.textContent = 'it\'s a tie';
                }
                playerScore.textContent = playScore;
                computerScore.textContent = compScore;

            });
            paper.addEventListener('click', function () {
                const computerSelection = getComputerChoice();
                const playerSelection = 'paper';
                let result = playRound(playerSelection, computerSelection);
                if (result === 'win'){
                    text.textContent = 'you won!!';
                    playScore += 1;

                }
                else if (result === 'lose'){
                    text.textContent = 'you lose!!';
                    compScore += 1;
                }
                else text.textContent = 'it\'s a tie';
                playerScore.textContent = playScore;
                computerScore.textContent = compScore;
            });
            scissor.addEventListener('click', function () {
                const computerSelection = getComputerChoice();
                const playerSelection = 'scissor';
                let result = playRound(playerSelection, computerSelection);
                if (result === 'win'){
                    text.textContent = 'you won!!';
                    playScore += 1;

                }
                else if (result === 'lose'){
                    text.textContent = 'you lose!!';
                    compScore += 1;
                }
                else text.textContent = 'it\'s a tie';
                playerScore.textContent = playScore;
                computerScore.textContent = compScore;
            }); 
        }

        playGame();