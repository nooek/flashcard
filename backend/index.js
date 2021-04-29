const app = require("./server");

app.listen(process.env.PORT, () =>
  console.log(`Anki app listening on port ${process.env.PORT}!`)
);
