const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

exports.signup = async (req, res) => {
    try {
        if (!JWT_SECRET) {
            console.error('JWT_SECRET is not defined in environment variables');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        const { firstName, lastName, age, gender, username, email, phoneNumber, password, termsAccepted } = req.body;

        if (!firstName || !lastName || !age || !gender || !username || !email || !phoneNumber || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        if (!termsAccepted) {
            return res.status(400).json({ message: 'Please accept the terms and conditions to sign up.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            age,
            gender,
            username,
            email,
            phoneNumber,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully.' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

exports.signin = async (req, res) => {
    try {
        if (!JWT_SECRET) {
            console.error('JWT_SECRET is not defined in environment variables');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ message: 'Error signing in', error: error.message });
    }
};