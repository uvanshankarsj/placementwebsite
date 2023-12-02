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
console.log("App listen at port 5000");
app.use(express.json());
app.get("/", (req, resp) => {

	resp.send("App is Working");
});

app.get("/users", async (req, resp) => {
    try {
		// resp.send("hi i am working")
        const appearplacement = await User.find({placement:1}).count();
		const totaluser = await User.find().count();
		const eligible= await User.find({CGPA:{$gt:6}}).count();
		const placed= await User.find({status:"placed"}).count();
		const Intern = await User.find({type:"Internship"}).count();
		// const users = await User.find({placement:1}).count();
		// console.log(users);
		// console.log(users2);
		console.log(placed);
		resp.send({result1:totaluser,result2:appearplacement,result3:eligible,result4:placed,result5:Intern});
    } catch (error) {
        resp.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/login", async (req, resp) => {
	const studentname = await User.find({},{studentname:1});
	resp.send(studentname);
});

app.get("/update",async (req, resp) => {
	console.log(req.query.name,req.query.cgpa);
	const checking=await User.updateOne({ studentname: req.query.name }, { $set: { CGPA: req.query.cgpa} });
	// console.log(checking);
	resp.send("updated");
}); 

app.post("/register", async (req, resp) => {
	try {
		console.log(studentname)
		console.log(req.body)
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
