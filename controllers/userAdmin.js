const pool = require("../config/db");

const getAllUser = async (request, reply) => {
  try {
    let [result] = await pool.query("SELECT * FROM admindatabase");
    reply.status(200).send(result);
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};

const addUser = async (request, reply) => {
  try {
    const {
      name,
      email,
      password,
      employeeid,
      phone_no,
      alternative_number,
      state,
      city,
      address,
      joinning_date,
      reliving_date,
      status,
      role,
    } = request.body;
    let [checkEmail] = await pool.query(
      "SELECT * FROM admindatabase where email = ?",
      [email]
    );
    if (checkEmail.length > 0) {
      reply.status(200).send({ message: "Email already exists" });
    } else {
      let result = await pool.query(
        "insert into admindatabase (name,email,password,employeeid,phone_no,alternative_number,state,city,address,joinning_date,reliving_date,status,role) values(?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          name,
          email,
          password,
          employeeid,
          phone_no,
          alternative_number,
          state,
          city,
          address,
          joinning_date,
          reliving_date,
          status,
          role,
        ]
      );
      reply.status(201).send({ message: "User added", data: result });
    }
  } catch (err) {
    console.log("err", err);
    reply.status(500).send(err);
  }
};

module.exports = {
  getAllUser,

  addUser,
};
