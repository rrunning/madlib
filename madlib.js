var userNouns = document.getElementById('user-nouns');
var userVerbs = document.getElementById('user-verbs');
var userAdjectives = document.getElementById('user-adjectives');
var userAdverbs = document.getElementById('user-adverbs');

var defaultNouns = ['table', 'shirt', 'airplane', 'shark', 'computer', 'hedgehog', 'telephone', 'can', 'market', 'marker'];
var defaultVerbs = ['choose', 'feed', 'fling', 'bite', 'awake', 'grind', 'kneel', 'misspell', 'overthrow', 'ring'];
var defaultAdjectives = ['bland', 'deficient', 'motherly', 'passionate', 'rotten', 'threadbare', 'voluminous', 'ample', 'crafty', 'flustered'];
var defaultAdverbs = ['deeply', 'famously', 'brutally', 'anywhere', 'miserably', 'neatly', 'openly', 'reproachfully', 'ruthlessely', 'politely'];


function submit() {
	var finalNouns = createArray(userNouns, defaultNouns);
	var finalVerbs = createArray(userVerbs, defaultVerbs);
	var finalAdverbs = createArray(userAdverbs, defaultAdverbs);
	var finalAdjectives = createArray(userAdjectives, defaultAdjectives);
	console.log(finalAdjectives);
	console.log(finalAdverbs);
	console.log(finalNouns);
	console.log(finalVerbs);
}

function createArray(userInput, defaultWords) {
	var userWords = userInput.value.split(',');	
	while (userWords.length < 4) {
		userWords.push(defaultWords[Math.floor(Math.random() * 10)]);
	}
	return userWords;
}