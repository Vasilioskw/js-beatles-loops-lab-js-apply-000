// add solution here


const singers = ["John Lennon", "Ringo Star", "Paul McCartney", "Dizzy"];
const instruments = ["guitar", "drums", "piano", "trumpet"];

var theBeatlesPlay = function (singersArray, instrumentsArray) {
	var collect = [];
	for (var i = 0; i<singers.length; i++) {
	collect.push(musiciansArray[i] + " plays " + instrumentsArray[i]);
	}
	return(collect);
};