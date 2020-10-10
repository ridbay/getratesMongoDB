const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    lastName: String,
    email: {
      type: String,
      unique: true,
    },
    password:String,
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator, { message: "Email already in use." });


//To use this app with a front-end that needs id field instead of _id, override toJSON method that map default object to a custom object.

userSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
module.exports = mongoose.model("User", userSchema, "user");
