const express = require("express");
const app = express();
const pg = require("pg");

const port = process.env.PORT || 3000;

const dbConfig = {
  user: "users",
  database: "postgres",
  password: "",
  port: 5432,
  max: 20
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
