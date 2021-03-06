/*
 * Extra fields for form, customer, company
 */

import mongoose from 'mongoose';
import Random from 'meteor-random';

const FieldSchema = mongoose.Schema({
  _id: {
    type: String,
    unique: true,
    default: () => Random.id(),
  },

  // form, customer, company
  contentType: String,

  // formId when contentType is form
  contentTypeId: String,

  type: String,
  validation: {
    type: String,
    optional: true,
  },
  text: String,
  description: {
    type: String,
    optional: true,
  },
  options: {
    type: [String],
    optional: true,
  },
  isRequired: Boolean,
  order: Number,
});

const Fields = mongoose.model('fields', FieldSchema);

export default Fields;
