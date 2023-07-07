const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User')
const app = express();
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = 'sdfasfwtgafs'

app.use(express.json())

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

mongoose.connect(process.env.MONGO_URL)

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body
  try {
    const userData = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt)
    });
    res.json(userData)
  } catch (e) {
    res.status(422).json(e)
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userData = await User.findOne({ email });
  if (userData) {
    const passOk = bcrypt.compareSync(password, userData.password)
    if (passOk) {
      jwt.sign({
        email: userData.email,
        id: userData._id
      }, jwtSecret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json('password ok')
      });
    } else {
      res.status(422).json('password not ok');
    }
  } else {
    res.json('not found');
  }
});

app.listen(4000);
