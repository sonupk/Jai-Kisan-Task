let cardModel= require('../models/cardModel');




const createCard = async function (req,res)  {
 try {
     let data = req.body
     let createData = await cardModel.create(data)
     return res.status(201).send({status : true , msg : "card successfully created" , data :createData})
 } catch (error) {
    return res.status(500).send({status : false ,msg : err.message})
 }
}

let getCard = async function (req, res) {
    try {
      let AllCardList = await cardModel.find();
      if (AllCardList.length == 0)return res.status(400).send({ status: false, msg: "No Data Found" });
      
    } catch (err) {
      return res.status(500).send({ status: true, msg: err.message });
    }
  };
  
  module.exports = { createCard, getCard };

