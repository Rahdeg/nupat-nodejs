require("dotenv").config()
const express = require("express");
const cors = require("cors");
const app = express();
const feedRoutes = require("./routes/feeds")
const listRoutes = require("./routes/lists")
app.use(express.json());
app.use(cors());


app.use("/api/v1/feeds", feedRoutes);
app.use("/api/v1/list", listRoutes);

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Welcome to the api for yummy app" });
  });


  app.all("*", (req, res) => {
    res.send({
      status: false,
      messsage: "Oops! you've hit an invalid route.",
    });
  });

  const port = process.env.PORT || 5000;

  app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
});