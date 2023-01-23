import React, { useState } from "react";
import "./signup.css"
const Signup = () => {
    const [inpVal, setInpVal] = useState({
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
    })
    const [error, setError] = useState("")
    const [welcomeMessage, setWelcomeMessage] = useState("")

    const setval = (e) => {
        const { name, value } = e.target;
        setInpVal(() => {
            return {
                ...inpVal,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inpVal.name || !inpVal.email || !inpVal.gender || !inpVal.phoneNumber || !inpVal.password) {
            setError("All fields are mandatory")
            return;
        }
        if (!inpVal.name) {
            setError('Name is not alpha numeric');
            return;
        }
        if (!inpVal.email.includes('@')) {
            setError('Please enter a valid email address')
            return;
        }
        if (inpVal.gender !== 'male' && inpVal.gender !== 'female' && inpVal.gender !== 'other') {
            setError('Please identify as male, female or others')
            return;
        }
        if (!inpVal.phoneNumber) {
            setError('Phone number must contain only numbers')
            return;
        }
        setError('')
        try {
            const res = await fetch("http://localhost:8000/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: inpVal.name,
                    email: inpVal.email,
                    gender: inpVal.gender,
                    phoneNumber: inpVal.phoneNumber,
                    password: inpVal.password
                })
            })
            const data = await res.json()
            if (data.status == "success") {

                const username = inpVal.email.split('@')[0];
                setWelcomeMessage(`Hello ${username}`)
                setInpVal({ email: '', name: '', phoneNumber: '', gender: 'please select gender', password: '' })
            } else {
                console.log('Error creating user')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form className="formContainer">
                <label for="name">NAME : </label>
                <input type="text" id="name" name='name' data-testid="name" value={inpVal.name} onChange={setval} /><br></br>
                <label for="email">EMAIL : </label>
                <input type="text" id="email" name='email' data-testid="email" value={inpVal.email} onChange={setval} /><br />
                <label for="gender">GENDER :</label>
                <select id="gender" data-testid="gender" name='gender' value={inpVal.gender} onChange={setval}>
                    <option value="please select gender">Please select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <label for="phoneNumber">Phone Number : </label>
                <input type="text" name='phoneNumber' id="phoneNumber" value={inpVal.phoneNumber} onChange={setval} /><br />
                <label for="password">Password : </label>
                <input type="password" name='password' id="password" value={inpVal.password} onChange={setval} /><br />
                <button onClick={handleSubmit}>Submit</button>
                <div className="err">{error}</div>
            <div>{welcomeMessage}</div>
            </form>
           
        </>
    )
}

export default Signup;


