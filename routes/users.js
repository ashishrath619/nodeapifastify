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
    let [result] = await pool.query("SELECT * FROM adminuser where id = ?", [
      id,
    ]);
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
        output["message"] = "User verified ";
      } else {
        output["message"] = "Invalid username and password";
      }
    } else {
      output["message"] = "Invalid username and password";
    }
    console.log(result);
    reply.status(200).send(output);
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};

const deleteUserById = async (request, reply) => {
  let id = request.params.id;
  try {
    let result = await pool.query("delete FROM adminuser where id = ?", [id]);
    reply.status(200).send(result);
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};
const addUser = async (request, reply) => {
  try {
    const { name, email, password } = request.body;

    let result = await pool.query(
      "insert into adminuser (name,email,password) values(?,?,?)",
      [name, email, password]
    );
    reply.status(201).send(result);
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};
const updateUser = async (request, reply) => {
  let id = request.params.id;
  try {
    const { name, email, password } = request.body;

    let result = await pool.query(
      "update  adminuser  set name=?,email=?,password=? where id=?",
      [name, email, password, id]
    );
    reply.status(201).send(result);
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};

module.exports = {
  getAllUser: getAllUser,
  getAllUserById: getAllUserById,
  deleteUserById: deleteUserById,
  addUser: addUser,
  updateUser: updateUser,
  LoginUser: LoginUser,
};
