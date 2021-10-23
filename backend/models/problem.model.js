const mongoose = require("mongoose");

const problem = new mongoose.Schema({
  userid:{
    type:String,
    required:true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  flair: {
    type: String,
    required: true,
  },
  visibility: {
    type: Boolean,
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Problem", problem);
