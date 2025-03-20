let images = [
    { src: 'images/eid1.jpg', name: 'Eid 1' },
    { src: 'images/eid2.jpg', name: 'Eid 2' },
    { src: 'images/eid3.jpg', name: 'Eid 3' }
];

let selectedImageIndex = 0; // Current index of the image being shown

// Function to show the previous image
function showPrevImage() {
    selectedImageIndex = (selectedImageIndex - 1 + images.length) % images.length;
    updateImageDisplay();
}

// Function to show the next image
function showNextImage() {
    selectedImageIndex = (selectedImageIndex + 1) % images.length;
    updateImageDisplay();
}

// Update the displayed image and name
function updateImageDisplay() {
    const image = images[selectedImageIndex];

    // Update image display section with the current image and name
    const imageDisplay = document.getElementById('image-display');
    imageDisplay.innerHTML = `<img src="${image.src}" alt="${image.name}" onclick="selectImage(${selectedImageIndex})" />`;
}

// Function to handle image click (to select the image)
function selectImage(index) {
    // Hide the selection page and show the greeting card page
    document.getElementById('selection-page').style.display = 'none';
    document.getElementById('greeting-card-page').style.display = 'block';

    // Set the selected image for the greeting card page
    const selectedImage = images[index];
    const cardImage = document.getElementById('card-image');
    cardImage.style.backgroundImage = `url(${selectedImage.src})`;
    cardImage.style.backgroundSize = 'contain';  // Don't crop, maintain aspect ratio
    cardImage.style.backgroundPosition = 'center';
    cardImage.style.height = '400px';  // Ensure it has a height
}

// Function to update the greeting card with the employee's name
function updateCard() {
    const name = document.getElementById('employee-name').value.trim();

    if (name) {
        // Get the employee's name element inside the card image
        const nameElement = document.getElementById('employee-name-text');
        
        // Set the name text
        nameElement.textContent = name;
    } else {
        alert('Please enter your name!');
    }
}

// Initialize the page by displaying the first image
updateImageDisplay()
