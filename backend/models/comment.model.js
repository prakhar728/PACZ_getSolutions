const mongoose = require("mongoose");

const comment_schema = new mongoose.Schema({
  name: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comment", comment_schema);
