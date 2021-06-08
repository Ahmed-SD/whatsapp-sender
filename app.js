const { json } = require("express");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));

app.post('/sendMessage',async (req, res)=> {
  let data = JSON.stringify(req.body.message);
  console.log(data);
  res.render('index.ejs');
});

app.get("/", (req, res)=> {
    res.render('index.ejs')
});

app.listen(3000, (req, res) => {
  console.log("listening");
});
