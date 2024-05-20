const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],

    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],

    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    adress: {
      type:String,
      enum:['Tunis','Ariana','Ben Arous','Mannouba','Beja','Nabuel','Sousse','Mehdia','Sfax','Kef'],
    },
    city : {
      type:String,
      required:[true,"city is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        // minlength: [6, "Password must be 8 characters or longer"],
        // select: true
    },
}, { timestamps: true });


  UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

  UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });

  UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });


module.exports = mongoose.model("User", UserSchema);


