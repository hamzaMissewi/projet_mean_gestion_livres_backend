const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    // id: {
    //   type: Number,
    //   required: true,
    //   unique: true,
    // },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },
    nbrePages: {
      type: Number,
      required: true,
    },
    profilePic: {
      type: profilePic,
      required: true,
    },
    category: {
      // type: String,
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Category",
    },
    dateCreated: {
      type: Date,
      required: true,
    },
    quantite: {
      type: Number,
      required: false,
    },
    //   comments: [{ body: "string", by: mongoose.Schema.Types.ObjectId }],
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
