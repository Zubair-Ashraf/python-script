const express = require("express");
const router = express.Router();
const ps = require("python-shell");

router.get("/", (req, res) => {
  ps.PythonShell.run("./test.py", null, function(err, results) {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
