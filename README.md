# Blog Web Application

A simple Blog Web Application built using:

* Node.js
* Express.js
* EJS
* CSS

This project allows users to:

* Create blog posts
* View all blog posts
* Edit existing posts
* Delete posts

Posts are stored temporarily in an array, meaning data does not persist after restarting the server.

---

# Features

## Create Blog Posts

Users can create blog posts by entering:

* Title
* Content

---

## View All Posts

All created posts are displayed on a dedicated page.

---

## Edit Posts

Users can update:

* Blog title
* Blog content

---

## Delete Posts

Users can remove posts from the application.

---

# Project Structure

```txt
CapStone_Project-3/
│
├── public/
│   ├── edit.css
│   ├── main.css
│   ├── posts.css
│   └── images/
│
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   └── posts.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/M-Aneesh/CapStone_Project-3.git
```

Move into the project folder:

```bash
cd CapStone_Project-3
```

Install dependencies:

```bash
npm install
```

---

# Run the Application

Start the server:

```bash
node index.js
```

Open browser:

```txt
http://localhost:3000
```

---

# Dependencies

```json
"dependencies": {
  "body-parser": "^2.2.2",
  "ejs": "^5.0.1",
  "express": "^5.2.1"
}
```

---

# Author

Created by Aneesh.
