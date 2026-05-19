let users = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Lili" },
];
let nextId = 2;

const getAllUsers = (req, res) => {
  res.setHeader("Content-Range", `users 0-${users.length - 1}/${users.length}`);
  res.status(200).json(users);
};

const createUser = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ err: "name is required" });
  }
  nextId++;
  const id = nextId;

  const newUser = { id, name };
  users.push(newUser);

  return res.status(201).json(newUser);
};

const getUserById = (req, res) => {
  const { id } = req.params;

  const userId = users.find((u) => u.id === parseInt(id));
  if (!userId) {
    return res.status(404).json({ err: "User not found" });
  }

  return res.json(userId);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ err: "name is required" });
  }

  const userId = users.find((u) => u.id === parseInt(id));
  if (!userId) {
    return res.status(404).json({ err: "User not found" });
  }

  userId.name = name;

  return res.json(userId);
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const userId = users.findIndex((u) => u.id === parseInt(id));
  if (userId === -1) {
    return res.status(404).json({ err: "User not found" });
  }

  const deletedUser = users.splice(userId, 1)[0];

  return res.status(200).json(deletedUser);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
