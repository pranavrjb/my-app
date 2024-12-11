import express from 'express';

const router = express.Router();

router.get('/doctors', (req, res) => {
    const doctors = [
        { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology', location: 'New York', experience: 10 },
        { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatology', location: 'Los Angeles', experience: 7 },
        { id: 3, name: 'Dr. Emily Davis', specialization: 'Pediatrics', location: 'Chicago', experience: 12 },
    ];

    res.json(doctors);
});

export default router;
