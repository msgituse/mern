const Sales = require('../models/sales')

// Sales aggregate
const getAggragateSales = async () => {
    try {
        return await Sales.aggregate([
            { $unwind: "$items" },
            {
                $project: {
                    store: 1,
                    date: 1,
                    item: "$items",
                    month: { $dateToString: { format: "%Y-%m", date: "$date" } }
                }
            },
            {
                $group: {
                    _id: { store: "$store", month: "$month" },
                    totalRevenue: { $sum: { $multiply: ["$item.quantity", "$item.price"] } },
                    averagePrice: { $avg: "$item.price" }
                }
            },
            {
                $project: {
                    store: "$_id.store",
                    month: "$_id.month",
                    totalRevenue: 1,
                    averagePrice: 1,
                    _id: 0
                }
            },
            { $sort: { store: 1, month: 1 } }
        ])
    } catch (error) {
        throw new Error('Error finding posts: ' + error.message)
    }
}

module.exports = {
    getAggragateSales
}