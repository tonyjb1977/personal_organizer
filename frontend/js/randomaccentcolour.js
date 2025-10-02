// -------------------------- Get Random Accent Color --------------------------
// This function generates a random accent color in HSL format.
 function getRandomAccentColor() {
    // Hue (0-360) can be random for different colors
    const hue = Math.floor(Math.random() * 360);
    // Saturation
    const saturation = Math.floor(Math.random() * 40) + 20;
    // Lightness
    const lightness = Math.floor(Math.random() * 15) + 10;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Get the button element
const changeColorBtn = document.getElementById('changeColorBtn');

// Add event listener to change background on click
changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomAccentColor();
});

// Set an initial random accent background on page load
document.body.style.backgroundColor = getRandomAccentColor();
// ------------------------ End Random Accent Color ------------------------