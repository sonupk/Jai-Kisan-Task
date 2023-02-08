let customerModel = require("../models/customer");
const validation = require("../validation/validator");
let generateId = require("unique-random-number-gen").randomNumber;

let createCustomer = async function (req, res) {
  try {
    let data = req.body;
    let { mobile, email } = data;
    //===================================== if Empty Body ========================================
    if (!validation.isValidRequestBody(data)) {
        return res.status(400).send({ status: false, message: "Invalid request params please provide some data" });
      }
    //_________________________________________email validation_________________________________________
    if (!validation.isValidEmail(email)) {
        return res.status(400).send({ status: false, message: "Invalid Email format" });
      }
  
  //_________________________________________mobile number validation_________________________________________
  if (!validation.isValidMobile(mobile)) {
    return res.status(400).send({ status: false, message: "Invalid mobile number" });
  }


    data.customerId = generateId();
    let createData = await customerModel.create(data);
    return res.status(201).send({ status: true, msg: "customer Successfully craeted", data: createData });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

let getCustomer = async function (req, res) {
  try {
    let status = req.query.status;
    let getData = await customerModel.find({status: status,isDeleted: false,});
    return res.status(200).send({ status: true, msg: "Successfully fetching customer status", data: getData });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

let deleteCustomer = async function (req, res) {
  try {
    let customerId = req.params.customerId;
    if (!customerId)return res .status(400).send({status: false, message: "please provide a customerId in params",
        });
    if (!validation.isValidObjectId(customerId))
      return res.status(400).send({ status: false, msg: "please enter a valid customerId" });

    let findCustomer = await customerModel.findOne({ _id: customerId });
    if (!findCustomer)
      return res.status(400).send({ status: false, msg: "customer is not found" });
    if (findCustomer.isDeleted == true)
      return res.status(404).send({ status: false, msg: "Customer is already deleted" });

    let deleteCustomer = await customerModel.findByIdAndUpdate
    ({ _id: customerId },{ $set: { isDeleted: true } },{ new: true });
    return res.status(200).send({status: true,msg: "Sucessfully deleted customer",deleteCustomer,});
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = { createCustomer, getCustomer, deleteCustomer };
