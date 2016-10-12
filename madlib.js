var userWords = document.getElementById('user-words');
var userVerbs

var defaultNouns = ['table', 'shirt', 'airplane', 'shark', 'computer', 'hedgehog', 'telephone', 'can', 'market', 'marker'];
var defaultVerbs = ['choose', 'feed', 'fling', 'bite', 'awake', 'grind', 'kneel', 'misspell', 'overthrow', 'ring'];
var defaultAdjectives = ['bland', 'deficient', 'motherly', 'passionate', 'rotten', 'threadbare', 'voluminous', 'ample', 'crafty', 'flustered'];
var defaultAdverbs = ['deeply', 'famously', 'brutally', 'anywhere', 'miserably', 'neatly', 'openly', 'reproachfully', 'ruthlessely', 'politely'];


function submit() {
	var rawNouns = document.getElementById('user-nouns')
	var rawNounSplit = rawNouns.value;
	var userNouns = rawNounSplit.split(',');	
	while (userNouns.length < 4) {
		userNouns.push(defaultNouns[Math.floor(Math.random() * 10)]);
	}
	console.log(userNouns);
}
