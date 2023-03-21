const express = require("express");
const app = express();

const getElementDetails = require("./getElemetDetails");

// Wrapping the Puppeteer browser logic in a GET request
app.get("/", async function (req, res) {
  let customSelector = `body p`;
  await getElementDetails(
    "https://nikhil-kavathiya-4a985.web.app/",
    customSelector,
    500,
    700
  )
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.log(e));
});

// Making Express listen on port 7000
app.listen(7000, function () {
  console.log("Running on port 7000.");
});
