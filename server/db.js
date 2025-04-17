const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
	};
	try {
		console.log("Hello");
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};

// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// mongoose.connect("mongodb+srv://saiki_39:Kmit123$@cluster0.xbznrv3.mongodb.net/MongoLearn?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// mongoose.connection
//   .once('open', () => console.log('Connected to the database!'))
//   .on('error', err => console.log('Error with the database!', err));

