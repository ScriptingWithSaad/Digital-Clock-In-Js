// Get the timebox element
const timeBox = document.getElementById('timebox');

// Function to update the time
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Add leading zeros if necessary
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Update the time display
    timeBox.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

// Get the main div element
const mainDiv = document.querySelector('.main');

// Add hover effect
mainDiv.addEventListener('mouseover', () => {
    document.body.style.background = '#1a1a1a';
});

mainDiv.addEventListener('mouseout', () => {
    document.body.style.background = '#0a0a0a';
});