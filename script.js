// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var numOfMistakes = 0;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  randomPattern();
  numOfMistakes = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  clueHoldTime = 1000;
  numOfMistakes = 0;
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 300,
  3: 400,
  4: 500,
  5: 600,
  6: 700
}
function playTone(btn,len){
  context.resume();
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
    tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);

// Credits to: François Beaufort 
// link: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
// Code added to fix a bug in Chrome where audio from the buttons would either not 
// play or play only after pressing a couple buttons on the webpage.
document.querySelector('button').addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying)
  {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(afterMistakeFlag){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  if(afterMistakeFlag==0)
  {
    clueHoldTime -= 100;
  }
  for(let i=0;i<=progress;i++)
  {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame()
{
  stopGame();
  alert("Game Over. You lost.");
}

function winGame()
{
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn)
{
  console.log("user guessed: " + btn);
  if(!gamePlaying)
  {
    return;
  }

  if(pattern[guessCounter] == btn)
  {
    if(guessCounter == progress)
    {
      if(progress == pattern.length - 1)
      {
        winGame();
      }
      else
      {
        progress++;
        playClueSequence(0);
      }
    }
    else
    {
      guessCounter++;
    }
  }
  else
  {
    numOfMistakes+=1;
    if(numOfMistakes==3){
      loseGame();
    }
    playClueSequence(1);
  }
}

function randomPattern()
{
  var length = pattern.length;
  for (let i=0;i<length;i++)
  {
    pattern[i] = Math.floor(Math.random() * 6 + 1);
  }
}
