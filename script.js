// Sample horse data (loaded from localStorage if exists)
let horses = JSON.parse(localStorage.getItem('horses')) || [];

// User account (simulated with localStorage)
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Function to display horses dynamically
function displayHorses(horseList) {
  const horseListContainer = document.querySelector('.grid');
  horseListContainer.innerHTML = ''; // Clear existing content

  horseList.forEach((horse) => {
    const horseCard = `
      <div class="card">
        <img src="${horse.image}" alt="${horse.name}">
        <h3>${horse.name}</h3>
        <p><strong>Breed:</strong> ${horse.breed}</p>
        <p><strong>Age:</strong> ${horse.age}</p>
        <p><strong>Color:</strong> ${horse.color}</p>
        <p><strong>Price:</strong> $${horse.price}</p>
        <p><strong>Location:</strong> ${horse.location}</p>
        <p>${horse.description}</p>
      </div>
    `;
    horseListContainer.innerHTML += horseCard;
  });

  if (horseList.length === 0) {
    horseListContainer.innerHTML = '<p>No horses found matching your search criteria.</p>';
  }
}

// Function to filter horses based on search input
function filterHorses(query) {
  query = query.toLowerCase(); // Convert to lowercase for case-insensitive search
  return horses.filter((horse) =>
    horse.name.toLowerCase().includes(query) ||
    horse.breed.toLowerCase().includes(query) ||
    horse.location.toLowerCase().includes(query)
  );
}

// Search form functionality
document.querySelector('#search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = document.querySelector('#search-input').value;
  const filteredHorses = filterHorses(searchQuery);
  displayHorses(filteredHorses);
});

// Function to handle form submission for adding a listing
document.querySelector('#add-listing-form').addEventListener('submit', (event) => {
  event.preventDefault();

  // Ensure a user is logged in
  if (!currentUser) {
    return alert('You must be logged in to add a listing.');
  }

  // Simulate the $50 fee being paid
  const feePaid = confirm("Do you confirm the $50 fee payment to post your listing?");
  if (!feePaid) return alert("Listing not posted. Fee must be paid.");

  // Gather form data
  const name = document.querySelector('#horseName').value;
  const breed = document.querySelector('#breed').value;
  const age = document.querySelector('#age').value;
  const color = document.querySelector('#color').value;
  const price = document.querySelector('#price').value;
  const location = document.querySelector('#location').value;
  const description = document.querySelector('#description').value;
  const imageFile = document.querySelector('#image').files[0];

  if (!name || !breed || !age || !color || !price || !location || !description || !imageFile) {
    return alert("All fields are required, including the image.");
  }

  // Generate a URL for the uploaded image
  const reader = new FileReader();
  reader.onload = function (e) {
    const image = e.target.result;

    // Add the new horse to the array
    horses.push({
      name,
      breed,
      age: parseInt(age),
      color,
      price: parseFloat(price),
      location,
      description,
      image,
      user: currentUser.username, // Attach the user who posted
    });

    // Save to localStorage
    localStorage.setItem('horses', JSON.stringify(horses));

    // Refresh the listings
    displayHorses(horses);

    // Clear the form
    document.querySelector('#add-listing-form').reset();
    alert("Listing posted successfully!");
  };

  reader.readAsDataURL(imageFile); // Read the image file
});

// Account creation functionality
document.querySelector('#register-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.querySelector('#register-username').value;
  const password = document.querySelector('#register-password').value;

  // Validate fields
  if (!username || !password) {
    return alert('Please fill in all fields.');
  }

  // Save user to localStorage
  const newUser = { username, password };
  localStorage.setItem('users', JSON.stringify([...JSON.parse(localStorage.getItem('users') || '[]'), newUser]));

  alert('Account created successfully!');
  document.querySelector('#register-form').reset();
});

// Login functionality
document.querySelector('#login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.querySelector('#login-username').value;
  const password = document.querySelector('#login-password').value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return alert('Invalid username or password.');
  }

  currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  alert('Login successful!');
  document.querySelector('#login-form').reset();
  displayLoggedInState();
});

// Logout functionality
document.querySelector('#logout').addEventListener('click', () => {
  currentUser = null;
  localStorage.removeItem('currentUser');
  alert('Logged out successfully!');
  displayLoggedInState();
});

// Display logged-in state
function displayLoggedInState() {
  const loginSection = document.querySelector('#login-section');
  const logoutButton = document.querySelector('#logout');
  const addListingSection = document.querySelector('#add-listing');

  if (currentUser) {
    loginSection.style.display = 'none';
    logoutButton.style.display = 'block';
    addListingSection.style.display = 'block';
  } else {
    loginSection.style.display = 'block';
    logoutButton.style.display = 'none';
    addListingSection.style.display = 'none';
  }
}

// Display horses on page load
displayHorses(horses);
displayLoggedInState();
