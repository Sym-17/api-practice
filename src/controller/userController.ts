import { ValidationError } from "sequelize";
import User from "../models/user";
import { Request, Response } from "express";

const addUser = async (
  req: Request<{}, any, any, any, Record<string, any>>,
  res: Response<any, Record<string, any>>
) => {
  // await User.create({
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   age: req.body.age,
  // });

  //Shortcut
  // await User.create(req.body);

  try {
    //For inserting bulk amount of data at a time
    // By default validation is turned of in bulkCreate..You have to pass { validate: true } for turned on
    if (req.body.length > 1)
      await User.bulkCreate(req.body, { validate: true });
    else await User.create(req.body);

    res.send("Received!");
  } catch (err: any) {
    // res.status(400).send(err);          // for showing the err object
    switch (err.errors[0].errors.errors[0].validatorKey) {
      case "isAlpha":
        res.status(400).send("Only Alphabets are allowed!");
      case "len":
        res.status(400).send("Min lenth is 2 and max is 15!");
    }
  }
};

const getUsers = async (
  req: Request<{}, any, any, any, Record<string, any>>,
  res: Response<any, Record<string, any>>
) => {
  const allUser = await User.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  res.send(allUser);
};

const getUser = async (
  req: Request<{ id: number }, any, any, any, Record<string, any>>,
  res: Response<any, Record<string, any>>
  // You can do thus also
  // req: Request,
  // res: Response
) => {
  const allUser = await User.findAll({
    where: {
      id: req.params.id,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  res.send(allUser);
};

const editUser = async (
  req: Request<{ id: number }, any, any, any, Record<string, any>>,
  res: Response<any, Record<string, any>>
) => {
  await User.update(req.body, {
    where: { id: req.params.id },
  });
  res.send(`Updated id: ${req.params.id}!`);
};

const deleteUser = async (
  req: Request<{ id: number }, any, any, any, Record<string, any>>,
  res: Response<any, Record<string, any>>
) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send(`Deleted id: ${req.params.id}!`);
};

export { addUser, getUsers, getUser, editUser, deleteUser };
