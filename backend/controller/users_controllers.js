const HttpError=require("../model/http-error");
const User = require("../model/user");

const getUserById = async (req, res, next) => {
  
  let user;
  try{
      user = await User.find({});
  }catch (err) {
    const error = new HttpError(
      "Something went wrong, could not get data!",
      500
    );
    return next(error);
  }
  
//   res.json({user: user.toObject({getters: true})});
 res.json({user: user.map((user) => user.toObject({ getters: true }))});
};


const updateCal = async (req, res, next) => {

  const userId = req.body.userId;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong! Could not update calorie target!",
      500
    );
    return next(error);
  }
  const updatedCal = req.body.calorieTarget;
  user.calorieTarget = updatedCal * 1000;
  try {
    await user.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update calorie target!",
      500
    );
    return next(error);
  }
};

const updateSteps = async (req, res, next) => {
  const id = req.body.userId;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong! Could not find user!",
      500
    );
    return next(error);
  }
  const updatedSteps = req.body.stepsTarget;
  user.stepsTarget = updatedSteps * 1000;
  try {
    await user.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update steps target!",
      500
    );
    return next(error);
  }
};

exports.getUserById = getUserById;
exports.updateCal = updateCal;
exports.updateSteps = updateSteps;