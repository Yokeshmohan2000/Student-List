
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRoutes from './routes/student';

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api', studentRoutes);

const DB_URL = 'mongodb://localhost:27017/studentdb';
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as mongoose.ConnectOptions)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error('MongoDB connection error:', error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  
export default app;

