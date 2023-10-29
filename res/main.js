var files = ['file1.jpg', 'file2.jpg', 'file3.jpg', 'file4.jpg'],
base = "./res/background/",
backgroundIndex = 0,
secs = 4;
files.forEach(function(img){
    new Image().src = base + img; 
});

function backgroundSequence() {
	window.clearTimeout();
	for (i = 0; i < files.length; i++) {
		setTimeout(function(){ 
			document.documentElement.style.backgroundImage= "url(" + base + files[backgroundIndex] + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
            console.log("done");
		if ((backgroundIndex + 1) === files.length) { setTimeout(function() { backgroundSequence()}, (secs * 1000))} else { backgroundIndex++; }			
		}, (secs * 1000) * i)	
	}
}
backgroundSequence();