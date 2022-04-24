const { response } = require("express");
var express = require("express");
var app = express();

app.use(express.json());

var data = {};

app.get("/api/todos", function (req, res) {
  res.send(data);
});

app.post("/api/todos", function (req, res) {
  const text = req.body.text;
  if (text == "") {
    res.status(400).send("error");
    return;
  }
  const id = Math.floor(Math.random() * 100) + 1; //untuk generate sampai 100
  data[id] = {
    text: text,
    done: false,
  };
  res.send("todo added");
});

app.put("/api/todos/:id", function (req, res) {
  const id = req.params.id;
  if (id in data) {
    if (req.body.text == undefined || req.body.text == "") {
      data[id].done = req.body.done;
    }
    const text = req.body.text;
    const done = req.body.done;
    data[id] = {
      text: text,
      done: done,
    };

    res.send("data updated");
    return;
  }
  res.status(400).send("error");
});

app.delete("/api/todos/:id", function (req, res) {
  const id = req.params.id;
  if (id in data) {
    delete data[id];
    res.send("data deleted");
  } else {
    res.status(400).send("error lagi");
  }
});

app.listen(4000, () => {
  console.log("server run");
});