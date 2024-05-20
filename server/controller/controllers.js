const Pizza = require ('../models/Models')

module.exports = {

    getAllOrder : (req,res)=>{
        Pizza.find({})
        .then ((allPizza)=>{console.log(allPizza)
        res.json(allPizza)})
        .catch((err)=>{res.status(400).json({err})});
    },

    Order: (req,res)=>{
        Pizza.create(req.body)
        .then ((newPizza)=>
        res.json(newPizza))
        .catch((err)=>{res.status(400).json(err)});
    },

    getOneOrder: (req,res)=>{
        Pizza.findOne ({_id:req.params.id})
        .then ((Pizza)=>{
            res.json(Pizza)
        })
        .catch((err)=>{res.status(400).json({err})})
    },

    deleteOrder: (req, res) => {
        Pizza.deleteOne({_id:req.params.id}) 
            .then((deleteConfirmation) => {if (deleteConfirmation.deletedCount === 1) {
                res.json(deleteConfirmation)}})
            .catch((err) => {res.status(400).json({err})}); 
    },
    
    updateOrder: (req,res)=>{
        Pizza.findByIdAndUpdate({_id:req.params.id},req.body,{
            new:true,
            runValidators:true,
        })
        .then (updatedPizza => res.json (updatedPizza))
        .catch((err)=>{res.status(400).json({err})});
    },

}
function calculateOrderTotal(items) {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }