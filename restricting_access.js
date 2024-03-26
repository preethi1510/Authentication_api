app.post("/api/profile/update", verifyToken, async (req, res) => {
  const { userId, publicProfile } = req.body;

  await User.findByIdAndUpdate(userId, { publicProfile });

  res.status(200).json({ message: "Profile updated successfully" });
});

app.get("/api/profiles/list", verifyToken, async (req, res) => {
  const users = await User.find({}, "name email profilePicture publicProfile");

  if (req.user.role === "admin") {
  
    res.status(200).json(users);
  } else {
   
    const publicProfiles = users.filter(user => user.publicProfile);
    res.status(200).json(publicProfiles);
  }
});

app.get("/api/profiles/:userId", verifyToken, async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);

  if (req.user.role === "admin" || user.publicProfile) {
  
    res.status(200).json(user);
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
});