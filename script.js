function loadPhotos() {
    const photoGrid = document.querySelector('.photo-grid');
    const photosSection = document.getElementById('photos');
    photosSection.classList.remove('hidden'); // Show photos section

    // Clear any previously loaded photos
    photoGrid.innerHTML = '';

    // Define an array of images with their src and names
    const images = [
        { src: 'images/photo1.jpeg', name: 'Festival Celebration 1' },
        { src: 'images/photo2.jpeg', name: 'Festival Celebration 2' },
        { src: 'images/photo3.jpeg', name: 'Festival Celebration 3' },
        { src: 'images/photo4.jpeg', name: 'Festival Celebration 4' },
        { src: 'images/photo5.jpeg', name: 'Festival Celebration 5' },
        { src: 'images/photo6.jpeg', name: 'Festival Celebration 6' },
        { src: 'images/photo7.jpeg', name: 'Festival Celebration 7' },
        { src: 'images/photo8.jpeg', name: 'Festival Celebration 8' },
        { src: 'images/photo9.jpeg', name: 'Festival Celebration 9' },
        { src: 'images/photo10.jpeg', name: 'Festival Celebration 10' },
    ];

    // Loop through the images array and add each photo with its name
    images.forEach(image => {
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('photo-container');

        // Create the image element
        const img = document.createElement('img');
        img.src = image.src; // Set image source
        img.alt = image.name; // Set alt text for the image
        img.className = 'festival-celebration';

        // Create a paragraph element for the name of the image
        const name = document.createElement('p');
        name.className = 'photo-name';
        name.textContent = image.name; // Set the name of the image

        // Append the image and name to the photo container
        photoContainer.appendChild(img);
        photoContainer.appendChild(name);

        // Append the photo container to the photo grid
        photoGrid.appendChild(photoContainer);
    });
}
