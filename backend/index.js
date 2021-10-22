const express = require("express");
const app = express();
const prob = require("./routes/problem.route");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URI,()=>{
  console.log('Connected to DB!');
})
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Yay the server works for now");
});

app.use("/problem", prob);

app.listen(PORT, () => {
  console.log(`Connected to PORT:${PORT}`);
});
