const express = require("express");
const router = express.Router();

const Book = require("../models/livre");

// add book
router.post("/book", async (req, res) => {
  const enteredBook = new Book(req.body);
  try {
    const savedbook = await enteredBook.save();
    res.satuts(200).json(savedbook);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

router.update("/book", async (req, res) => {
  const selectedBook = new Book(req.body);
});

router.delete("/book", authUser, async (req, res) => {
  try {
    const deleteBook = req.body;
    deleteBook = await user.save();
    deleteBook = filter(deleteBook.id != book.id)
    res.status(200).send();
  } catch (error) {
    // console.log(error);
    // res.status(500).send();
});

module.exports = router;
