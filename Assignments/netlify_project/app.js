// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Get references to the elements in the DOM
    const profileName = document.getElementById('profile-name');
    const profileBio = document.getElementById('profile-bio');
    const profilePic = document.getElementById('profile-pic');

    const nameInput = document.getElementById('name-input');
    const bioInput = document.getElementById('bio-input');
    const picInput = document.getElementById('pic-input');
    const updateButton = document.getElementById('update-button');

    // Add an event listener to the update button to handle profile updates
    updateButton.addEventListener('click', function () {
        // Get values from input fields
        const newName = nameInput.value;
        const newBio = bioInput.value;
        const newPicUrl = picInput.value;

        // Update the profile fields with the new input values
        if (newName) {
            profileName.textContent = `Name: ${newName}`;
        }
        if (newBio) {
            profileBio.textContent = `Bio: ${newBio}`;
        }
        if (newPicUrl) {
            profilePic.src = newPicUrl;
        }
    });
});
