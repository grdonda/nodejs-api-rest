const ProductsBusiness = require("./products-business");

const ProductsRequests = {
  list: async (req, res, next) => {
    try {
      const response = {'message':'response list'}
      res.json(response);
    } catch (error) {
      return next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const rowData = req.body;
      const response = {'message':'response create'}
      res.send(response);
    } catch (error) {
      return next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const rowData = req.body;
      const rowId = req.params.id;
      const response = {'message':'response update'}
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  },
  remove: async (req, res, next) => {
    try {
      const rowId = req.params.id;
      const response = {'message':'response remove'}
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const rowId = req.params.id;
      const response = {'message':'response delete'}
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  },
  getById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const response = {'message':'response get by id'}
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = ProductsRequests;
