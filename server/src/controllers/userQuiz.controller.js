import { UserQuiz } from "../models/userQuiz.model.js";

export const createUserQuiz = async (req, res) => {
  const { user_id, quiz_id, score} = req.body;

  try {
    if (!user_id || !quiz_id || !score) {
      return res.status(500).send({
        message: "All feilds are required",
      });
    }

    const userQuiz = await UserQuiz.create({
        user_id,
        quiz_id,
        score
    });

    return res.json(userQuiz);
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};
