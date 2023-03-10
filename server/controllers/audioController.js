const uuid = require('uuid')
const path = require('path');
const {Audio, AudioInfo} = require('../models/models')
const ApiError = require('../error/ApiError');
const pool = require("../db");
const {Op} = require("sequelize");

class AudioController {
    async create(req, res, next) {
        try {
            let {name, price, categoryId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            const {file} = req.files
            let audioName = uuid.v4() + ".mp3"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            file.mv(path.resolve(__dirname, '..', 'static', audioName))
            const audio = await Audio.create({name, price, categoryId, img: fileName, file: audioName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    AudioInfo.create({
                        title: i.title,
                        description: i.description,
                        audioId: audio.id
                    })
                )
            }

            return res.json(audio)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {price, name, categoryId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let audios;
        if (!price && !name && !categoryId) {
            audios = await Audio.findAndCountAll({limit, offset})
        }
        if (!price && !name && categoryId) {
            audios = await Audio.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if (!price && name && !categoryId) {
            audios = await Audio.findAndCountAll({where:{name: {[Op.like]: '%' + name + '%'}}, limit, offset})
        }
        if (price && !name && !categoryId)
        {
            audios = await Audio.findAndCountAll({order: ['price', 'name'], limit, offset})
        }
        return res.json(audios)
    }

    async getOne(req, res) {
        const {id} = req.params
        const audio = await Audio.findOne(
            {
                where: {id},
                include: [{model: AudioInfo, as: 'info'}]
            },
        )
        return res.json(audio)
    }
}

module.exports = new AudioController()
