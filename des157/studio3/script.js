(function () {
    'use strict';
    
    var startGame = document.getElementById('startgame');
    var gameControl = document.getElementById('gamecontrol');
    var game = document.getElementById('game');
    var score = document.getElementById('score');
    var actionArea = document.getElementById('actions');
    var gameData = {
        card: [
        './images/numbers/1.png', 
        './images/numbers/2.png', 
        './images/numbers/3.png', 
        './images/numbers/4.png', 
        './images/numbers/5.png', 
        './images/numbers/6.png', ],
        players: ['player 1', 'player 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    const fireworkSound = new Audio('./media/fireworks.mp3');
    const sadSound = new Audio('./media/sad.mp3');

    function setUpTurn() {
        game.innerHTML += `<p>Tap the pig for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll"><img src="./images/icons/happy.png" id="happyButton"></button>';
        document.getElementById('roll').addEventListener('click', function() {
            throwCard();
        });
    }

    function throwCard() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the Card for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML = `<img src="${gameData.card[gameData.roll1-1]}">
                            <img src="${gameData.card[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if (gameData.rollSum === 2) {
            actionArea.innerHTML += "<img src='./images/icons/sad.png' id='sad'>"
            game.innerHTML += "<p><h3>I'm sorry but you rolled Snake eyes</h3> I have to take your points away.. I'm so sorry</p>";
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            sadSound.play();
            showCurrentScore();
            setTimeout(setUpTurn, 5000);
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            actionArea.innerHTML = `<img src="./images/icons/sorry.png" id="sorry">`
            game.innerHTML += `<p> Sorry, one of your cards was a one, switching to ${
                gameData.players[gameData.index]
            }</p>`;
            setTimeout(setUpTurn, 2000)
        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
            actionArea.innerHTML += '<br><img src="./images/icons/happy.png" id="happy">'

            document.getElementById('rollagain').addEventListener('click', function() {
                throwCard();
            });

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) {

            fireworkSound.play();
            score.innerHTML = `<img src="./images/icons/firework_2.png" id="firework"><h3>${gameData.players[gameData.index]}
                wins with ${gameData.score[gameData.index]} points! </h3><img src="./images/icons/firework_2.png" id="firework">`;

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "Start a New Game";
        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score.innerHTML = `<p>The score is current <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
    }

    startGame.addEventListener('click', function() {
        // randomly set game index here...
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit"> Wanna Quit? </button>';

        document.getElementById('quit').addEventListener('click', function () {
            location.reload();
        });

        console.log(gameData.index);
        console.log("set up the turn!");

        console.log(setUpTurn());
        console.log(throwCard());

    });

})();