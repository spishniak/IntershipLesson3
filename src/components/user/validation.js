const Joi = require('joi');

const CreateValidationSchema = Joi.object({
  name: Joi
    .string()
    .required()
    .regex(/[a-zA-Z]+( [a-zA-Z]+)?/),
  email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

});

function validateCreateUser(req, res, next) {
  const user = req.body;
  const validationResult = CreateValidationSchema.validate(user);
  if (validationResult.error) {
    next(new Error(validationResult.error));
  }
  next();
}

module.exports = {
  validateCreateUser,
};
