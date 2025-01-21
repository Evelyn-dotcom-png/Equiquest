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
    const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

router.post('/upload', upload.single('image'), (req, res) => {
  res.send(`File uploaded: ${req.file.path}`);
});
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const https://buy.stripe.com/test_eVafZjbNE2a2aC49AA = async (req, res) => {
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
              name: listing .name,
            },
            unit_amount: product.price * 50,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.BASE_URL}/success`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
    });

    res.json({ id
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

  
    res.json({ id
    // Add the new card to the horse list
    horseList.appendChild(horseCard);

    // Clear the form
    form.reset();
  });
});

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductDetail from './ProductDetail';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
const express = require('express');
const router = express.Router();
const Product = require('./models/Product');

// Fetch all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

// Sign Up
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User Signed Up:', userCredential.user);
            // Redirect to dashboard or home page
        })
        .catch((error) => {
            console.error(error.message);
        });
});
