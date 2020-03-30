// TODO: Import Mongoose here
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/my_database';


// TODO: Connect to mongo here
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  // we're connected!
});



// TODO: Replace `{}` with actual Movie model
var Schema = mongoose.Schema;

const Movie = new Schema({
  title: String
});

var Movies = mongoose.model('movies', Movie);
// module.exports = mongoose.model('Movie', Movie);




const getMovieList = async () => {
  return await Movies.find({});
};

const resolvers = {
    Query: {
      movies: async () =>  {
        const movieList = await getMovieList()
        return movieList
      }
    },
  };
  
export default resolvers;