// Sample horse data
const horses = [
  {
    name: "Bella",
    breed: "Dutch Warmblood",
    discipline: "Show Jumping",
    location: "California, USA",
    image: "https://via.placeholder.com/250x150"
  },
  {
    name: "Thunder",
    breed: "Thoroughbred",
    discipline: "Racing",
    location: "Kentucky, USA",
    image: "https://via.placeholder.com/250x150"
  },
  {
    name: "Shadow",
    breed: "Friesian",
    discipline: "Dressage",
    location: "New York, USA",
    image: "https://via.placeholder.com/250x150"
  },
  {
    name: "Storm",
    breed: "Arabian",
    discipline: "Endurance",
    location: "Texas, USA",
    image: "https://via.placeholder.com/250x150"
  }
];

// Function to display horses dynamically
function displayHorses(horseList) {
  const horseListContainer = document.querySelector('.grid');
  horseListContainer.innerHTML = ''; // Clear existing content

  // Create cards dynamically
  horseList.forEach((horse) => {
    const horseCard = `
      <div class="card">
        <img src="${horse.image}" alt="${horse.name}">
        <h3>${horse.name}</h3>
        <p><strong>Breed:</strong> ${horse.breed}</p>
        <p><strong>Discipline:</strong> ${horse.discipline}</p>
        <p><strong>Location:</strong> ${horse.location}</p>
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
    horse.discipline.toLowerCase().includes(query) ||
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

// Form submission handling
document.querySelector('#add-listing-form').addEventListener('submit', (event) => {
  event.preventDefault();

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
      image
    });

    // Refresh the horse listings
    displayHorses(horses);

    // Clear the form
    document.querySelector('#add-listing-form').reset();
    alert("Listing posted successfully!");
  };

  reader.readAsDataURL(imageFile);
});

// Display horses on page load
displayHorses(horses);
// Display all horses on page load
displayHorses(horses);
