// add solution here


const singers = ["John Lennon", "Ringo Star", "Paul McCartney", "Dizzy"];
const instruments = ["guitar", "drums", "piano", "trumpet"];

var theBeatlesPlay = function (singersArray, instrumentsArray) {
	var collect = [];
	for (var i = 0; i<singers.length; i++) {
	collect.push(singersArray[i] + " plays " + instrumentsArray[i]);
	}
	return(collect);
};

theBeatlesPlay(singers, instruments);

var facts = [
	"He was the last Beatle to learn to drive",
	"He was never a vegetarian",
	"He was a choir boy and boy scout",
	"He hated the sound of his own voice"

johnLennonFacts function = function (factsArray) {
  
  var i = 0;
	var arrayCounter = factsArray.length
	var newFactsArray = [];

