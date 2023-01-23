const SignUp = require("../models/signup")
const express = require("express")
const router = express.Router()
router.use(express.json())

router.post("/api/users", async (req, res) => {
    try {
        const { name, email, gender, phoneNumber, password } = req.body;
        if (!name || !email || !gender || !phoneNumber || !password) {
            return res.status(400).json({ error: 'All fields are mandatory' });
            }
            if(!/^[a-zA-Z0-9\s]*$/.test(name)){
                return res.status(400).json({ error: 'Name is not alpha numeric' });
            }
            if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                return res.status(400).json({ error: 'Please enter a valid email address' });
            }
            if(gender !== 'male' && gender !== 'female' && gender !== 'other'){
                return res.status(400).json({ error: 'Please identify as male, female or others' });

            }
            if(!phoneNumber){
                setError('')
                return res.status(400).json({ error: 'Phone number must contain only numbers' });
            }
            if(password.length < 6){
                return res.status(400).json({ error: 'Password must contain atleast 6 letters' });
            }

        const newUser = new SignUp({
            name: name,
            email: email,
            gender: gender,
            phoneNumber: phoneNumber,
            password: password
        })
    const registerUser =  await newUser.save()
        const username = email.split('@')[0];
        res.status(200).json({
            status: "success",
            registerUser
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
})


module.exports = router;