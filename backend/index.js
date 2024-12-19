const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//npm run dev

// imyashdixit001
// 8qK6NKv0Yp7vHDwp

require("dotenv").config();
const port = process.env.PORT || 5001;
//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000/"],
    credentials: true,
  })
);
//route
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}
main()
  .then(() => console.log("Mongodb connect successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
