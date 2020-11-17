const ProductsServices = require("./products-services");

class ProductsBusiness {
  async list(requestData) {
    const queryParams = requestData.query;
    if (queryParams.page && queryParams.limit) {
      return new ProductsServices().listPaginated(queryParams.page, queryParams.limit);
    }
    return new ProductsServices().list();
  }
  async create(requestData) {
    return new ProductsServices().create(requestData);
  }
  async update(id, requestData) {
    return new ProductsServices().update(id, requestData);
  }
  async remove(id) {
    return new ProductsServices().remove(id);
  }
  async delete(id) {
    return new ProductsServices().delete(id);
  }
  async getById(id) {
    return new ProductsServices().getById(id);
  }
}

module.exports = ProductsBusiness;
