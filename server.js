const fastify = require("fastify")({ logger: true, pluginTimeout: 10000 });
const fastifyCors = require("fastify-cors");

const dotenv = require("dotenv");
dotenv.config();

fastify.register(fastifyCors, {});
fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "Admin Api",
      description: "Testing the Admin APIs ",
      version: "1.0",
    },
  },
});

const routes = require("./routes/userRouter");
const routeradmin = require("./routes/userAdminRouter");

fastify.register(routes);
fastify.register(routeradmin, { prefix: "/admin" });

const start = async () => {
  fastify.listen(
    process.env.PORT,
    process.env.HOST || "0.0.0.0",
    function (err, address) {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
      fastify.log.info(`server listening on ${address}`);
    }
  );
};

start();
