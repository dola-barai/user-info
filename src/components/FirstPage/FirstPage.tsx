import { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function FormPage() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (name && phoneNumber && email) {
            localStorage.setItem('userDetails', JSON.stringify({ name, phoneNumber, email }));
            navigate('/second');
        } else {
            alert('Please enter all details.');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Enter Your Details
                    </Typography>
                    <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} style={{ marginTop: '1rem' }} />
                    <TextField label="Phone Number" fullWidth value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ marginTop: '1rem' }} />
                    <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginTop: '1rem' }} />
                    <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '1rem' }}>
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default FormPage;
