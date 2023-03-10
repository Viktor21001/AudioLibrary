const {BasketAudio, Audio, AudioInfo} = require('../models/models')
const ApiError = require('../error/ApiError');
const uuid = require("uuid");
const path = require("path");

class BasketController {
    async getOne(req, res) {
        const {id} = req.params
        let basketId = id;
        let {limit, page} = req.params
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let basket;
        if (!basketId) {
            basket = await BasketAudio.findAndCountAll({limit, offset})
        }
        if (basketId) {
            basket = await BasketAudio.findAndCountAll({where:{basketId}, limit, offset})
        }
        return res.json(basket)
    }

    async create(req, res, next) {
        try {
            if (!req.body.audioId) {
                throw new Error('Не указан id товара')
            }
            const {basketId, audioId} = req.body
            const item = await BasketAudio.create({basketId, audioId});
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new BasketController()
