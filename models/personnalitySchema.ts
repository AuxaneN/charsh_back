import { Schema } from "mongoose";

//Qualities, flaws
export const personnalitySchema = new Schema({
  qualities: {
    type: [String],
    validate: {
      validator: (v: Array<string>) => {
        return v.length <= 3;
      },
    },
  },
  flaws: {
    type: [String],
    validate: {
      validator: (v: Array<string>) => {
        return v.length <= 3;
      },
    },
  },
});
