// Sample horse data (initial data if none exists in localStorage)
let horses = JSON.parse(localStorage.getItem('horses')) || [
  { name: "Thunder", breed: "Arabian", age: 6, color: "Bay", price: 3500, location: "United States", description: "A fast and agile horse.", image: "https://via.placeholder.com/150" },
  { name: "Starlight", breed: "Thoroughbred", age: 5, color: "Chestnut", price: 5000, location: "Canada", description: "Perfect for racing.", image: "https://via.placeholder.com/150" }
];

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

  // If no results found
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
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const searchQuery = document.querySelector('input[type="text"]').value;
  const filteredHorses = filterHorses(searchQuery);
  displayHorses(filteredHorses);
});

// Form submission handling for adding a new listing
document.querySelector('#add-listing-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission from reloading the page

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

  // Validate form fields
  if (!name || !breed || !age || !color || !price || !location || !description || !imageFile) {
    alert("All fields are required, including the image.");
    return;
  }

  // FileReader to handle image upload
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
      image
    });

    // Save the updated horses array to localStorage
    localStorage.setItem('horses', JSON.stringify(horses));

    // Refresh the horse listings (this will now include the new horse)
    displayHorses(horses);

    // Clear the form fields only after successful submission
    document.querySelector('#add-listing-form').reset();
    alert("Listing posted successfully!");
  };

  reader.readAsDataURL(imageFile); // Read the image file
});

// Display horses on page load (this will show the initial listings)
displayHorses(horses);

// Function to handle login
document.querySelector('#login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.querySelector('#login-username').value;
  const password = document.querySelector('#login-password').value;

  // Dummy account check (In a real app, this should check against a backend or database)
  if (username === "user" && password === "password123") {
    alert("Login successful!");
    // Redirect to listings or show user options
  } else {
    alert("Invalid username or password.");
  }
});

// Function to handle registration
document.querySelector('#register-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.querySelector('#register-username').value;
  const password = document.querySelector('#register-password').value;

  // In a real app, this would save the data to a database or a backend API
  alert("Registration successful! You can now log in.");
  document.querySelector('#register-form').reset();
});

// Display the initial list of horses when the page loads
displayHorses(horses);
