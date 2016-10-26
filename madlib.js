var userNouns = document.getElementById('user-nouns');
var userVerbs = document.getElementById('user-verbs');
var userAdjectives = document.getElementById('user-adjectives');
var userAdverbs = document.getElementById('user-adverbs');

var defaultNouns = ['table', 'shirt', 'airplane', 'shark', 'computer', 'hedgehog', 'telephone', 'can', 'market', 'marker'];
var defaultVerbs = ['choose', 'feed', 'fling', 'bite', 'awake', 'grind', 'kneel', 'misspell', 'overthrow', 'ring'];
var defaultAdjectives = ['bland', 'deficient', 'motherly', 'passionate', 'rotten', 'threadbare', 'voluminous', 'ample', 'crafty', 'flustered'];
var defaultAdverbs = ['deeply', 'famously', 'brutally', 'anywhere', 'miserably', 'neatly', 'openly', 'reproachfully', 'ruthlessely', 'politely'];


function submit(story) {
	var finalNouns = createArray(userNouns, defaultNouns);
	var finalVerbs = createArray(userVerbs, defaultVerbs);
	var finalAdverbs = createArray(userAdverbs, defaultAdverbs);
	var finalAdjectives = createArray(userAdjectives, defaultAdjectives);

	if (finalNouns.length > 4 || finalVerbs.length > 4 || finalAdjectives.length > 4 || finalAdverbs.length > 4) {
		return alert("Please enter only 4 words in each field.");
	}
// make a variable for the id
	hideStories();
	display(story);
	assignWords(finalNouns, 'noun', story)
	assignWords(finalVerbs, 'verb', story)
	assignWords(finalAdjectives, 'adjective', story)
	assignWords(finalAdverbs, 'adverb', story)

}

function createArray(userInput, defaultWords) {
	var preTrimWords = userInput.value.split(',');
	var userWords = []
	for (var i = 0; i < preTrimWords.length; i++) {
		var bushWhacker = preTrimWords[i].trim()
		if (bushWhacker !== '') {
		userWords.push(bushWhacker);
		}
	} 	
	while (userWords.length < 4) {
		var randomWord = defaultWords[Math.floor(Math.random() * 10)];
		if (userWords.indexOf(randomWord) === -1) {
			userWords.push(randomWord);
		}
	}
	return userWords;
}

function assignWords (finalWords, className, idName) {
	doTheShuffle(finalWords);
	var parent = document.getElementById(idName);
	var children = parent.getElementsByClassName(className);
	for (var i = 0; i < 4; i++) {
		children[i].innerHTML = finalWords[i]
	}
}

function doTheShuffle(peanut) {
	for (var i = peanut.length-1; i>=0; i--) {
		var randomIndex = Math.floor(Math.random()*(i+1));
		var itemAtIndex = peanut[randomIndex];
		peanut[randomIndex] = peanut[i];
		peanut[i] = itemAtIndex;
	}
}

// function displayNone() {
// 	getElementsByClassName('stories')
// }

function display(story) {
	document.getElementById(story).classList.add('show');
}

function hideStories() {
	var storyList = document.getElementsByClassName('stories');
	for (var i=0; i < storyList.length; i++) {
		storyList[i].classList.remove('show');
	}
}


