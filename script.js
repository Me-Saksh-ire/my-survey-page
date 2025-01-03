// JavaScript for Dropdown Functionality
const dropdown = document.getElementById('dropdown');
const dp = document.getElementById('drop');
const dropdownMenu = document.getElementById('hobbies');
const dropdn = document.getElementById('cuisine');

// Toggle the dropdown menu
dropdown.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});
dp.addEventListener('click', () => {
    dropdn.classList.toggle('hide');
});

// Select a dropdown option
dropdownMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        dropdown.value = event.target.textContent; // Set the text box value
        dropdownMenu.classList.add('hidden'); // Hide the dropdown
    }
});
dropdn.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        dp.value = event.target.textContent; // Set the text box value
        dropdn.classList.add('hide'); // Hide the dropdown
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});
document.addEventListener('click', (event) => {
    if (!dp.contains(event.target) && !dropdn.contains(event.target)) {
        dropdn.classList.add('hide');
    }
});
function closeForm() {
    const name = document.querySelector('input[placeholder="Enter Your Name"]').value;
    const hobbies = document.getElementById('dropdown').value;
    const cuisine = document.getElementById('drop').value;

    if (!name || !hobbies || !cuisine) {
        alert("Please fill out all required fields!");
        return false;
    }

    alert("Your Form Submitted Successfully!");
    return true;
}

