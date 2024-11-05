const { query } = require("express");
const { food_items } = require("../models/FoodItem");

const addFood = async (req, res) => {
  try {
    let newfood = await food_items.create({
      categoryName: req.body.categoryName,
      name: req.body.name,
      img: req.body.img,
      option: req.body.option,
      description: req.body.description,
    });
    res
      .status(201)
      .json({ success: true, msg: `Food ${newfood.name} item added` });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Internal Error" });
  }
};

const getFood = async (req, res) => {
  try {
    const food = await food_items.findById(req.params.id);

    if (!food) {
      res
        .status(204)
        .json({ success: true, msg: `${req.params.id} not found` });
    }

    res.status(200).json({ success: true, food });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Internal Error" });
  }
};

const getAllFood = async (req, res) => {
  try {
    const allFood = await food_items.find();

    if (!allFood) {
      res.status(204).json({ success: true, msg: "No food available" });
    }
    res.status(200).json({ success: true, allFood });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Internal Error" });
  }
};

const deleteFood = async (req, res) => {
  try {
    const food = await food_items.findById(req.params.id);

    if (!food) {
      res
        .status(204)
        .json({ success: false, msg: `No food item of ${req.params.id} id` });
    }

    await food_items.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true, msg: `${food.name} food deleted` });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Intenal error" });
  }
};



const searchFood = async (req,res)=>{
  try{
  const search = req.query.search;
  console.log(search)
  let query = {name : {$regex : `${search}`, $options: 'i'}};
  const foodData = await food_items.find(query);
   //console.log(foodData)
  if (!foodData) {
    
    res
      .status(204)
      .json({ success: true, msg: `No food item ` });
  }
  
  res
  .status(200)
  .json({ success: true, foodData: foodData });
  
}
catch(err){
  res.status(500).json({ success: false, msg: "Intenal error" });
}
}

module.exports = { addFood, getFood, getAllFood, deleteFood, searchFood };
