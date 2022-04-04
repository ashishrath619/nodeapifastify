const fastify = require("fastify")({ logger: true });
// const pool = require("./config/db");
const PORT = 5000;
const routes = require("./routes/userRouter");

fastify.register(routes);

// const app = Fastify({
//   logger: true,
//   pluginTimeout: 10000,
// });

// app.listen(process.env.PORT || 3000, "0.0.0.0", (err) => {
//   if (err) {
//     app.log.error(err);
//     process.exit(1);
//   }
// });
const start = async () => {
  fastify.listen(3000, "0.0.0.0", function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
  });
  // try {
  //   await fastify.listen(3000, (err) => {
  //     if (err) {
  //       fastify.log.error(err);
  //       process.exit(1);
  //     }
  //   });
  // } catch (error) {
  //   fastify.log.error(error);
  //   process.exit(1);
  // }
};

start();
