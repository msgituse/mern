const salesService = require('../services/salesService')

// Get aggregate sales
const getAggragate = async (req, res) => {
    try {
        const sales = await salesService.getAggragateSales()
        res.status(200).json(sales)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAggragate
}
