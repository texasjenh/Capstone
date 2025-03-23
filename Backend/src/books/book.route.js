const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const router = express.Router();

// frontend => backend server => controller = book schema => database => send to server => back to frontend

// post = submit from frontend to backend
// get = return something from db
// put/patch = edit or update data
// delete = delete something

router.post("/create-book", postABook)

// get all books

router.get("/", getAllBooks)

// single book endpoint
router.get("/:id", getSingleBook)

// update a book endpoint
router.put("/edit/:id", updateBook)

// delete
router.delete("/:id", deleteBook)

module.exports = router;