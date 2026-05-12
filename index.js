import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static("public"));

// Temporary posts array
let posts = [];

// Home route
app.get("/", (req, res) => {

    res.render("index.ejs", {
        posts: posts
    });
});

// Create post
app.post("/create", (req, res) => {

    const title = req.body.title;

    const content = req.body.content;

    const newPost = {

        id: Date.now(),

        title: title,

        content: content
    };

    posts.push(newPost);

    res.redirect("/");
});

// Edit page
app.get("/edit/:id", (req, res) => {

    const id = Number(req.params.id);

    const post = posts.find(
        (post) => post.id === id
    );

    res.render("edit.ejs", {
        post: post
    });
});

// Update post
app.post("/update/:id", (req, res) => {

    const id = Number(req.params.id);

    const post = posts.find(
        (post) => post.id === id
    );

    post.title = req.body.title;

    post.content = req.body.content;

    res.redirect("/view");
});

// Delete post
app.post("/delete/:id", (req, res) => {

    const id = Number(req.params.id);

    posts = posts.filter(
        (post) => post.id !== id
    );

    res.redirect("/");
});

app.get("/view", (req, res) => {

    res.render("posts.ejs", {
        posts: posts
    });

});

// Start server
app.listen(port, () => {

    console.log(`Listening on port ${port}`);
});