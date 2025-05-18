const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection - Using a fallback approach for demo
// If you have MongoDB Atlas, replace the connection string below
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://your_username:your_password@cluster0.mongodb.net/fullstack_app';

// In-memory users array as fallback if MongoDB connection fails
let inMemoryUsers = [];
let useInMemoryDB = false;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  console.log('Using in-memory database instead');
  useInMemoryDB = true;
});

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    if (useInMemoryDB) {
      return res.json(inMemoryUsers);
    }
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;

    if (useInMemoryDB) {
      const newUser = {
        _id: Date.now().toString(),
        name,
        email,
        createdAt: new Date()
      };
      inMemoryUsers.push(newUser);
      return res.status(201).json(newUser);
    }

    const user = new User({ name, email });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
