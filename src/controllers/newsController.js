const News = require('../models/news');

const { response, request } = require('express');

//when "/news" is called
const getNews = async (req = request, res = response) => {
    return res.json({
        'msg':'hello world'
    })
}

module.exports = {
    getNews
}