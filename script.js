const headSlider = document.getElementById('headSlider');
const eyeSlider = document.getElementById('eyeSlider');
const torsoSlider = document.getElementById('torsoSlider');
const eyeColour = document.getElementById('eyeColour');
const outfitColour = document.getElementById('outfitColour');

const headText = document.getElementById('headText');
const eyesText = document.getElementById('eyesText');
const mouthText = document.getElementById('mouthText');
const torsoText = document.getElementById('torsoText');
const armText = document.getElementById('armText');
const legsText = document.getElementById('legsText');
const footText = document.getElementById('footText');

const head = document.getElementById('headImg');
const eyes = document.getElementById('eyeImg');
const torso = document.getElementById('torsoimg');
const leg1 = document.getElementById('leg1');
const leg2 = document.getElementById('leg2');


const randomGenButton = document.getElementById("")



headSlider.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    headText.innerHTML="Head: " + event.target.value;
    head.src = "images/head" + event.target.value + ".png";
    
});

eyeSlider.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    eyesText.innerHTML="Eyes: " + event.target.value;
    eyes.src = "images/eye" + event.target.value + ".png";
});


torsoSlider.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    torsoText.innerHTML="Torso: " + event.target.value;
    torso.src = "images/torso" + event.target.value + ".png";
});

eyeColour.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    eyeColourText.innerHTML="Eye colour: " + event.target.value;
    eyes.style.filter = "hue-rotate(" + event.target.value + "deg)"
});

outfitColour.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    outfitColourText.innerHTML="Outfit RGB: " + event.target.value;
    torso.style.filter = "hue-rotate(" + event.target.value + "deg)"
    leg1.style.filter = "hue-rotate(" + event.target.value + "deg)"
    leg2.style.filter = "hue-rotate(" + event.target.value + "deg)"

});

