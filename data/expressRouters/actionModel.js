const express = require("express");
const actionDB = require("../helpers/actionModel");
const projectDB = require("../helpers/projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  actionDB
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on get actions"
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  actionDB
    .get(id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on get action ID"
      });
    });
});

router.post("/", (req, res) => {
  const post = req.body;

  actionDB
    .insert(post)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on get posting action"
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  actionDB
    .remove(id)
    .then(deleted => {
      res.status(204).json(deleted);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on get deleting action"
      });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  actionDB
    .update(id, changes)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on get editing action"
      });
    });
});

module.exports = router;
