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

// Display all horses on page load
displayHorses(horses);
