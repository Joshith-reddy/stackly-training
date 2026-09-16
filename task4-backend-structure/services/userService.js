// Return dummy users for now.
// In a future task, this service will get users through the model.
const getUsers = () => {
  return [
    {
      id: 1,
      name: "John",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "David",
      email: "david@example.com",
    },
  ];
};

// Return the received user data.
// In a future task, this service can call the model
// to save the user to MongoDB.
const createUser = (userData) => {
  return userData;
};

// Export service functions
module.exports = {
  getUsers,
  createUser,
};