const User = require('../model/user');

const getUserById = async (req, res, next) => {
  
  let user;
  try{
      user = await User.find({});
  }catch(err){
      const error = new Error('Something went wrong');
      return next(error);
  }
  
//   res.json({user: user.toObject({getters: true})});
 res.json({user: user.map((user) => user.toObject({ getters: true }))});
};

const updateUser = async (req, res, next) => {
  const {stepsTarget, calorieTarget} = req.body;

  let user;
  try{
      user=await user.findById(userId);
  } catch(err){
      const error = new Error('Something went wrong');
      return next(error);
  }

  user.name = name;
  user.email = email;
  user.stepsWalked = stepsWalked;
  user.performedDate = performedDate;
  user.scheduledDate = scheduledDate;
  user.calorieIntake = calorieIntake;
  user.proteinConsumed = proteinConsumed;
  user.proteinTarget = proteinTarget;
  user.carbConsumed = carbConsumed;
  user.carbTarget = carbTarget;
  user.fatConsumed = fatConsumed;
  user.fatTarget = fatTarget;
  user.feedback = feedback;

  try{
    await user.save();
} catch(err){
    const error = new Error('Something went wrong');
    return next(error);
}

  res.status(200).json({user: user.toObject({getters: true})});
};

exports.getUserById = getUserById;
exports.updateUser = updateUser;
