const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketAudio = sequelize.define('basket_audio', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Audio = sequelize.define('audio', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    file: {type: DataTypes.STRING, allowNull: false},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const AudioInfo = sequelize.define('audio_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const CategoryAudio = sequelize.define('category_audio', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketAudio)
BasketAudio.belongsTo(Basket)

Category.hasMany(Audio)
Audio.belongsTo(Category)

Audio.hasMany(BasketAudio)
BasketAudio.belongsTo(Audio)

Audio.hasMany(AudioInfo, {as: 'info'});
AudioInfo.belongsTo(Audio)

Category.belongsToMany(Audio, {through: CategoryAudio })
Audio.belongsToMany(Category, {through: CategoryAudio })

module.exports = {
    User,
    Basket,
    BasketAudio,
    Audio,
    Category,
    CategoryAudio,
    AudioInfo
}





