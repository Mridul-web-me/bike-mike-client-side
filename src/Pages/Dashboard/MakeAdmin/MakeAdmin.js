import React, { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://floating-oasis-79529.herokuapp.com/users/admin', {
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
        <div className="makeAdmin">
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input type="email" onBlur={handleOnBlur} placeholder="email" />
                <button type="submit" className="btn btn-primary" variant="contained">Make Admin</button>
            </form>
            {success && <p className="text-success">Made Admin successfully!</p>}
        </div>
    );
};

export default MakeAdmin;