const mongoose = require('mongoose');
const { validateUrl } = require('../validator/validator');

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
      minlength: [2, 'Название не может быть короче 2 символов'],
      maxlength: [30, 'Название не может быть длиннее 30 символов'],
    },
    link: {
      type: String,
      required: [true, 'Поле должно быть заполнено'],
      validate: validateUrl,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
      default: [],
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: [],
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('card', cardSchema);
