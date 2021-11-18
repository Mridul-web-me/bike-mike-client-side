// import { Alert } from '@mui/material';
import React, { useState } from 'react';
// import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:8080/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }, [])
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    setSuccess(true)
                    setEmail('')
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input type="email" onBlur={handleOnBlur} placeholder="email" />
                <button type="submit" variant="contained">Make Admin</button>
            </form>
            {success && <p className="text-success">Made Admin successfully!</p>}
        </div>
    );
};

export default MakeAdmin;