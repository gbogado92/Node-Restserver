const { response, request } = require("express");

const usersGet = (req = request, res = response) => {
  const { q, nombre, apikey } = req.query;
  res.json({
    msg: "get API - controller",
    q,
    nombre,
    apikey,
  });
};

const usersPut = (req, res) => {
  const id = req.params.id;
  res.status(400).json({
    msg: "put API - controller",
    id,
  });
};

const usersPost = (req, res) => {
  const { name, id } = req.body;

  res.status(201).json({
    msg: "post API - controller",
    name,
    id,
  });
};

const usersDelete = (req, res) => {
  res.json({
    msg: "delete API - controller",
  });
};

const usersPatch = (req, res) => {
  res.json({
    msg: "patch API - controller",
  });
};

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch,
};
