const News = require('../models/news');

const { response, request } = require('express');

//when "/news" is called
const getNews = async (req = request, res = response) => {


    const { limit = 5, from = 0 } = req.query;

    const [ news ] = await Promise.all([
        News.find()
            .skip( Number( from ) )
            .limit(Number( limit ))
    ]);

    return res.json({
        news
    });
}

module.exports = {
    getNews
}