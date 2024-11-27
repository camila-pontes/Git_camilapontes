const $game = $('#game-image');
const $popup = $('.popup');
const $playGame = $('.playgame');
const $playGameAgain = $('#playgameagain');
const $hint = $('#hint');
const $listPicked = $('#listpicked');
const $alert = $('#alert')
const $fruit = $('#fruit');
const $gameOver = $('.gameover');

const $chosenLetter = $('#chosenletter');
const $chosenLetterBtn = $('#chosenletterBtn');
const $firstLetter = $('#firstletter');
const $secondLetter = $('#secondletter');
const $thirdLetter = $('#thirdletter');
const $forthLetter = $('#forthletter');
const $fifthLetter = $('#fifthletter');
const $sixthLetter = $('#sixthletter');
const $seventhLetter = $('#seventhletter');
const $line1 = $('#line1');
const $line2 = $('#line2');
const $line3 = $('#line3');
const $line4 = $('#line4');
const $line5 = $('#line5');
const $line6 = $('#line6');
const $line7 = $('#line7');
const $end = $('#end');

const words = ['banana', 'papaya', 'apple', 'rabbit', 'buffalo', 'orange', 'grape', 'monkey', 'giraffe', 'horse', 'tennis', 'puzzle', 'hangman', 'soccer'];
const fruits = ['banana', 'papaya', 'orange', 'grape', 'apple'];
const animals = ['monkey', 'giraffe', 'horse', 'rabbit', 'buffalo'];
const games = ['tennis', 'puzzle', 'hangman', 'soccer'];

let popupDisplayed = true;
let gameplaying = false;
let word = ""
let category = "";
let numberOfLetters = "";
let pictureState = 0;
let pickedLetters;
let chosenUpperCase;
let pickedLettersWords;
let buildWord;
let letter1;
let letter2;
let letter3;
let letter4;
let letter5;
let letter6;
let letter7;

function showPopup() {
    if (gameplaying && popupDisplayed) {
      $popup.css('opacity', 1);
      $popup.css('pointer-events', 'auto');
      popupDisplayed = true;
    } 
}

function randomWord(){
    const ramdom = Math.floor(Math.random() * words.length);
    word = words[ramdom].toUpperCase();
    console.log(word);
    return word;
}

function setCategories(word){
    if(fruits.includes(word.toLowerCase())) {category = " a fruit"}
    else if(animals.includes(word.toLowerCase())) {category = "an animal"}
    else if(games.includes(word.toLowerCase())) {category = "a game"};
    console.log(category);
    return category;
}

function numberLetters(word){
    numberOfLetters = word.length;
    return numberOfLetters;
}

function setHint(numberOfLetters, category){ 
    let hint = "<p><strong>Here is a nice hint:</strong> the word is " + category + " and has " + numberOfLetters + " letters.</p>";
    $hint.html(hint);   
}

function setImage(pictureState){
    let sym='"'
    let pictureSrc = "url(" + sym + "images/Hangman" + pictureState + ".png" + sym +")";
    $game.css('background-image', pictureSrc);     
}

function assignLetters(numberOfLetters, word){ 
    $firstLetter.html(word.charAt(0));
    $line1.css('display', 'flex');
    $secondLetter.html(word.charAt(1));
    $line2.css('display', 'flex');
    $thirdLetter.html(word.charAt(2));
    $line3.css('display', 'flex');
    $forthLetter.html(word.charAt(3));
    $line4.css('display', 'flex');
    $fifthLetter.html(word.charAt(4));
    $line5.css('display', 'flex');
    if(numberOfLetters == 6){
        $sixthLetter.html(word.charAt(5));
        $line6.css('display', 'flex');
    }
    if(numberOfLetters == 7){
        $sixthLetter.html(word.charAt(5));
        $seventhLetter.html(word.charAt(6));
        $line6.css('display', 'flex');
        $line7.css('display', 'flex');
    } 
}

function newGame(){
    word = ""
    category = "";
    numberOfLetters = "";
    pictureState = 0;
    pickedLetters = "";
    pickedLettersWords ="";
    buildWord = "";
    letter1 = "";
    letter2 = "";
    letter3 = "";
    letter4 = "";
    letter5 = "";
    letter6 = "";
    letter7 = "";
    $listPicked.html("");
    $firstLetter.css('display', 'none'); 
    $secondLetter.css('display', 'none');
    $thirdLetter.css('display', 'none');
    $forthLetter.css('display', 'none');
    $fifthLetter.css('display', 'none');
    $sixthLetter.css('display', 'none');
    $seventhLetter.css('display', 'none');
    $line1.css('display', 'none');
    $line2.css('display', 'none');
    $line3.css('display', 'none');
    $line4.css('display', 'none');
    $line5.css('display', 'none');
    $line6.css('display', 'none');
    $line7.css('display', 'none');  
}     

$playGame.on('click', function(){
    newGame();
    gameplaying = true;
    $gameOver.css('opacity', 0);
    $gameOver.css('pointer-events', 'none'); 
        
    word = randomWord();      
    category = setCategories(word);
    numberOfLetters = numberLetters(word);
    setHint(numberOfLetters, category);
    setImage(pictureState);
    assignLetters(numberOfLetters, word);
    $popup.css('opacity', 0);
    $popup.css('pointer-events', 'none');
    popupDisplayed = false;

    $chosenLetterBtn.on('click',function(){
        $alert.html("");
        chosenUpperCase = $chosenLetter.val().toUpperCase();
        if(word.includes(chosenUpperCase)){
            if($firstLetter.html() == chosenUpperCase){
                $firstLetter.css('display', 'flex');
                letter1 = chosenUpperCase;
            }
            if($secondLetter.html() == chosenUpperCase){
                $secondLetter.css('display', 'flex');
                letter2=chosenUpperCase
            }
            if($thirdLetter.html() == chosenUpperCase){
                $thirdLetter.css('display', 'flex');
                letter3=chosenUpperCase
            }
            if($forthLetter.html() == chosenUpperCase){
                $forthLetter.css('display', 'flex');
                letter4=chosenUpperCase
            }
            if($fifthLetter.html() == chosenUpperCase){
                $fifthLetter.css('display', 'flex');
                letter5=chosenUpperCase
            }
            if($sixthLetter.html() == chosenUpperCase){
                $sixthLetter.css('display', 'flex');
                letter6=chosenUpperCase
            }
            if($seventhLetter.html() == chosenUpperCase){
                $seventhLetter.css('display', 'flex');
                letter7=chosenUpperCase
            }
        }

        else if (!(pickedLetters.includes(chosenUpperCase))) {                    
            pictureState++
            setImage(pictureState);        
        }

        console.log("Chosen Letter before functions : " + chosenUpperCase);
        
        buildWordString();
        pickedLettersAlert();
        pickedLettersString();
        endGame();
        $chosenLetter.val("");   

        function buildWordString(){
            buildWord = letter1+letter2+letter3+letter4+letter5+letter6+letter7;
            buildWord = buildWord.trim(); 
            console.log("Word: " + word);  
            console.log("BuildWord: " + buildWord);      
        } 

        function pickedLettersString(){
            pickedLettersWords = "<p>Picked Letters: ";
            for(i=0; i < pickedLetters.length; i++){
                pickedLettersWords += pickedLetters.charAt(i).toUpperCase() + " ";
            }
            pickedLettersWords += "</p>";
            $listPicked.html(pickedLettersWords);
        }

        function pickedLettersAlert (){
            if(!(pickedLetters.includes(chosenUpperCase))){
                pickedLetters += chosenUpperCase;
            }       
            else if (chosenUpperCase != ""){
                $alert.html("You have already chosen " + chosenUpperCase +"! ");
            }
        }
        
        function endGame(){
            if(buildWord == word || pictureState == 6 ){
                if (pictureState == 6){
                    $end.html("<h2>Game Over!</h2>");
                }
                else if(buildWord == word){
                    $end.html("<h2>Winner!!!!</h2>");
                }  

                $gameOver.css('opacity', 1);
                $gameOver.css('pointer-events', 'auto');
                $gameOver.css('display', 'flex');

            }
        }
        
    })
});







