import MongooseModel from 'mongoose-model-class';


class Municipality extends MongooseModel {
  schema() {
    return {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      state: {
        type: String,
        required: true,
      },
      region: {
        type: String,
      },
      country: {
        type: String,
      },
    };
  }

  static async getById(id) {
    const municiplity = await this.findById(id);
    return municiplity;
  }

  config(schema) {
    schema.index({ '$**': 'text' });
  }

  options() {
    return { timestamps: true, collection: 'Municipalitys' };
  }
}

module.exports = Municipality;
