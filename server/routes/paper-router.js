const express = require("express");

const PaperCtrl = require("../controllers/paper-ctrl");

const router = express.Router();

router.post("/paper", PaperCtrl.createPaper);
router.put("/paper/:id", PaperCtrl.updatePaper);
router.delete("/paper/:id", PaperCtrl.deletePaper);
router.get("/paper/:id", PaperCtrl.getPaperById);
router.get("/papers", PaperCtrl.getPapers);

module.exports = router;
