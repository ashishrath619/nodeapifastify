const user = require("./users");

async function routes(fastify) {
  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  fastify.get("/displayAll", user.getAllUser);
  fastify.get("/displayById/:id", user.getAllUserById);
  fastify.post("/addUser", user.addUser);
  fastify.put("/updateUser/:id", user.updateUser);
  fastify.post("/checkLogin", user.LoginUser);
}

module.exports = routes;
