// Import the mongoose library using ES6 syntax
import mongoose from 'mongoose';

// if Atlas link is not working use this local database link or replace the link
// const DATABASE_URL = 'mongodb://127.0.0.1:27017/placementcell';
const DATABASE_URL = 'mongodb+srv://yashnd20comp:2TeWE1Y5ItB5Ol0m@atlas.eytsn.mongodb.net/';


// Establish connection to MongoDB using Mongoose
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const databaseConnection = mongoose.connection;

// Handle connection errors
databaseConnection.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

// Handle successful connection
databaseConnection.once('open', () => {
  console.log('Connected to MongoDB Database ');
});
 
// Export the mongoose instance for use in other files
export default mongoose; 
