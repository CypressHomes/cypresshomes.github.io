var backgroundIndex = 0;
var fadeSpeed = 10000;
var files = ['file1.jpg', 'file2.jpg', 'file3.jpg', 'file4.jpg'];

function chg_image() {
    var currentImage = '/res/background/' + files[backgroundIndex];
    $('.bg-image').css('background-image', 'url(' + currentImage + ')');

    backgroundIndex = (backgroundIndex + 1) % files.length;
    setTimeout(chg_image, fadeSpeed * 2);
}

function Lights_On() {
    var x = 0;
    while (x < 1) {
        x += 0.01;
        $('.bg-image').css('opacity', x);
    }

}

function Lights_Off() {
    var x = 1;
    while (x > 0) {
        x -= 0.01;
        $('.bg-image').css('opacity', x);
    }
}

// Fade from black to the next image
function fadeToNextImage() {
    Lights_Off();
    setTimeout(function () {
        Lights_On();
        chg_image();
    }, fadeSpeed);
}

// Start the sequence
fadeToNextImage();