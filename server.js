const fastify = require("fastify")({ logger: true });
// const pool = require("./config/db");
const PORT = 5000;
const routes = require("./routes/userRouter");

fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
