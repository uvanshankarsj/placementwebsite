const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
	dbName: 'testing',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) : 
	console.log('Connected to yourDB-name database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
	studentname: {
		type: String,
		required: true,
		// unique: true,
	},
	CGPA:{
		type: Number,
		required: true,
	},
	arrear: {
		type: Number,
		required: true,
	},
	placement: {
		type: Number,
		required: true,
	},
	placed: {
		type: String,
		required: true,
	},

	type: {
		type: String,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	salary: {
		type: Number,
		required: true,
	},
});

const User = mongoose.model('students', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.get("/users", async (req, resp) => {
    let name =[];
	try {
        const users = await User.find({"studentname":"Uvan Shankar"});
		for(let i=0;i<users.length;i++){
        	name.push(users[i].studentname);
			name.push(users[i].CGPA);
		}
		resp.send(name);
    } catch (error) {
        resp.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
        // console.log(req.body)
		let result = await user.save();
		console.log(result);
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000);
