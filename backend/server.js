require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const urlBD = `mysql://root:EELmXDZZQwevRXDPZeAclDGLFRdlUHmZ@monorail.proxy.rlwy.net:27173/railway`

const db = mysql.createConnection(urlBD);

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO users (`documento`,`nombre`,`primerApellido`,`segundoApellido`,`email`,`password`) VALUES (?)";
  const values = [
    req.body.documento,
    req.body.nombre,
    req.body.primerApellido,
    req.body.segundoApellido,
    req.body.email,
    req.body.password,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

app.listen(3306, () => {
  console.log("listening");
});
