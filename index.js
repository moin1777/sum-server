const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const todos = [{
  id: 1,
  title: "Title 1",
  description: "Description 1"
}, {
  id: 2,
  title: "Title 2",
  description: "Description 2"
}, {
  id: 3,
  title: "Title 3",
  description: "Description 3"
}, {
  id: 4,
  title: "Title 4",
  description: "Description 4"
}, {
  id: 5,
  title: "Title 5",
  description: "Description 5"
}, {
  id: 6,
  title: "Title 6",
  description: "Description 6"
}];

app.get("/sum", (req, res) => {
  const num1 = parseInt(req.query.n1);
  const num2 = parseInt(req.query.n2);
  res.json({
    ans: num1 + num2
  });
});

app.get("/interest", (req, res) => {
  const p = parseInt(req.query.principal);
  const r = parseInt(req.query.rate);
  const t = parseInt(req.query.time);

  const interest = ((p*r*t)/100);
  const total =  interest + p;

  res.json({
    total, 
    interest
  });
});

app.get("/todos", (req, res) => {
  const n = Math.floor(Math.random()*6) + 1;
  const newTodos = todos.filter((todo, index) => index < n);

  res.json({
    todos: newTodos
  })
});

app.get("/todo", (req, res) => {
  const id = parseInt(req.query.id);

  if (id>6) {
    return res.status(411).json({
      msg: "todo not found"
    });
  }

  res.json({
    todo: todos[id-1]
  });
});

app.get("/notifications", (req, res) => {
  const allNotificatons = {
    network: Math.ceil(Math.random()*10),
    jobs: Math.ceil(Math.random()*10),
    messaging: Math.ceil(Math.random()*10),
    notifications: Math.ceil(Math.random()*10)
  }

  res.json(allNotificatons);
});


app.listen(8080, () => {
  console.log("The port is listening on http://localhost:8080");
});