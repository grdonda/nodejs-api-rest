const ProductsRepository = require("./products-repository");

class ProductsServices {
  async list() {
    return new ProductsRepository().list();
  }
  async listPaginated(page, limit) {
    return new ProductsRepository().listPaginated(page, limit);
  }
  async create(requestData) {
    return new ProductsRepository().create(requestData);
  }
  async update(id, requestData) {
    return new ProductsRepository().update(id, requestData);
  }
  async remove(id) {
    return new ProductsRepository().remove(id);
  }
  async delete(id) {
    return new ProductsRepository().delete(id);
  }
  async getById(id) {
    return new ProductsRepository().getById(id);
  }
}

module.exports = ProductsServices;
