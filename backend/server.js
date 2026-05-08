import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Grand Palace Hotel API is running' });
});

// Mock Booking Endpoint
app.post('/api/bookings', (req, res) => {
  const bookingData = req.body;
  console.log('New Booking Received:', bookingData);
  res.status(201).json({ 
    success: true, 
    message: 'Booking received successfully',
    data: bookingData 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
