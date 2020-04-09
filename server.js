
const express = require("express");
const app = express();

app.get("/exampleAPI/url", function(req, res){
  const notes = [
    {
      topic: "Node.js",
      content: "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser."
    },
    {
      topic: "React",
      content: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
    },
  ];

  res.json(notes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(req, res){
  console.log(`Server started at port ${PORT}`);
});
