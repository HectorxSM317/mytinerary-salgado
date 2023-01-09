const Itinerary = require('../models/itinerary')

const commentsControllers = {

    addComment: async (req, res) => {
        const {itinerary, comment} = req.body.comment
        
        const user = req.user._id
        try{
            const newComment = await Itinerary.findOneAndUpdate({_id : itinerary}, {$push: {comments: {comment: comment, userID: user}}}, {new:true})
            res.json({success: true, response:{newComment}, toast:true, message: "Thanks for comment"})
        }catch(error){
           
            res.json({success: false, toast:false, message: "Error, try again please"})
        }

    },

    modifyComment: async (req, res) => {
        const {commentID,comment} = req.body.comment
      
        const user = req.user._id
        try {
            const newComment = await Itinerary.findOneAndUpdate({"comments._id":commentID}, {$set: {"comments.$.comment": comment,"comments.$.date": Date.now() }}, {new: true})
           
            res.json({ success: true, response:{newComment},toast:true, message:"tu comentario a sido modificado" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, message: "Algo a salido mal intentalo en unos minutos" })
        }

    },
    deleteComment: async (req, res) => {
        const id = req.params.id
       
        try {
            const deleteComment = await Itinerary.findOneAndUpdate({"comments._id":id}, {$pull: {comments: {_id: id}}}, {new: true})
            res.json({ success: true, response:{deleteComment},toast:true, message: "has eliminado el comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }

    },


}

module.exports = commentsControllers