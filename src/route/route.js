const express = require('express')
const router = express.Router()

let cardController = require('../controllers/cardController')
///_________________________________________test api_________________________________________
router.get('/test-me', function (req, res) {
    res.send({ status: true, message: "test-api working fine" })
})

router.post("/createCustomer", customerController.createCustomer);
router.get("/getCustomer", customerController.getCustomer);
router.delete("/deleteCustomer/:customerId", customerController.deleteCustomer);

router.post("/createCard",cardController.createCard)
router.get("/getCard", cardController.getCard);





module.exports = router