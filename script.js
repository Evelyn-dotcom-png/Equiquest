document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('listing-form');
  const horseList = document.getElementById('horse-list');

  // Event listener for form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const price = document.getElementById('price').value;
    const color = document.getElementById('color').value;
    const location = document.getElementById('location').option;
    const description = document.getElementById('description').value;
    const payment = document.getElementById('payment-method').value
    // Create a new horse card
    const horseCard = document.createElement('div');
    horseCard.classList.add('horse-card');
    horseCard.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Breed:</strong> ${breed}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Price:</strong> $${price}</p>
      <p><strong>location:</strong> ${location}</p>
      <p>${description}</p>
    `;
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  const { productId, quantity } = req.body;

  const product = await getProductById(productId); // Fetch product from DB

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'payment'name,
            },
            unit_amount: product.price * 50,
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.BASE_URL}/success`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
    });

    res.json({ id
    // Add the new card to the horse list
    horseList.appendChild(horseCard);

    // Clear the form
    form.reset();
  });
});
