const headSlider = document.getElementById('headSlider');
const eyeSlider = document.getElementById('eyeSlider');
const mouthSlider = document.getElementById('mouthSlider');
const torsoSlider = document.getElementById('torsoSlider');
const armSlider = document.getElementById('armSlider');
const legSlider = document.getElementById('legSlider');
const footSlider = document.getElementById('footSlider');

const headText = document.getElementById('headText');
const eyesText = document.getElementById('eyesText');
const mouthText = document.getElementById('mouthText');
const torsoText = document.getElementById('torsoText');
const armText = document.getElementById('armText');
const legsText = document.getElementById('legsText');
const footText = document.getElementById('footText');




headSlider.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    headText.innerHTML="Head: " + event.target.value;
});

eyeSlider.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    eyesText.innerHTML="Eyes: " + event.target.value;
});

mouthSlider.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    mouthText.innerHTML="Mouth: " + event.target.value;
});

torsoSlider.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    torsoText.innerHTML="Torso: " + event.target.value;
});

armSlider.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    armText.innerHTML="Arms: " + event.target.value;
});

legSlider.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    legsText.innerHTML="Legs: " + event.target.value;
});

footSlider.addEventListener('input', function(event) {
    console.log('Slider value:', event.target.value);
    footText.innerHTML="Feet: " + event.target.value;
});

