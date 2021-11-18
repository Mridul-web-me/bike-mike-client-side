// import { Alert } from '@mui/material';
import React, { useState } from 'react';
// import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:8080/email', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input type="email" onBlur={handleOnBlur} placeholder="email" />
                <button type="submit" variant="contained">Make Admin</button>
            </form>
            {/* {success && <Alert severity="success">Made Admin successfully!</Alert>} */}
        </div>
    );
};

export default MakeAdmin;