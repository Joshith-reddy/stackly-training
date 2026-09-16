// Import service functions
const {
  getUsers: getUsersFromService,
  createUser: createUserFromService,
} = require("../services/userService");

// Controller for GET /users
const getUsers = (req, res) => {
  const users = getUsersFromService();

  res.json(users);
};

// Controller for POST /users
const createUser = (req, res) => {
  const user = createUserFromService(req.body);

  res.status(201).json({
    message: "User created successfully",
    user: user,
  });
};

// Export controller functions
module.exports = {
  getUsers,
  createUser,
};