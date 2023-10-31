const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tagId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  tagName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Tag', tagSchema);
