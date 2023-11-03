var files = ["43596236/280371601-5019d0df-3ac5-48d3-a256-a63b52c38e10.jpg", "43596236/280371617-8e02ece1-cc07-4fd4-839e-7bcaa3a76bc7.jpg", "43596236/280371349-71dd0c82-e54d-4439-9e8d-bf2d3fa99b12.jpg", "43596236/280371493-8be7f321-bd4f-472b-ab2e-d6d0acc49ac3.jpg"],
base = "https://github-production-user-asset-6210df.s3.amazonaws.com/",
backgroundIndex = 0
fadeSpeed = 10000;

files.forEach(function(img){
    new Image().src = base + img; 
});

function chg_image() {
	window.clearTimeout();
    var currentImage = base + files[backgroundIndex];
    $('.bg-image').css('background-image', 'url(' + currentImage + ')');
    backgroundIndex = (backgroundIndex + 1) % files.length;
    setTimeout(chg_image, fadeSpeed * 2);
}

function Lights_On() {
    var x = 0;
    while (x < 100) {
        x += 1;
        $('.bg-image').css('opacity', .69);
    }
}

function Lights_Off() {
    var x = 100;
    while (x > 0) {
        x -= 1;
        $('.bg-image').css('opacity', .69);
    }
}

function fadeToNextImage() {
    Lights_Off();
    setTimeout(function () {
        Lights_On();
        chg_image();
    }, fadeSpeed);
}

fadeToNextImage();
