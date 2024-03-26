const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profilePicture: {
    type: {
      imageUrl: String,
      cloudinaryId: String
    },
    default: {
      imageUrl: "",
      cloudinaryId: ""
    }
  },
  bio: String,
  phone: String,
  publicProfile: {
    type: Boolean,
    default: true
  },
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});