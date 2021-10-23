const express = require("express");
const Problem = require("../models/problem.model");
const Comment = require("../models/comment.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const problems = await Problem.find();
  res.json(problems);
});

router.post("/newProblem", async (req, res) => {
  if(req.headers.userid)
  console.log(req.headers.userid);
  const newProblem = new Problem({
    title: req.body.title,
    description: req.body.description,
    flair: req.body.flair,
    visibility: req.body.visibility,
    userid:req.headers.userid
  });
  try {
    const savedNow = await newProblem.save();
    res.send('Submitted!');
  } catch (error) {
    console.log(error);
    res.send('Could not submit!');
  }
});

router.get("/:_id", async (req, res) => {
  const problem = await Problem.findById(req.params._id);
  res.json(problem);
});

router.delete("/:_id", async (req, res) => {
  const deleteProblem = await Problem.findByIdAndDelete(req.params._id);
  res.redirect("/problem");
});

router.post("/:_id/comment", async (req, res) => {
  const getPost = await Problem.findById(req.params._id);
  try {
    const commentUnderPost = getPost.comments.push(req.body.content);
    console.log(getPost.comments);
    const savePost = await getPost.save();
    console.log(savePost);
    res.send('Submitted!');
  } catch (err) {
    console.error(err.message);
    res.send(err);
  }
});
module.exports = router;
