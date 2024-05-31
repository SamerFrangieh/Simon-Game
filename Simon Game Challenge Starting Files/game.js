var userClickedPattern = [];
var gamePattern = [];
var colors = ["red", "blue", "green", "yellow"];

$(".btn").on('click', function(){
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length -1);
    
})

var gameStart = 0;
var level = 0;

$(document).on('keydown',function(){
    
    if(gameStart === 0){
        gameStart++;
        $('h1').text('Level: '+ level);
        game = true;
        nextSequence();

    }
   
 
    
})

var game = true;
function checkAnswer(currentLevel){
    
    if (currentLevel < gamePattern.length -1){

        if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
            console.log('success');
        }
        else{
            console.log('wrong');
            var wrong  = new Audio('./sounds/wrong.mp3');
            wrong.play();
            game = false;
            gamePattern = [];
            userClickedPattern = [];
            level = 0;
            $('body').addClass('game-over');
            $('h1').text('Game Over, Press Any Key to Restart');
            setTimeout(function(){$('body').removeClass('game-over');},200);
            gameStart = 0;

        }

    }
    else{
        if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
            console.log('success');
        }
        else{
            console.log('wrong');
            var wrong  = new Audio('./sounds/wrong.mp3');
            wrong.play();
            game = false;
            gamePattern = [];
            userClickedPattern = [];
            level = 0;
            $('body').addClass('game-over');
            $('h1').text('Game Over, Press Any Key to Restart');
            setTimeout(function(){$('body').removeClass('game-over');},200);
            gameStart = 0;
        }
        if(game == true){
            userClickedPattern = [];
            setTimeout(function(){nextSequence();},1000);
        }
        
        
    }
    
    
}

function playSound(name){
    var sound = new Audio('sounds/'+ name + '.mp3');
    sound.play();
}

function animatePress(currentColour){

    $('#'+currentColour).addClass('pressed');
    setTimeout(function(){
        $('#'+currentColour).removeClass('pressed');
    },100);


}


function nextSequence(){
    var num = Math.floor(Math.random() * 4);
    var randomChosenColor = colors[num];
    gamePattern.push(randomChosenColor);

    $('#'+randomChosenColor).fadeOut(120).fadeIn(120);
    playSound(randomChosenColor);
    level = level+1;
    $('h1').text('Level: '+ level);




}