let speaker = new p5.Speech(); // speech synthesis object
speaker.utterance.onend = speechEnded;
speaker.utterance.onstart = speechStart;


let articles = [];
let speaking = false;
let started = false;
let waiting = true;
let res;



var myTextColor = '#4f65ea';
var myBackgroundColor = '#e9c0e5';
let count = 1, countScale = 1, topLimit = 800, bottomLimit = 0;


function setup() {
  getArticleList();
}

function draw() {
  // background( backgroundColor() );


  if ( !waiting && !speaking && started ){
    var nextLetter = res.shift();
    speakNextLetter(nextLetter);
  }

  if ( !Array.isArray(res) || res.length === 0 ){
    getNextTitle()
  }
}



function pingpong(){
  if (count >= topLimit || count <= bottomLimit){
    countScale = countScale * -1;
  }
  count = count + countScale;
  return count;
}

function backgroundColor(){
  //c = lerpColor( color(myBackgroundColor), color(myTextColor), pingpong()/topLimit );
  c = myBackgroundColor;
  return c;
}



function speechStart(){
  // console.log("Start");
  speaking = true;
}

function speechEnded(){
  // console.log("Wait");
  speaking = false;
  wait(1);
  // If string done?
  //
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
  let nextTitle = articles.shift();
  console.log(nextTitle);
  let str = nextTitle;
  if(str){
    res = str.split("");
  }
}

function getFirstTitle(){
  let nextTitle = articles.shift();
  let str = nextTitle;
  console.log(str);
  if(str){
    res = str.split("");
  }
  let firstLetter = res.shift();
  started = true;
  speakNextLetter(firstLetter);
}


function getArticleList(){
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

      break
    case "b":
      speaker.speak("Bravo"); // say something

      break
    case "c":
      speaker.speak("Charlie"); // say something

      break
    case "d":
      speaker.speak("Delta"); // say something

      break
    case "e":
      speaker.speak("Echo"); // say something

      break
    case "f":
      speaker.speak("Foxtrot"); // say something

      break
    case "g":
      speaker.speak("Golf"); // say something

      break
    case "h":
      speaker.speak("Hotel"); // say something

      break
    case "i":
      speaker.speak("India"); // say something

      break
    case "j":
      speaker.speak("Juliett"); // say something

      break
    case "k":
      speaker.speak("Kilo"); // say something

      break
    case "l":
      speaker.speak("Lima"); // say something

      break
    case "m":
      speaker.speak("Mike"); // say something

      break
    case "n":
      speaker.speak("November"); // say something

      break
    case "o":
      speaker.speak("Oscar"); // say something

      break
    case "p":
      speaker.speak("Papa"); // say something
      break
    case "q":
      speaker.speak("Quebec"); // say something

      break
    case "r":
      speaker.speak("Romeo"); // say something

      break
    case "s":
      speaker.speak("Sierra"); // say something

      break
    case "t":
      speaker.speak("Tango"); // say something

      break
    case "u":
      speaker.speak("Uniform"); // say something

      break
    case "v":
      speaker.speak("Victor"); // say something

      break
    case "w":
      speaker.speak("Whiskey"); // say something

      break
    case "x":
      speaker.speak("X-ray"); // say something

      break
    case "y":
      speaker.speak("Yankee"); // say something

      break
    case "z":
      speaker.speak("Zulu"); // say something

      break

    case "0":
      speaker.speak("Zero"); // say something

      break
    case "1":
      speaker.speak("One"); // say something

      break
    case "2":
      speaker.speak("Two"); // say something

      break
    case "3":
      speaker.speak("Three"); // say something

      break
    case "4":
      speaker.speak("Four"); // say something

      break
    case "5":
      speaker.speak("Five"); // say something

      break
    case "6":
      speaker.speak("Six"); // say something

      break
    case "7":
      speaker.speak("Seven"); // say something

      break
    case "8":
      speaker.speak("Eight"); // say something

      break
    case "9":
      speaker.speak("Nine"); // say something

      break
    case ".":
      speaker.speak("Stop"); // say something

      break
    default:
      console.log('Sorry, we are out of options');
}
  }
