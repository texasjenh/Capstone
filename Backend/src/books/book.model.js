const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }, 
    format: {
        type: String,
        required: true,
    },
    trending: {
        type: Boolean,
        required: true,
    },
    oldPrice: Number,    
    newPrice: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    }

}, {
    timeStamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;