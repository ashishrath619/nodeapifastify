const user = require("../controllers/users");
const {
  getAllUserOpt,
  addUserOpts,
  updateUserOpts,
  deleteUserByIdOpts,
  getAllUserByIdOpt,
} = require("../schema/index");

async function routes(fastify) {
  fastify.get("/", async (request, reply) => {
    return "Welcome to Fastify";
  });

  fastify.get("/displayAll", getAllUserOpt);
  fastify.get("/displayById/:id", getAllUserByIdOpt);
  fastify.post("/addUser", addUserOpts);
  fastify.put("/updateUser/:id", updateUserOpts);
  fastify.post("/checkLogin", user.LoginUser);
  fastify.delete("/deleteUser/:id", deleteUserByIdOpts);
}

module.exports = routes;
