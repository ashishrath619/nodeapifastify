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

const getAllUserByIdOpt = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "user id",
        },
      },
    },
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
  handler: getAllUserById,
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
    params: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "user name",
        },
        email: {
          type: "string",
          description: "user email",
        },
        password: {
          type: "string",
          description: "user password",
        },
      },
    },
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
    params: {
      type: "object",
      properties: {
        adminid: {
          type: "number",
          description: "user id",
        },
        name: {
          type: "string",
          description: "user name",
        },

        email: {
          type: "string",
          description: "user email",
        },
        password: {
          type: "string",
          description: "user password",
        },
      },
    },
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
    params: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "user id",
        },
      },
    },
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
  getAllUserByIdOpt,
  //   addBookOpts,
  //   updateBookOpts,
  //   deleteBookOpts,
};
