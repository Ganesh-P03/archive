const Paper = require("../models/paper-model");

createPaper = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a paper",
    });
  }

  const paper = new Paper(body);

  if (!paper) {
    return res.status(400).json({ success: false, error: err });
  }

  paper
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: paper._id,
        message: "Paper created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Paper not created!",
      });
    });
};

updatePaper = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Paper.findOne({ _id: req.params.id }, (err, paper) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Paper not found!",
      });
    }
    paper.cName = body.cName;
    paper.cId = body.cId;
    paper.year = body.year;
    paper.url = body.url;
    paper.fName = body.fName;
    paper.topics = body.topics;

    paper
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: paper._id,
          message: "Paper updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Paper not updated!",
        });
      });
  });
};

deletePaper = async (req, res) => {
  await Paper.findOneAndDelete({ _id: req.params.id }, (err, paper) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!paper) {
      return res.status(404).json({ success: false, error: `Paper not found` });
    }

    return res.status(200).json({ success: true, data: paper });
  }).catch((err) => console.log(err));
};

getPapersByCid = async (req, res) => {
  await Paper.find({ cId: req.params.cId }, (err, paper) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!paper) {
      return res.status(404).json({ success: false, error: `Paper not found` });
    }
    return res.status(200).json({ success: true, data: paper });
  }).catch((err) => console.log(err));
};

getPapers = async (req, res) => {
  await Paper.find({}, (err, papers) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!papers.length) {
      return res.status(404).json({ success: false, error: `Paper not found` });
    }
    return res.status(200).json({ success: true, data: papers });
  }).catch((err) => console.log(err));
};

module.exports = {
  createPaper,
  updatePaper,
  deletePaper,
  getPapers,
  getPapersByCid,
};
