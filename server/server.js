const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const Pool = require("pg").Pool;

//middleware
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let blogs = [];

const db = new Pool({
    user: "postgres",
    host: "localhost",
    database: "blogdb",
    password: "mopassword",
    port: 5432,
});
db.connect();

app.get('/', (req, res) => {
    res.render("Home.js");
});

//Register && Login
//Login Page after clicking login button
app.get("/login", (req, res) => {
    res.render("Login.js");
});

app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
        try{
            const result = await db.query("SELECT * FROM users WHERE username = ($2)", [
                username,
            ]);
            if (result.rows.length > 0) {
                const user = result.rows[0];
                const storedPassword = user.password;

                if (password === storedPassword) {
                    res.render("Create.js");
                } else {
                    res.send("Incorrect Password");  
                }
            } else {
                res.send("User not found");
            }
        } catch(err) {
            console.log(err);
        }
});


app.get("/register", (req, res) => {
    res.render("Register.js");
});

app.post("/register", async (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    console.log(name);
    console.log(username);
    console.log(password);

    try {
        const checkResult = await db.query("SELECT * FROM users WHERE username = ($2)", [username]);
    if (checkResult.rows.length > 0) {
        res.send("Registered username already exists. Try logging in.");
    } else {
        //If not already registered, insert credentials into DB
    const result = await db.query("INSERT INTO users (name, username, password) VALUES ($1, $2, $3)", [name, username, password]);
    console.log(result);
    res.render("Create.js");
    }
    } catch(err) {
        console.log(err);
    }
});

//Up to here


// Route to show form to create a post
app.get('/create', (req, res) => {
    res.render('Create.js');
});

// Route to handle post creation
app.post('/create', (req, res) => {
    const newBlog = {
        id: blogs.length + 1,
        title: req.body.title,
        body: req.body.body,
        user_id: req.body.user_id,
        creator_username: req.body.creator_username,
        creator_name: req.body.creator_name,
        date: new Date().toLocaleString()
    };
    blogs.push(newBlog);
    res.redirect('/');
});

// Route to show form to edit a post
app.get('/edit/:id', (req, res) => {
    const blog = blogs.find(p => p.id == req.params.id);
    res.render('Edit.js', { post });
});

// Route to handle post editing
app.post('/edit/:id', (req, res) => {
    const blog = blogs.find(p => p.id == req.params.id);
    blog.title = req.body.title;
    blog.body = req.body.body;
    res.redirect('/');
});

// Route to handle post deletion
app.get('/delete/:id', (req, res) => {
    blogs = blogs.filter(p => p.id != req.params.id);
    res.redirect('/');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});