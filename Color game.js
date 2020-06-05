var squares = document.querySelectorAll(".square");
var buttons = document.querySelectorAll("button");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easymode");
var mediumButton = document.querySelector("#mediummode");
var hardButton = document.querySelector("#hardmode");

var numSquares = 9;
var colors = []
reset();

//check the guess
for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        var clickedColor= this.style.backgroundColor;
        if(clickedColor === pickedColor){
            correct();
        } else{
            document.querySelector("#message").textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}

//reset button
resetButton.addEventListener("click", reset)

//Easy 
easyButton.addEventListener("click", function(){
    //toggle selected class
    for(i=1; i<buttons.length; i++){
        buttons[i].classList.remove("selected");
    };
    this.classList.add("selected");
    //reset and choose active squares
    numSquares=3;
    reset();
})

//Medium
mediumButton.addEventListener("click", function(){
    //toggle selected class
    for(i=1; i<buttons.length; i++){
        buttons[i].classList.remove("selected");
    };
    this.classList.add("selected");
    //reset and choose active squares
    numSquares=6;
    reset();
})

//Hard
hardButton.addEventListener("click", function(){
    //toggle selected class
    for(i=1; i<buttons.length; i++){
        buttons[i].classList.remove("selected");
    };
    this.classList.add("selected");
    //reset and choose active squares
    numSquares=9;
    reset();
})

//reset
function reset(){
    generateColors(numSquares);
    document.querySelector("#message").textContent = "";
    resetButton.textContent="New Colors";
    document.querySelector("h1").style.backgroundColor = "steelblue";
    var num = Math.floor(Math.random() * numSquares );
    pickedColor=colors[num];
    displayColor();
    hideSquares();
}

//colorDisplay
function displayColor(){
    document.querySelector("#colorDisplay").textContent = pickedColor;
};

//correct guess
function correct(){
    document.querySelector("#message").textContent = "Correct!";
    resetButton.textContent="Play Again?";
    for(i = 0; i < numSquares; i++){
        squares[i].style.backgroundColor = pickedColor;
        document.querySelector("h1").style.backgroundColor = pickedColor;
    };
};

//generate colors
function generateColors(n){
    for(i=0; i<n; i++){
        colors[i]=pickColor();
        squares[i].style.backgroundColor = colors[i];
    }
}

//pick a color
function pickColor(){
    var result="rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256)+ ", " + Math.floor(Math.random() * 256) + ")";
    console.log(result);
    return result;
};

//hide squares
function hideSquares(){
    var diff = 9 - numSquares;
    for(i=numSquares; i<9; i++){
        squares[i].style.backgroundColor="#232323";
    }
}
