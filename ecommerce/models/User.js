import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    birth: { type: Date, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

// "/login": [
//   "static/chunks/webpack.js",
//   "static/chunks/main.js",
//   "static/chunks/pages/login.js"
// ],
// "/register": [
//   "static/chunks/webpack.js",
//   "static/chunks/main.js",
//   "static/chunks/pages/register.js"
// ]
// "/": [
//   "static/chunks/webpack.js",
//   "static/chunks/main.js",
//   "static/chunks/pages/index.js"
// ]
