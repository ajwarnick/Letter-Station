let speaker = new p5.Speech(); // speech synthesis object
speaker.onEnd = speechEnded;
speaker.onStart = speechStart;
speaker.setRate(0.5);

let letterElement = document.getElementById("letter");

let articles = [];
let speaking = false;
let started = false;
let waiting = true;
let res;



var myTextColor = '#4f65ea';
var myBackgroundColor = '#e9c0e5';
let count = 1, countScale = 1, topLimit = 800, bottomLimit = 0;


window.addEventListener("load", (event) => {
  // console.log("Page Is Fully Loaded!");
  speaker.speak(""); 
  getArticleList();
});

function setup() {
  // console.log("Set Up Finnished!");
}

function draw() {
  // console.log("Speaking: " + speaking + " Started: " + started + " Waiting: " + waiting);

  if ( !waiting && !speaking && started ){
    var nextLetter = res.shift();
    speakNextLetter(nextLetter);
  }

  if(started){
    if ( !Array.isArray(res) || res.length === 0){
      // console.log("Get Next!");
      getNextTitle();
    }
  }  
}

function speechStart(){
  // console.log("Start");
  speaking = true;
}

function speechEnded(){
  // console.log("Wait");
  speaking = false;

  // let w = Math.random() * (max - min) + min;
  let w = Math.random() * (4 - 1) + 1;
  // console.log(w);
  wait(w);
}

function wait( s ){
  let l = s * 1000;
  waiting = true;

  setTimeout(function(){
    waiting = false;
    // console.log("End Wait");
  }, l);
}

function getNextTitle(){

  if(articles.length === 0){
    // console.log("No More Articles!");
    started = false;
    getArticleList();
  }else{
    let nextTitle = articles.shift();
    console.log(nextTitle);
    let str = nextTitle.replace(/[^0-9a-z]/gi, '').toLowerCase();
    // console.log(str);
    if(str){
      res = str.split("");
    }
  }

  
}

function getFirstTitle(){
  let nextTitle = articles.shift();
  console.log(nextTitle);
  let str = nextTitle.replace(/[^0-9a-z]/gi, '').toLowerCase();
  // console.log(str);

  if(str){
    res = str.split("");
  }

  let firstLetter = res.shift();
  started = true;
  speakNextLetter(firstLetter);
}


function getArticleList(){
  // https://rss.nytimes.com/services/xml/rss/nyt/World.xml
  // https://rss.nytimes.com/services/xml/rss/nyt/ArtandDesign.xml
  // https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml

  let feedUrl = "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";

  fetch(feedUrl).then((results) => {

    results.text().then((xmlTxt) => {

      var domParser = new DOMParser();
      let doc = domParser.parseFromString(xmlTxt, 'text/xml');
      doc.querySelectorAll('item').forEach((item) => {
        articles.push(item.firstElementChild.innerHTML);
      })
      console.log(articles);

      getFirstTitle();
    })
  })
}


function speakNextLetter(l){
  // Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India,
  // Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo,
  // Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu

  switch(l.toLowerCase()){
    case "a":
      speaker.speak("Alfa"); // say something
      letterElement.innerText = 'a';

      break
    case "b":
      speaker.speak("Bravo"); // say something
      letterElement.innerText = 'b';

      break
    case "c":
      speaker.speak("Charlie"); // say something
      letterElement.innerText = 'c';

      break
    case "d":
      speaker.speak("Delta"); // say something
      letterElement.innerText = 'd';

      break
    case "e":
      speaker.speak("Echo"); // say something
      letterElement.innerText = 'e';

      break
    case "f":
      speaker.speak("Foxtrot"); // say something
      letterElement.innerText = 'f';

      break
    case "g":
      speaker.speak("Golf"); // say something
      letterElement.innerText = 'g';

      break
    case "h":
      speaker.speak("Hotel"); // say something
      letterElement.innerText = 'h';

      break
    case "i":
      speaker.speak("India"); // say something
      letterElement.innerText = 'i';

      break
    case "j":
      speaker.speak("Juliett"); // say something
      letterElement.innerText = 'j';

      break
    case "k":
      speaker.speak("Kilo"); // say something
      letterElement.innerText = 'k';

      break
    case "l":
      speaker.speak("Lima"); // say something
      letterElement.innerText = 'l';

      break
    case "m":
      speaker.speak("Mike"); // say something
      letterElement.innerText = 'm';

      break
    case "n":
      speaker.speak("November"); // say something
      letterElement.innerText = 'n';

      break
    case "o":
      speaker.speak("Oscar"); // say something
      letterElement.innerText = 'o';

      break
    case "p":
      speaker.speak("Papa"); // say something
      letterElement.innerText = 'p';

      break
    case "q":
      speaker.speak("Quebec"); // say something
      letterElement.innerText = 'q';

      break
    case "r":
      speaker.speak("Romeo"); // say something
      letterElement.innerText = 'r';

      break
    case "s":
      speaker.speak("Sierra"); // say something
      letterElement.innerText = 's';

      break
    case "t":
      speaker.speak("Tango"); // say something
      letterElement.innerText = 't';

      break
    case "u":
      speaker.speak("Uniform"); // say something
      letterElement.innerText = 'u';

      break
    case "v":
      speaker.speak("Victor"); // say something
      letterElement.innerText = 'v';

      break
    case "w":
      speaker.speak("Whiskey"); // say something
      letterElement.innerText = 'w';

      break
    case "x":
      speaker.speak("X-ray"); // say something
      letterElement.innerText = 'x';

      break
    case "y":
      speaker.speak("Yankee"); // say something
      letterElement.innerText = 'y';

      break
    case "z":
      speaker.speak("Zulu"); // say something
      letterElement.innerText = 'z';

      break
    case "0":
      speaker.speak("Zero"); // say something
      letterElement.innerText = '0';

      break
    case "1":
      speaker.speak("One"); // say something
      letterElement.innerText = '1';

      break
    case "2":
      speaker.speak("Two"); // say something
      letterElement.innerText = '2';

      break
    case "3":
      speaker.speak("Three"); // say something
      letterElement.innerText = '3';

      break
    case "4":
      speaker.speak("Four"); // say something
      letterElement.innerText = '4';

      break
    case "5":
      speaker.speak("Five"); // say something
      letterElement.innerText = '5';

      break
    case "6":
      speaker.speak("Six"); // say something
      letterElement.innerText = '6';

      break
    case "7":
      speaker.speak("Seven"); // say something
      letterElement.innerText = '7';

      break
    case "8":
      speaker.speak("Eight"); // say something
      letterElement.innerText = '8';

      break
    case "9":
      speaker.speak("Nine"); // say something
      letterElement.innerText = '9';

      break
    case ".":
      speaker.speak("Stop"); // say something

      break
    default:
      console.log('Sorry, we are out of options');
}
  }


  function keyPressed() {
    if (key === ' ') {
      console.log("space");
      speaking = !speaking;

    } else if (key === 'd') {
      document.body.classList.toggle("debug");
    }
    // Uncomment to prevent any default behavior.
    // return false;
  }