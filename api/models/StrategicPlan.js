import MongooseModel from 'mongoose-model-class';

const defaultAdvance = [
  {
    year: 2019,
    cost: 0,
    completed: false
  },
  {
    year: 2020,
    cost: 0,
    completed: false
  },
  {
    year: 2021,
    cost: 0,
    completed: false
  },
  {
    year: 2022,
    cost: 0,
    completed: false
  },
  {
    year: 2023,
    cost: 0,
    completed: false
  }
]

class StrategicPlan extends MongooseModel {
  schema() {

    const advance = new MongooseModel.Schema({
      year: { type: Number, require: true },
      cost: { type: Number, require: true },
      completed: { type: Boolean, require: true },
    }, { _id: false });
    return {
      initYear: {
        type: Number,
        require: true
      },
      municipality: {
        type: MongooseModel.types.ObjectId,
        ref: 'Municipality',
        require: true
      },
      strategicGuidelines: {
        type: String,
        required: true,
      },
      strategicObjectives: {
        type: String,
        required: true,
      },
      actionPlans: {
        type: String,
        required: true,
      },
      specificObjectives: {
        type: String,
        required: true,
      },
      investmentInitiatives: {
        type: String,
        required: true,
      },
      fundingSource: {
        type: String,
        required: true,
      },
      mainActions: {
        type: String,
        required: true,
      },
      responsible: {
        type: String,
        required: true,
      },
      advance: {
        type: [advance],
        default: defaultAdvance
      },

    };
  }

  static async getById(id) {
    const plan = await this.find({ municipality });
    return plan;
  }

  config(schema) {
    schema.index({ '$**': 'text' });
  }

  options() {
    return { timestamps: true, collection: 'StrategicPlans' };
  }
}


module.exports = StrategicPlan;
