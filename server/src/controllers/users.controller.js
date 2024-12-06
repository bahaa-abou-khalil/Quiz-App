import { User } from "../models/user.model.js";

export const getUsers = async (req, res) => {
  const id = req.params.id;

  try {
    if (id) {
      const user = await User.findById(id);

      if (!user) {
        res.status(404).send({
          message: "User Not Found",
        });
      }

      return res.json(user);
    }

    const users = await User.find();

    return res.json(users);
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};

export const createUser = async (req, res) => {
  const { username, password} = req.body;

  try {
    if (!username || !password) {
      return res.status(500).send({
        message: "All feilds are required",
      });
    }

    const user = await User.create({
      username,
      password
    });

    return res.json(user);
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};
