var backgroundIndex = 0;
var fadeSpeed = 500;
var files = ['file1.jpg', 'file2.jpg', 'file3.jpg', 'file4.jpg'];

function chg_image() {
    var currentImage = '/res/background/' + files[backgroundIndex];
    $('.bg-image').css('background-image', 'url(' + currentImage + ')');

    backgroundIndex = (backgroundIndex + 1) % files.length;
    setTimeout(chg_image, fadeSpeed * 2);
}

function Lights_On() {
    $('.bg-image').css('opacity', '1');
}

function Lights_Off() {
    $('.bg-image').css('opacity', '0');
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