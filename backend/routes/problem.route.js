const express = require("express");
const Problem = require("../models/problem.model");
const Comment = require("../models/comment.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const problems = await Problem.find();
  res.json(problems);
});

router.post("/newProblem", async (req, res) => {
  const newProblem = new Problem({
    title: req.body.title,
    description: req.body.description,
    flair: req.body.flair,
    visibility: req.body.visibility,
  });
  try {
    const savedNow = await newProblem.save();
    res.send(savedNow._id);
  } catch (error) {
    console.log(error);
    res.send(error);
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

  const comment = new Comment({
    name: req.body.name,
    content: req.body.content,
  });

  try {
    const saveComment = await comment.save();
    const commentUnderPost = getPost.comments.push(comment._id);
    const savePost = await getPost.save();
    res.send(comment);
  } catch (err) {
    console.error(err.message);
    res.send(err);
  }
});

router.get("/:_id/comment", async (req, res) => {
  const post = await Problem.findById(req.params._id).populate("comments");
  res.send(post);
});

router.put("/comment/:commentId", async (req, res) => {
  try {
    const updateComment = await Comment.findByIdAndUpdate(req.params.commentId);
    res.send(updateComment);
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

router.delete("/comment/:commentId", async (req, res) => {
  try {
    const delComment = await Comment.findByIdAndDelete(req.params.commentId);
    res.redirect("/problem");
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

module.exports = router;
