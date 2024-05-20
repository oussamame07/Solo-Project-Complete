const Adresse = require ('../models/Models')

module.exports = {

    getAllAdresse : (req,res)=>{
        Adresse.find({})
        .then ((allAdresse)=>{console.log(allAdresse)
        res.json(allAdresse)})
        .catch((err)=>{res.status(400).json({err})});
    },

    Adresse: (req,res)=>{
        Adresse.create(req.body)
        .then ((newAdresse)=>
        res.json(newAdresse))
        .catch((err)=>{res.status(400).json(err)});
        
    },

    getOneOrder: (req,res)=>{
        Adresse.findOne ({_id:req.params.id})
        .then ((Adresse)=>{
            res.json(Adresse)
        })
        .catch((err)=>{res.status(400).json({err})})
    },

    deleteAdresse: (req, res) => {
        Adresse.deleteOne({_id:req.params.id}) 
            .then((deleteConfirmation) => {if (deleteConfirmation.deletedCount === 1) {
                res.json(deleteConfirmation)}})
            .catch((err) => {res.status(400).json({err})}); 
    },
    
    updateAdresse: (req,res)=>{
        Adresse.findByIdAndUpdate({_id:req.params.id},req.body,{
            new:true,
            runValidators:true,
        })
        .then (updatedAdresse => res.json (updatedAdresse))
        .catch((err)=>{res.status(400).json({err})});
    },




}