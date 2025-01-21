// Initialize horses array from localStorage or set to default if none exists
let horses = JSON.parse(localStorage.getItem('horses')) || [
  {
    name: "Thunder", breed: "Arabian", age: 6, color: "Bay", price: 3500,
    location: "United States", description: "A fast and agile horse.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Starlight", breed: "Thoroughbred", age: 5, color: "Chestnut",
    price: 5000, location: "Canada", description: "Perfect for racing.",
    image: "https://via.placeholder.com/150"
  }
];

// Function to display horses dynamically
function displayHorses(horseList) {
  const horseListContainer = document.querySelector('.grid');
  horseListContainer.innerHTML = ''; // Clear existing content

  // Create cards dynamically for each horse
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

  // If no horses found, display a message
  if (horseList.length === 0) {
    horseListContainer.innerHTML = '<p>No horses found matching your search criteria.</p>';
  }
}

// Form submission handler for adding a new listing
document.querySelector('#add-listing-form').addEventListener('submit', function (event) {
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

  // Debugging the form data
  console.log(name, breed, age, color, price, location, description, imageFile);

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

    // Clear the form
    document.querySelector('#add-listing-form').reset();
    alert("Listing posted successfully!");
  };

  // Read the image file as DataURL
  reader.readAsDataURL(imageFile);
});

// Initial display of horses
displayHorses(horses);
