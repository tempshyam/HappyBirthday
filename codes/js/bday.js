function setMobilePositions() {
  // Mobile screen assumptions
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  // Avoid overflow
  const maxHeight = screenH - 320;
  const maxWidth = screenW - 220;

  for (let i = 1; i <= 5; i++) {
    const top = Math.floor(Math.random() * maxHeight) + 'px';
    const left = Math.floor(Math.random() * maxWidth) + 'px';

    document.documentElement.style.setProperty(`--top-${i}`, top);
    document.documentElement.style.setProperty(`--left-${i}`, left);
  }

  // Center values for mobile
  const centerX = screenW / 2 - 75; // card width = 199px
  const centerY = screenH / 2 - 100; // card height = 299px

  document.documentElement.style.setProperty('--center-x', `${centerX}px`);
  document.documentElement.style.setProperty('--center-y', `${centerY}px`);
}

setMobilePositions();
window.addEventListener('resize', setMobilePositions);
