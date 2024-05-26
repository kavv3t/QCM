document.addEventListener('DOMContentLoaded', () => {
  const brightnessSlider = document.getElementById('brightness');
  const volumeSlider = document.getElementById('volume');
  const backgroundMusic = document.getElementById('background-music');

  // Set volume from localStorage if it exists
  const savedVolume = localStorage.getItem('volume');
  if (savedVolume !== null) {
    backgroundMusic.volume = savedVolume;
    volumeSlider.value = savedVolume;
  }

  // Set brightness from localStorage if it exists
  const savedBrightness = localStorage.getItem('brightness');
  if (savedBrightness !== null) {
    document.body.style.filter = `brightness(${savedBrightness})`;
    brightnessSlider.value = savedBrightness;
  }

  // Save volume to localStorage on change
  volumeSlider.addEventListener('input', (event) => {
    const volumeValue = event.target.value;
    backgroundMusic.volume = volumeValue;
    localStorage.setItem('volume', volumeValue);
  });

  // Save brightness to localStorage on change
  brightnessSlider.addEventListener('input', (event) => {
    const brightnessValue = event.target.value;
    document.body.style.filter = `brightness(${brightnessValue})`;
    localStorage.setItem('brightness', brightnessValue);
  });
});
