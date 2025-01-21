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
  }
];

// Populate horse listings
function displayHorses(horseList) {
  const horseListContainer = document.getElementById('horse-list');
  horseListContainer.innerHTML = '';
  horseList.forEach(horse => {
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
}

// Filter horses based on search input
document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const filteredHorses = horses.filter(horse =>
    horse.name.toLowerCase().includes(searchQuery) ||
    horse.breed.toLowerCase().includes(searchQuery) ||
    horse.discipline.toLowerCase().includes(searchQuery) ||
    horse.location.toLowerCase().includes(searchQuery)
  );
  displayHorses(filteredHorses);
});

// Display all horses on page load
displayHorses(horses);
