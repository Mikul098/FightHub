const mongoose = require('mongoose')

const RemindSchema = new mongoose.Schema({
    userId: String,
    channelId: String,
    time: Number,
    reason: String,
    link: String,
})

module.exports = mongoose.model('reminder', RemindSchema)
