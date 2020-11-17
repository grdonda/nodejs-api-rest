const { Products } = require("../../common/db/db");

class ProductsRepository {
  async list() {
    return Products.find({ removed: { $ne: true } });
  }
  async listPaginated(page, limit) {
    const pageTotal = page * 1 || 0;
    const limitTotal = limit * 1 || 2;

    return Products.find({ removed: { $eq: false } })
      .skip(limitTotal * pageTotal)
      .limit(limitTotal);
  }
  async create(data) {
    return new Products(data).save();
  }
  async update(id, data) {
    return Products.findByIdAndUpdate(id, data, { new: true });
  }
  async remove(id) {
    const data = await this.getById(id);
    data.removed = true;
    return this.getById(id);
  }
  async delete(id) {
    return Products.findOneAndRemove(id);
  }
  async getById(id) {
    return Products.findById(id);
  }
}

module.exports = ProductsRepository;
