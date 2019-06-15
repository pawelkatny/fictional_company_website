const express = require("express");
const app = express();
const pg = require("pg");

const port = process.env.PORT || 3000;

const dbConfig = {
  host: "ec2-54-75-230-253.eu-west-1.compute.amazonaws.com",
  user: "csryunnawozdhf",
  database: "d8u1b510158evr",
  password: "ca7f77542a3b50837bf6076c5c2f97b18b79e954b9d6fc4f20493eab76d45db9",
  port: 5432,
  ssl: true,
};

const dbConnection = new pg.Pool(dbConfig);

app.use(express.static("public"));

app.get("/index", (req, res, next) => {
  dbConnection.connect((err, dBase, done) => {
    if (err) {
      console.log("Can not connect to the DB" + err);
      done();
    } else {
      dBase.query("SELECT text FROM index", (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
        const dbData = result.rows.map(row => row.text);
        res.status(200).send(dbData);
        done();
      });
    }
  });
});

app.get("/produkty", (req, res, next) => {
  dbConnection.connect((err, dBase, done) => {
    if (err) {
      console.log("Can not connect to the DB" + err);
      done();
    } else {
      dBase.query("SELECT text FROM produkty", (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
        const dbData = result.rows.map(row => row.text);
        res.status(200).send(dbData);
        done();
      });
    }
  });
});

app.get("/onas", (req, res, next) => {
  dbConnection.connect((err, dBase, done) => {
    if (err) {
      console.log("Can not connect to the DB" + err);
      done();
    } else {
      dBase.query("SELECT text FROM onas", (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
        const dbData = result.rows.map(row => row.text);
        res.status(200).send(dbData);
        done();
      });
    }
  });
});

app.get("/kontakt", (req, res, next) => {
  dbConnection.connect((err, dBase, done) => {
    if (err) {
      console.log("Can not connect to the DB" + err);
      done();
    } else {
      dBase.query("SELECT text FROM kontakt", (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
        const dbData = result.rows.map(row => row.text);
        res.status(200).send(dbData);
        done();
      });
    }
  });
});

app.get("/projekt", (req, res, next) => {
  dbConnection.connect((err, dBase, done) => {
    if (err) {
      console.log("Can not connect to the DB" + err);
      done();
    } else {
      dBase.query("SELECT text FROM projekt", (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
        const dbData = result.rows.map(row => row.text);
        res.status(200).send(dbData);
        done();
      });
    }
  });
});

app.get("/galeria", (req, res, next) => {
  dbConnection.connect((err, dBase, done) => {
    if (err) {
      console.log("Can not connect to the DB" + err);
      done();
    } else {
      dBase.query("SELECT tytul, opis, img FROM galeria", (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
        const dbData = result.rows;
        res.status(200).send(dbData);
        done();
      });
    }
  });
});

app.get("/", (req, res, next) => {
  res.redirect("/index");
});

app.listen(port, () => {
  console.log("Server started and running...");
});
