const pool = require("../config/db");

const getAllUser = async (request, reply) => {
  try {
    let [result] = await pool.query("SELECT * FROM adminuser");
    reply.status(200).send(result);
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};

const getAllUserById = async (request, reply) => {
  let id = request.params.id;
  try {
    let [result] = await pool.query(
      "SELECT * FROM adminuser where adminid = ?",
      [id]
    );
    reply.status(200).send(result);
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};

const LoginUser = async (request, reply) => {
  let email = request.body.email;
  let password = request.body.password;
  try {
    let [result] = await pool.query("SELECT * FROM adminuser where email = ?", [
      email,
    ]);
    var output = {};
    if (result.length > 0) {
      let pwd = result[0].password;
      if (pwd == password) {
        output["status"] = 1;
        output["message"] = "User verified";
      } else {
        output["status"] = 0;

        output["message"] = "Invalid username and password";
      }
    } else {
      output["status"] = 0;

      output["message"] = "Invalid username and password";
    }
    console.log(result);
    if (output.status > 0) {
      reply.status(200).send({ output, data: result });
    } else {
      reply.status(200).send({ output, data: [] });
    }
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};

const deleteUserById = async (request, reply) => {
  let id = request.params.id;
  try {
    let result = await pool.query("delete FROM adminuser where adminid = ?", [
      id,
    ]);
    reply.status(200).send(result);
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};
const addUser = async (request, reply) => {
  try {
    const { name, email, password } = request.body;
    let [checkEmail] = await pool.query(
      "SELECT * FROM adminuser where email = ?",
      [email]
    );
    if (checkEmail.length > 0) {
      reply.status(200).send({ message: "Email already exists" });
    } else {
      let result = await pool.query(
        "insert into adminuser (name,email,password) values(?,?,?)",
        [name, email, password]
      );
      reply.status(201).send(result);
    }
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};
const updateUser = async (request, reply) => {
  let id = request.params.id;
  try {
    const { name, email, password } = request.body;
    console.log(JSON.stringify(req.body));

    let result = await pool.query(
      "update  adminuser  set name=?,email=?,password=? where adminid=?",
      [name, email, password, id]
    );
    reply.status(201).send(result);
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};
const updateUserPassword = async (request, reply) => {
  // let id = request.params.id;
  const { email, password } = request.body;

  let [checkEmail] = await pool.query(
    "SELECT * FROM adminuser where email = ?",
    [email]
  );

  if (checkEmail.length > 0) {
    let result = await pool.query(
      "update  adminuser  set password=? where email=?",
      [password, email]
    );
    reply
      .status(200)
      .send(
        { statusCode: 200, message: "Password Updated Successfully" },
        result
      );
  } else {
    reply
      .status(500)
      .send({ statusCode: 500, message: "Email does not exists" });
  }
};

module.exports = {
  getAllUser,
  getAllUserById,
  deleteUserById,
  updateUserPassword,
  addUser,
  updateUser,
  LoginUser,
};
