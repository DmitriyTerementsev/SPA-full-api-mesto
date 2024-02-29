const routerCards = require('express').Router();
const {
  getCards, createCard, deleteCardById, likeCard, dislikeCard,
} = require('../controllers/cards');
const { validateCard, validateCardId } = require('../validator/validator');

routerCards.get('/', getCards);
routerCards.post('/', validateCard, createCard);
routerCards.delete('/:cardId', validateCardId, deleteCardById);
routerCards.put('/:cardId/likes', validateCardId, likeCard);
routerCards.delete('/:cardId/likes', validateCardId, dislikeCard);

module.exports = routerCards;
