import express from "express";
import path from "path";
const router = express.Router();

const pagesFolder = path.join(__dirname, "..", "..", "..", "pages");

router.get("/simple", (req, res) => {
  console.log(`simple.html ${pagesFolder}`);
  res.sendFile(pagesFolder, "simple.html");
});

module.exports = router;