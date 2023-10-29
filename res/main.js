var files = ['file1.jpg', 'file2.jpg', 'file3.jpg', 'file4.jpg'],
base = "./background/",
backgroundIndex = 0,
secs = 4;
files.forEach(function(img){
    new Image().src = base + img; 
});

function backgroundSequence() {
	window.clearTimeout();
	for (i = 0; i < files.length; i++) {
		setTimeout(function(){ 
            $('bg-image').css('background-image', 'url(' +  base + files[backgroundIndex] + ") no-repeat center center fixed"); 
            $('bg-image').css('background-size', 'cover');
		if ((backgroundIndex + 1) === files.length) { setTimeout(function() { backgroundSequence()}, (secs * 1000))} else { backgroundIndex++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();