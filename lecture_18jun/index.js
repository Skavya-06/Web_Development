const express = require("express");
const mongoose = require("mongoose");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect mongodb
mongoose.connect("mongodb://localhost:27017/college")
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("Connection error:", err);
});

// schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// model
const Student = mongoose.model("Student", studentSchema);

// home page
app.get("/", (req, res) => {
    res.render("student.ejs");
});

// form page
app.get("/insertdata", (req, res) => {
    res.render("form.ejs");
});

// display all students
// app.get("/getdata", async (req, res) => {
//     try {
//         const allstudent = await Student.find();

//         res.render("student.ejs", {
//             allstudent
//         });

//     } catch (error) {
//         console.log(error);
//         res.send("Error fetching data");
//     }
// });
app.get("/getdata", async (req, res) => {
    try {
        const allstudent = await Student.find();

        console.log("Students found:");
        console.log(allstudent);

        res.render("student.ejs", { allstudent });

    } catch (error) {
        console.log(error);
    }
});

// insert student
app.post("/createdata", async (req, res) => {
    try {
        console.log(req.body);

        await Student.create(req.body);

        res.redirect("/getdata");

    } catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
});

// server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});