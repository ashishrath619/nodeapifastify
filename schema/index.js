const {
  getAllUser,
  getAllUserById,
  deleteUserById,
  addUser,
  updateUser,
  LoginUser,
} = require("../controllers/users");

const getAllUserOpt = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            adminid: { type: "number" },
            name: { type: "string" },
            email: { type: "string" },
            password: { type: "string" },
          },
        },
      },
    },
  },
  handler: getAllUser,
};

const LoginUserOpt = {
  schema: {
    body: {
      type: "object",
      required: ["email", "password"],
      properties: {
        email: { type: "string" },
        password: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        // items: {
        //   type: "object",
        //   properties: {
        //     adminid: { type: "number" },
        //     name: { type: "string" },
        //     email: { type: "string" },
        //     password: { type: "string" },
        //   },
        // },
      },
    },
  },
  handler: LoginUser,
};
const addUserOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name", "email", "password"],
      properties: {
        name: { type: "string" },
        email: { type: "string" },
        password: { type: "string" },
      },
    },
    201: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          email: { type: "string" },
          password: { type: "string" },
        },
      },
    },
  },
  handler: addUser,
};

const updateUserOpts = {
  schema: {
    200: {
      type: "object",
      items: {
        type: "object",
        properties: {
          //   marvel: { type: "arr" },
          changed: { type: "object" },
        },
      },
    },
  },
  handler: updateUser,
};

const deleteUserByIdOpts = {
  schema: {
    200: {
      type: "object",
      items: {
        type: "object",
        properties: {
          //   marvel: { type: "arr" },
          changed: { type: "object" },
        },
      },
    },
  },
  handler: deleteUserById,
};

module.exports = {
  getAllUserOpt,
  addUserOpts,
  updateUserOpts,
  deleteUserByIdOpts,
  LoginUserOpt,
  //   addBookOpts,
  //   updateBookOpts,
  //   deleteBookOpts,
};
