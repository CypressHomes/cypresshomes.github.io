var files = ['file1.jpg', 'file2.jpg', 'file3.jpg', 'file4.jpg'],
base = "https://raw.githubusercontent.com/CypressHomes/cypresshomes.github.io/main/res/background/",
backgroundIndex = 0,
secs = 4;
files.forEach(function(img){
    new Image().src = base + img; 
});


function backgroundSequence() {
	window.clearTimeout();
	for (i = 0; i < 3; i++) {
		setTimeout(function(){ 
            $('bg-image').css('background-image', 'url(' +  base + files[backgroundIndex] + ")"); 
			backgroundIndex++;
			i++;
		if ((backgroundIndex ) === files.length) {setTimeout(function() { backgroundSequence()}, (secs * 1000))} 
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();