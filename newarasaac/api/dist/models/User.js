"use strict";

var mongoose = require('mongoose');

var _require = require('crypto-js'),
    SHA256 = _require.SHA256;

var Schema = mongoose.Schema;

var CustomError = require('../utils/CustomError');

var oAuthTypes = ['facebook', 'google'];

var randomize = require('randomatic');

var UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  suscription: {
    type: Boolean,
    default: true
  },
  id: Number,
  // just for old data. New values with _id
  provider: String,
  locale: {
    type: String,
    default: 'en'
  },
  password: String,
  verifyToken: String,
  passwordlessToken: String,
  created: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  url: String,
  company: String,
  role: {
    type: String,
    default: 'user'
  },
  targetLanguages: [String],
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  favorites: []
}, {
  strict: false
  /* so we can insert later providers like facebook or google if needed, also for favorites... */

});

var validatePresenceOf = function validatePresenceOf(value) {
  return value && value.length;
};
/**
 * Validations
 */
// the below 5 validations only apply if you are signing up traditionally


UserSchema.path('name').validate(function (name) {
  if (this.skipValidation()) return true;
  return name.length;
}, 'Name cannot be blank');
UserSchema.path('email').validate(function (email) {
  if (this.skipValidation()) return true;
  return email.length;
}, 'Email cannot be blank');
UserSchema.path('email').validate(function (email) {
  var User = mongoose.model('User');
  if (this.skipValidation()) return true; // Check only when it is a new user or when email field is modified

  if (this.isNew || this.isModified('email')) {
    return User.find({
      email: email
    }).exec(function (err, users) {
      return !err && users.length === 0;
    });
  }

  return true;
}, 'Email already exists');
UserSchema.path('password').validate(function (password) {
  if (this.skipValidation()) return true;
  return password.length;
}, 'Password cannot be blank');
/**
 * Pre-save hook
 */

UserSchema.pre('save', function (next) {
  if (!this.isNew) return next();

  if (!validatePresenceOf(this.password) && !this.skipValidation()) {
    return next(new CustomError('Invalid password', 400));
  } // override password with the hashed one:


  this.password = "".concat(SHA256(this.password)); // generate randomToken for user activation

  this.verifyToken = randomize('Aa0', 32);
  return next();
});
/**
 * Methods
 */

UserSchema.methods = {
  authenticate: function authenticate(plainText) {
    // if user is not activate return false, otherwise check password
    return this.verifyToken ? false : "".concat(SHA256(plainText)) === this.password;
  },

  /**
   * Validation is not required if using OAuth
   */
  skipValidation: function skipValidation() {
    return Boolean(this.passwordlessToken); // return ~oAuthTypes.indexOf(this.provider)
  },
  activate: function activate(verifyToken) {
    if (verifyToken === this.verifyToken) this.verifyToken = '';
    return '';
  }
};
UserSchema.virtual('isVerified').get(function () {
  return !this.verifyToken;
});
var User = mongoose.model('User', UserSchema, 'users');
module.exports = User;