const Paper = require("../models/paper-model");


// .save() returns a promise
createPaper = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a paper",
    });
  }

  const paper = new Paper(body);

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

//async-await syntax
// updatePaper = async(req,res)=>{
//   const body = req.body;
//   if (!body) {
//     return res.status(400).json({
//       success: false,
//       error: "You must provide a body of request to update",
//     });
//   }

//   let paper;

//   try{
//     await paper.findOne({_id:req.params.id}).exec();

//   }
//   catch(err){
//     return res.status(404).json({
//       err,
//       message: "Paper not found!",
//     });
//   }

//   paper.cName = body.cName;
//   paper.cId = body.cId;
//   paper.year = body.year;
//   paper.url = body.url;
//   paper.fName = body.fName;
//   paper.topics = body.topics;

//   try{
//     await paper.save();
//     return res.status(200).json({
//       success: true,
//       id: paper._id,
//       message: "Paper updated!",
//     });
//   }
//   catch(err){
//     return res.status(404).json({
//       error,
//       message: "Paper not updated!",
//     });
//   }

// }


//using callBack
updatePaper =  (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body of request to update",
    });
  }

  Paper.findOne({ _id: req.params.id }, (err, paper) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Paper not found!",
      });
    }

    if(!paper){
      return res.status(404).json({
        sucess:false,
        message:"paper not found and not updated"
      })
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


//using callBack
deletePaper =  (req, res) => {
   Paper.findOneAndDelete({ _id: req.params.id }, (err, paper) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!paper) {
      return res.status(404).json({ success: false, error: `Paper not found` });
    }

    return res.status(200).json({ success: true, data: paper });
  })
};




//using callBack
getPapersByCid =  (req, res) => {
   Paper.find({ cId: req.params.cId }, (err, paper) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!paper) {
      return res.status(404).json({ success: false, error: `Paper not found` });
    }
    return res.status(200).json({ success: true, data: paper });
  })
};

//using callBack
getPapers =  (req, res) => {
  Paper.find({}, (err, papers) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!papers.length) {
      return res.status(404).json({ success: false, error: `Paper not found` });
    }
    return res.status(200).json({ success: true, data: papers });
  })
};

module.exports = {
  createPaper,
  updatePaper,
  deletePaper,
  getPapers,
  getPapersByCid,
};
