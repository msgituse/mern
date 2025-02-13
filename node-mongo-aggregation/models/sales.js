const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    store: { type: String, required: true },
    items: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],
})

const Sales = mongoose.model('Sales', saleSchema)
module.exports = Sales
