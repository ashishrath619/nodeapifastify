const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "107.180.27.240",
  user: "jfls9u9oclki",
  password: "007@Msnegi",
  database: "dbadminpanel",
  port: 3306,
  multipleStatements: true,
});

// pool.connect((err) => {
//   if (err) {
//     console.log("Database Connection Failed !!!", err);
//   } else {
//     console.log("connected to Database");
//   }
// });

// const excuteQuery = (query, params) => {
//   return new promise((resolve, reject) => {
//     try {
//       pool.query(query, params, (err, result) => {
//         if (err) {
//           console.log(err);
//           reject(err);
//         } else {
//           console.log(result);

//           resolve(result);
//         }
//       });
//     } catch (err) {
//       reject(err);
//     }
//   });
// };

module.exports = pool;
