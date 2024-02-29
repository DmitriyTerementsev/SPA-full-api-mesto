const { celebrate, Joi } = require('celebrate');

const pattern = /^(https?:\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/im;

module.exports.validateUrl = (url) => {
  if (pattern.test(url)) {
    return url;
  }
  throw new Error('Ссылка введена неверно');
};

module.exports.validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .messages({
        'string.empty': 'Это поле обязательное для заполнения',
      })
      .email()
      .message('Введите корректный email'),
    password: Joi.string().required().messages({
      'string.empty': 'Это поле обязательное для заполнения',
    }),
  }),
});

module.exports.validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      'string.min': 'Текст должен быть не короче 2 символов',
      'string.max': 'Текст должен быть не длиннее 30 символов',
    }),
    about: Joi.string().min(2).max(30).messages({
      'string.min': 'Текст должен быть не короче 2 символов',
      'string.max': 'Текст должен быть не длиннее 30 символов',
    }),
    avatar: Joi.string().pattern(pattern).message('Введите URL'),
    email: Joi.string()
      .required()
      .messages({
        'string.empty': 'Это поле обязательное для заполнения',
      })
      .email()
      .message('Введите корректный email'),
    password: Joi.string().required().messages({
      'string.empty': 'Это поле обязательное для заполнения',
    }),
  }),
});

module.exports.validateUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.empty': 'Это поле обязательное для заполнения',
        'string.min': 'Текст должен быть не короче 2 символов',
        'string.max': 'Текст должен быть не длиннее 30 символов',
      }),
    about: Joi.string().required().min(2).max(30)
      .messages({
        'string.empty': 'Это поле обязательное для заполнения',
        'string.min': 'Текст должен быть не короче 2 символов',
        'string.max': 'Текст должен быть не длиннее 30 символов',
      }),
  }),
});

module.exports.validateAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string()
      .required()
      .messages({
        'string.empty': 'Это поле обязательное для заполнения',
      })
      .pattern(pattern)
      .message('Введите URL'),
  }),
});

module.exports.validateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': 'Минимальное количество символов - 2',
        'string.max': 'Максимальное количество символов - 30',
        'string.empty': 'Это поле обязательное для заполнения',
      }),
    link: Joi.string()
      .required()
      .pattern(pattern)
      .message('Введите URL')
      .messages({
        'string.empty': 'Это поле обязательное для заполнения',
      }),
  }),
});

module.exports.validateUserId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().length(24).hex().required()
      .messages({
        'string.length': 'Фиксированное количество символов id - 24',
        'string.empty': 'Это поле обязательное для заполнения',
      }),
  }),
});

module.exports.validateCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required()
      .messages({
        'string.length': 'Фиксированное количество символов id - 24',
        'string.empty': 'Это поле обязательное для заполнения',
      }),
  }),
});
