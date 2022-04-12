const user = require("../controllers/userAdmin");
// const {
//   getAllUserOpt,
//   addUserOpts,
//   updateUserOpts,
//   deleteUserByIdOpts,
//   getAllUserByIdOpt,
// } = require("../schema/index");

async function routes(fastify) {
  fastify.get("/admin", async (request, reply) => {
    return "Welcome to Fastify bold";
  });

  fastify.get("/displayAll", user.getAllUser);
  //   fastify.get("/displayById/:id", getAllUserByIdOpt);
  fastify.post("/addUser", user.addUser);
  //   fastify.put("/updateUser/:id", updateUserOpts);
  //   fastify.put("/updateUserPassword", user.updateUserPassword);
  //   fastify.post("/checkLogin", user.LoginUser);
  //   fastify.delete("/deleteUser/:id", deleteUserByIdOpts);
}

module.exports = routes;
