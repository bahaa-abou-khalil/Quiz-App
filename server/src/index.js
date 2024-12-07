import express from "express";
import connectToDatabase from "./db/connection.js";
import userRoutes from "./routes/users.routes.js";
import quizRoutes from "./routes/quizzes.routes.js";

const app = express();

app.use(express.json());

app.use("/users",userRoutes);
app.use("/quizes",quizRoutes);

app.listen(8080, async () => {
  console.log("Server running on port 8080");

  connectToDatabase();
});
